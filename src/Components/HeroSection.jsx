import React from 'react'

export default function HeroSection() {
    return (
        <div>
            <div>
                <div className=' w-full h-[500px] arc bg-[#141414] flex justify-center items-center'>
                    <div className=' flex flex-col'>
                        <p className=' text-white text-9xl text-center font-PokemonHollow transition duration-1000 hover:font-PokemonSolid' >Pokemon</p>
                        <p className=' text-white text-center text-5xl font-PokemonHollow hover:font-PokemonSolid'>Explorer</p>
                        <p className=' text-white mt-7 text-center font-Helvetica '>Discover your favorite Pokémon — </p>
                        <p className=' text-white text-center font-Helvetica '> search, explore stats, and dive into detailed profiles with a click!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

