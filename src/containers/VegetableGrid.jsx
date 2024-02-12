import React from "react";
import VegetableCard from "../components/VegetableCard";
import {
  thumbnail_1,
  thumbnail_2,
  thumbnail_3,
  thumbnail_4,
  thumbnail_5,
  thumbnail_6,
  thumbnail_7,
  thumbnail_8,
  thumbnail_9,
  thumbnail_10,
  thumbnail_11,
  thumbnail_12,
} from "../assets/Fruit & vegetables/index";

let FruitArray = [{ img: thumbnail_1, heading: "vegetables", price: 34, discount: 45}];

const VegetableGrid = () => {
  return (
    <div className="flex">
      <VegetableCard />
      <VegetableCard />
      <VegetableCard />
      <VegetableCard />
      <VegetableCard />
      <VegetableCard />
    </div>
  );
};

export default VegetableGrid;
