import { calcLength, motion } from 'framer-motion'
import React from 'react'

const Marquee = () => {
    
  return (
        <div className="w-full py-20 rounded-3xl bg-[#004D43]">
                <div className="text border-t-2 border-b-2 border-zinc-300 overflow-hidden flex uppercase whitespace-nowrap">
                    <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease : "linear",repeat : Infinity,duration :55}}  className='text-[14vw] -mb-10 leading-none font-Founders Grotesk font-extrabold '>we are ochi</motion.h1>
                    <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease : "linear",repeat : Infinity,duration :60  }} className='text-[14vw]  mb-10 leading-none font-Founders Grotesk font-extrabold'>  we are ochi</motion.h1>
                </div>
        </div>
  
  )
}

export default Marquee;
