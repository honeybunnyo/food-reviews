// /app/api/test-db/route.ts
import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const test = await prisma.restaurantUpload.findMany({ take: 1 })
    return NextResponse.json({ success: true, test })
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message })
  }
}
