import React from "react";
import VegetableCard from "../componets/VegetableCard";
import { FruitArray } from "../constants/constant";

const VegetableGrid = () => {
  return (
    <div className="mx-2 my-8 mt-16 xs:mx-6">
      <div className="flex flex-wrap mx-8 text-xl font-bold md:justify-between lg:mt-16 font-quickSand lg:text-2xl">
        <h1>Top Selling</h1>
        <h1 className="hidden md:inline-block md:mr-14 xl:mr-0">
          Trending Products
        </h1>
        <h1 className="hidden lg:inline-block lg:mr-8 xl:mr-0">
          Recently added
        </h1>
        <h1 className="hidden xl:inline-block xl:mr-40">Top Rated</h1>
      </div>
      <div className="grid grid-cols-1 mt-8 gap-y-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {FruitArray.map((item, index) => (
          <VegetableCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default VegetableGrid;
