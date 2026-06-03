import React from 'react'
import Navbar from '../../components/Navbar'

const Page1 = () => {
  return (
    <section className='relative min-h-screen md:min-h-[100svh] w-full overflow-hidden text-white'>
      <div className='absolute inset-0 bg-[url("/images/img1.png")] bg-cover bg-center'></div>
      <div className='absolute inset-0 bg-black/10'></div>
      <Navbar />
      <div className='absolute left-3 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-20'>
        <div className='w-[5px] h-[5px] rounded-full bg-white'></div>
        <div className='w-[5px] h-[5px] rounded-full bg-white/40'></div>
        <div className='w-[5px] h-[5px] rounded-full bg-white/40'></div>
        <div className='w-[5px] h-[5px] rounded-full bg-white/40'></div>
      </div>
      <div className='absolute right-3 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-20'>
        <button className='w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/70 flex items-center justify-center hover:bg-white/10'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
            <path d="M22.0003 13.0001L22.0004 11.0002L5.82845 11.0002L9.77817 7.05044L8.36396 5.63623L2 12.0002L8.36396 18.3642L9.77817 16.9499L5.8284 13.0002L22.0003 13.0001Z" />
          </svg>
        </button>
        <button className='w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/70 flex items-center justify-center hover:bg-white/10'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
          </svg>
        </button>
      </div>
      <div className='absolute bottom-5 sm:bottom-7 md:bottom-10 left-0 right-0 px-4 sm:px-6 md:px-14 z-20'>
        <div className='mb-4 md:mb-5 max-w-[95%] sm:max-w-[80%] md:max-w-none'>
          <h1 className='text-[18px] sm:text-[20px] md:text-[22px] tracking-[0.12em] md:tracking-[0.18em] font-light leading-[1.5]'>
            BOTTLE THE MOMENT</h1>
          <h2 className='text-[18px] sm:text-[20px] md:text-[22px] tracking-[0.12em] md:tracking-[0.18em] font-light leading-[1.5]'>
            BESPOKE SCENTS FOR UNFORGETTABLE MEMORIES</h2>
        </div>
        <div className='w-full h-[1px] bg-white/50 mb-4 md:mb-6'></div>
        <div className='flex flex-col gap-5 md:flex-row md:justify-between md:items-start'>
          <p className='text-[10px] sm:text-[11px] leading-6 tracking-[0.04em] text-white/90 max-w-[270px]'>
            Expertly crafted fragrances that bring <br />
            your stories to life, from personal<br />
            celebrations to corporate gifts</p>
          <button className='text-[10px] sm:text-[11px] tracking-[0.15em] md:tracking-[0.2em] flex items-center gap-2 whitespace-nowrap'>
            BEGIN THE JOURNEY
            <span className='w-[6px] h-[6px] rounded-full bg-white'></span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Page1