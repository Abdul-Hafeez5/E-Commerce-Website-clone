import React from "react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import "swiper/swiper-bundle.css";
import {
  cat1,
  cat2,
  cat3,
  cat4,
  cat5,
  cat9,
  cat11,
  cat12,
  cat13,
  cat14,
} from "../assets/Categories/index";
import Category from "../components/Category";

let CategoryList = [
  { Name: "Peach", img: cat1, items: 14, bgColor: "#f2fce4" },
  { Name: "Cake and Milk", img: cat2, items: 14, bgColor: "#fff3eb" },
  { Name: "organic kiwi", img: cat3, items: 14, bgColor: "#f3e8e8" },
  { Name: "Vegetables", img: cat4, items: 14, bgColor: "#f2fce4" },
  { Name: "Strawberry", img: cat5, items: 14, bgColor: "#fff3eb" },
  { Name: "Black Plum", img: cat9, items: 14, bgColor: "#f3e8e8" },
  { Name: "Custard apple", img: cat11, items: 14, bgColor: "#f2fce4" },
  { Name: "Peach", img: cat12, items: 14, bgColor: "#fff3eb" },
  { Name: "Peach", img: cat13, items: 14, bgColor: "#f2fce4" },
  { Name: "Peach", img: cat14, items: 14, bgColor: "#fff3eb" },
];

SwiperCore.use([Navigation]);
const Categories = () => {
  return (
    <div className="mx-6 my-6 font-quickSand lg:mx-6">
      <div className="relative items-center xs:flex gap-x-10 lg:justify-between md:items-baseline">
        <h1 className="mb-6 text-[28px] font-bold lg:px-6 lg:text-[32px]">
          Featured Categories
        </h1>
        <div className="flex flex-wrap mb-6 text-sm font-semibold lg:text-base xs:block md:flex gap-x-6">
          <p className="hover:text-[#3bb77e] cursor-pointer">Cake and Milk</p>
          <p className="hover:text-[#3bb77e] cursor-pointer">Coffes & Teas</p>
          <p className="hover:text-[#3bb77e] cursor-pointer">Pet food</p>
          <p className="hover:text-[#3bb77e] cursor-pointer">Vegetables</p>
        </div>
        <div className="">
          <div className="absolute z-10 p-2 rounded-full shadow-md swiper-button-prev top-1/2 left-32">
            <FaArrowLeft className="w-6 h-6 text-gray-600" />
          </div>
          <div className="absolute z-10 p-2 rounded-full swiper-button-next top-1/2 right-14">
            <FaArrowRight className="w-6 h-6 text-gray-600" />
          </div>
        </div>
      </div>

      <div className="flex w-full h-full ">
        <Swiper
          loop
          slidesPerView={2}
          spaceBetween={30}
          breakpoints={{
            480: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 8,
            },
            1208: {
              slidesPerView: 9,
            },
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          className="swiper-wrapper"
        >
          {CategoryList.map((item, index) => (
            <SwiperSlide key={index}>
              <Category
                className={"mb-8"}
                img={item.img}
                Name={item.Name}
                items={item.items}
                bgColor={item.bgColor}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Categories;
