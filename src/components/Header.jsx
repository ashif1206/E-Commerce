
import React, { useEffect, useState } from 'react'
import { FaSearch, FaHeart, FaShoppingBag, FaUser, FaBars, FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { searchProductFunction } from '../redux/productSlice';

function Header() {
  const{addCardData} = useSelector((s)=>s.productSlice);
  const dispatch = useDispatch()
  const [menuOpen, setMenuOpen] = useState(false);
  const [val, setVal] = useState('');
  const navigate = useNavigate();

  function searchHandler(e){
    const{value} = e.target;
    // if(e.key === "Enter" && value.trim() !== ""){
    //   setVal(value);
    // }
    setVal(value)
  };
  
  useEffect(()=>{
    if(val && val.trim() !==""){
      navigate(`/search/?product=${val}`)
      dispatch(searchProductFunction(val))
    }
  },[val])

  return (
    <>

     <header className="fixed w-full z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
    <nav className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        {/* Logo */}
        <NavLink to="/" className="flex-shrink-0">
          <img className="h-20 w-auto" src="/logo.png" alt="Logo" />
        </NavLink>
        
        {/* Search for larger screens */}
        <div className="hidden lg:flex flex-1 justify-center">
          <div className="relative w-full max-w-md">
            <FaSearch className="absolute left-3 top-2.5 text-gray-400" />
            <input
              id="search"
              // onKeyDown={searchHandler}
              onChange={searchHandler}
              className="pl-10 pr-3 py-2 border border-gray-700 rounded-md bg-gray-800 text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-gray-700 focus:border-custom sm:text-sm w-full"
              placeholder="Search..."
              type="search"
            />
          </div>
        </div>
        
        {/* Navigation Links for Larger Screens */}
        <div className="hidden lg:flex lg:space-x-8">
          <NavLink to='/' className="text-white hover:text-custom/80 px-3 py-2 text-sm font-medium">New Arrivals</NavLink>
          <NavLink to='/' className="text-gray-300 hover:text-custom/80 px-3 py-2 text-sm font-medium">Collections</NavLink>
          <NavLink to='/' className="text-gray-300 hover:text-custom/80 px-3 py-2 text-sm font-medium">Trending</NavLink>
          <NavLink to='/' className="text-gray-300 hover:text-custom/80 px-3 py-2 text-sm font-medium">Deals</NavLink>
        </div>
        
        {/* Icons */}
        <div className="flex items-center space-x-4">
          <button className="p-2 text-gray-400 hover:text-custom"><FaHeart className="text-xl" /></button>
          <NavLink to='/carditem' className="p-2 text-gray-400 hover:text-custom relative">
            <FaShoppingBag className="text-xl" />
            <span className="absolute -top-1 -right-1 bg-custom text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">{addCardData.length}</span>
          </NavLink>
          <button className="p-2 text-gray-400 hover:text-custom"><FaUser className="text-xl" /></button>
          
          {/* Mobile Menu Button */}
          <button className="ml-4 p-2 text-gray-400 hover:text-custom lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
          </button>
        </div>
      </div>
    </nav>
    
    {/* Mobile Search and Menu */}
    <div className="lg:hidden px-4 py-2">
      <div className="relative w-full">
        <FaSearch className="absolute left-3 top-2.5 text-gray-400" />
        <input
          id="search"
          onKeyDown={searchHandler}
          className="pl-10 pr-3 py-2 border border-gray-700 rounded-md bg-gray-800 text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-gray-700 focus:border-custom sm:text-sm w-full"
          placeholder="Search..."
          type="search"
        />
      </div>
    </div>
      {/* Mobile Menu */}
            {menuOpen && (
              <div className="fixed top-16 left-0 w-full bg-gray-900 shadow-lg p-5 lg:hidden transition-transform z-40">
                <nav className="space-y-4 text-white">
                  <NavLink to='/' className="block hover:text-custom/80 text-lg">New Arrivals</NavLink>
                  <NavLink to='/' className="block hover:text-custom/80 text-lg">Collections</NavLink>
                  <NavLink to='/' className="block hover:text-custom/80 text-lg">Trending</NavLink>
                  <NavLink to='/' className="block hover:text-custom/80 text-lg">Deals</NavLink>
                </nav>
                <div className="mt-6 flex space-x-4">
                  <NavLink to='/' className="p-2 text-gray-400 hover:text-custom"><FaHeart className="text-xl" />
                  </NavLink>
                  <NavLink to='/carditem'
                  className="p-2 text-gray-400 hover:text-custom relative">
                    <FaShoppingBag className="text-xl" />
                    <span className="absolute -top-1 -right-1 bg-custom text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">{addCardData.length}</span>
                  </NavLink>
                  <button className="p-2 text-gray-400 hover:text-custom"><FaUser className="text-xl" /></button>
                </div>


              </div>
            )}

  </header>  
    
    </>   
  )
}

export default Header