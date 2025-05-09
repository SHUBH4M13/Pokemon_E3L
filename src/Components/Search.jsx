import React, { useEffect, useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { motion } from 'motion/react';
import Card from './Card';
import useAxiosFetch from './CustomHook/useAxiosFetch';
import useFetchAllPokemons from './CustomHook/useFetchAllPokemons';

export default function Search() {
  const [PokemonName, setPokemonName] = useState(null);
  const [SubmitName, setSubmitName] = useState(null);
  const { Data, Error, Loading } = useAxiosFetch(`https://pokeapi.co/api/v2/pokemon/${SubmitName}`);
  const { AllPokemon, isLoading, isError } = useFetchAllPokemons();

  // Ref for the search results section
  const searchResultsRef = React.useRef(null);

  const HandleChange = (e) => {
    setPokemonName(e.target.value);
  };

  const HandleSubmit = (e) => {
    setSubmitName(PokemonName);
  };

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
        
        {/* Search Section - Keep Existing Code */}
        <div className='font-Helvetica text-white px-2 py-5 w-[250px] sm:w-[400px] h-[50px] rounded-full border-amber-50/10 border-[1px] focus:outline-none focus:ring-2 focus:ring-[#1b356f] flex flex-row-reverse items-center'>
          <div className='px-[.5px]'>
            <div
              onClick={HandleSubmit}
              className='w-[35px] h-[35px] flex justify-center items-center bg-DarkBlue hover:bg-DarkBlue/70 cursor-pointer rounded-full'>
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

        <div className="mt-5 text-white text-lg" ref={searchResultsRef}>
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

        {/* All Pokémon Section - New Code */}
        <div className="mt-16 w-full max-w-7xl px-4">
          <h2 className="text-2xl font-bold text-white mb-6">All Pokémon</h2>
          
          {isLoading ? (
            <div className="flex justify-center">
              <p className="text-white">Loading Pokémon...</p>
            </div>
          ) : isError ? (
            <div className="flex justify-center">
              <p className="text-red-400">Error loading Pokémon.</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {AllPokemon?.data?.results && AllPokemon.data.results.map((pokemon, index) => {
                const pokemonId = pokemon.url.split('/')[6];
                
                return (
                  <motion.div
                    key={pokemon.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.03 }}
                    className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-all hover:transform hover:scale-105"
                    onClick={() => {
                      setPokemonName(pokemon.name);
                      setSubmitName(pokemon.name);
                      // Scroll to the search results section smoothly
                      if (searchResultsRef.current) {
                        searchResultsRef.current.scrollIntoView({ 
                          behavior: 'smooth',
                          block: 'start'
                        });
                      } else {
                        // Fallback to window.scrollTo if ref is not available
                        window.scrollTo({
                          top: 0,
                          behavior: 'smooth'
                        });
                      }
                    }}
                  >
                    <div className="flex flex-col items-center">
                      <div className="bg-gray-700 rounded-full p-2 mb-3 w-24 h-24 flex justify-center items-center">
                        <img 
                          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemonId}.png`} 
                          alt={pokemon.name}
                          className="w-20 h-20 object-contain"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
                          }}
                        />
                      </div>
                      <h3 className="text-white font-medium capitalize text-center">{pokemon.name}</h3>
                      <span className="text-gray-400 text-sm mt-1">#{pokemonId}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
          
          {!isLoading && (!AllPokemon?.data?.results || AllPokemon.data.results.length === 0) && (
            <p className="text-white text-center">No Pokémon found.</p>
          )}
        </div>
      </motion.div>
    </>
  );
}