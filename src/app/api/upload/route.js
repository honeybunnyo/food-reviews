import { NextResponse } from 'next/server'
import { prisma } from '../../lib/prisma'

export async function POST(req) {
  try {
    const formData = await req.formData()
    const username = formData.get('username')?.toString() || ''
    const password = formData.get('password')?.toString() || ''

    console.log(process.env.USER)
    console.log(process.env.PASSWORD)

    // Auth check
    if (username !== process.env.USER || password !== process.env.PASSWORD) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
    }

    // Check if recipe or restaurant
    const content = formData.get('content')?.toString() 

    const data = {
      title: formData.get('title')?.toString() || '',
      description: formData.get('description')?.toString() || '',
      rating: parseInt(formData.get('rating')?.toString() || '0'),
      ...(content === 'recipes' && {
        recipe: formData.get('recipe')?.toString() || '',
        method: formData.get('method')?.toString() || '',

      }),
      ...(content === 'restaurants' && {
        entree: formData.get('entree')?.toString() || '',
        main: formData.get('main')?.toString() || '',
        dessert: formData.get('dessert')?.toString() || '',
        review: formData.get('review')?.toString() || '',
        location: formData.get('location')?.toString() || '',
        priceRange: formData.get('price_range')?.toString() || '',
      }),
      imageUrl,
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

