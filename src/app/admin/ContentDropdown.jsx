'use client'

import React, { useState } from 'react'
import { headingFont } from '../lib/fonts'

const ContentDropdown = ({ content, setContent, hasError }) => {
  const [open, setOpen] = useState(false)
  const selectContent = (type) => {
    setOpen(false)
    setContent(type)
  }

  return <div className="mb-6">
    <h1 className={`!text-lg ${headingFont}`}>
      upload new content
    </h1>
  
    <br/>
    <button onClick={() => setOpen(!open)} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className={`${hasError ? 'bg-red-200': ''} text-black bg-gray-100 hover:bg-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center`} type="button">
      {content}
    <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
    </svg>
    </button>

    <div id="dropdown" className={`${open ? '': 'hidden'} z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44`}>
        <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownDefaultButton">
          <li>
            <a onClick={() => selectContent('recipes')} href="#" className="block px-4 py-2 hover:bg-gray-100 ">recipes</a>
          </li>
          <li>
            <a onClick={() => selectContent('restaurants')} href="#" className="block px-4 py-2 hover:bg-gray-100 ">restaurants</a>
          </li>
        </ul>
    </div>
  </div>
}

export default ContentDropdown
