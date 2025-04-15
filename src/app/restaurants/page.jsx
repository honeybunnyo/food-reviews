import React from 'react'
import Layout from '../components/Layout/Layout';
import Cards from '../components/Cards/Cards';
import { prisma } from '../lib/prisma'

const Restaurants = async () => {
  const posts = await prisma.restaurantUpload.findMany({
    orderBy: { createdAt: 'desc' },
  })

  return (
    <Layout imageSrc="/restaurant.jpg" title='Restaurants'>
    <div className="h-full w-full p-4">
      <Cards posts={posts}/>
    </div>
  </Layout>
  )
}

export default Restaurants
