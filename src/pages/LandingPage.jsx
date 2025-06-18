
import React from 'react'
import HeroSection from './HeroSection'
import Products from '../components/Products'
import Items from './Items'

function LandingPage() {
  return (
    <>
    <main className="flex-grow pt-16 bg-gray-900">
      <HeroSection/>
      <Items/>
     <Products/>

    </main>
    
    </>
  )
}

export default LandingPage