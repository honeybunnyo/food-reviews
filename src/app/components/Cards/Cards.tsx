import React from 'react'
import Card from './Card'

const Cards = async ({ posts }) => {
  return (
    <div className='flex flex-col gap-4'>
      {posts.map((post) => (
        <Card
          key={post.id}
          id={post.id}
          title={post.title}
          date={new Date(post.createdAt).toDateString()}
          imageUrl={post.imageUrl}
        />
      ))}
    </div>
  )
}

export default Cards