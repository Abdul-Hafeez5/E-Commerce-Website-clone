import React from "react";
import { thumbnail_1 } from "../assets/Fruit & vegetables/index";

const VegetableCard = () => {
  return (
    <div className="flex items-center mx-8 my-8">
      <div className="w-24 h-full ">
        <img src={thumbnail_1} alt="" className="rounded-xl" />
      </div>
      <div className="flex flex-col mx-6 font-quickSand">
        <h1 className="text-base font-bold">Heading</h1>
        <p>star and rating</p>
        <div className="flex items-center mt-2 font-quickSand gap-x-2">
          <p className="text-[18px] font-bold text-primary">price</p>
          <p className="text-sm font-bold text-secondary">discount</p>
        </div>
      </div>
    </div>
  );
};

export default VegetableCard;
