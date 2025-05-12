import { motion, useAnimation } from "framer-motion";
import React from "react";

const Features = () => {
  const cards = [useAnimation(),useAnimation()]
  const HandelHover = (index) => {
      cards[index].start({y:"0"})
  }
  const HandelHoverEnd = ()=>{
    ards[index].start({y:"100%"})
  }
  return (
    <div className="relative w-full py-20 ">
      <div className='w-full text-7xl tracking-tight px-20 font-["NeueMontreal-Regular"] border-b-[1px] border-zinc-700 pb-20'>
        <h1>Featured</h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          <motion.div onHoverStart={()=>HandelHover(0)} onHoverEnd={()=>HandelHoverEnd()} className="cardcontainer relative rounded-xl w-1/2 h-[75vh]">
            <h1 className="absolute flex text-[#a8c540] right-0 left-full top-1/2 overflow-hidden -translate-x-[50%] -translate-y-[50%] z-[9] text-8xl leading-none tracking-tighter">
            {"VISE".split("").map((item,index)=><motion.span transition={{ease:[],delay:index*0.1}} initial={{y:"100%"}} animate={cards[0]} className="inline-block translate-y-full">{item}</motion.span>)}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
              />
            </div>
          </motion.div>
          <motion.div className="cardcontainer relative rounded-xl w-1/2 h-[75vh]">
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <h1 className="absolute text-[#bed95b] flex overflow-hidden right-full top-1/2 translate-x-[50%] -translate-y-[50%] z-[8] text-8xl leading-none tracking-tighter">
              {"FYDE".split("").map((item,index)=><motion.span initial={{y:"100%"}} className="inline-block">{item}</motion.span>)}
              </h1>
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Features;
