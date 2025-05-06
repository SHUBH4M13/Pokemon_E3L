import React from 'react'
import { FaSearch } from "react-icons/fa";

export default function Main() {
  return (
    <div className=' mt-10 flex justify-center items-center'>
        <div className = 'font-Helvetica text-white px-2 py-5 w-[600px] h-[50px] rounded-full border-amber-50/10 border-[1px] focus:outline-1 outline-[#1b356f] flex justify-start items-center'>
            <div className=' w-1/4'> 
            <div className=' w-[35px] h-[35px] rounded-full bg-DarkBlue flex justify-center items-center '>
            <FaSearch />
            </div>
            </div>
        </div>
    </div>



  )
}
