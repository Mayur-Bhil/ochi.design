import React from 'react'
import Navbar from './components/Navbar'
import Landingpage from './components/Landingpage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Features from './components/Features'

const App = () => {
  return (
    <div className='w-full min-h-screen text-white bg-zinc-800'>
      <Navbar/>
      <Landingpage/>
      <Marquee/>
      <About/> 
      <Eyes/>
      <Features/> 
    </div>
  )
}

export default App
