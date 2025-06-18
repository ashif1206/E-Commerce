
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { addCardDataFunction, searchProductFunction } from '../redux/productSlice';

function SearchProducts() {
  const getRandomRating = () => (Math.random() * 2 + 3).toFixed(1);
  const {searchData} = useSelector((s)=>s.productSlice);
  const dispatch = useDispatch()

  function searchCardDataFunction(res){
    dispatch(addCardDataFunction(res));
  }

  return (
    <>
    <div className="flex-grow pt-16 bg-gray-900">
    <div className="max-w-7xl mx-auto px-4 py-12 " > 
        <h2 className="text-3xl font-bold text-white mb-8 text-center lg:text-left">
          Featured Collections
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {searchData && searchData.length > 0 ? searchData.map((res) => (
            <div key={res.id} className="bg-gray-800 rounded-lg overflow-hidden">
              <img
                className="w-full h-64 object-cover"
                src={res.image}
              />
              <div className="p-4">
                <h3 className="text-lg font-medium text-white">{res.title}</h3>
                <p className="text-gray-400 mt-2">${res.price}</p>
                <p className="text-yellow-400 mt-2">⭐ {getRandomRating()} / 5</p>
                <button
                onClick={()=>searchCardDataFunction(res)}
                className="mt-3 px-6 py-2 cursor-pointer bg-yellow-400 text-gray-900 font-medium rounded-md hover:bg-yellow-500 w-full">
                  Add to Cart
                </button>
              </div>
            </div>
          )):
          
          <div className="flex flex-col items-center justify-center min-h-screen text-center">
            <h1 className="mb-5 text-lg text-white md:text-xl lg:text-2xl">No Products Available</h1>
            <NavLink
               className="bg-blue-700 text-white px-4 py-2 rounded font-bold text-sm md:text-base lg:text-lg" 
               to="/"
            >
                   Continue Shopping
                    </NavLink>
          </div>
         
          }
        </div>
      </div>
      </div>
    </>
  )
}

export default SearchProducts