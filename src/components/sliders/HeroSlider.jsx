import React, { useRef, useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  Mousewheel,
  Keyboard,
} from "swiper/modules";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useMediaQuery } from "react-responsive";

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
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiperInstance = swiperRef.current.swiper;
    if (swiperInstance) {
      swiperInstance.navigation.destroy();
      swiperInstance.navigation.update({
        prevEl: prevButtonRef.current,
        nextEl: nextButtonRef.current,
      });
    }
  }, []);

  const handlePrevClick = () => {
    prevButtonRef.current?.swiper?.slidePrev(); 
  };

  const handleNextClick = () => {
    nextButtonRef.current?.swiper?.slideNext(); 
  };

  const isSmallScreen = useMediaQuery({ minWidth: 768 });
  return (
    <div className="relative ">
      {isSmallScreen && (
        <>
          <div
            className="absolute z-10 flex items-center justify-center p-2 rounded-full cursor-pointer text-slate-700 bg-slate-200 left-16 top-1/2 hover:bg-primary hover:text-white"
            ref={prevButtonRef}
          >
            <BsChevronLeft
              className="w-5 h-5"
              // onClick={() => prevButtonRef.current.swiper.slidePrev()}
              onClick={handlePrevClick}
            />
          </div>
          <div
            className="absolute z-10 flex items-center justify-center p-2 rounded-full cursor-pointer text-slate-700 hover:text-white bg-slate-200 right-16 top-1/2 hover:bg-primary"
            ref={nextButtonRef}
          >
            <BsChevronRight
              className="w-5 h-5"
              // onClick={() => nextButtonRef.current.swiper.slideNext()}
              onClick={handleNextClick}
            />
          </div>
        </>
      )}
      <Swiper
        className="mt-10 lg:px-10 mySwiper"
        ref={swiperRef}
        navigation={{
          prevEl: prevButtonRef.current ? prevButtonRef.current : undefined,
          nextEl: nextButtonRef.current ? nextButtonRef.current : undefined,
        }}
        modules={[Navigation, Pagination, Autoplay, Mousewheel, Keyboard]}
        // autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        // mousewheel={true}
        keyboard={true}
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
