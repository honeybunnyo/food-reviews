'use client'
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import { headingFont } from './../../lib/fonts'

const Card = ({ id, title, date, imageUrl }) => {
  const pathname = usePathname()
  return (
    <Link href={`${pathname}/${id}`} className='flex flex-row overflow-hidden hover:bg-gray-50'>
      <div className="relative w-1/3 aspect-square min-w-24 max-w-64">
        <Image
          src={imageUrl || "/pancakes.jpg"}
          fill
          alt={title}
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      <div className='p-2'>
        <h1 className={`!text-xl ${headingFont}`}>
        {title}
        </h1>
        <p className='text-sm text-gray-500'>{date}</p>
      </div>
    </Link>
  )
}

export default Card