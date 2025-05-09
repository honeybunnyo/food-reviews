'use client'
import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import { headingFont } from './../../lib/fonts'
import { SkeletonImage } from './../ImageGallery/ImageSkeleton';

const Card = ({ id, title, date, imageUrl, rating }) => {
  const pathname = usePathname()
  return (
    <Link href={`${pathname}/${id}`} className='flex flex-row overflow-hidden hover:bg-gray-50'>
      <div className="relative w-1/3 aspect-square min-w-24 max-w-64">
        <SkeletonImage
          src={imageUrl || "/pancakes.jpg"}
          alt={title}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className='flex flex-col'>
        <div className='p-2'>
          <h1 className={`!text-xl ${headingFont}`}>
          {title}
          </h1>
          <p className='text-sm text-gray-500'>{date}</p>
        </div>
        <div className='flex flex-row ml-1'>
          {[1, 2, 3, 4, 5].map((index) => (
          <svg
            key={index}
            className={`w-3 h-3 md:w-4 md:h-4 ms-1 ${
              rating >= index ? 'text-yellow-300' : 'text-gray-300 dark:text-gray-500'
            }`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
            >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          ))}
        </div>
      </div>
    </Link>
  )
}

export default Card