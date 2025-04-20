import React from 'react'
import Dropzone from './Dropzone';
import Image from 'next/image';

const ImageField = ({ imageFiles = [], setImagesByCategory, hasError = false, multiple = false, category }) => {
  const handleImageRemove = (category, indexToRemove) => {
    setImagesByCategory(prev => ({
      ...prev,
      [category]: prev[category].filter((_, i) => i !== indexToRemove),
    }));
  };

  const handleImageAdd = (newFiles) => {
    setImagesByCategory(prev => ({
      ...prev,
      [category]: [...(prev[category] || []), ...newFiles],
    }));
  };
    
  return (
    <div className="flex flex-row items-start gap-10 mt-7 mb-6">
      <div className="w-32 min-w-[8rem]">
        <Dropzone category={category} handleImageAdd={handleImageAdd} multiple={multiple} />
      </div>
      {imageFiles && imageFiles.length > 0 && (
        <div className="flex flex-row gap-1">
          {imageFiles.map((file, idx) => (
            <div key={idx} className="relative">
              <Image
                src={URL.createObjectURL(file)}
                alt={`Preview ${idx}`}
                width={96}
                height={96}
                className="rounded-lg max-h-32 object-cover min-w-[6rem]"
              />
              <button
                type="button"
                onClick={() => handleImageRemove(category, idx)}
                className="absolute top-1 right-1 bg-white text-black rounded-full p-1 px-2 text-xs font-bold shadow hover:bg-red-100 hover:text-red-500"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};


export default ImageField