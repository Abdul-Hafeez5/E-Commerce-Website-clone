import React from "react";
import Deal from "../components/Deal";
import { LiaGreaterThanSolid } from "react-icons/lia";
import { banner5, banner6, banner7, banner8 } from "../assets/Deals/index";
let bgImages = [banner5, banner6, banner7, banner8];

const Deals = () => {
  return (
    <div className="mx-6">
      <div className="flex items-center justify-between my-6 font-quickSand lg:flex mb-11">
        <h1 className="mb-2 font-bold text-[28px] xs:text-[32px]">
          Deals Of The Day
        </h1>
        <div className="items-center hidden font-[400] font-lato text-secondary xs:flex gap-x-2">
          <p className="">All deals</p>
          <LiaGreaterThanSolid className="cursor-pointer" />
        </div>
      </div>
      <div className="flex gap-x-8">
        {bgImages.map((img, index) => (
          <Deal key={index} bgImage={img} />
        ))}
      </div>
    </div>
  );
};

export default Deals;
