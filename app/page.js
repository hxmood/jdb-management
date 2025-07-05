
import BrandShowcase from '@/components/BrandShowcase'
import Footer from '@/components/Footer'
import HeroSection from '@/components/Hero'
import AboutJDB from '@/components/Intro'

import Intro from '@/components/Intro'
import Navbar from '@/components/Navbar'
import Values from '@/components/Values'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <AboutJDB/>
      <BrandShowcase/>
      {/* <Values/> */}
    </div>
  )
}

export default page