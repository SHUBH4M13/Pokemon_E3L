import React from 'react'
import { motion } from "motion/react"

export default function HeroSection() {
    return (
        <div>
            <div>

                <div className=' w-full h-[500px] arc bg-[#141414] flex justify-center items-center'>
                    <motion.div
                    initial = {{opacity : 0 ,  x : 210 }}
                    whileInView= {{ opacity : 1 , x : 0 }}
                    transition= {{duration : 1 }}
                    viewport={{once : true }}
                    className=' flex flex-col'>
                        <p className=' text-white text-9xl text-center font-PokemonHollow transition duration-1000 hover:font-PokemonSolid' >Pokémon</p>
                        <p className=' text-white text-center text-5xl font-PokemonHollow hover:font-PokemonSolid'>Explorer</p>
                        <p className=' animate-fade-in-bottom text-white mt-7 text-center font-Helvetica '>Discover your favorite Pokémon — </p>
                        <p className=' animate-fade-in-bottom text-white text-center font-Helvetica '> search, explore stats, and dive into detailed profiles with a click!</p>
                    </motion.div>
                </div>
                
            </div>
        </div>
    )
}

