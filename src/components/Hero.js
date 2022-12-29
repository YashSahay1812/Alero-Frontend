import React from 'react'

import SecurityIcon from '@mui/icons-material/Security';
import TimerIcon from '@mui/icons-material/Timer';
import PaidIcon from '@mui/icons-material/Paid';

const Hero = () => {
  return (
    <div className='flex justify-between px-24 h-screen'>
      <div id="taglines" className='flex flex-col justify-center gap-y-16 py-8 w-1/3'>
        <div id="upper" className='flex flex-col gap-y-10'>
            <h1 className='text-5xl'>
                Communicate. Collaborate. Create.
            </h1>
            <h3 className='text-lg'>
                We provides an effective and powerful way to manage your projects
            </h3>
            <a href='' className='bg-black p-2 px-3 border border-black rounded-md text-white font-bold hover:bg-[#ffbf23] hover:text-black transition-all duration-500 ease-in-out w-fit'>
            Register
        </a>
        </div>
        <div id="lower" className='flex gap-x-16 flex-wrap'>
            <div className='flex items-center gap-x-3 w-20 font-semibold'>
              <SecurityIcon fontSize='large'/>
              Data Security
            </div>
            <div className='flex items-center gap-x-3 w-20 font-semibold'>
              <TimerIcon fontSize='large'/>
              Instant Action
            </div>
            <div className='flex items-center gap-x-3 w-20 font-semibold'>
              <PaidIcon fontSize='large'/>
              No Cost
            </div>
        </div>
      </div>
      <div id="image">
        <img src="/img/hero.svg" className='w-full h-full'/>
      </div>
    </div>
  )
}

export default Hero
