import React from 'react'

const RightArrow = ({nextSlide}) => {
  return (
    <button
      onClick={nextSlide}
      className="rounded-full p-2"
    >
    <svg className="w-6 h-6 text-black/30 hover:text-black/50" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 10 16">
        <path d="M3.414 1A2 2 0 0 0 0 2.414v11.172A2 2 0 0 0 3.414 15L9 9.414a2 2 0 0 0 0-2.828L3.414 1Z"/>
    </svg>
  </button>
  )
}

export default RightArrow