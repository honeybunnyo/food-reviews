import React from 'react'
import Layout from '../../components/Layout/Layout'
import { prisma } from '../../lib/prisma'
import DetailSection from '../../components/Layout/DetailSection';
import { Carousel } from '../../components/Carousel/Carousel';

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
  ? JSON.parse(data.backgroundImageUrl)[0]
  : '/restaurant.jpg';

  const entreeImages = data.entreeImageUrls
  ? JSON.parse(data.entreeImageUrls)
  : [];

  const mainImages = data.mainImageUrls
  ? JSON.parse(data.mainImageUrls)
  : [];

  const dessertImages = data.dessertImageUrls
  ? JSON.parse(data.dessertImageUrls)
  : [];

  return (
    <Layout imageSrc={backgroundImage} title={data.title}>
      <div className="justify-center h-full w-full p-4">
        <div className="p-4">
          <div className="flex flex-row justify-between">
            <h2 className="text-2xl font-bold">{data.title}</h2>
          </div>
          <div className="flex items-center mt-3">
            {[1, 2, 3, 4, 5].map((index) => (
              <svg
                key={index}
                className={`w-4 h-4 ms-1 ${
                  data.rating >= index ? 'text-yellow-300' : 'text-gray-300 dark:text-gray-500'
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            ))}
          </div>
          <p className="mt-2">{data.description}</p>
          <DetailSection label="entrée" content={data.entree} />
          <Carousel images={entreeImages} />
          <DetailSection label="main" content={data.main} />
          <Carousel images={mainImages} />
          <DetailSection label="dessert" content={data.dessert} />
          <Carousel images={dessertImages} />
        </div>
      </div>
    </Layout>
  )
}
