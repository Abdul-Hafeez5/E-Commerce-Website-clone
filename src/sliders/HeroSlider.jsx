import React, { useRef, useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Mousewheel, Keyboard } from "swiper/modules";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useMediaQuery } from "react-responsive";

import { slider_1, slider_2 } from "../assets/HeroSlider";
import HeroSec from "../componets/HeroSec";

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
  const swiperRef = useRef(null);
  const [hideArrows, setHideArrows] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!hideArrows && window.scrollY > 350) {
        setHideArrows(true);
      } else if (hideArrows && window.scrollY === 0) {
        setHideArrows(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hideArrows]);

  useEffect(() => {
    const swiperInstance = swiperRef.current.swiper;
    if (swiperInstance) {
      swiperInstance.on("slidePrevTransitionEnd", () => {
        swiperInstance.allowSlidePrev = true;
      });
      swiperInstance.on("slideNextTransitionEnd", () => {
        swiperInstance.allowSlideNext = true;
      });
    }
  }, []);

  const handlePrevClick = () => {
    const swiperInstance = swiperRef.current.swiper;
    if (swiperInstance && swiperInstance.allowSlidePrev) {
      swiperInstance.slidePrev();
      swiperInstance.allowSlidePrev = false;
    }
  };

  const handleNextClick = () => {
    const swiperInstance = swiperRef.current.swiper;
    if (swiperInstance && swiperInstance.allowSlideNext) {
      swiperInstance.slideNext();
      swiperInstance.allowSlideNext = false;
    }
  };

  const isSmallScreen = useMediaQuery({ minWidth: 640 });
  return (
    <div className="relative ">
      {!hideArrows && (
        <>
          {isSmallScreen && (
            <>
              <div className=" left-16 top-1/2 navigation-buttons">
                <BsChevronLeft className="w-5 h-5" onClick={handlePrevClick} />
              </div>
              <div className="right-16 top-1/2 navigation-buttons">
                <BsChevronRight className="w-5 h-5" onClick={handleNextClick} />
              </div>
            </>
          )}
        </>
      )}
      <Swiper
        className="mt-6 mxs:mt-10 lg:px-10 mySwiper"
        loop={true}
        ref={swiperRef}
        modules={[Pagination, Autoplay, Mousewheel, Keyboard]}
        autoplay={{ delay: 5000 }}
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
