import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { LiaLessThanSolid } from "react-icons/lia";
import { LiaGreaterThanSolid } from "react-icons/lia";
import { slider_1, slider_2 } from "../../assets/HeroSlider/index";
import HeroSec from "../HeroSec";
const HeroSlider = () => {
  return (
    <Swiper
      className="mt-10 lg:px-10"
      navigation={{
        prevEl: ".swiper-button-prev ",
        nextEl: ".swiper-button-next",
      }}
      modules={[Navigation, Pagination]}
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <div className=" swiper-button-prev">
          <LiaLessThanSolid />
        </div>
        <HeroSec
          img={slider_1}
          heading={"Don't miss amazing grocerry deals"}
          subHeading={"sign up for daily newsletter"}
        />
        <div className="swiper-button-next">
          <LiaGreaterThanSolid />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className=" swiper-button-prev">
          <LiaLessThanSolid />
        </div>
        <HeroSec
          img={slider_2}
          heading={"Fresh vegetables Big discounts"}
          subHeading={"Save up to 50% off on your first order"}
        />
        <div className="swiper-button-next">
          <LiaGreaterThanSolid />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSlider;
