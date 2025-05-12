import React from 'react'

const About = () => {
  return (
    <div data-scroll data-scroll-speed="-0.1.2" className='abdolute text-black w-full p-20 rounded-tl-2xl bg-[#CDEA68] rounded-tr-3xl'>
        <h1 className="font-['NeueMontreal-Regular'] text-6xl leading-[3vw]">Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell products, explain complex ideas, and hire great people.

        </h1>
        <div className=" flex gap-5 w-full border-t-[1px] border-[#a8c540] ">
                <div className="w-1/2">
             <h1 className='text-[2vw]'>our approach :</h1>
                <button className='flex items-center gap-10 px-10 py-6 bg-zinc-900 mt-10 rounded-full text-white ' > Read More
                  <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
                </button> 
                </div>
                <div className='w-1/2 rounded-3xl mt-10 h-[60vh] bg-[#63646251]'></div>
                
        </div>
    </div>
  )
}

export default About
