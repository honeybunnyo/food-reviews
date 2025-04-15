import React from 'react'
import Dropzone from './Dropzone';

const ImageField = ({ imageFiles = [], setImagesByCategory, hasError = false, multiple = false, category }) => {
  const handleImageRemove = (category, indexToRemove) => {
    setImagesByCategory(prev => ({
      ...prev,
      [category]: prev[category].filter((_, i) => i !== indexToRemove),
    }));
  };

  const handleImageSelect = (newFiles) => {
    setImagesByCategory(prev => ({
      ...prev,
      [category]: [...(prev[category] || []), ...newFiles],
    }));
  };
    
  return (
    <div className="gap-6 mb-6 w-1/2 min-w-[20rem] max-w-[30rem]">
      {category && <label className="block text-sm font-medium mb-2">{category}</label>}
      <Dropzone category={category} handleImageSelect={handleImageSelect} multiple={multiple} />
      {imageFiles.length > 0 && (
        <div className="flex gap-2 mt-4 flex-wrap">
          {imageFiles.map((file, idx) => (
            <div key={idx} className="relative">
              <img
                src={URL.createObjectURL(file)}
                alt={`Preview ${idx}`}
                className="rounded-lg max-h-32 object-cover"
              />
              <button
                type="button"
                onClick={() => handleImageRemove(category, idx)}
                className="absolute top-1 right-1 bg-white text-black-600 rounded-full p-1 px-2 text-xs font-bold shadow hover:bg-red-100 hover:text-red-500"
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