import React from 'react'

const Features = () => {
  return (
    <div className='w-full py-20 '>
        <div className='w-full text-7xl tracking-tight px-20 font-["NeueMontreal-Regular"] border-b-[1px] border-zinc-700 pb-20'>
                <h1>Featured</h1>
        </div>
       <div className='px-20'>
       <div className="cards w-full flex gap-10 mt-10">
             <div className="cardcontainer rounded-xl w-1/2 h-[75vh]">
             <div className='card w-full h-full rounded-xl overflow-hidden'>
                    <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
             </div>
              
            </div>
            <div className="cardcontainer rounded-xl w-1/2 h-[75vh]">
            <div className='card w-full h-full rounded-xl overflow-hidden'>
                    <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
            </div>
              
            </div>
        </div>
       </div>
    </div>
  )
}

export default Features
