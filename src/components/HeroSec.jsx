import React from "react";
import "swiper/css";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FiSend } from "react-icons/fi";
import "./herosec.css";
const HeroSec = () => {
  return (
    <div className="lg:px-10 mt-10">
      <Swiper navigation={true} modules={[Navigation]} className="">
        <SwiperSlide>
          {/* <div className={`flex justify-center text-center w-full`}> */}
          <div className="background-container rounded-xl px-16 py-10 pr-[700px]">
            <h1 className="text-[64px] leading-[72px] font-bold font-mono ">
              Fresh vegetables big discount
            </h1>
            <p className="text-3xl text-[#7E7E7E] my-2">
              SignUp for daily newsLetter
            </p>
            <div className=" inline-flex items-center mt-8 bg-white rounded-3xl pl-4  mr-2">
              <FiSend />
              <input type="text" className=" p-3 mr-2 border-none" />
              <button className="bg-[#3bb77e] hover:bg-[#47c98c] rounded-3xl py-3 px-6 text-white">
                Subscribe
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-container rounded-xl px-20 py-10 pr-[700px]">
            <h1 className="text-[64px] leading-[72px] font-bold font-mono ">
              Don't miss amazing grocerry details
            </h1>
            <p className="text-3xl text-[#7E7E7E] my-2">
              SignUp for daily newsLetter
            </p>
            <div className=" inline-flex items-center mt-8 bg-white rounded-3xl pl-4  mr-2">
              <FiSend />
              <input type="text" className=" p-3 mr-2 border-none" />
              <button className="bg-[#3bb77e] hover:bg-[#47c98c] rounded-3xl py-3 px-6 text-white">
                Subscribe
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSec;
