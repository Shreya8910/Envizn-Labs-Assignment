import React from 'react'

const Page4 = () => {
  return (
    <section className='w-full overflow-hidden'>
      <div className='w-full'>
        <div className='px-5 sm:px-8 md:px-14 pt-14 md:pt-16 pb-8'>
          <h1 className='text-[26px] sm:text-[30px] md:text-[34px] tracking-[0.12em] md:tracking-[0.2em] font-light'>
            CHOOSE YOUR WORLD
          </h1>
          <p className='mt-3 md:mt-4 text-[11px] text-black/70'>
            Which story will you write in scent?
          </p>
        </div>
        <div className='hidden md:flex w-full min-h-screen'>
          <div className='w-1/2 border-l-[3px] border-[#4a90d9]'>
            <img className='w-full h-[430px] lg:h-[500px] object-cover' src='./images/img2.png' alt=''/>
            <div className='bg-white px-6 lg:px-10 py-7 flex justify-between items-center gap-4'>
              <div>
                <h2 className='text-[18px] tracking-[0.15em] mb-4 font-light'>WEDDINGS</h2>
                <p className='text-[11px] leading-[20px] text-black/75 max-w-[290px]'>
                  Give your guests something truly memorable. <br />
                  Each person creates a fragrance that captures <br />
                  their experience of your special day— <br />
                  preserving personal moments in a luxurious keepsake.
                </p>
              </div>
              <button className='h-9 w-9 rounded-full border border-black flex items-center justify-center shrink-0'>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='16' height='16' fill='currentColor'>
                  <path d='M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z'></path>
                </svg>
              </button>
            </div>
          </div>
          <div className='w-1/4 relative'>
            <img className='w-full h-full object-cover' src='./images/img3.png' alt=''/>
            <h2 className='absolute bottom-8 left-6 lg:left-8 text-[18px] leading-6 tracking-[0.12em] text-white font-light'> CORPORATE & <br /> GIFTING
            </h2>
          </div>
          <div className='w-1/4 relative'>
            <img className='w-full h-full object-cover' src='./images/img6.png' alt=''/>
            <h2 className='absolute bottom-8 left-6 lg:left-8 text-[18px] tracking-[0.12em] text-white font-light'>HOSPITALITY
            </h2>
          </div>
        </div>
        <div className='md:hidden w-full'>
          <div className='border-l-[3px] border-[#4a90d9]'>
            <img className='w-full h-[300px] object-cover' src='./images/img2.png' alt=''/>
            <div className='bg-white px-5 py-6 flex justify-between items-center gap-4'>
              <div>
                <h2 className='text-[18px] tracking-[0.15em] mb-4 font-light'>WEDDINGS
                </h2>
                <p className='text-[11px] leading-[20px] text-black/75'>
                  Give your guests something truly memorable. <br />
                  Each person creates a fragrance that captures <br />
                  their experience of your special day— <br />
                  preserving personal moments in a luxurious keepsake. <br />
                </p>
              </div>
              <button className='h-9 w-9 rounded-full border border-black flex items-center justify-center shrink-0'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12" fill="currentColor"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
              </button>
            </div>
          </div>
          <div className='grid grid-cols-2'>
            <div className='relative'>
              <img className='w-full h-[320px] object-cover' src='./images/img3.png' alt=''/>
              <h2 className='absolute bottom-6 left-5 text-[16px] leading-5 tracking-[0.12em] text-white font-light'> CORPORATE & <br /> GIFTING
              </h2>
            </div>
            <div className='relative'>
              <img className='w-full h-[320px] object-cover' src='./images/img6.png' alt=''/>
              <h2 className='absolute bottom-6 left-5 text-[16px] tracking-[0.12em] text-white font-light'> HOSPITALITY </h2>
            </div>
          </div>
        </div>
      </div>
      <div className='relative w-full bg-[#f6f5f2] overflow-hidden py-12 sm:py-16 md:py-24 flex items-center justify-center min-h-screen'>
        <div className='relative w-[82vmin] h-[82vmin] max-w-[1000px] max-h-[1000px] mx-auto flex items-center justify-center'>
          
          <img className='absolute w-[11vmin] min-w-[38px] max-w-[120px] left-[50%] top-[2%] -translate-x-1/2 -translate-y-1/2 z-10' src='./images/img8.png' alt='' />
          <img className='absolute w-[12vmin] min-w-[42px] max-w-[130px] left-[74%] top-[8%] -translate-x-1/2 -translate-y-1/2 rotate-[20deg] z-10' src='./images/img9.png' alt='' />
          <img className='absolute w-[13vmin] min-w-[46px] max-w-[140px] left-[90%] top-[25%] -translate-x-1/2 -translate-y-1/2 rotate-[20deg] z-10' src='./images/img13.png' alt='' />
          <img className='absolute w-[14vmin] min-w-[50px] max-w-[150px] left-[98%] top-[50%] -translate-x-1/2 -translate-y-1/2 rotate-[8deg] z-10' src='./images/img14.png' alt='' />
          <img className='absolute w-[13vmin] min-w-[46px] max-w-[140px] left-[90%] top-[75%] -translate-x-1/2 -translate-y-1/2 rotate-[18deg] z-10' src='./images/img17.png' alt='' />
          <img className='absolute w-[12vmin] min-w-[42px] max-w-[130px] left-[74%] top-[92%] -translate-x-1/2 -translate-y-1/2 rotate-[-18deg] z-10' src='./images/img18.png' alt='' />
          <img className='absolute w-[11vmin] min-w-[38px] max-w-[120px] left-[50%] top-[98%] -translate-x-1/2 -translate-y-1/2 z-10' src='./images/img15.png' alt='' />
          <img className='absolute w-[12vmin] min-w-[42px] max-w-[130px] left-[26%] top-[92%] -translate-x-1/2 -translate-y-1/2 rotate-[20deg] z-10' src='./images/img16.png' alt='' />
          <img className='absolute w-[13vmin] min-w-[46px] max-w-[140px] left-[10%] top-[75%] -translate-x-1/2 -translate-y-1/2 rotate-[-18deg] z-10' src='./images/img12.png' alt='' />
          <img className='absolute w-[14vmin] min-w-[50px] max-w-[150px] left-[2%] top-[50%] -translate-x-1/2 -translate-y-1/2 rotate-[-8deg] z-10' src='./images/img11.png' alt='' />
          <img className='absolute w-[13vmin] min-w-[46px] max-w-[140px] left-[10%] top-[25%] -translate-x-1/2 -translate-y-1/2 rotate-[-22deg] z-10' src='./images/img10.png' alt='' />
          <img className='absolute w-[12vmin] min-w-[42px] max-w-[130px] left-[26%] top-[8%] -translate-x-1/2 -translate-y-1/2 rotate-[-18deg] z-10' src='./images/img7.png' alt='' />

          <div className='relative z-20 flex flex-col items-center justify-center px-4 text-center w-full max-w-[42vmin] min-w-[200px] max-w-[500px]'>
            <h1 className='text-[16px] xs:text-[18px] sm:text-[22px] md:text-[2.8vmin] lg:text-[32px] tracking-[0.12em] md:tracking-[0.2em] font-light mb-2 sm:mb-5 text-black'>
              UNIQUELY BOTTLED
            </h1>
            <p className='text-[9px] xs:text-[10px] md:text-[1.35vmin] lg:text-[11px] leading-[15px] md:leading-[2.5vmin] text-black/70 mx-auto'>
              Every guest and recipient experiences moments differently.<br className="hidden sm:inline" />
              We transform these unique perspectives into individual<br className="hidden sm:inline" />
              fragrances—creating a diverse collection of scents as<br className="hidden sm:inline" />
              distinctive as the people themselves, each crafted with<br className="hidden sm:inline" />
              exceptional care.
            </p>
            
            <div className='mt-4 sm:mt-10 flex flex-col items-center'>
              <div className='relative'>
                <p className='text-[7px] xs:text-[8px] md:text-[1vmin] lg:text-[9px] tracking-[0.25em] mb-1 sm:mb-2 text-black/50 font-semibold uppercase text-left pl-[36px] sm:pl-[48px]'>
                  HOW CAN YOU ELEVATE YOUR BIG DAY?
                </p>
                <div className='flex items-center gap-1.5 sm:gap-3'>
                  <div className='w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-[#ebdcb9] flex items-center justify-center text-[10px] sm:text-sm font-bold text-black/85 flex-shrink-0'>
                    E
                  </div>
                  <div className='w-[140px] xs:w-[170px] sm:w-[240px] md:w-[26vmin] lg:w-[300px] h-7 sm:h-10 bg-white border border-black/10 rounded-[4px] flex items-center justify-end px-2 sm:px-4 hover:border-black/20 transition-colors cursor-pointer shadow-sm'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12" className="text-black/80 sm:w-[14px] sm:h-[14px]" fill="currentColor">
                      <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Page4