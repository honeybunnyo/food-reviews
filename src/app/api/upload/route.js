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

    const data = {
      title: formData.get('title')?.toString() || '',
      description: formData.get('description')?.toString() || '',
      recipe: formData.get('recipe')?.toString() || '',
      method: formData.get('method')?.toString() || '',
      rating: parseInt(formData.get('rating')?.toString() || '0'),
    }

    // Insert into DB
    const result = await prisma.RecipeUpload.create({ data })

    return NextResponse.json({ message: 'Upload saved!', result })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}

