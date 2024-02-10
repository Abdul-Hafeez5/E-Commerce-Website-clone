import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Banner = ({ title, img }) => {
  return (
    <div className="w-64 h-64">
      <div
        className={`flex  font-QuickSand w-[500px] h-64 bg-cover bg-center  rounded-lg pt-20 pr-60`}
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="ml-8">
          <h1 className="text-[18px] font-bold mb-5">{title}</h1>
          <div className="inline-flex items-center justify-center gap-x-2 py-2 px-4 text-white bg-[#3bb77e] rounded-md">
            <button className="font-bold">Shop Now</button>
            <FaArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
