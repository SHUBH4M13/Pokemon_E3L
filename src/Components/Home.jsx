import React from 'react'
import HeroSection from '../Components/HeroSection'
import Main from './Main'
import Card from './Card'

export default function Home() {
  return (
    <div className=' bg-MateBlack min-h-screen'>
        <HeroSection/>
        <Main/>
        <div className=' px-5 flex  justify-center items-center '>
        <Card/>
        </div>
    </div>
  )
}
