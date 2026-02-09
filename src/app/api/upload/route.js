import { NextResponse } from 'next/server'
import { prisma } from '../../lib/prisma'
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { r2 } from "../../lib/r2";

export async function POST(req) {
  try {
    const formData = await req.formData()
    const username = formData.get('username')?.toString() || ''
    const password = formData.get('password')?.toString() || ''

    // Auth check
    if (username !== process.env.USER || password !== process.env.PASSWORD) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
    }

    const content = formData.get('content')?.toString()
    const categoryKeys = ['description', 'background', 'recipe', 'method', 'entree', 'main', 'dessert'];
    const uploadedImageUrls = {};

    for (const category of categoryKeys) {
      const files = formData.getAll(`${category}Images`);
      uploadedImageUrls[category] = [];

      for (const file of files) {
        if (!file || typeof file === "string") continue;

        const fileName = `${Date.now()}-${file.name}`;
        const key = `${content}/${category}/${fileName}`;

        // Convert file to buffer
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // Upload to R2
        const upload = new PutObjectCommand({
          Bucket: process.env.R2_BUCKET_NAME,
          Key: key,
          Body: buffer,
          ContentType: file.type,
        });

        await r2.send(upload);

        // Public URL
        const publicUrl = `https://${process.env.R2_PUBLIC_DOMAIN}/${key}`;

        uploadedImageUrls[category].push(publicUrl);
      }
    }

    // Build DB object
    const data = {
      title: formData.get('title')?.toString() || '',
      description: formData.get('description')?.toString() || '',
      rating: parseInt(formData.get('rating')?.toString() || '0'),
      descriptionImageUrls: uploadedImageUrls.description,
      backgroundImageUrl: uploadedImageUrls.background,

      ...(content === 'recipes' && {
        recipe: JSON.parse(formData.get('recipe') || '[]'),
        method: JSON.parse(formData.get('method') || '[]'),

        recipeImageUrls: uploadedImageUrls.recipe,
        methodImageUrls: uploadedImageUrls.method,
      }),

      ...(content === 'restaurants' && {
        entree: JSON.parse(formData.get('entree') || '[]'),
        main: JSON.parse(formData.get('main') || '[]'),
        dessert: JSON.parse(formData.get('dessert') || '[]'),

        review: formData.get('review')?.toString() || '',
        location: formData.get('location')?.toString() || '',
        priceRange: formData.get('price_range')?.toString() || '',
        entreeImageUrls: uploadedImageUrls.entree,
        mainImageUrls: uploadedImageUrls.main,
        dessertImageUrls: uploadedImageUrls.dessert,
      }),
    }

    // Insert into DB
    let result;
    if (content === 'restaurants') {
      result = await prisma.restaurantUpload.create({ data })
    } else {
      result = await prisma.recipeUpload.create({ data })
    }

    return NextResponse.json({ message: 'Upload saved!', result })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}
