import React from 'react'
import Layout from '../components/Layout/Layout';
import Cards from '../components/Cards/Cards';
import { prisma } from '../lib/prisma'

const Recipes = async () => {
  const posts = await prisma.recipeUpload.findMany({
    orderBy: { createdAt: 'desc' },
  })
  return (
    <Layout imageSrc="/cinnamonroll.jpg" title='Recipes'>
      <div className="h-full w-full p-4">
        <Cards posts={posts}/>
      </div>
    </Layout>
  )
}

export default Recipes