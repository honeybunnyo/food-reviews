import React from 'react'

const InputField = ({label, setContent, hasError}) => {

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  return (
    <div className="grid gap-6 mb-6 md:grid-cols-2">
      <div>
        <label htmlFor={`${label}-input-field`} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
        <input type="text" id={`${label}-input-field`} onChange={handleChange} className={`${hasError ? 'border-1 border-red-500': 'bg-gray-50 border border-gray-300'} text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white`} required />
      </div>
    </div>
  )
}

export default InputField