import React, { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import { slider_1, slider_2 } from "../../assets/HeroSlider/index";
import HeroSec from "../HeroSec";

let HeroContent = [
  {
    img: slider_1,
    heading: "Don't miss amazing grocerry deals",
    subHeading: "sign up for daily newsletter",
  },
  {
    img: slider_2,
    heading: "Fresh vegetables Big discounts",
    subHeading: "Save up to 50% off on your first order",
  },
];

const HeroSlider = () => {
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);
  return (
    <div className="relative">
      <div className=" swiper-button-prev" ref={prevButtonRef}>
        <BsChevronLeft />
      </div>
      <div className=" swiper-button-next" ref={nextButtonRef}>
        <BsChevronRight />
      </div>
      <Swiper
        className="mt-10 lg:px-10"
        navigation={{
          prevEl: prevButtonRef.current,
          nextEl: nextButtonRef.current,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
      >
        {HeroContent.map((item, index) => (
          <SwiperSlide key={index}>
            <HeroSec
              img={item.img}
              heading={item.heading}
              subHeading={item.subHeading}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
