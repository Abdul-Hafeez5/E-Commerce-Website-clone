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

const Categories = () => {
  return (
    <div className="mx-6 my-6 font-quickSand lg:mx-6">
      <div className="items-baseline lg:flex ">
        <h1 className="mb-6 text-3xl font-bold lg:px-6">Featured Categories</h1>
        <div className="flex mb-6 text-base font-bold gap-x-10">
          <p className="hover:text-[#3bb77e] cursor-pointer">Cake and Milk</p>
          <p className="hover:text-[#3bb77e] cursor-pointer">Coffes & Teas</p>
          <p className="hover:text-[#3bb77e] cursor-pointer">Pet food</p>
          <p className="hover:text-[#3bb77e] cursor-pointer">Vegetables</p>
        </div>
      </div>

      <div className="flex mb-8 overflow-x-hidden">
        <Category img={cat1} Name={"Peach"} items={14} bgColor={"#f2fce4"} />
        <Category
          img={cat2}
          Name={"Cake and Milk"}
          items={12}
          bgColor={"#fff3eb"}
        />
        <Category
          img={cat3}
          Name={"organic kiwi"}
          items={41}
          bgColor={"#f3e8e8"}
        />
        <Category img={cat4} Name={"Red Apple"} items={6} bgColor={"#f2fce4"} />
        <Category img={cat5} Name={"Snack"} items={21} bgColor={"#fff3eb"} />
        <Category
          img={cat9}
          Name={"Vegetables"}
          items={15}
          bgColor={"#f3e8e8"}
        />
        <Category
          img={cat11}
          Name={"Strawberry"}
          items={17}
          bgColor={"#f2fce4"}
        />
        <Category
          img={cat12}
          Name={"Black Plum"}
          items={19}
          bgColor={"#fff3eb"}
        />
        <Category
          img={cat13}
          Name={"Custard apple"}
          items={18}
          bgColor={"#f3e8e8"}
        />
        <Category
          img={cat14}
          Name={"Custard apple"}
          items={18}
          bgColor={"#f2fce4"}
        />
      </div>
    </div>
  );
};

export default Categories;
