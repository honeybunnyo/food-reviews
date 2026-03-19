import React from 'react'
import { prisma } from '../../lib/prisma'
import DetailPage from '../../components/Layout/DetailPage';
import DetailWithCarousel from '../../components/Layout/DetailWithCarousel';

export const revalidate = 60;

export async function generateStaticParams() {
  const restaurants = await prisma.restaurantUpload.findMany({ select: { id: true } });
  return restaurants.map((r) => ({ id: r.id }));
}

export default async function Page({ params }) {
  const { id } = await params;
  const data = await prisma.restaurantUpload.findUnique({
    where: { id },
  });

  if (!data) {
    return <div className="p-10 text-red-600">data not found.</div>;
  }

  const backgroundImage = data.backgroundImageUrl
    ? data.backgroundImageUrl[0] : '/restaurant.jpg';

  return (
    <DetailPage imageSrc={ backgroundImage } title={ data.title } rating={ data.rating } description={ data.description }>
      <DetailWithCarousel label="description" content={ data.notes } images={ data.descriptionImageUrls } />
      <DetailWithCarousel label="entrée" content={ data.entree } images={ data.entreeImageUrls } />
      <DetailWithCarousel label="main" content={ data.main } images={ data.mainImageUrls } />
      <DetailWithCarousel label="dessert" content={ data.dessert } images={ data.dessertImageUrls } />
      <DetailWithCarousel label="notes" content={ data.notes } />
    </DetailPage>
  )
}
