import React, { useRef, useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { CategoryList } from "../constants/constant";
import Category from "../componets/Category";


const Categories = () => {
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
    <div className="mx-2 my-6 font-quickSand lg:mx-6">
      <div className="relative items-center xs:flex gap-x-10 lg:justify-between md:items-baseline ">
        <h1 className="mb-6 text-2xl mxs:text-[28px] leading-8 font-bold  lg:text-[32px]">
          Featured Categories
        </h1>
        <div className="flex flex-wrap flex-1 mb-6 text-sm font-semibold lg:text-base lg:self-baseline xs:block md:flex gap-x-6">
          <p className="hover:text-[#3bb77e] cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            Cake and Milk
          </p>
          <p className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-[#3bb77e] cursor-pointer">
            Coffes & Teas
          </p>
          <p className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-[#3bb77e] cursor-pointer">
            Pet food
          </p>
          <p className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-[#3bb77e] cursor-pointer">
            Vegetables
          </p>
        </div>
        <div className="relative self-start hidden lg:block ">
          <div className="absolute z-10 p-2 rounded-full bg-[#f2f3f4]  text-secondary hover:text-white right-1 cursor-pointer hover:bg-primary">
            <FaArrowRight className="w-6 h-6" onClick={handleNextClick} />
          </div>
          <div className="absolute text-secondary hover:text-white z-10 p-2 rounded-full bg-[#f2f3f4] right-16 cursor-pointer hover:bg-primary ">
            <FaArrowLeft className="w-6 h-6 " onClick={handlePrevClick} />
          </div>
        </div>
      </div>

      <div className="flex w-full h-full ">
        <Swiper
          ref={swiperRef}
          loop
          slidesPerView={2}
          spaceBetween={0}
          breakpoints={{
            480: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 7,
            },
            1208: {
              slidesPerView: 10,
            },
          }}
          className="swiper-wrapper"
        >
          {CategoryList.map((item, index) => (
            <SwiperSlide className="h-24" key={index}>
              <Category className={"mb-8"} {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Categories;
