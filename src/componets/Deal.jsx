import React from "react";
import { BsCart } from "react-icons/bs";

const Deal = ({ bgImage, price, discount, heading, seller }) => {
  return (
    <div className="relative mb-12">
      <div
        className="w-full bg-center bg-cover min-h-80 rounded-2xl"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      <div className="absolute flex flex-col items-center justify-center mx-2  w-[95%] top-1/3">
        <div className="flex my-6 xs:gap-x-2 gap-x-1">
          <div className="flex flex-col items-center justify-center bg-white rounded-md h-14 w-14 ">
            <p className="text-xl font-semibold font-quickSand text-primary">
              800
            </p>
            <p className="text-base font-lato text-secondary">Days</p>
          </div>
          <div className="flex flex-col items-center justify-center bg-white rounded-md h-14 w-14 ">
            <p className="text-xl font-semibold font-quickSand text-primary">
              11
            </p>
            <p className="text-base font-lato text-secondary">Hours</p>
          </div>
          <div className="flex flex-col items-center justify-center py-3 bg-white rounded-md h-14 w-14 ">
            <p className="text-xl font-semibold font-quickSand text-primary">
              51
            </p>
            <p className="text-base font-lato text-secondary">Mins</p>
          </div>
          <div className="flex flex-col items-center justify-center bg-white rounded-md w-14 h-14 ">
            <p className="text-xl font-semibold font-quickSand text-primary">
              21
            </p>
            <p className="text-base font-lato text-secondary">Sec</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center px-8 py-4 bg-white shadow-lg xl:px-4 rounded-2xl">
          <h1 className="font-bold leading-5 cursor-pointer font-quickSand hover:text-primary">
            {heading}
          </h1>
          <p className="mt-2 text-sm font-lato text-secondary">
            By
            <span className="mx-1 text-primary hover:text-yellow-300">
              {seller}
            </span>
          </p>
          <div className="flex items-center justify-between my-2 ">
            <div className="flex flex-col items-center font-bold xs:flex-row gap-x-4 font-quickSand">
              <p className="text-[18px]  text-primary ">${price}</p>
              <p className="relative text-sm text-secondary">
                ${discount}
                <span className="absolute left-0 w-9 bottom-2 h-[1.5px] bg-secondary"></span>
              </p>
            </div>
            <div className="flex ml-8 px-4 py-2  items-center text-sm font-bold rounded-md cursor-pointer bg-[#c0fadf] gap-x-2 text-primary font-lato hover:text-white hover:bg-primary">
              <BsCart className="w-4 h-4" />
              <button>Add</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deal;
