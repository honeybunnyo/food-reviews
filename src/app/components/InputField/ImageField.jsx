import React from 'react'

import { useRef } from 'react'

const ImageField = ({ imageFile, handleImageSelect }) => {
  const fileInputRef = useRef(null)

  const handleFileChange = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      handleImageSelect(file)
    }
  }

  return (
    <div className="gap-6 mb-6 w-1/2 min-w-[20rem] max-w-[30rem]">
      <input
        ref={fileInputRef}
        name="imageFile"
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
      />
      {imageFile && (
        <img
          src={URL.createObjectURL(imageFile)}
          alt="Preview"
          className="mt-4 rounded-lg w-full max-w-xs"
        />
      )}
    </div>
  )
}

export default ImageField