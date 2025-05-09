import React from 'react'
import { useState } from 'react'

export default function Card(props) {
  const [showAbilityPage, setShowAbilityPage] = useState(false);

  const handleView = () => {
    setShowAbilityPage(true);
  }

  const handleBack = () => {
    setShowAbilityPage(false);
  }

  if (showAbilityPage) {
    return (
      <AbilityPage 
        pokemonName={props.pokemonname}
        pokemonImage={props.pokemonimage}
        pokemonAbilities={props.pokemonabilities}
        pokemonStats={props.pokemonstats}
        pokemonMoves={props.pokemonmoves}
        onBack={handleBack}
      />
    );
  }

  return (
    <div className="rounded-3xl border-white/10 border-4 mt-5 mb-5 p-5 w-[250px] h-[330px]  md:w-[330px] md:h-[430px] bg-[#171717] flex flex-col items-center">
      <div className="mt-4 h-3/6 flex justify-center items-center">
        <img 
          className="h-full"
          src={props.pokemonimage} 
          alt={props.pokemonname} 
        /> 
      </div>

      <div className="py-5">
        <p className="text-whitef font-Helvetica text-2xl">{props.pokemonname}</p>
      </div>

      <div className="w-full px-5 py-5">
        <button 
          onClick={handleView}
          className="text-lg cursor-pointer text-white font-Helvetica border-[1px] border-white/50 w-full bg-[#515151] hover:bg-[#313131] transition duration-200 h-[45px]"
        >
          View
        </button>
      </div>
    </div>
  )
}
function AbilityPage(props) {
  return (
    <div className="w-full max-w-full md:h-[600px] md:w-[900px] bg-GreyBlack flex flex-col md:flex-row">
      <div className="w-full md:w-2/6 py-8 md:py-0 bg-MateBlack flex justify-center items-center">
        <img
          className="max-h-[200px] md:max-h-none md:p-16 object-contain"
          src={props.pokemonImage} 
          alt={props.pokemonName} 
        />
      </div>

      <div className="w-full md:w-4/6 flex flex-col items-center py-8 md:py-10 px-4 md:px-8 gap-6 md:gap-10">
        <div className="w-full">
          <p className="font-Helvetica text-center text-xl md:text-3xl text-white">
            {props.pokemonName || "Pokémon Name"}
          </p>
        </div>

        <div className="w-full">
          <h3 className="font-Helvetica text-center text-white/70 text-sm mb-1">Abilities</h3>
          <p className="font-Helvetica text-center text-lg md:text-3xl text-white px-2">
            {props.pokemonAbilities || "Abilities"}
          </p>
        </div>

        <div className="w-full">
          <h3 className="font-Helvetica text-center text-white/70 text-sm mb-1">Stats</h3>
          <p className="font-Helvetica text-center text-lg md:text-3xl text-white px-2">
            {props.pokemonStats || "Stats"}
          </p>
        </div>

        <div className="w-full">
          <h3 className="font-Helvetica text-center text-white/70 text-sm mb-1">Moves</h3>
          <p className="font-Helvetica text-center text-lg md:text-3xl text-white px-2">
            {props.pokemonMoves || "Moves"}
          </p>
        </div>

        <div className="flex justify-center items-center">
          <button 
            onClick={props.onBack}
            className="cursor-pointer bg-red-700 hover:bg-red-800 font-Helvetica text-white rounded-2xl w-[100px] h-[50px] transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}