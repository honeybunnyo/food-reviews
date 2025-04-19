import { NextResponse } from 'next/server'
import { prisma } from '../../lib/prisma'
import { supabase } from '../../lib/supabase'

export async function POST(req) {
  try {
    const formData = await req.formData()
    const username = formData.get('username')?.toString() || ''
    const password = formData.get('password')?.toString() || ''

    // Auth check
    if (username !== process.env.USER || password !== process.env.PASSWORD) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
    }

    // Check if recipe or restaurant
    const content = formData.get('content')?.toString() 
    const categoryKeys = ['description', 'background', 'recipe', 'method', 'entree', 'main', 'dessert'];
    const uploadedImageUrls = {};

    for (const category of categoryKeys) {
      const files = formData.getAll(`${category}Images`);
    
      uploadedImageUrls[category] = [];
    
      for (const file of files) {
        const fileName = `${Date.now()}-${file.name}`
        const filePath = `${content}/${category}/${fileName}`
        const { error } = await supabase.storage.from('images').upload(filePath, file);
        if (error) continue;
    
        const { data: publicUrlData } = supabase.storage
          .from('images')
          .getPublicUrl(filePath);
    
        uploadedImageUrls[category].push(publicUrlData.publicUrl);
      }
    }

    const data = {
      title: formData.get('title')?.toString() || '',
      description: formData.get('description')?.toString() || '',
      rating: parseInt(formData.get('rating')?.toString() || '0'),
      descriptionImageUrls: JSON.stringify(uploadedImageUrls.description),
      backgroundImageUrl: JSON.stringify(uploadedImageUrls.background),
      ...(content === 'recipes' && {
        recipe: formData.get('recipe')?.toString() || '',
        method: formData.get('method')?.toString() || '',
        recipeImageUrls: JSON.stringify(uploadedImageUrls.recipe),
        methodImageUrls: JSON.stringify(uploadedImageUrls.method),
      }),
      ...(content === 'restaurants' && {
        entree: formData.get('entree')?.toString() || '',
        main: formData.get('main')?.toString() || '',
        dessert: formData.get('dessert')?.toString() || '',
        review: formData.get('review')?.toString() || '',
        location: formData.get('location')?.toString() || '',
        priceRange: formData.get('price_range')?.toString() || '',
        entreeImageUrls: JSON.stringify(uploadedImageUrls.entree),
        mainImageUrls: JSON.stringify(uploadedImageUrls.main),
        dessertImageUrls: JSON.stringify(uploadedImageUrls.dessert),
      }),
    }

    // Insert into DB
    let result;
    console.log('content', content)
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

