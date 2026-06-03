import React from 'react'

const Page8 = () => {
  return (
    <section className='bg-black px-3 sm:px-5 md:p-8 py-5'>
      <div className='w-full bg-[#e9e7e2] px-6 sm:px-8 md:px-10 lg:p-10 py-10 md:py-14 min-h-[60vh] flex flex-col justify-between rounded-[24px] md:rounded-none'>
        <div className='flex flex-col lg:flex-row justify-between gap-12 lg:gap-10'>
          <div>
            <h1 className='text-[32px] sm:text-[38px] md:text-4xl font-light'>leparfum.ai
            </h1>
          </div>
          <div className='grid grid-cols-2 md:grid-cols-2 lg:flex gap-10 sm:gap-14 md:gap-16 lg:gap-20 text-[11px] md:text-xs uppercase'>
            <div className='space-y-5'>
              <p>Home</p>
              <p>Leparfum.ai</p>
            </div>
            <div className='space-y-5'>
              <p>Weddings</p>
              <p>Corporate & Gifting</p>
              <p>Hospitality</p>
            </div>
            <div className='space-y-5 col-span-2 md:col-span-1'>
              <div className='flex items-center gap-2 break-all'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12" fill="currentColor">
                  <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path>
                </svg>
                <p>enquiries@leparfum.ai</p>
              </div>
              <div className='flex items-center gap-2 break-all'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12" fill="currentColor">
                  <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2 20.5523 3 21H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path>
                </svg>
                <p>media@leparfum.ai</p>
              </div>
            </div>
            <div className='space-y-5'>
              <p>Privacy Policy</p>
              <p>Terms of Service</p>
              <p>Cookies Settings</p>
            </div>
          </div>
        </div>
        <div className='mt-12 md:mt-16'>
          <div className='border-t border-gray-500'></div>
          <div className='flex flex-col md:flex-row justify-between items-center gap-6 pt-6 md:pt-8 text-[11px] md:text-xs'>
            <p className='text-center md:text-left'>
              © 2025 leparfum.ai. All rights reserved.
            </p>
            <div className='flex items-center gap-4 sm:gap-5'>
              <img className='w-5 h-5 object-contain' src='./images/instagram-fill.png' alt='Instagram'/>
              <img className='w-5 h-5 object-contain'src='./facebook-circle-fill (1).svg' alt='Facebook'/>
              <img className='w-5 h-5 object-contain'src='./images/tiktok-fill.svg' alt='Tiktok'/>
              <img className='w-5 h-5 object-contain'src='./images/twitter-x-line.svg' alt='Twitter'/>
              <img className='w-5 h-5 object-contain'src='./linkedin-box-fill.svg' alt='Linkedin'/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Page8