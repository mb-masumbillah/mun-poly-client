import { Download } from 'lucide-react';

const DownloadBtn = ({ text }) => {
  return (
    <button className="bg-[#003646] text-white px-6 h-12 rounded-lg  hover:bg-transparent border border-primary duration-500 hover:text-black flex items-center gap-3 ">
      {text}{' '} <Download />

    </button>
  )
}

export default DownloadBtn