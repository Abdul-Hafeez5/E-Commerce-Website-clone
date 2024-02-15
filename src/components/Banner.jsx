import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Banner = ({ title, img }) => {
  return (
    <div
      className={`flex items-center justify-center font-QuickSand h-64 mb-8 bg-cover bg-center pr-32 rounded-lg xs:pr-40  sm:pr-60 md:pr-10 xl:pr-44`}
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="ml-8">
        <h1 className="text-[18px]  font-bold mb-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300">
          {title}
        </h1>
        <div className="inline-flex items-center py-2 text-white rounded-md sm:justify-center gap-x-2 xs:px-4 bg-primary hover:bg-yellow-500">
          <button className="text-xs xs:font-bold">Shop Now</button>
          <FaArrowRight />
        </div>
      </div>
    </div>
  );
};

export default Banner;
