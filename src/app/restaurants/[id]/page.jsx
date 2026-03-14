import React from 'react'
import Layout from '../../components/Layout/Layout'
import { prisma } from '../../lib/prisma'
import DetailSection from '../../components/Layout/DetailSection';
import { Carousel } from '../../components/Carousel/Carousel';
import StaticRating from '../../components/Rating/StaticRating';

// Prerender paths at build time
export async function generateStaticParams() {
  const restaurants = await prisma.restaurantUpload.findMany({
    select: { id: true },
  });

  return restaurants.map((r) => ({
    id: r.id,
  }));
}

export const revalidate = 60;

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

  const entreeImages = data.entreeImageUrls
    ? data.entreeImageUrls : [];

  const mainImages = data.mainImageUrls
    ? data.mainImageUrls : [];

  const dessertImages = data.dessertImageUrls
    ? data.dessertImageUrls : [];

  return (
    <Layout imageSrc={ backgroundImage } title={ data.title }>
      <div className="justify-center h-full w-full p-4">
        <div className="p-4">
          <div className="flex flex-row justify-between">
            <h2 className="text-2xl font-bold">{ data.title }</h2>
          </div>
          <div className="flex items-center mt-3">
            <StaticRating rating={ data.rating } size="md" />
          </div>
          <p className="mt-2">{ data.description }</p>
          <DetailSection label="entrée" content={ data.entree } />
          <Carousel images={ entreeImages } />
          <DetailSection label="main" content={ data.main } />
          <Carousel images={ mainImages } />
          <DetailSection label="dessert" content={ data.dessert } />
          <Carousel images={ dessertImages } />
        </div>
      </div>
    </Layout>
  )
}
