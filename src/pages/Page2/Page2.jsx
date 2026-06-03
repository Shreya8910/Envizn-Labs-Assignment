import React from 'react'

const Page2 = () => {
  return (
    <section className='min-h-screen bg-gray-200 flex items-center justify-center p-3 sm:p-5 overflow-hidden'>
      <div className='relative w-full md:w-[90%] min-h-[92vh] md:h-[90vh] rounded-[28px] md:rounded-3xl overflow-hidden text-white'>
        <img className='absolute inset-0 w-full h-full object-cover object-center' src="./images/img2.png" alt="background"/>
        <div className='absolute inset-0 bg-black/10'></div>
        <div className='relative z-10 pt-20 sm:pt-24 md:pt-40 px-6 sm:px-8 md:pl-14 md:px-0'>
          <h1 className='text-[26px] sm:text-[36px] md:text-5xl tracking-[0.08em] md:tracking-wider leading-tight'>
            THE BROKEN GIFT</h1>
          <p className='mt-8 md:mt-10 max-w-md text-[12px] md:text-sm leading-8 md:leading-7 text-white/95'>
            Move beyond predictable favors and corporate gifts to <br />
            something genuinely memorable. Each recipient creates <br />
            a personal fragrance that captures their unique <br />
            experience or relationship-crafted with premium<br />
            ingredients and presented with an elegance that<br />
            reflects the occasion.</p>
          <p className='mt-10 text-[10px] md:text-xs tracking-[0.12em] md:tracking-widest'>
            HOW CAN YOU ELEVATE YOUR BIG DAY?</p>
          <div className='flex items-center gap-3 md:gap-4 mt-4'>
            <div className='h-10 w-10 rounded-full bg-white text-black flex items-center justify-center font-bold text-lg md:text-2xl shrink-0'>
              E</div>
            <div className='flex-1 max-w-[320px] md:w-72 h-12 border border-white rounded flex items-center justify-end px-4'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Page2