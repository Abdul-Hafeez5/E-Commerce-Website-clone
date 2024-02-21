import React from "react";
import Deal from "../componets/Deal";
import { LiaGreaterThanSolid } from "react-icons/lia";
import { banner5, banner6, banner7, banner8 } from "../assets/Deals";
let bgImages = [banner5, banner6, banner7, banner8];

const Deals = () => {
  return (
    <div className="mx-2 ">
      <div className="flex items-center justify-between my-6 font-quickSand lg:flex mb-11">
        <h1 className=" font-bold text-[28px] xs:text-[32px]">
          Deals Of The Day
        </h1>
        <div className="items-center hidden font-[400] font-lato text-secondary cursor-pointer hover:text-primary xs:flex gap-x-2">
          <p className="">All Deals</p>
          <LiaGreaterThanSolid className="cursor-pointer" />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-y-16 xs:gap-y-8 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 lg:gap-x-3">
        {bgImages.map((img, index) => (
          <Deal
            key={index}
            bgImage={img}
            heading={"Perdue Simply Smart Organics Gluten Free"}
            price={24.85}
            discount={26.8}
            seller={"Old El Paso"}
          />
        ))}
      </div>
    </div>
  );
};

export default Deals;
