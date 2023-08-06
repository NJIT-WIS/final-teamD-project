import React, { Component, useState } from 'react'

const index = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const handleSubmit = () => {
    console.log('submit')
  }
  return (
    <div class="w-full  max-w-xs">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
            Name
          </label>
          <input value={name} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            Email Address
          </label>
          <input value={email} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter your email" />
          {/* <p class="text-red-500 text-xs italic">Enter your email</p> */}
        </div>
        <div class="flex items-center justify-between">
          <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
            Cancel
          </a>
          <button onClick={() => handleSubmit()} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  )
}

export default index;