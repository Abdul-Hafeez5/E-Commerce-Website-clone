import React from "react";
import { thumbnail_1 } from "../assets/Fruit & vegetables/index";

const VegetableCard = () => {
  return (
    <div className="flex mx-8 my-8">
      <div className="w-24 h-full ">
        <img src={thumbnail_1} alt="" className="rounded-xl" />
      </div>
      <div className="mx-6 font-quickSand">
        <h1 className="text-base font-bold">Heading</h1>
        <p>star and rating</p>
        <div className="font-quickSand">
          <p className="text-xs">price</p>
          <p>discount</p>
        </div>
      </div>
    </div>
  );
};

export default VegetableCard;
