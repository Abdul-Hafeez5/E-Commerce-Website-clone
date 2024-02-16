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

let FruitArray = [
  {
    img: thumbnail_1,
    heading: "Nestle Original Coffee-Mate Coffee Creamer",
    price: 32.85,
    discount: 33.8,
  },
  {
    img: thumbnail_2,
    heading: "Nestle Original Coffee-Mate Coffee Creamer",
    price: 32.85,
    discount: 33.8,
  },
  {
    img: thumbnail_3,
    heading: "Nestle Original Coffee-Mate Coffee Creamer",
    price: 32.85,
    discount: 33.8,
  },
  {
    img: thumbnail_4,
    heading: "Organic Cage-Free Grade A Large Brown Eggs",
    price: 32.85,
    discount: 33.8,
  },
  {
    img: thumbnail_5,
    heading: "Organic Frozen Triple Berry Blend",
    price: 32.85,
    discount: 33.8,
  },
  {
    img: thumbnail_6,
    heading: "Organic Frozen Triple Berry Blend",
    price: 32.85,
    discount: 33.8,
  },
  {
    img: thumbnail_7,
    heading: "Nestle Original Coffee-Mate Coffee Creamer",
    price: 32.85,
    discount: 33.8,
  },
  {
    img: thumbnail_8,
    heading: "Organic Frozen Triple Berry Blend",
    price: 32.85,
    discount: 33.8,
  },
  {
    img: thumbnail_9,
    heading: "Nestle Original Coffee-Mate Coffee Creamer",
    price: 32.85,
    discount: 33.8,
  },
  {
    img: thumbnail_10,
    heading: "Organic Frozen Triple Berry Blend",
    price: 32.85,
    discount: 33.8,
  },
  {
    img: thumbnail_11,
    heading: "Organic Frozen Triple Berry Blend",
    price: 32.85,
    discount: 33.8,
  },
  {
    img: thumbnail_12,
    heading: "Nestle Original Coffee-Mate Coffee Creamer",
    price: 32.85,
    discount: 33.8,
  },
];

const VegetableGrid = () => {
  return (
    <div className="mx-8 my-8 mt-16">
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
      <div className="grid grid-cols-1 mt-8 gap-y-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {FruitArray.map((item, index) => (
          <VegetableCard
            key={index}
            img={item.img}
            heading={item.heading}
            price={item.price}
            discount={item.discount}
          />
        ))}
      </div>
    </div>
  );
};

export default VegetableGrid;
