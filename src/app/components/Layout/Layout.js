import Image from 'next/image'
import React from 'react'
import Navbar from '../Navbar/Navbar'
import Title from './Title'

const Layout = ({ imageSrc, title, children }) => {
  return (
    <div className="flex flex-col md:flex-row h-screen w-screen">
      <div className="relative md:w-1/2 h-1/2 md:h-full">
        <Title title={title}/>
        <Navbar/>
        <Image
          src={imageSrc}
          alt="Responsive Image"
          className="w-full h-full object-cover filter brightness-[0.6]"
          width={1000}
          height={1000}
        >
        </Image>
      </div>
      <div className="md:w-1/2 h-1/2 md:h-full p-4 overflow-y-auto bg-white">
        {children}
      </div>
    </div>
  )
}

export default Layout