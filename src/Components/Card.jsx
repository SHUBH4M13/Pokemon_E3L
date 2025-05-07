import axios from 'axios';
import React from 'react'
import { useState  , useEffect } from 'react'
export default function Card() {

    const [ Pokemons , setPokemons ] = useState([]);
    const name = 'pikachu'
    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((res) => {
            console.log(res.data);
        })
    } , []);


  return (
    <div className=' rounded-3xl border-white/10 border-4 mt-5 mb-5  p-5 w-[330px] h-[430px] bg-[#171717] flex flex-col items-center '>
        
        <div className=' mt-4 h-3/6  flex jusitfy-center items-center '>
            <img 
            className=' h-full'
            src="https://www.pngplay.com/wp-content/uploads/10/Bulbasaur-Pokemon-Download-Free-PNG-Clip-Art.png" alt="" />
        </div>

        <div className=' py-5 '>
            <p className=' text-white font-Helvetica text-2xl  '>Squirtle</p>
        </div>

        <div className=' w-full px-5 py-5 '>
            <button className=' w-full bg-DarkBlue h-[30px]'> View </button>
        </div>

    </div>
  )
}
