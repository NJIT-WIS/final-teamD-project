'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link'
import { getLocalStorage, setLocalStorage } from '@/utils/StorageUtil';

const index = () => {
  const [cookieConsent, setCookieConsent] = useState(null);

  useEffect(() => {
    const storedCookieConsent = getLocalStorage("cookie_consent", null)
    setCookieConsent(storedCookieConsent)
  }, [setCookieConsent])


  useEffect(() => {
    const newValue = cookieConsent ? 'granted' : 'denied'

    window.gtag("consent", 'update', {
      'analytics_storage': newValue
    });

    setLocalStorage("cookie_consent", cookieConsent)

  }, [cookieConsent]);

  return (
    <div className={`my-10 mx-auto flex px-3 md:px-4 py-3 justify-between items-center flex-col sm:flex-row gap-4  fixed bottom-0 left-0 right-0 ${cookieConsent != null ? "hidden" : "flex"} bg-gray-700 rounded-lg shadow`}>
      <div className='text-center'>
        <Link href="/privacy"><p className='text-white'>Hi, We use cookies on our Portfolio. Please visit <span className=' font-semibold text-sky-600'>privacy</span> </p></Link>
      </div>


      <div className='flex gap-3'>
        <button className='bg-gray-900 px-5 py-2 text-white rounded-lg' onClick={() => setCookieConsent(true)}>Allow Cookies</button>
        <button className='px-5 py-2 text-gray-300 rounded-md border-gray-900' onClick={() => setCookieConsent(false)}>Decline</button>
      </div>
    </div>
  )
}

export default index;