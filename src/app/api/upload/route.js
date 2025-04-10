// app/api/upload/route.ts

import { NextResponse } from 'next/server'

export async function POST(req) {
  try {
    // Read form data
    const formData = await req.formData()
    const username = formData.get('username')
    const password = formData.get('password')

    // Basic auth logic (replace with real validation later)
    if (username !== 'admin' || password !== 'secret') {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
    }

    // Extract other fields (example)
    const content = formData.get('content')
    const title = formData.get('title')
    const description = formData.get('description')
    const recipe = formData.get('recipe')
    const method = formData.get('method')
    const entree = formData.get('entree')
    const main = formData.get('main')
    const dessert = formData.get('dessert')
    const rating = formData.get('rating')

    // Optional: If you handle file uploads later
    const file = formData.get('file') as File | null
    if (file) {
      console.log(`Received file: ${file.name} (${file.size} bytes)`)
      // You can stream it to S3 or store it somewhere
    }

    // Log or save content to DB here
    console.log('Content received:', {
      content,
      title,
      description,
      recipe,
      method,
      entree,
      main,
      dessert,
      rating,
    })

    return NextResponse.json({ message: 'Upload successful!' })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
