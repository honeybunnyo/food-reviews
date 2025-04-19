import React from 'react'
import Layout from '../components/Layout/Layout';

const Contact = () => {
  return (
    <Layout imageSrc="/restaurant.jpg" title='Contact'>
      <div className="h-full w-full p-4">
        <div className="justify-center content-center h-full w-full p-4">
          <p className={`text-xl m-4`}> Email abc@gmail.com</p>
          <p className={`text-xl m-4`}> Github https://github.com/abc</p>
          <p className={`text-xl m-4`}> LinkedIn https://www.linkedin.com/in/abc/</p>
        </div>    
      </div>
    </Layout>
  )
}

export default Contact

