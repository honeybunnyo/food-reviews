'use client'
import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import { headingFont } from './../../lib/fonts'
import { SkeletonImage } from './../ImageGallery/ImageSkeleton';
import StaticRating from './../StaticRating/StaticRating'

const Card = ({ id, title, date, imageUrl, rating }) => {
  const pathname = usePathname()
  return (
    <Link href={ `${pathname}/${id}` } className='flex flex-row overflow-hidden hover:bg-gray-50'>
      <div className="relative aspect-square w-32 sm:w-36 md:w-40 lg:w-48 shrink-0">
        <SkeletonImage
          src={ imageUrl || "/pancakes.jpg" }
          alt={ title }
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className='flex flex-col'>
        <div className='p-2'>
          <h1 className={ `md:!text-lg !text-md ${headingFont}` }>
            { title }
          </h1>
          <p className='text-sm text-gray-500'>{ date }</p>
        </div>
        <div className='flex flex-row ml-1'>
          <StaticRating rating={ rating } size="sm" />
        </div>
      </div>
    </Link>
  )
}

export default Card