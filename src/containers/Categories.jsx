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
} from "../assets";
import Category from "../components/Category";

const Categories = () => {
  return (
    <>
      <div className="flex items-baseline gap-x-10">
        <h1 className="text-5xl my-6">Featured Categories</h1>
        <p className="hover:text-[#3bb77e]">Cake and Milk</p>
        <p className="hover:text-[#3bb77e]">Coffes & Teas</p>
        <p className="hover:text-[#3bb77e]">Pet food</p>
        <p className="hover:text-[#3bb77e]">Vegetables</p>
      </div>

      <div className="flex">
        <Category img={cat1} Name={"Peach"} items={14} />
        <Category img={cat2} Name={"Cake and Milk"} items={12} />
        <Category img={cat3} Name={"organic kiwi"} items={41} />
        <Category img={cat4} Name={"Red Apple"} items={6} />
        <Category img={cat5} Name={"Snack"} items={21} />
        <Category img={cat9} Name={"Vegetables"} items={15} />
        <Category img={cat11} Name={"Strawberry"} items={17} />
        <Category img={cat12} Name={"Black Plum"} items={19} />
        <Category img={cat13} Name={"Custard apple"} items={18} />
      </div>
    </>
  );
};

export default Categories;
