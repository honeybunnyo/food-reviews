export const revalidate = 60; 

import React from 'react'
import Layout from '../components/Layout/Layout';
import Cards from '../components/Cards/Cards';
import { prisma } from '../lib/prisma'
import SortDropdown from '../components/Dropdowns/SortDropdown';

export default async function Restaurants({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const { sort } = resolvedSearchParams || {};
  const sortField = sort === 'rating' ? 'rating' : 'createdAt';
  
  const posts = await getRestaurants(sortField);

  return (
    <Layout imageSrc="/restaurant.jpg" title='Restaurants'>
    <div className="h-full w-full p-4">
      <div className="flex justify-end">
        <SortDropdown currentSort={sortField} />
      </div>
      <Cards posts={posts}/>
    </div>
  </Layout>
  )
}

const getRestaurants = cache(async (sortField) => {
  return await prisma.restaurantUpload.findMany({
    orderBy: { [sortField]: 'desc' },
  });
});