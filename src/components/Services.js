import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Services = () => {

  AOS.init();

  return (
    <div className='flex flex-col justify-center gap-y-16 lg:px-44 px-20'>
      <h1 className='font-semibold text-4xl'>
        Our Key Features
      </h1>
      <div id="card-containers" className='flex justify-between items-start'>
        <div id="service-cards" className='flex flex-col justify-center gap-y-6 w-1/4'>
            <img 
              src="https://static.wixstatic.com/media/c837a6_07cdd24cb9e84acdb41d8c3568867354~mv2.jpg/v1/fill/w_283,h_375,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Artboard%2048%20copy%204_5x-100.jpg" className='border border-black border-4 rounded-lg w-full opacity-90'
              data-aos="zoom-out"
              data-aos-duration="1000"
              data-aos-mirror="true"
              data-aos-easing="ease-in-out"
            />
            <h2 
              className='font-semibold text-2xl'
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-mirror="true"
              data-aos-easing="ease-in-out"
            >
                Data Security
            </h2>
            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
                <b>Alero</b> uses <b><i>blockchain</i></b> to build a secure server to ensure that the information is not accessed by anyone other than the authorities. 
            </p>
        </div>
        <div id="service-cards" className='flex flex-col justify-center gap-y-6 w-1/4'>
            <img 
              src="https://static.wixstatic.com/media/c837a6_ef6bbe6808334282ab6c74203e782f28~mv2.jpg/v1/fill/w_283,h_373,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Artboard%2048%20copy%207_5x-100.jpg" className='border border-black border-4 rounded-lg w-full'
              data-aos="zoom-out"
              data-aos-duration="1000"
              data-aos-mirror="true"
              data-aos-easing="ease-in-out"
            />
            <h2 
              className='font-semibold text-2xl'
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-mirror="true"
              data-aos-easing="ease-in-out"
            >
                Validation Model
            </h2>
            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
                <b>Alero</b> incorporates <b><i>machine learning</i></b> model to analyze and interpret the accuracy of the data submitted as well as to identify the patterns and trends that may not be immediately apparent.
            </p>
        </div>
        <div id="service-cards" className='flex flex-col justify-center gap-y-6 w-1/4'>
            <img 
              src="https://static.wixstatic.com/media/c837a6_1f658b7b98b846d4865a783d52c8b43c~mv2.jpg/v1/fill/w_283,h_373,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Artboard%2048%20copy%206_5x-100.jpg" className='border border-black border-4 rounded-lg w-full'
              data-aos="zoom-out"
              data-aos-duration="1000"
              data-aos-mirror="true"
              data-aos-easing="ease-in-out"
            />
            <h2 
              className='font-semibold text-2xl'
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-mirror="true"
              data-aos-easing="ease-in-out"
            >
                User Anonymity
            </h2>
            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
                Information submitted on <b>Alero</b> is completely anonymous. It allows to report crimes without fear of retribution or being targeted by the perpetrators.
            </p>
        </div>
      </div>
    </div>
  )
}

export default Services