import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { LiaLessThanSolid } from "react-icons/lia";
import { LiaGreaterThanSolid } from "react-icons/lia";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FiSend } from "react-icons/fi";
import "./herosec.css";
const HeroSec = () => {
  return (
    <div className="mt-10 lg:px-10">
      <Swiper
        navigation={{
          prevEl: ".swiper-button-prev ",
          nextEl: ".swiper-button-next",
        }}
        modules={[Navigation, Pagination]}
        className=""
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div className="mx-6">
            <div className="swiper-button-prev">
              <LiaLessThanSolid className=" hover:text-gray-700" />
            </div>
            <div className="py-16 background-container rounded-3xl lg:pl-20">
              <h1 className="pt-16 pl-8 text-3xl font-bold xs:text-[46px] xs:leading-[46px] xs:pr-64 sm:leading-[64px] lg:text-[64px] lg:pr-96 xl:text-[72px] font-quickSand ">
                Fresh vegetables big discount
              </h1>
              <p className="text-base pl-8 font-lato  text-[#7E7E7E] my-2 xs:my-5 xs:text-2xl md:text-3xl">
                Sign up for daily newsLetter
              </p>
              <div className="inline-flex items-center mt-8 ml-2 bg-white xs:pl-4 xs:ml-8 rounded-3xl">
                <FiSend className="mx-2 sm:mr-4" />
                <input
                  type="text"
                  placeholder="Your email address"
                  className="mr-2 border-none font-lato text-[#7E7E7E]  xs:p-3 md:pr-4 "
                />
                <button className="bg-[#3bb77e] font-quickSand font-semibold hover:bg-[#47c98c] rounded-3xl py-3 px-2 xs:px-6 text-white">
                  Subscribe
                </button>
                <div className="swiper-button-next">
                  <LiaGreaterThanSolid className="text-gray-500 cursor-pointer hover:text-gray-700" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mx-6">
            <div className="swiper-button-prev">
              <LiaLessThanSolid className="w-10 h-10 text-black cursor-pointer hover:text-gray-700" />
            </div>
            <div className="py-16 bg-container rounded-3xl lg:pl-20">
              <h1 className="pt-16 pl-8 text-3xl font-bold xs:text-[46px] xs:leading-[46px] xs:pr-64 sm:leading-[64px] lg:text-[64px] lg:pr-96 xl:text-[72px] font-quickSand ">
                Fresh vegetables big discount
              </h1>
              <p className="text-base pl-8 font-lato  text-[#7E7E7E] my-2 xs:my-5 xs:text-2xl md:text-3xl">
                Sign up for daily newsLetter
              </p>
              <div className="inline-flex items-center mt-8 ml-2 bg-white xs:pl-4 xs:ml-8 rounded-3xl">
                <FiSend />
                <input
                  type="text"
                  className="mr-2 border-none font-lato text-[#7E7E7E]  xs:p-3 "
                  placeholder="Your email address"
                />
                <button className="bg-[#3bb77e] font-quickSand font-semibold hover:bg-[#47c98c] rounded-3xl py-3 px-2 xs:px-6 text-white">
                  Subscribe
                </button>
                <div className="swiper-button-next">
                  <LiaGreaterThanSolid className="text-gray-500 cursor-pointer hover:text-gray-700" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSec;
