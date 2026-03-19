'use client'
import React from 'react'
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation'
import { headingFont } from './../../lib/fonts'
import { SkeletonImage } from './../ImageGallery/ImageSkeleton';
import StaticRating from '../Rating/StaticRating'
import { deletePost } from '../../api/delete/deletePost'
import { Trash2 } from 'lucide-react';

const Card = ({ id, title, date, imageUrl, rating, edit, type }) => {
  const pathname = usePathname()
  const router = useRouter()

  const handleDelete = async (e) => {
    e.preventDefault()
    e.stopPropagation()
    await deletePost(id, type)
    router.refresh()
  }
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
      <div className='flex flex-col w-full'>
        <div className='p-2 w-full'>
          <div className="flex flex-row justify-between w-full">
            <h1 className={ `md:!text-lg !text-md ${headingFont}` }>
              { title }
            </h1>
            { edit && (
              <button
                onClick={ handleDelete }
                className="text-red-400 hover:text-red-600 hover:bg-red-50 transition-colors self-center"
                aria-label="Delete"
              >
                <Trash2 />
              </button>
            ) }
          </div>
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