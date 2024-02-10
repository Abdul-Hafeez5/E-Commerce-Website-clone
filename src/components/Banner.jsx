import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Banner = ({ title, img }) => {
  return (
    <div
      className={`flex items-center justify-center font-QuickSand h-64 mb-8 bg-cover bg-center pr-32 rounded-lg xs:pr-40  sm:pr-60 md:pr-10 xl:pr-44`}
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="ml-8">
        <h1 className="text-[18px] font-bold mb-5">{title}</h1>
        <div className="inline-flex items-center sm:justify-center gap-x-2 py-2 xs:px-4 text-white bg-[#3bb77e] rounded-md">
          <button className="xs:font-bold text-[12px]">Shop Now</button>
          <FaArrowRight />
        </div>
      </div>
    </div>
  );
};

export default Banner;
