import React from 'react'

const Dots = ({ images, goToSlide, currentIndex}) => {
  return (
    <div className="flex justify-center space-x-2 mt-4">
      {images.map((_, index) => (
        <button
          key={index}
          onClick={() => goToSlide(index)}
          className={`w-2 h-2 rounded-full ${
            index === currentIndex ? 'bg-gray-600' : 'bg-gray-400'
          }`}
        />
      ))}
    </div>
  )
}

export default Dots