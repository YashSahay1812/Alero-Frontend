import React from 'react'

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer = () => {
  return (
    <div className='bg-[#ffbf23] mt-10 flex flex-col justify-center items-center p-8 gap-y-8'>
      <div className='flex justify-center items-center gap-x-10'>
        <a href="" className='font-semibold text-lg'>
          About Us
        </a>
        <a href="" className='font-semibold text-lg'>
          Contact Us
        </a>
        <a href="" className='font-semibold text-lg'>
          Terms
        </a>
      </div>
      <div className='flex justify-center items-center gap-x-10'>
        <a href="">
          <FacebookIcon fontSize='large' className=''/>
        </a>
        <a href="">
          <TwitterIcon fontSize='large'/> 
        </a>
        <a href="">
          <GitHubIcon fontSize='large'/>
        </a>
      </div>
      <div className='flex justify-center items-center gap-x-3 font-semibold text-lg'>
        <CopyrightIcon />
        2023 TheTEAM
      </div>
    </div>
  )
}

export default Footer
