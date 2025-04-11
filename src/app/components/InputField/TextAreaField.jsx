import React from 'react'


const TextAreaField = ({label, content, setContent}) => {
  const handleChange = (e) => {
    setContent(e.target.value);
  };

  return (
    <div className="grid gap-6 mb-6 md:grid-cols-2">
      <div>
        <label htmlFor="content" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
        <textarea id="content" rows="4"  value={content} onChange={handleChange} className="min-h-[3rem] block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder={`Write your ${label} here...`}></textarea>
      </div>
    </div>
  )
}

export default TextAreaField