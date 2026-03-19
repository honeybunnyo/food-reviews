import { useState, useCallback } from 'react'
import { useDebounce } from '../../hooks/useDebounce'


const TextAreaField = ({ label, content, setContent }) => {
  const [localValue, handleChange] = useDebounce(content, setContent)

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div>
        <label htmlFor={ `${label}-area-field` } className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          { label }
        </label>
        <textarea
          id={ `${label}-area-field` }
          rows="4"
          onChange={ handleChange }
          value={ localValue }
          className="min-h-[8rem] block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          placeholder={ `Write your ${label} here...` }
        />
      </div>
    </div>
  )
}

export default TextAreaField