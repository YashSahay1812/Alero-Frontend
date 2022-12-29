import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Description = () => {

  AOS.init();

  return (
    <div className='h-screen'>
        <div className='bg-[#ffbf23] h-5/6 flex justify-evenly items-center gap-x-12 px-20'>
            <div 
              className='text-5xl w-80 font-medium'    data-aos="fade-down-right"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-duration="1000"
            >
                Let's Make Society Safer for All!
            </div>
            <div 
              className='w-96' 
              data-aos="fade-up-left"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-duration="1000"
            >
              <img src="/img/comment.svg" className="block w-5 h-5 mb-4"/>
              <b>Alero</b> allows users to report crimes anonymously.
              <br/><br/>
              <b><i>Nomore hesitation to report a crime. <br />Nomore fear of retaliation or for other personal reasons.</i></b>
              <br/><br/>
              Now one can report crimes that have been committed without fear of being identified as a witness.
              <br/><br/>
              <b>Alero</b> is built on <i><b>blockchain</b></i> which ensures that the information cannot be accessed or altered by anyone other than the authorities.
              <br/><br/>
              <b><i>Alero</i></b> also incorporates machine learning algorithms to analyze and interpret the data submitted through the website. 
              <br/><br/>
              Using both Machine Learning and Blockchain, <b>Alero</b> makes it easier <b><i>for law enforcement</i></b> to investigate and solve crimes by aggregating information from multiple sources.
            </div>
        </div>
    </div>
  )
}

export default Description
