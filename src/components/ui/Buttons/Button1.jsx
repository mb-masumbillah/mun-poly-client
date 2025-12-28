
import { ArrowRight } from 'lucide-react'

const Button1 = ({ text }) => {
  return (
    <button className="bg-[#003646] text-white px-6 h-12 rounded-lg  hover:bg-white  duration-500 hover:text-black flex items-center gap-2 ">
      {text}{' '}<ArrowRight />

    </button>
  )
}

export default Button1