import React, { useRef, useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "../components/Button";
import { banner4 } from "../assets/Deals/index";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { Autoplay, Mousewheel, Keyboard } from "swiper/modules";
import {
  product_1_1,
  product_1_2,
  product_2_1,
  product_2_2,
  product_3_1,
  product_3_2,
  product_4_1,
  product_4_2,
  product_5_1,
  product_5_2,
  product_6_1,
  product_6_2,
  product_7_1,
  product_7_2,
  product_8_1,
  product_8_2,
  product_9_1,
  product_9_2,
  product_10_1,
  product_10_2,
} from "../assets/Products/index";
import BestSell from "../components/BestSell";

let BestSellsProduct = [
  {
    sale: "Hot",
    saleBg: "#f59758",
    img: product_1_1,
    hovImg: product_1_2,
    type: "snack",
    heading: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    seller: "NestFood",
    price: 28.85,
    discount: 32.8,
  },
  {
    sale: "sale",
    saleBg: "#3bb77e",
    img: product_2_1,
    hovImg: product_2_2,
    type: "Hodo Foods",
    heading: "All Natural Italian-Style Chicken Meatballs & Red Rice",
    seller: "Stouffer",
    price: 52.85,
    discount: 55.8,
  },
  {
    sale: "New",
    saleBg: "#f74b81",
    img: product_3_1,
    hovImg: product_3_2,
    type: "snack",
    heading: "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
    seller: "StarKist",
    price: 48.85,
    discount: 52.8,
  },
  {
    sale: "Hot",
    saleBg: "#ac3ef5",
    img: product_4_1,
    hovImg: product_4_2,
    type: "Vegetables",
    heading: "Foster Farms Takeout Crispy Classic Buffalo Wings",
    seller: "NestFood",
    price: 17.85,
    discount: 19.8,
  },
  {
    sale: "Hot",
    saleBg: "#f59758",
    img: product_5_1,
    hovImg: product_5_2,
    type: "snack",
    heading: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    seller: "NestFood",
    price: 28.85,
    discount: 32.8,
  },
  {
    sale: "Hot",
    saleBg: "#f74b81",
    img: product_6_1,
    hovImg: product_6_2,
    type: "snack",
    heading: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    seller: "NestFood",
    price: 28.85,
    discount: 32.8,
  },
  {
    sale: "Hot",
    saleBg: "#3bb77e",
    img: product_7_1,
    hovImg: product_7_2,
    type: "snack",
    heading: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    seller: "NestFood",
    price: 28.85,
    discount: 32.8,
  },
  {
    sale: "Hot",
    saleBg: "#f74b81",
    img: product_8_1,
    hovImg: product_8_2,
    type: "snack",
    heading: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    seller: "NestFood",
    price: 28.85,
    discount: 32.8,
  },
  {
    sale: "Hot",
    saleBg: "#3bb77e",
    img: product_9_1,
    hovImg: product_9_2,
    type: "snack",
    heading: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    seller: "NestFood",
    price: 28.85,
    discount: 32.8,
  },
  {
    sale: "Hot",
    saleBg: "#f59758",
    img: product_10_1,
    hovImg: product_10_2,
    type: "snack",
    heading: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    seller: "NestFood",
    price: 28.85,
    discount: 32.8,
  },
];

const BestSells = () => {
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
    <div className="relative mx-2 xs:mx-6 ">
      <div className="my-6 xl:items-center font-quickSand lg:flex lg:justify-between mb-11">
        <h1 className="mb-2 font-bold text-[28px] lg:text-[32px]">
          Daily Best Sells
        </h1>
        <div className="flex flex-wrap items-center text-sm font-semibold gap-x-6 lg:text-base ">
          <p className="transition duration-300 ease-in-out delay-150 cursor-pointer hover:-translate-y-1 hover:scale-110 text-primary">
            Featured
          </p>
          <p className="transition duration-300 ease-in-out delay-150 cursor-pointer hover:-translate-y-1 hover:scale-110 hover:text-primary">
            Popular
          </p>
          <p className="transition duration-300 ease-in-out delay-150 cursor-pointer hover:-translate-y-1 hover:scale-110 hover:text-primary">
            New added
          </p>
        </div>
      </div>
      <div className="flex gap-x-6">
        <div
          className=" flex-col items-center hidden h-full pb-48 bg-center bg-cover lg:inline-flex max-w-[335px] gap-y-12 rounded-2xl"
          style={{ backgroundImage: `url(${banner4})` }}
        >
          <div className="flex flex-col items-start pt-16 mx-8 gap-y-16">
            <h1 className="mt-12 font-bold text-[40px] leading-[48px] font-quickSand">
              Bring nature into your home
            </h1>
            <Button className="" />
          </div>
        </div>
        <div className="">
          <div className="hidden sm:inline-block absolute top-1/2 z-10 p-2 rounded-full bg-[#f2f3f4]  text-secondary hover:text-white right-0 cursor-pointer hover:bg-primary">
            <FaArrowRight className="w-6 h-6" onClick={handleNextClick} />
          </div>
          <div className="hidden sm:inline-block absolute top-1/2 text-secondary hover:text-white z-10 p-2 rounded-full bg-[#f2f3f4] left-1 lg:left-[340px] cursor-pointer hover:bg-primary ">
            <FaArrowLeft className="w-6 h-6 " onClick={handlePrevClick} />
          </div>
        </div>
        <div className="flex w-full h-full overflow-hidden ">
          <Swiper
            ref={swiperRef}
            modules={[Autoplay, Mousewheel, Keyboard]}
            autoplay={{ delay: 5000 }}
            keyboard={true}
            loop
            slidesPerView={1}
            spaceBetween={6}
            breakpoints={{
              540: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },

              1280: {
                slidesPerView: 4,
              },
            }}
            className=" swiper-wrapper"
          >
            {BestSellsProduct.map((item, index) => (
              <SwiperSlide key={index}>
                <BestSell {...item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default BestSells;
