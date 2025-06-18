
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addCardDataFunction, productThunk } from '../redux/productSlice';
import toast from 'react-hot-toast';


function Products() {
  const getRandomRating = () => (Math.random() * 2 + 3).toFixed(1);
   const {productData} = useSelector((s)=>s.productSlice);
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(productThunk())
  },[]);
  // console.log(productData)

  function CardDataFunction(res){
    dispatch(addCardDataFunction(res));
    toast.success("Added To Card")
  };

  return (
    <>
   <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-white mb-8 text-center lg:text-left">
          Featured Collections
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {productData && productData.length > 0 ? productData.map((res) => (
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
                onClick={()=>CardDataFunction(res)}
                className="mt-3 px-6 py-2 cursor-pointer bg-yellow-400 text-gray-900 font-medium rounded-md hover:bg-yellow-500 w-full">
                  Add to Cart
                </button>
              </div>
            </div>
          )):
          <h1>Loading...</h1>
          }
        </div>
      </div>

    </>
  )
}

export default Products