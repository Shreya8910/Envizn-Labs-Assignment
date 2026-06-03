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
      <div className='relative min-h-screen bg-[#f6f5f2] overflow-hidden py-20'>
        <img className='absolute w-[60px] sm:w-[75px] md:w-[90px] left-1/2 top-[5%] -translate-x-1/2 z-10' src='./images/img8.png' alt='' />
        <img className='absolute w-[70px] sm:w-[85px] md:w-[100px] left-[25%] md:left-[30%] top-[4%] rotate-[-18deg]'src='./images/img7.png'  alt='' />
        <img className='absolute w-[70px] sm:w-[90px] md:w-[105px] left-[75%] md:left-[70%] top-[4%] rotate-[20deg]'src='./images/img9.png' alt='' />
        <img className='absolute w-[100px] sm:w-[130px] md:w-[155px] left-[-5%] md:left-[10%] top-[18%] rotate-[-22deg]' src='./images/img10.png' alt='' />
        <img className='absolute w-[100px] sm:w-[130px] md:w-[150px] right-[-5%] md:right-[5%] top-[18%] rotate-[20deg]' src='./images/img13.png' alt='' />
        <img className='absolute w-[100px] sm:w-[130px] md:w-[155px] left-0 top-[48%] -translate-y-1/2 rotate-[-8deg]' src='./images/img11.png' alt='' />
        <img className='absolute w-[100px] sm:w-[130px] md:w-[155px] right-0 top-[48%] -translate-y-1/2 rotate-[8deg]' src='./images/img14.png' alt='' />
        <img className='absolute w-[100px] sm:w-[130px] md:w-[150px] left-[-5%] md:left-[8%] bottom-[12%] rotate-[-18deg]' src='./images/img12.png' alt='' />
        <img className='absolute w-[100px] sm:w-[130px] md:w-[150px] right-[-5%] md:right-[8%] bottom-[12%] rotate-[18deg]' src='./images/img17.png' alt='' />
        <img className='absolute w-[70px] sm:w-[90px] md:w-[105px] left-[30%] bottom-[2%] rotate-[20deg]' src='./images/img16.png' alt='' />
        <img className='absolute w-[60px] sm:w-[75px] md:w-[90px] left-1/2 bottom-[2%] -translate-x-1/2' src='./images/img15.png' alt='' />
        <img className='absolute w-[70px] sm:w-[90px] md:w-[105px] right-[25%] md:right-[30%] bottom-[2%] rotate-[-18deg]' src='./images/img18.png' alt='' />
        <div className='relative z-20 flex flex-col items-center justify-center px-5 text-center min-h-screen'>
          <h1 className='text-[26px] sm:text-[30px] md:text-[34px] tracking-[0.12em] md:tracking-[0.2em] font-light mb-5'>
            UNIQUELY BOTTLED
          </h1>
          <p className='text-[11px] leading-[22px] text-black/70 max-w-[540px]'>
            Every guest and recipient experiences moments differently.,<br />
            We transform these unique perspectives into individual<br />
            fragrances—creating a diverse collection of scents as<br />
            distinctive as the people themselves, each crafted with<br />
            exceptional care.
          </p>
          <div className='flex items-center gap-3 mt-10'>
            <div className='w-9 h-9 rounded-full bg-[#e6dcc8] flex items-center justify-center text-sm font-medium'>
              E
            </div>
            <div>
              <p className='text-[9px] tracking-[0.2em] mb-1 text-black/70'>
                HOW CAN YOU ELEVATE YOUR BIG DAY?
              </p>
              <div className='w-[180px] sm:w-[210px] h-9 border border-gray-400 flex items-center justify-end px-4'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12" fill="currentColor"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Page4