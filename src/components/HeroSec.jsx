import React from "react";
import "swiper/css";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { banner1 } from "../assets/index";
const HeroSec = () => {
  return (
    <div className="lg:px-10 mt-10">
      <Swiper navigation={true} modules={[Navigation]} className="">
        <SwiperSlide>
          <div className={`w-40 h-40 bg-['url(${banner1}')]`}>
            this is an image
            <img src={banner1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSec;
