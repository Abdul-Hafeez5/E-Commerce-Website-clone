import React from "react";
import { FiSend } from "react-icons/fi";

const HeroSec = ({ img, heading, subHeading, bg }) => {
  return (
    <div className="w-full mx-2 xs:mx-6" style={{ backgroundColor: bg }}>
      <div
        className="w-[97%] xs:w-[95%] lg:w-[97%] h-full py-16 rounded-3xl lg:pl-20"
        style={{
          backgroundImage: `url('${img}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="pt-16 pl-8 text-3xl font-bold xs:text-[46px] xs:leading-[46px] xs:pr-64 sm:leading-[64px] lg:text-[64px] lg:leading-[72px] lg:pr-96 xl:text-[72px] xl:leading-[96px] font-quickSand ">
          {heading}
        </h1>
        <p className="pl-8 my-2 text-base font-lato text-secondary xs:my-5 xs:text-2xl md:text-3xl">
          {subHeading}
        </p>
        <div className="inline-flex items-center mt-8 bg-white xs:pl-4 xs:ml-8 rounded-3xl">
          <FiSend className="mx-1 sm:mr-4" />
          <input
            type="text"
            placeholder="Your email address"
            className="border-none xs:mr-2 font-lato text-secondary xs:p-3 md:pr-4 "
          />
          <button className="bg-primary font-quickSand font-semibold hover:bg-[#47c98c] rounded-3xl py-3  xs:px-6 text-white">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSec;
