import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Description = () => {

  AOS.init();

  return (
    <div className='h-screen'>
        <div className='bg-[#ffbf23] h-5/6 flex justify-evenly items-center gap-x-12 px-20'>
            <div 
              className='text-4xl w-80'    data-aos="fade-down-right"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-duration="1000"
            >
                With the Right Software, Great Things Can Happen
            </div>
            <div 
              className='w-96' 
              data-aos="fade-up-left"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-duration="1000"
            >
                I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.
            </div>
        </div>
    </div>
  )
}

export default Description
