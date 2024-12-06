import React from 'react'

import HeroSection from '../components/HeroSection'
import Pricing from '../components/Pricing'
import Benefits from '../components/Benefits'
import Cities from '../components/Cities'

export const Home = () => {
  return (
    <div>
        <HeroSection/>
        <Pricing/>
        <Benefits/>
        <Cities/>
    </div>
  )
}
