import React from "react";
import { HiOutlineArrowSmUp } from "react-icons/hi";
import { motion } from "framer-motion";

const Landingpage = () => {
  return (
    <div data-scroll data-scroll-section  data-scroll-speed="-.3" className="w-full h-screen bg-zinc-800 pt-1">
      <div className="textstructure mt-52 px-20">
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
          return (
            <div className="masker font-['Founders Grotesk-Semibold'] font-extrabold">
              <div className="w-full flex">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1],duration:1.2}} 
                    className=" w-[9vw] h-[5.0vw] rounded-lg relative top-[15px] bg-red-500"
                  ></motion.div>
                )}
                <h1
                  key={index}
                  className="text-[6.5vw] leading-[6.5vw] tracking-tighter uppercase font-medium"
                >
                  {item}
                </h1>
              </div>
            </div>  
          );
        })}
      </div>
      <div className="border-t-[1px] bg-zinc-800 mt-36 flex justify-between items-center py-5 px-20 ">
        {[
          "For Public and Private Companies",
          "From The First Pitch to IPO",
        ].map((item, index) => (
          <p key={index} className="text-md font-light tracking-tighter">
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-5">
          <div className="px-4 py-2 border-[1px] border-zinc-500 rounded-full font-light text-md uppercase">
            {" "}
            Start New Project
          </div>
          <div className="w-10 h-10 border-[1px] border-zinc-500 rounded-full text-[1.7vw] font-light flex items-center justify-center">
            <span className="rotate-45">
              <HiOutlineArrowSmUp />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
