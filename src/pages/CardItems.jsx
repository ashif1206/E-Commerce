
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { decreaseCardQuantity, deletecardData, increaseCardQuantity } from '../redux/productSlice';
import toast from 'react-hot-toast';

function CardItems() {

  const{addCardData,totalQuantity,totalPrice} = useSelector((s)=>s.productSlice);
  const dispatch = useDispatch();

  function deleteCardFunction(id){
    dispatch(deletecardData(id))
  };

  function decreaseCardQuantityFunction(id){
    dispatch(decreaseCardQuantity(id))
  };
  function increaseCardQuantityFunction(id){
    dispatch(increaseCardQuantity(id))
  };

  return (
    <>
    <div className="bg-gray-900 text-gray-50 pt-25">
      {
          addCardData && addCardData.length > 0 ?  <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <header className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold">Your Shopping Cart</h1>
            <button className="flex items-center text-gray-400 hover:text-white transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
              Search
            </button>
          </header>
          {/* Cart Items */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {/* Cart Items List */}
              <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                {/* Cart Header */}
                <div className="hidden md:grid grid-cols-12 bg-gray-700 px-4 py-3 text-sm font-medium">
                  <div className="col-span-5">Product</div>
                  <div className="col-span-2 text-center">Price</div>
                  <div className="col-span-2 text-center">Quantity</div>
                  <div className="col-span-2 text-center">Total</div>
                  <div className="col-span-1" />
                </div>
                {/* Cart Item 1 */}
                {addCardData.map((res,ind)=>(
                  <div key={res.id} className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 border-b border-gray-700">
                  <div className="md:col-span-5 flex items-center">
                    <div className="relative">
                      <img
                        src={res.image}
                        alt="Product"
                        className="w-20 h-20 object-cover rounded"
                      />
                      <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
                        {res.quantity}
                      </span>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium">{res.title}</h3>
                      <p className="text-gray-400 text-sm">Color: Black</p>
                    </div>
                  </div>
                  <div className="md:col-span-2 flex md:block items-center">
                    <span className="md:hidden text-gray-400 mr-2">Price:</span>
                    <div className="text-center">${res.price}</div>
                  </div>
                  <div className="md:col-span-2 flex md:block items-center">
                    <span className="md:hidden text-gray-400 mr-2">Qty:</span>
                    <div className="flex items-center justify-center">
                      <button
                      onClick={()=>decreaseCardQuantityFunction(res.id)}
                      className="text-gray-400 cursor-pointer hover:text-white p-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                     <span>{res.quantity}</span>
                      <button
                      onClick={()=>increaseCardQuantityFunction(res.id)}
                      className="text-gray-400 cursor-pointer hover:text-white p-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="md:col-span-2 flex md:block items-center">
                    <span className="md:hidden text-gray-400 mr-2">Total:</span>
                    <div className="text-center font-medium">${res.totalPrice.toFixed(2)}</div>
                  </div>
                  <div className="md:col-span-1 flex justify-end">
                    <button
                    onClick={()=>deleteCardFunction(res.id)}
                    className="text-gray-400 cursor-pointer hover:text-red-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                ))}
             
                </div>
              {/* Coupon Code */}
              <div className="mt-6 bg-gray-800 rounded-lg shadow-lg p-4">
                <h3 className="font-medium mb-3">Have a coupon code?</h3>
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Enter coupon code"
                    className="flex-grow bg-gray-700 border border-gray-600 rounded-l px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-r font-medium transition">
                    Apply
                  </button>
                </div>
              </div>
              {/* Continue Shopping */}
              <div className="mt-6">
                <NavLink
                  to='/'
                  className="flex items-center text-blue-400 hover:text-blue-300 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Continue Shopping
                </NavLink>
              </div>
            </div>
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-gray-800 rounded-lg shadow-lg p-6 sticky top-6">
                <h2 className="text-xl font-bold mb-6">Order Summary</h2>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Subtotal</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Tax</span>
                    <span>${(totalPrice * 1.12 - totalPrice).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between border-t border-gray-700 pt-4">
                    <span className="font-bold">Total</span>
                    <span className="font-bold text-xl">${(totalPrice * 1.12).toFixed(2)}</span>
                  </div>
                </div>
                <button
                onClick={()=>toast.success("Order Confirm")}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium mt-8 transition flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg>
                  Proceed to Checkout
                </button>
                <div className="mt-4 text-center text-sm text-gray-400">
                  or{" "}
                  <a href="#" className="text-blue-400 hover:text-blue-300 transition">
                    Pay with PayPal
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>   : <div className="flex flex-col items-center justify-center min-h-screen  text-center">
    <h1 className="mb-5 text-lg md:text-xl lg:text-2xl">No Card Products</h1>
    <NavLink
        className="bg-blue-700 text-white px-4 py-2 rounded font-bold text-sm md:text-base lg:text-lg" 
        to="/"
    >
        Continue Shopping
    </NavLink>
</div>

      }
   
</div>

    </>
  )
}

export default CardItems