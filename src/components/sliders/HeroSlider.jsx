import React, { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { LiaLessThanSolid } from "react-icons/lia";
import { LiaGreaterThanSolid } from "react-icons/lia";
import { slider_1, slider_2 } from "../../assets/HeroSlider/index";
import HeroSec from "../HeroSec";

const HeroSlider = () => {
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);
  return (
    <div className="relative">
      <div className="ml-6 top-2/3 swiper-button-prev" ref={prevButtonRef}>
        <LiaLessThanSolid />
      </div>
      <div
        className="absolute mr-6 transform -translate-y-1/2 top-1/2 right-4 swiper-button-next"
        ref={nextButtonRef}
      >
        <LiaGreaterThanSolid />
      </div>
      <Swiper
        className="mt-10 lg:px-10"
        navigation={{
          prevEl: prevButtonRef.current,
          nextEl: nextButtonRef.current,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        // autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <HeroSec
            img={slider_1}
            heading={"Don't miss amazing grocerry deals"}
            subHeading={"sign up for daily newsletter"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <HeroSec
            img={slider_2}
            heading={"Fresh vegetables Big discounts"}
            subHeading={"Save up to 50% off on your first order"}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSlider;
