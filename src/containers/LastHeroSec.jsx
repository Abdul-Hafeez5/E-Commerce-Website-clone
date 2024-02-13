import React from "react";
import { banner9 } from "../assets/Deals/index";
import { FiSend } from "react-icons/fi";

const LastHeroSec = () => {
  return (
    <div className="flex items-center justify-center w-full h-full py-16 mx-10 my-6 bg-[#d8f1e5] rounded-3xl lg:pl-20 ">
      <div className="pl-8">
        <h1 className="pt-16  text-[22px] font-bold xs:text-[40px] xs:leading-[46px]  sm:leading-[64px]  font-quickSand ">
          Stay home & get your daily needs from our shop
        </h1>
        <p className=" my-2 text-sm font-lato text-secondary xs:my-5 xs:text-[18px]">
          Start You'r Daily Shopping with
          <span className="text-primary"> Nest Mart</span>
        </p>
        <div className="inline-flex items-center mt-8 ml-2 bg-white xs:pl-4 xs:ml-8 rounded-3xl">
          <FiSend className="mx-2 sm:mr-4" />
          <input
            type="text"
            placeholder="Your email address"
            className="mr-2 border-none font-lato text-secondary xs:p-3 md:pr-4 "
          />
          <button className="bg-primary font-quickSand font-semibold hover:bg-[#47c98c] rounded-3xl py-3 px-2 xs:px-6 text-white">
            Subscribe
          </button>
        </div>
      </div>
      <div className="w-full h-full bg-center bg-cover">
        <img src={banner9} alt="" />
      </div>
    </div>
  );
};

export default LastHeroSec;
