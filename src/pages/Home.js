import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Description from '../components/Description'
import Services from '../components/Services'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Description />
      <Services />
      <Footer />
    </div>
  )
}

export default Home
