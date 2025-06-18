
import React from 'react'
import { NavLink } from 'react-router-dom'

function Items() {
  return (
    <>
    {/* <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex overflow-x-auto space-x-4 pb-4 hide-scrollbar">
          {["All", "Necklaces", "Earrings", "Bracelets", "Rings", "Sets"].map(
            (category, index) => (
              <NavLink
                key={index}
                to='/'
               
                // to={`/${category.toLowerCase()}`}
                className={({ isActive }) =>
                  `flex-shrink-0 rounded-full px-6 py-3 text-white ${
                    isActive ? "bg-yellow-400 text-gray-900" : "bg-gray-800 hover:bg-gray-700"
                  }`
                }
              >
                {category}
              </NavLink>
            )
          )}
        </div>
      </section> */}

<section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex overflow-x-auto space-x-4 pb-4 hide-scrollbar">
          {["All", "Necklaces", "Earrings", "Bracelets", "Rings", "Sets"].map(
            (category, index) => (
              <NavLink
                key={index}
                to="/"
                className={({ isActive }) =>
                  `flex-shrink-0 rounded-full px-6 py-3 text-white ${
                    isActive ? "bg-gray-600 text-white" : "bg-gray-800 hover:bg-gray-700"
                  }`
                }
              >
                {category}
              </NavLink>
            )
          )}
        </div>
      </section>

    </>
  )
}

export default Items