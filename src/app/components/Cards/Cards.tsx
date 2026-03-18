import React from 'react'
import Card from './Card'

const Cards = ({ posts, edit = false, type }) => {
  return (
    <div className='flex flex-col gap-4'>
      {posts.map((post) => (
        <Card
          key={post.id}
          id={post.id}
          title={post.title}
          date={new Date(post.createdAt).toDateString()}
          imageUrl={post.backgroundImageUrl[0] || '/cinnamonroll.jpg'}
          rating={post.rating}
          edit={edit}
          type={type}
        />
      ))}
      <br />
      <br />
      <br />
    </div>
  )
}

export default Cards