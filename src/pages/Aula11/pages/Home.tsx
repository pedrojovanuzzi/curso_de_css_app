import React from 'react'

import HeroSection from '../components/HeroSection'
import Pricing from '../components/Pricing'
import Benefits from '../components/Benefits'
import Cities from '../components/Cities'
import FAQ from '../components/FAQ'
import QuickAccess from '../components/QuickAccess'
import Overlay from '../components/Overlay'

export const Home = () => {
  return (
    <div>
        <HeroSection/>
        <Pricing/>
        <Benefits/>
        <Cities/>
        <FAQ/>
        <QuickAccess/>
        <Overlay/>
    </div>
  )
}
