export const revalidate = 60; 

import React, { cache } from 'react'
import Layout from '../components/Layout/Layout';
import Cards from '../components/Cards/Cards';
import { prisma } from '../lib/prisma'
import SortDropdown from '../components/Dropdowns/SortDropdown';

export default async function Recipes({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const { sort } = resolvedSearchParams || {};
  const sortField = sort === 'rating' ? 'rating' : 'createdAt';
  const posts = await getRecipes(sortField);

  return (
    <Layout imageSrc="/cinnamonroll.jpg" title='Recipes'>
      <div className="h-full w-full p-4">
        <div className="flex justify-end">
          <SortDropdown currentSort={sortField} />
        </div>
        <Cards posts={posts}/>
      </div>
    </Layout>
  )
}

const getRecipes = cache(async (sortField) => {
  return await prisma.recipeUpload.findMany({
    orderBy: { [sortField]: 'desc' },
  });
});