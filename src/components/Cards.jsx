import React from "react";

const Cards = () => {
  return (
    <div className="w-full h-screen  bg-zinc-900 flex items-center gap-5 px-32">
      <div className="cardconntainer h-[50vh] w-1/2">
        <div className="relative flex items-center justify-center card rounded-xl w-full h-96 bg-[#004d43]">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
          />
          <button className="px-10 py-3 rounded-full border-2 absolute left-10 bottom-10">
            &copy; 2024
          </button>
        </div>
      </div>
      <div className="cardconntainer flex gap-5 h-[50vh] w-1/2 ">
      <div className="relative flex items-center justify-center card rounded-xl w-full h-96 bg-[#004d43]">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
          />
          <button className="px-10 py-3 rounded-full border-2 absolute left-10 bottom-10">
            &copy; 2024
          </button>
        </div>
        <div className="relative flex items-center justify-center card rounded-xl w-full h-96 bg-[#004d43]">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
          />
          <button className="px-10 py-3 rounded-full border-2 absolute left-10 bottom-10">
            &copy; 2024
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
