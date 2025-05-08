import React from 'react'
import { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { motion } from 'motion/react';
import Card from './Card';
import useAxiosFetch from './CustomHook/useAxiosFetch';

export default function Search() {

  const [PokemonName, setPokemonName] = useState(null);
  const [SubmitName, setSubmitName] = useState(null);
  const { Data, Error, Loading } = useAxiosFetch(`https://pokeapi.co/api/v2/pokemon/${SubmitName}`)

  const HandleChange = (e) => {
    setPokemonName(e.target.value)
  }

  const HandleSubmit = (e) => {
    setSubmitName(PokemonName);
  }

  const formatAbilities = (abilities) => {
    if (!abilities || !abilities.length) return "No abilities found";
    return abilities.map(item => 
      item.ability.name.charAt(0).toUpperCase() + item.ability.name.slice(1)
    ).join(", ");
  };

  const formatStats = (stats) => {
    if (!stats || !stats.length) return "No stats found";
    return stats.map(stat => 
      `${stat.stat.name.toUpperCase()}: ${stat.base_stat}`
    ).join(", ");
  };

  const formatMoves = (moves) => {
    if (!moves || !moves.length) return "No moves found";
    return moves.slice(0, 5).map(move => 
      move.move.name.charAt(0).toUpperCase() + move.move.name.slice(1).replace('-', ' ')
    ).join(", ") + (moves.length > 5 ? " and more..." : "");
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 210 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className='mt-10 flex flex-col justify-center items-center'>

        <div className='font-Helvetica text-white px-2 py-5 w-[250px] sm:w-[400px] h-[50px] rounded-full border-amber-50/10 border-[1px] focus:outline-none focus:ring-2 focus:ring-[#1b356f] flex flex-row-reverse items-center'>

          <div className=' px-[.5px]'>
            <div
              onClick={HandleSubmit}
              className=' w-[35px] h-[35px] flex justify-center items-center bg-DarkBlue hover:bg-DarkBlue/70 cursor-pointer rounded-full'>
              <FaSearch />
            </div>
          </div>

          <input
            type="text"
            placeholder="Search Pokémon"
            className='ml-3 bg-transparent border-none text-white outline-none w-full'
            onChange={HandleChange}
          />

        </div>



        <div className="mt-5 text-white text-lg">
          <div>
            {Loading && <p className="text-white">Loading...</p>}

            {Loading && Error && (
              <p className="text-red-400">Pokémon not found. Please try another name.</p>
            )}
          </div>
        
            {Data?.data?.name && (
              <Card
                pokemonname={Data.data.name.charAt(0).toUpperCase() + Data.data.name.slice(1)}
                pokemonimage={Data.data.sprites?.other?.home?.front_default}
                pokemonabilities={formatAbilities(Data.data.abilities)}
               pokemonstats={formatStats(Data.data.stats)}
               pokemonmoves={formatMoves(Data.data.moves)}
              />
            )}

        </div>

      </motion.div>
    </>
  )
}
