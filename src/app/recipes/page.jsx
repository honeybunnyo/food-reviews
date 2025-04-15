import React from 'react'
import Layout from '../components/Layout/Layout';
import Cards from '../components/Cards/Cards';

const Recipes = () => {
  return (
    <Layout imageSrc="/pancakes.jpg" title='Recipes'>
      <div className="h-full w-full p-4">
        <Cards/>
      </div>
    </Layout>
  )
}

export default Recipes