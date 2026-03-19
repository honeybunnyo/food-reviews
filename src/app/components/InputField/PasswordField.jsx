import React from 'react'
import { useDebounce } from '../../hooks/useDebounce'

const PasswordField = ({ setUsername, setPassword, hasUsernameError, hasPasswordError }) => {
  const [localUsername, handleUsernameChange] = useDebounce('', setUsername)
  const [localPassword, handlePasswordChange] = useDebounce('', setPassword)

  return (
    <div className='w-1/3 min-w-[24rem]'>
      <div className="mb-6">
        <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          username
        </label>
        <input
          type="text"
          id="username"
          onChange={ handleUsernameChange }
          value={ localUsername }
          className={ `bg-gray-50 border ${hasUsernameError ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:${hasUsernameError ? 'border-red-500' : 'border-gray-600'}` }
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          password
        </label>
        <input
          type="password"
          id="password"
          onChange={ handlePasswordChange }
          value={ localPassword }
          className={ `bg-gray-50 border ${hasPasswordError ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:${hasPasswordError ? 'border-red-500' : 'border-gray-600'}` }
          required
        />
      </div>
    </div>
  )
}

export default PasswordField