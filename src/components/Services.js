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
              src="/img/Services/Security.gif" className='w-full rounded-full '
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
              src="/img/Services/ML.gif" className='w-full rounded-full '
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
              src="/img/Services/Anonymity2.gif" className='w-full rounded-full '
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