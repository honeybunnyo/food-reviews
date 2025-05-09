import React from 'react'

const LeftArrow = ({prevSlide}) => {
  return (
    <button
      onClick={prevSlide}
      className="rounded-full p-2"
      >
      <svg className="w-6 h-6 text-black/30" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 10 16">
          <path d="M8.766.566A2 2 0 0 0 6.586 1L1 6.586a2 2 0 0 0 0 2.828L6.586 15A2 2 0 0 0 10 13.586V2.414A2 2 0 0 0 8.766.566Z"/>
      </svg>
  </button>
  )
}

export default LeftArrow