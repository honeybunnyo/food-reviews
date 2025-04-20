// pages/api/recipes.ts (or app/api/recipes/route.ts)
import { prisma } from '../../lib/prisma'
import { NextResponse } from 'next/server'

export async function GET(req) {
  const { searchParams } = new URL(req.url)
  const sort = searchParams.get('sort') || 'createdAt'

  const posts = await prisma.recipeUpload.findMany({
    orderBy: { [sort]: 'desc' },
  })

  return NextResponse.json(posts)
}
