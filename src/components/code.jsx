import React from 'react'
import Navbar from '../../components/Navbar'

const Page1 = () => {
  return (
    <div className='h-screen w-full bg-[url("./images/img1.png")] bg-cover bg-center text-white relative overflow-hidden'>

      <Navbar />

      {/* Left Dots */}
      <div className='absolute left-3 md:left-6 top-1/2 -translate-y-1/2 flex flex-col gap-2'>
        <div className='w-[5px] h-[5px] rounded-full bg-white'></div>
        <div className='w-[5px] h-[5px] rounded-full bg-white/40'></div>
        <div className='w-[5px] h-[5px] rounded-full bg-white/40'></div>
        <div className='w-[5px] h-[5px] rounded-full bg-white/40'></div>
      </div>

      {/* Right Buttons */}
      <div className='absolute right-3 md:right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3'>

        <button className='w-9 h-9 md:w-10 md:h-10 rounded-full border border-white/70 flex items-center justify-center text-white text-sm hover:bg-white/10'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="currentColor"
          >
            <path d="M22.0003 13.0001L22.0004 11.0002L5.82845 11.0002L9.77817 7.05044L8.36396 5.63623L2 12.0002L8.36396 18.3642L9.77817 16.9499L5.8284 13.0002L22.0003 13.0001Z"></path>
          </svg>
        </button>

        <button className='w-9 h-9 md:w-10 md:h-10 rounded-full border border-white/70 flex items-center justify-center text-white text-sm hover:bg-white/10'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="currentColor"
          >
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
          </svg>
        </button>
      </div>

      {/* Bottom Content */}
      <div className='absolute bottom-6 md:bottom-10 left-0 right-0 px-5 md:px-14'>

        {/* Heading */}
        <div className='mb-4 md:mb-5'>
          <h1 className='text-[14px] sm:text-[16px] md:text-[22px] tracking-[0.12em] md:tracking-[0.18em] font-light leading-6 md:leading-9'>
            BOTTLE THE MOMENT
          </h1>

          <h2 className='text-[14px] sm:text-[16px] md:text-[22px] tracking-[0.12em] md:tracking-[0.18em] font-light leading-6 md:leading-normal'>
            BESPOKE SCENTS FOR UNFORGETTABLE MEMORIES
          </h2>
        </div>

        {/* Line */}
        <div className='w-full h-[1px] bg-white/50 mb-4 md:mb-6'></div>

        {/* Bottom Flex */}
        <div className='flex flex-col md:flex-row justify-between items-start gap-5 md:gap-0'>

          {/* Paragraph */}
          <p className='text-[10px] md:text-[11px] leading-[20px] md:leading-[22px] tracking-[0.05em] text-white/90 max-w-[260px]'>
            Expertly crafted fragrances that bring
            your stories to life, from personal
            celebrations to corporate gifts
          </p>

          {/* Button */}
          <button className='text-[10px] md:text-[11px] tracking-[0.18em] md:tracking-[0.2em] text-white flex items-center gap-2'>
            BEGIN THE JOURNEY
            <span className='w-[6px] h-[6px] rounded-full bg-white inline-block'></span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Page1