import React from 'react'
import Card from './Card'
import { prisma } from '../../lib/prisma'

const Cards = async () => {
  const recipes = await prisma.recipeUpload.findMany({
    orderBy: { createdAt: 'desc' }, // optional
  })

  return (
    <div className='flex flex-col gap-4'>
      {recipes.map((recipe) => (
        <Card
          key={recipe.id}
          id={recipe.id}
          title={recipe.title}
          date={new Date(recipe.createdAt).toDateString()}
          imageUrl={recipe.imageUrl}
        />
      ))}
    </div>
  )
}

export default Cards