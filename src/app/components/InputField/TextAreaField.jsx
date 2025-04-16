import React from 'react'
import ImageField from './ImageField';


const TextAreaField = ({label, content, setContent, imagesByCategory, setImagesByCategory}) => {
  const handleChange = (e) => {
    setContent(e.target.value);
  };

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div>
        <label htmlFor={`${label}-input-field`} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
        <textarea id={`${label}-input-field`} rows="4"  value={content} onChange={handleChange} className="min-h-[8rem] block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder={`Write your ${label} here...`}></textarea>
      </div>
      <ImageField
          imageFiles={imagesByCategory[label]}
          setImagesByCategory={setImagesByCategory}
          multiple
          category={label}
        />
    </div>
  )
}

export default TextAreaField