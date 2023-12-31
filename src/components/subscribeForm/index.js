import React, { Component, useState } from 'react'
import axios from 'axios'
import { Checkbox, message } from 'antd'
const index = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [checked, setChecked] = useState(false)
  const handleSubmit = async (e) => {
    if (!checked) {
      message.error('Please agree with our rules and privacy policy')
      return
    }
    e.preventDefault();
    if (!name || !email) {
      message.error('Please enter your name and email')
      return
    }
    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        name: name,
        email: email
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    });

    const resJson = await res.json();
    switch (resJson.code) {
      case 201:
        message.success('Thank you for subscribing!')
        break;
      case 400:
        message.error('Email is required')
        break;
      case 500:
        message.error(resJson.error)
        break;
      default:
        message.error('Something went wrong')
        break;
    }

  }

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const onCheckBoxChange = (e) => {
    setChecked(e.target.checked)
  }

  return (
    <div className="w-full  max-w-xs">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" >
            Name
          </label>
          <input onChange={handleNameChange} value={name} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" >
            Email Address
          </label>
          <input onChange={handleEmailChange} value={email} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter your email" />
          {/* <p class="text-red-500 text-xs italic">Enter your email</p> */}
        </div>
        <Checkbox className='mb-6' onChange={onCheckBoxChange}>
          <span>Continue means that you will agree with our<a href='https://mailchimp.com/legal/terms/' className='text-blue-600'> terms </a>and <a href='https://www.intuit.com/privacy/statement/' className='text-blue-600'>privacy policy</a></span>
        </Checkbox>

        <div className="flex items-center justify-between">
          <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="/" >
            Cancel
          </a>
          <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  )
}

export default index;