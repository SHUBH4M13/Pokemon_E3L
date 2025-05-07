import React from 'react'
import { FaSearch } from "react-icons/fa";
import { motion } from 'motion/react';
import { animate } from 'motion';

export default function Main() {
  return (
    <motion.div 
    initial={{ opacity: 0, y: 210 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
    className='mt-10 flex justify-center items-center'>

      <div className='font-Helvetica text-white px-2 py-5 w-[400px] h-[50px] rounded-full border-amber-50/10 border-[1px] focus:outline-none focus:ring-2 focus:ring-[#1b356f] flex flex-row-reverse items-center'>

        <div className=' px-[.5px]'>
          <div className=' w-[35px] h-[35px] flex justify-center items-center bg-DarkBlue hover:bg-DarkBlue/70 cursor-pointer rounded-full'>
            <FaSearch />
          </div>
        </div>

        <input
          type="text"
          placeholder="Search Pokémon"
          className='ml-3 bg-transparent border-none text-white outline-none w-full'
        />

      </div>

    </motion.div>


  )
}
