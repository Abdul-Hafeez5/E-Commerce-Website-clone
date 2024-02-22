import React, { useRef, useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { about_2, about_3, about_4 } from "../../assets/About";

let carouselImages = [about_2, about_2, about_3, about_4];

let ImgCard = ({ img }) => {
  return (
    <div className="mr-4 w-[420px] flex items-center">
      <img src={img} alt="" className="w-[60%] " />
    </div>
  );
};

const HeroCrousel = () => {
  const swiperRef = useRef(null);
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
  return (
    <div className="">
      <Swiper
        ref={swiperRef}
        loop
        slidesPerView={1}
        spaceBetween={0}
        breakpoints={{
          480: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 3,
          },
          1208: {
            slidesPerView: 3,
          },
        }}
        className="relative flex swiper-wrapper gap-x-5"
      >
        <div className="absolute text-secondary hover:text-white z-10 p-2 rounded-full bg-[#f2f3f4]  cursor-pointer hover:bg-primary ">
          <FaArrowLeft className="w-6 h-6 " onClick={handlePrevClick} />
        </div>
        {carouselImages.map((item, index) => (
          <SwiperSlide className="flex gap-x-20" key={index}>
            <ImgCard img={item} />
          </SwiperSlide>
        ))}
        <div className="absolute z-10 p-2 rounded-full bg-[#f2f3f4]  text-secondary hover:text-white left-20 cursor-pointer hover:bg-primary">
          <FaArrowRight className="w-6 h-6" onClick={handleNextClick} />
        </div>
      </Swiper>
      <div className="relative self-start hidden lg:block "></div>
    </div>
  );
};

export default HeroCrousel;
