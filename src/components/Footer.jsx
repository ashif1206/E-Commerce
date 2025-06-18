import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterest } from "react-icons/fa";

function Footer() {
  return (
   <>
   
   <footer className="bg-gray-900 border-t border-gray-800">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Logo & Description */}
      <div className="space-y-4 text-center sm:text-left">
        <img className="h-20 mx-auto sm:mx-0 bg-transparent object-contain" src="/logo.png" alt="Logo" />
        <p className="text-gray-400 text-sm">
          Discover our exclusive collection of artificial jewelry that combines elegance with affordability.
        </p>
        <div className="flex justify-center sm:justify-start space-x-4">
          <a href="#" className="text-gray-400 hover:text-white"><FaFacebookF /></a>
          <a href="#" className="text-gray-400 hover:text-white"><FaTwitter /></a>
          <a href="#" className="text-gray-400 hover:text-white"><FaInstagram /></a>
          <a href="#" className="text-gray-400 hover:text-white"><FaPinterest /></a>
        </div>
      </div>

      {/* Quick Links */}
      <div className="text-center sm:text-left">
        <h3 className="text-white font-medium mb-4">Quick Links</h3>
        <ul className="space-y-2">
          <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white">FAQs</a></li>
        </ul>
      </div>

      {/* Customer Service */}
      <div className="text-center sm:text-left">
        <h3 className="text-white font-medium mb-4">Customer Service</h3>
        <ul className="space-y-2">
          <li><a href="#" className="text-gray-400 hover:text-white">Shipping Info</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white">Returns</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white">Order Status</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white">Payment Options</a></li>
        </ul>
      </div>

      {/* Newsletter */}
      <div className="text-center sm:text-left">
        <h3 className="text-white font-medium mb-4">Newsletter</h3>
        <p className="text-gray-400 text-sm mb-4">
          Subscribe to receive updates, access to exclusive deals, and more.
        </p>
        <form className="flex flex-col sm:flex-row items-center sm:items-start">
          <input
            type="email"
            className="flex-1 bg-gray-800 border border-gray-700 text-white rounded-md px-4 py-2 w-full mb-2 sm:mb-0 sm:mr-2 focus:ring-white focus:border-white"
            placeholder="Enter your email"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 w-full sm:w-auto"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>

    {/* Footer Bottom */}
    <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
      <p className="text-gray-400 text-sm">&copy; 2024 Luxury Artificial Jewelry. All rights reserved.</p>
      <div className="flex space-x-4 mt-4 md:mt-0">
        <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
        <a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a>
      </div>
    </div>
  </div>
</footer>

   
   </>
  )
}

export default Footer