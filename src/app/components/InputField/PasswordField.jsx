import React from 'react'

const PasswordField = ({ setUsername, setPassword, hasUsernameError, hasPasswordError}) => {
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className='w-1/3 min-w-[24rem]'>
      <div className="mb-6">
        <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          username
        </label>
        <input
          type="text"
          id="username"
          onChange={handleUsernameChange}
          className={`bg-gray-50 border ${hasUsernameError ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:${
            hasUsernameError ? 'border-red-500' : 'border-gray-600'
          } dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
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
          onChange={handlePasswordChange}
          className={`bg-gray-50 border ${hasPasswordError ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:${
            hasPasswordError ? 'border-red-500' : 'border-gray-600'
          } dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
          required
        />
      </div>
    </div>
  )
}

export default PasswordField