import React from 'react'
import { prisma } from '../../lib/prisma'
import DetailPage from '../../components/Layout/DetailPage';
import DetailWithCarousel from '../../components/Layout/DetailWithCarousel';

export const revalidate = 60;

export async function generateStaticParams() {
  const recipes = await prisma.recipeUpload.findMany({ select: { id: true } });
  return recipes.map((r) => { id: r.id });
}

export default async function Page({ params }) {
  const { id } = await params
  const data = await prisma.recipeUpload.findUnique({
    where: { id },
  });

  console.log(data)
  if (!data) {
    return <div className="p-10 text-red-600">data not found.</div>;
  }

  const backgroundImage =
    Array.isArray(data.backgroundImageUrl) && data.backgroundImageUrl.length > 0
      ? data.backgroundImageUrl[0]
      : '/pancakes.jpg';


  return (
    <DetailPage imageSrc={ backgroundImage } title={ data.title } rating={ data.rating } description={ data.description }>
      <DetailWithCarousel label="recipe" content={ data.recipe } images={ data.recipeImageUrls } />
      <DetailWithCarousel label="method" content={ data.method } images={ data.methodImageUrls } />
      <DetailWithCarousel label="notes" content={ data.notes } images={ data.descriptionImageUrls } />
    </DetailPage>
  )
}
