import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-full relative z-50'>
      <div className='flex items-center justify-between px-4 sm:px-6 md:px-10 lg:px-20 py-5'>

        {/* Logo */}
        <h1 className='text-base sm:text-lg md:text-xl lg:text-2xl font-light whitespace-nowrap'>
          leparfum.ai
        </h1>

        {/* Links */}
        <div className='flex items-center gap-3 sm:gap-5 md:gap-8 lg:gap-10 text-[9px] sm:text-[10px] md:text-xs tracking-[0.08em] md:tracking-[0.15em]'>

          <a href="/" className='whitespace-nowrap'>
            CURATE MY SCENT
          </a>

          <a href="/" className='whitespace-nowrap'>
            LETS CHAT
          </a>
        </div>

      </div>
    </nav>
  )
}

export default Navbar