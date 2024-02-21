import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Banner = ({ title, img }) => {
  return (
    <div
      className={`flex  md:items-start pt-10 pr-[40%]  sm:py-8 font-QuickSand h-64   bg-cover bg-center px-8 mxs:pr-20  rounded-lg xs:pr-40  sm:pr-60 md:pr-20 xl:pr-44`}
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="flex flex-col lg:justify-start xs:ml-4 font-quickSand xs:block">
        <h1 className="text-base xs:text-[18px] leading-5 xs:leading-8  font-bold mb-5 animation-effect">
          {title}
        </h1>
        <div className="inline-flex items-center self-start px-4 py-2 text-white rounded-md sm:justify-center gap-x-2 bg-primary hover:bg-yellow-500">
          <button className="text-xs xs:font-bold">Shop Now</button>
          <FaArrowRight />
        </div>
      </div>
    </div>
  );
};

export default Banner;
