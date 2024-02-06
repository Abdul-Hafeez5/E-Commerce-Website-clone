import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Banner = ({ title, img, bgcolor }) => {
  return (
    <div className={`flex justify-between font-QuickSand w-[500px] bg-${bgcolor} rounded-lg p-4`}>
      <div className="ml-8">
        <h1 className="text-[18px] font-bold mb-5">{title}</h1>
        <div className="inline-flex items-center justify-center gap-x-2 py-2 px-4 text-white bg-[#3bb77e] rounded-md">
          <button className="font-bold">Shop Now</button>
          <FaArrowRight />
        </div>
      </div>
      <div>
        <img src={img} alt="banner" className="w-72 mt-10" />
      </div>
    </div>
  );
};

export default Banner;
