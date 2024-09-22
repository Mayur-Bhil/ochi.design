import React from 'react'
import Navbar from './components/Navbar'
import Landingpage from './components/Landingpage'
import Marquee from './components/Marquee'
import About from './components/About'

const App = () => {
  return (
    <div className='w-full min-h-screen text-white bg-zinc-800'>
      <Navbar/>
      <Landingpage/>
      <Marquee/>
      <About/>
    </div>
  )
}

export default App
