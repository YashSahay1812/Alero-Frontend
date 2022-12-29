import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Description from '../components/Description'
import Services from '../components/Services'
import Feedbacks from '../components/Feedbacks'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Description />
      <Services />
      <Feedbacks />
      <Footer />
    </div>
  )
}

export default Home
