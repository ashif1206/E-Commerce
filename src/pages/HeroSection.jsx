
import React from 'react'

function HeroSection() {
  return (
    <>
    <div className="relative bg-gray-900 flex justify-center items-center py-16 px-4">
        <div className="max-w-7xl mx-auto text-center lg:text-left">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="block">Discover Timeless</span>
            <span className="block text-yellow-400">Artificial Jewelry</span>
          </h1>
          <p className="mt-3 text-gray-400 text-lg max-w-2xl mx-auto lg:mx-0">
            Explore our curated collection of stunning artificial jewelry pieces
            that combine elegance with affordability.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4">
            <button className="px-6 py-3 bg-yellow-400 text-gray-900 font-medium rounded-md hover:bg-yellow-500">
              Shop Now
            </button>
            <button className="px-6 py-3 border border-yellow-400 text-yellow-400 font-medium rounded-md hover:bg-yellow-400 hover:text-gray-900">
              View Collections
            </button>
          </div>
        </div>
      </div>
    
    </>
  )
}

export default HeroSection