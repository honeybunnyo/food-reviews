'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'

const SortDropdown = ({ currentSort }) => {
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const searchParams = useSearchParams()

  const handleChange = (value) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('sort', value)
    router.push(`?${params.toString()}`)
    setOpen(false)
  }

  return (
    <div className="relative inline-block text-left mb-4">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="inline-flex justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-normal text-gray-600 shadow-xs hover:underline"
      >
        sort by {currentSort === 'rating' ? 'rating' : 'date'}
        <svg
          className="-mr-1 h-5 w-5 text-gray-600"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 z-10 mt-2 w-32 rounded-md bg-white shadow-lg ring-1 ring-black/5">
          <div className="py-1">
            <button
              onClick={() => handleChange('createdAt')}
              className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                currentSort === 'createdAt' ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
              }`}
            >
              sort by date
            </button>
            <button
              onClick={() => handleChange('rating')}
              className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                currentSort === 'rating' ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
              }`}
            >
              sort by rating
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default SortDropdown
