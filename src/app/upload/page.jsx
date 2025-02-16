'use client'
import React from 'react'

const Page = () => {
  const postUploadApi = () => {
    fetch('/api/upload')
    .then((res) => res.json())
    .then((data) => {
      console.log('data', data)
    })
  }

  return (
    <div className='max-w-md mx-auto'>
      <form action={postUploadApi}>
        {/* Dropdown */}
        <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select type of content</label>
        <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option>Recipes</option>
          <option>Restaurants</option>
        </select>
        <br/>

        <div class="mb-5">
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
          <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>
        
        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Content</label>
        <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter content..."></textarea>
        <br/>

        {/* File upload */}
        <label htmlFor="file_upload" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Upload file</label>
        <input 
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" 
          aria-describedby="insert_image" id="file_upload" type="file" accept="image/jpeg, image/png"
        />
        <br/>

        {/* Submit button */}
        <button 
          type="submit" 
          class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        > POST
        </button>

      </form>
    </div>
  )
}

export default Page