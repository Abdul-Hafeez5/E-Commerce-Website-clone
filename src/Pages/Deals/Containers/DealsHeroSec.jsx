import React from "react";
import { RxCross1 } from "react-icons/rx";
import { LiaGreaterThanSolid } from "react-icons/lia";
import { BiHome } from "react-icons/bi";

const DealsHeroSec = () => {
  return (
    <div>
      <div className="flex h-full py-20 items-center  px-1  mx-2 xs:mx-6 my-6 bg-[#d8f1e5] rounded-3xl lg:pl-20 ">
        <div className="flex flex-col items-center lg:items-start gap-y-3 lg:w-[40%]">
          <h1 className="text-[48px] text-wrap  font-bold   font-quickSand ">
            Snack
          </h1>
          <div className="flex pl-8 text-sm font-semibold font-lato gap-x-4 text-secondary">
            <div className="flex items-center cursor-pointer gap-x-1 text-primary hover:text-yellow-400 ">
              <BiHome className="w-4 h-4" />
              <p>Home</p>
            </div>
            <div className="flex items-center gap-x-2">
              <LiaGreaterThanSolid className="w-2 h-6" />
              <p>Shop</p>
            </div>
            <div className="flex items-center gap-x-2">
              <LiaGreaterThanSolid className="w-2 h-6 " />
              <p>Snack</p>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex font-bold gap-x-3 font-quickSand text-[17px] leading-6 text-primary">
          <div className="flex items-center px-3 py-2 transition duration-300 ease-in-out delay-150 bg-white cursor-pointer rounded-3xl gap-x-1 hover:-translate-y-1 hover:scale-110 hover:text-yellow-400 hover:font-semibold">
            <RxCross1 className="w-3 h-3 text-secondary" /> <p>Cabbage</p>
          </div>
          <div className="flex items-center px-3 py-2 transition duration-300 ease-in-out delay-150 bg-white cursor-pointer rounded-3xl gap-x-1 hover:-translate-y-1 hover:scale-110 hover:text-yellow-400 hover:font-semibold">
            <RxCross1 className="w-3 h-3 text-secondary" /> <p>Broccoli</p>
          </div>
          <div className="flex items-center px-3 py-2 transition duration-300 ease-in-out delay-150 bg-white cursor-pointer rounded-3xl gap-x-1 hover:-translate-y-1 hover:scale-110 hover:text-yellow-400 hover:font-semibold">
            <RxCross1 className="w-3 h-3 text-secondary" /> <p>Arthicoke</p>
          </div>
          <div className="flex items-center px-3 py-2 transition duration-300 ease-in-out delay-150 bg-white cursor-pointer rounded-3xl gap-x-1 hover:-translate-y-1 hover:scale-110 hover:text-yellow-400 hover:font-semibold">
            <RxCross1 className="w-3 h-3 text-secondary" /> <p>Celery</p>
          </div>
          <div className="flex items-center px-3 py-2 transition duration-300 ease-in-out delay-150 bg-white cursor-pointer rounded-3xl gap-x-1 hover:-translate-y-1 hover:scale-110 hover:text-yellow-400 hover:font-semibold">
            <RxCross1 className="w-3 h-3 text-secondary" /> <p>Spinach</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealsHeroSec;
