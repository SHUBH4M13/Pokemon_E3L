import React from 'react'
import HeroSection from '../Components/HeroSection'
import Search from './Search'

export default function Home() {
  return (
    <div className=' bg-MateBlack min-h-screen'>
        <HeroSection/>
        <Search/>
    </div>
  )
}
