import React from "react";
import { BsCart } from "react-icons/bs";
import { product_1_1 } from "../assets/Products/index";

const Product = ({ sale, img, type, heading, seller, price, discount }) => {
  return (
    <div className="flex flex-col w-[350px] border rounded-3xl">
      <h1 className="w-16 px-4 py-2 text-white font-lato text-[12px] bg-cyan-300 rounded-br-3xl">
        Hello
      </h1>
      <div className="w-72 h-72">
        <img src={product_1_1} alt="" />
      </div>
      <div className="mx-8 my-8 ">
        <span className="font-lato text-secondary  text-[12px]">snack</span>
        <h1 className="my-2 text-base font-bold font-quickSand">Heading</h1>
        <p>star and rating</p>
        <p className="text-sm font-lato text-secondary">
          By <span className=" text-primary">Hafeez</span>
        </p>
        <div className="flex items-center justify-between mt-3 ">
          <div className="font-bold font-quickSand">
            <p className="text-[18px]  text-primary ">$17.85</p>
            <p className="relative text-sm text-secondary">
              $32.8
              <span className="absolute left-0 w-9 bottom-2 h-[1.5px] bg-secondary"></span>
            </p>
          </div>
          <div className="flex px-4 py-2  items-center text-sm font-bold rounded-md cursor-pointer bg-[#c0fadf] gap-x-2 text-primary font-lato">
            <BsCart className="w-4 h-4" />
            <button>Add</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
