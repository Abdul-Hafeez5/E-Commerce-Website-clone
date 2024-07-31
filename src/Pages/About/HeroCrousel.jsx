import React, { useRef, useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { about_2, about_3, about_4 } from "../../assets/About";
import { Autoplay, Mousewheel, Keyboard } from "swiper/modules";

let carouselImages = [about_2, about_2, about_3, about_4];

let ImgCard = ({ img }) => {
  return (
    <div className="w-full ">
      <img src={img} alt="" className="w-[100%] rounded-md " />
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
    <div className="w-full">
      <Swiper
        ref={swiperRef}
        loop={true}
        modules={[Autoplay, Mousewheel, Keyboard]}
        autoplay={{ delay: 2500 }}
        mousewheel={true}
        keyboard={true}
        slidesPerView={1}
        spaceBetween={window.innerWidth >= 768 ? 15 : 10}
        breakpoints={{
          480: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
        }}
        className="relative w-full swiper-wrapper "
      >
        <div className="absolute text-secondary top-1/2 hover:text-white z-10 p-1 rounded-full bg-[#f2f3f4]  cursor-pointer hover:bg-primary ">
          <FaArrowLeft className="w-5 h-5 " onClick={handlePrevClick} />
        </div>
        {carouselImages.map((item, index) => (
          <SwiperSlide key={index}>
            <ImgCard img={item} />
          </SwiperSlide>
        ))}
        <div className="absolute z-10 p-1 top-1/2 rounded-full bg-[#f2f3f4]  text-secondary hover:text-white right-0 cursor-pointer hover:bg-primary">
          <FaArrowRight className="w-5 h-5" onClick={handleNextClick} />
        </div>
      </Swiper>
      <div className="relative self-start hidden lg:block "></div>
    </div>
  );
};

export default HeroCrousel;
