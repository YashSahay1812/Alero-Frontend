import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Description from '../components/Description'
import Services from '../components/Services'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Description />
      <Services />
    </div>
  )
}

export default Home
