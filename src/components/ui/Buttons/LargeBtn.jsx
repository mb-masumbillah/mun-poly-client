import React from 'react'

const LargeBtn = ({ text, onClick }) => {
  return (
    <button className="bg-[#003646] text-white px-24 h-12 rounded-lg  hover:bg-transparent border border-primary duration-500 hover:text-black " onClick={onClick}>
      {text}{' '}
    </button>
  )

}

export default LargeBtn