import React from 'react'

const Buttons = ({ text }) => {
  return (
    <button className="bg-[#003646] text-white px-6 h-12 rounded-lg  hover:bg-transparent border border-primary duration-500 hover:text-black ">
      {text}{' '}
    </button>
  )
}

export default Buttons