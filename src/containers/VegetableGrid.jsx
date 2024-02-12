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
  // const titles = [
  //     { text: "Rank", colSpan: 1 },
  //     { text: "Rating", colSpan: 1 },
  //     { text: "Name", colSpan: 2 },
  //     { text: "Price", colSpan: 1 },
  //   ];
  return (
    <div className="mx-8 my-8">
      <div className="flex text-xl font-bold gap-x-8 font-quickSand lg:text-2xl">
        <h1>Top Selling</h1>
        <h1>Trending Products</h1>
        <h1>Recently added</h1>
        <h1>Top Rated</h1>
      </div>
      <div className="grid grid-cols-2 mt-8 gap-y-3 sm:grid-cols-3 lg:grid-cols-4">
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