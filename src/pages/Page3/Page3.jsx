import React from 'react'

const Page3 = () => {
  return (
    <section className='w-full overflow-hidden py-16 md:py-20'>
      <h1 className='text-center text-[28px] sm:text-[34px] md:text-4xl tracking-[0.12em] md:tracking-wider mb-12 md:mb-16'>
        HOW IT WORKS</h1>
      <div className='relative max-w-[1400px] mx-auto'>
        <div className='hidden md:block absolute left-1/2 top-0 w-[1px] h-full bg-gray-400 -translate-x-1/2'></div>
        <div className='hidden md:flex absolute left-1/2 top-[5%] -translate-x-1/2 z-10 items-center justify-center w-5 h-5 rounded-full border border-black bg-white'>
          <div className='w-2.5 h-2.5 bg-black rounded-full'></div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 px-5 sm:px-8 md:px-20 py-8 md:py-10 items-center'>
          <img className='w-full rounded-lg object-cover' src="./images/img3.png" alt=""/>
          <div>
            <p className='text-lg md:text-xl mb-2'>01</p>
            <h2 className='text-[26px] sm:text-[30px] md:text-3xl tracking-[0.08em] md:tracking-wider leading-tight'>
              TAP, SWIPE, DREAM</h2>
            <p className='text-[13px] md:text-sm mt-5 leading-7 tracking-[0.04em] max-w-md'>
              It begins with digital invitations sent to your event <br />
              guests or team members. Each recipient engages with <br />
              our AI through natural conversation—sharing their <br />
              unique perspective or meaningful connection.
            </p>
            <p className='text-[11px] md:text-xs mt-5 text-gray-600 leading-6 max-w-md'>
              Our technology transforms these insights into <br />
              personalized fragrance profiles. Which master perfumes <br />
              bring to life using premium ingredients. The finished <br />
              scents arrive in elegant packaging customizable for <br />
              your event or brand—creating a sophisticated keepsake <br />
              that's genuinely personal.
            </p>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 px-5 sm:px-8 md:px-20 py-8 md:py-10 items-center'>
          <div className='md:order-1 order-2'>
            <p className='text-lg md:text-xl mb-2'>02</p>
            <h2 className='text-[26px] sm:text-[30px] md:text-3xl tracking-[0.08em] md:tracking-wider leading-tight'>
              FIVE-MINUTE AI CREATION</h2>
            <p className='text-[13px] md:text-sm mt-5 leading-7 tracking-[0.04em] max-w-md'>
              It begins with digital invitations sent to your event <br />
              guests or team members. Each recipient engages with <br />
              our AI through natural conversation—sharing their <br />
              unique perspective or meaningful connection.<br />
            </p>
            <p className='text-[11px] md:text-xs mt-5 text-gray-600 leading-6 max-w-md'>
              Our technology transforms these insights into <br />
              personalized fragrance profiles. Which master perfumes <br />
              bring to life using premium ingredients. The finished <br />
              scents arrive in elegant packaging customizable for <br />
              your event or brand—creating a sophisticated keepsake <br />
              that's genuinely personal.
            </p>
          </div>
          <img className='w-full rounded-lg object-cover md:order-2 order-1' src="./images/img4.png" alt=""/>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 px-5 sm:px-8 md:px-20 py-8 md:py-10 items-center'>
          <img className='w-full rounded-lg object-cover' src="./images/img5.png" alt=""/>
          <div>
            <p className='text-lg md:text-xl mb-2'>03</p>
            <h2 className='text-[26px] sm:text-[30px] md:text-3xl tracking-[0.08em] md:tracking-wider leading-tight'>
              BOTTLES AWAIT ON THE
              <br className='hidden md:block' />
              BIG DAY
            </h2>
            <p className='text-[13px] md:text-sm mt-5 leading-7 tracking-[0.04em] max-w-md'>
              It begins with digital invitations sent to your event <br />
              guests or team members. Each recipient engages with <br />
              our AI through natural conversation—sharing their <br />
              unique perspective or meaningful connection.
            </p>
            <p className='text-[11px] md:text-xs mt-5 text-gray-600 leading-6 max-w-md'>
              Our technology transforms these insights into <br />
              personalized fragrance profiles. Which master perfumes <br />
              bring to life using premium ingredients. The finished <br />
              scents arrive in elegant packaging customizable for <br />
              your event or brand—creating a sophisticated keepsake <br />
              that's genuinely personal.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Page3