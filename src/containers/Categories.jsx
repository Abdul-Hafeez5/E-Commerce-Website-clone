import React from "react";
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
  { Name: "Strawberry", img: cat5, items: 14, bgColor: "#f2fce4" },
  { Name: "Black Plum", img: cat9, items: 14, bgColor: "#f2fce4" },
  { Name: "Custard apple", img: cat11, items: 14, bgColor: "#f2fce4" },
  { Name: "Peach", img: cat12, items: 14, bgColor: "#f2fce4" },
  { Name: "Peach", img: cat13, items: 14, bgColor: "#f2fce4" },
  { Name: "Peach", img: cat14, items: 14, bgColor: "#f2fce4" },
];
const Categories = () => {
  return (
    <div className="mx-6 my-6 font-quickSand lg:mx-6">
      <div className="items-center xs:flex gap-x-10 lg:justify-between md:items-baseline ">
        <h1 className="mb-6 text-[28px] font-bold lg:px-6 lg:text-[32px]">
          Featured Categories
        </h1>
        <div className="flex flex-wrap mb-6 text-sm font-semibold lg:text-base xs:block md:flex gap-x-6">
          <p className="hover:text-[#3bb77e] cursor-pointer">Cake and Milk</p>
          <p className="hover:text-[#3bb77e] cursor-pointer">Coffes & Teas</p>
          <p className="hover:text-[#3bb77e] cursor-pointer">Pet food</p>
          <p className="hover:text-[#3bb77e] cursor-pointer">Vegetables</p>
        </div>
      </div>

      <div className="flex mb-8 overflow-x-hidden">
        {CategoryList.map((item, index) => (
          <Category
            key={index}
            img={item.img}
            Name={item.Name}
            items={item.items}
            bgColor={item.bgColor}
          />
        ))}
      </div>
    </div>
  );
};

export default Categories;
