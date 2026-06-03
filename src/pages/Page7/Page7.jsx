import React from 'react'

const Page7 = () => {
  return (
    <section className='bg-black min-h-screen flex items-center justify-center p-3 sm:p-5'>
      <div className='w-full max-w-[1700px] bg-[#ECECEC] rounded-[40px] overflow-hidden'>
        <div className='flex flex-col lg:flex-row'>
          <div className='w-full lg:w-[28%] px-6 sm:px-10 lg:pl-16 pt-10 lg:pt-16'>
            <h1 className='text-[44px] sm:text-[52px] lg:text-5xl font-extralight tracking-tight'> FAQS
            </h1>
          </div>
          <div className='w-full lg:w-[72%] px-6 sm:px-10 lg:pr-16 pb-8 lg:pb-12 pt-2 lg:pt-14'>
            <div className='border-t border-gray-400 py-5'>
              <div className='flex items-start justify-between gap-4'>
                <h2 className='text-[18px] lg:text-[18px] uppercase leading-8 lg:leading-10 flex-1 max-w-[700px]'>
                  Lorem ipsum dolor sit amet consectetur vitae vitae augue lobortis dictum?
                </h2>
                <button className='w-11 h-11 rounded-full border border-gray-500 flex items-center justify-center text-xl shrink-0'>
                  −
                </button>
              </div>
              <p className='mt-4 text-[15px] text-gray-600 leading-8 max-w-[600px]'>
                Sed ut perspiciatis unde omnis iste natus error sit <br />
                voluptatem accusantium doloremque laudantium, totam<br />
                rem aperiam, eaque ipsa quae ab illo inventore<br />
                veritatis et quasi architecto beatae vitae dicta sunt.
              </p>
            </div>
            <div className='border-t border-gray-400 py-5'>
              <div className='flex items-start justify-between gap-4'>
                <h2 className='text-[18px] uppercase leading-8 lg:leading-10 flex-1 max-w-[700px]'>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit?
                </h2>
                <button className='w-11 h-11 rounded-full border border-gray-500 flex items-center justify-center text-xl shrink-0'>
                  +
                </button>
              </div>
            </div>
            <div className='border-t border-gray-400 py-5'>
              <div className='flex items-start justify-between gap-4'>
                <h2 className='text-[18px] uppercase leading-8 lg:leading-10 flex-1 max-w-[700px]'>
                  Neque porro quisquam est, qui dolorem ipsum?
                </h2>
                <button className='w-11 h-11 rounded-full border border-gray-500 flex items-center justify-center text-xl shrink-0'>
                  +
                </button>
              </div>
            </div>
            <div className='border-t border-gray-400 py-5'>
              <div className='flex items-start justify-between gap-4'>
                <h2 className='text-[18px] uppercase leading-8 lg:leading-10 flex-1 max-w-[700px]'>
                  Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis?
                </h2>
                <button className='w-11 h-11 rounded-full border border-gray-500 flex items-center justify-center text-xl shrink-0'>
                  +
                </button>
              </div>
            </div>
            <div className='border-y border-gray-400 py-5'>
              <div className='flex items-start justify-between gap-4'>
                <h2 className='text-[16px] uppercase leading-7 lg:leading-8 flex-1 max-w-[700px]'>
                  Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum?
                </h2>
                <button className='w-11 h-11 rounded-full border border-gray-500 flex items-center justify-center text-xl shrink-0'>
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Page7