export async function GET(req) {
  const { searchParams } = new URL(req.url)
  const sort = searchParams.get('sort') || 'createdAt'

  const posts = await prisma.restaurantUpload.findMany({
    orderBy: { [sort]: 'desc' },
  })

  return NextResponse.json(posts)
}
