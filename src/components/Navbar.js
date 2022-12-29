import React from 'react'

const Navbar = () => {
  return (
    <div className='flex border justify-between items-center p-5'>
      <div id="left" className='text-4xl font-extrabold'>
        Alero
      </div>
      <div id="right" className='flex items-center justify-center gap-x-10 text-zinc-500'>
        <a href='' className='hover:text-black'>
            Home
        </a>
        <a href='' className='hover:text-black'>
            About
        </a>
        <a href='' className='hover:text-black'>
            Login
        </a>
        <a href='' className='bg-[#ffbf23] p-2 border border-black rounded-md text-black font-bold hover:bg-black hover:text-[#ffbf23] transition-all duration-500 ease-in-out'>
            Register
        </a>
      </div>
    </div>
  )
}

export default Navbar