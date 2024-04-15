import React from 'react'

// Deconstruct Props
function Card({children, bg = "bg-gray-100"}) {
  return (
    // Prop to change styling
    <div className={`${bg} p-6 rounded-lg shadow-md`}>
      {children}
    </div>
  )

}

export default Card