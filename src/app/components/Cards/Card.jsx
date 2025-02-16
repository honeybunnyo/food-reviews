'use client'
import React from 'react'
import HeadingTwo from './../../lib/HeadingTwo';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation'

const Card = ({ title, date, url }) => {
  const pathname = usePathname()

  return (
    <Link href={`${pathname}/${url}`} className='rounded-lg shadow-md flex flex-row overflow-hidden hover:shadow-lg hover:bg-gray-50 hover:scale-[1.01]'>
      <div className="relative w-1/3 aspect-square min-w-24 max-w-64">
        <Image
          src="/pancakes.jpg"
          fill
          alt="Picture pancakes"
          className="object-cover"
          />
        </div>
      <div className='p-2'>
        <HeadingTwo content={title}/>
        <p className='text-md text-gray-500'>{date}</p>
      </div>
    </Link>
  )
}

export default Card