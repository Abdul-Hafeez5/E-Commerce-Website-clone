import React from "react";
// import BestSell from "../components/BestSell";
import Button from "../components/Button";
import { banner4 } from "../assets/Deals/index";
// import Product from "../components/Product";
import {
  product_1_1,
  product_1_2,
  product_2_1,
  product_2_2,
  product_3_1,
  product_3_2,
  product_4_1,
  product_4_2,
  product_5_1,
  product_5_2,
  product_6_1,
  product_6_2,
  product_7_1,
  product_7_2,
  product_8_1,
  product_8_2,
  product_9_1,
  product_9_2,
  product_10_1,
  product_10_2,
} from "../assets/Products/index";
import Product from "../components/Product";

let BestSellsProduct = [
  {
    sale: "Hot",
    img: product_1_1,
    hovImg: product_1_2,
    type: "snack",
    heading: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    seller: "NestFood",
    price: 28.85,
    discount: 32.8,
  },
  {
    sale: "sale",
    img: product_2_1,
    hovImg: product_2_2,
    type: "Hodo Foods",
    heading: "All Natural Italian-Style Chicken Meatballs",
    seller: "Stouffer",
    price: 52.85,
    discount: 55.8,
  },
  {
    sale: "New",
    img: product_3_1,
    hovImg: product_3_2,
    type: "snack",
    heading: "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
    seller: "StarKist",
    price: 48.85,
    discount: 52.8,
  },
  {
    sale: "Hot",
    img: product_4_1,
    hovImg: product_4_2,
    type: "Vegetables",
    heading: "Foster Farms Takeout Crispy Classic Buffalo Wings",
    seller: "NestFood",
    price: 17.85,
    discount: 19.8,
  },
  {
    sale: "Hot",
    img: product_5_1,
    hovImg: product_5_2,
    type: "snack",
    heading: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    seller: "NestFood",
    price: 28.85,
    discount: 32.8,
  },
  {
    sale: "Hot",
    img: product_6_1,
    hovImg: product_6_2,
    type: "snack",
    heading: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    seller: "NestFood",
    price: 28.85,
    discount: 32.8,
  },
  {
    sale: "Hot",
    img: product_7_1,
    hovImg: product_7_2,
    type: "snack",
    heading: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    seller: "NestFood",
    price: 28.85,
    discount: 32.8,
  },
  {
    sale: "Hot",
    img: product_8_1,
    hovImg: product_8_2,
    type: "snack",
    heading: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    seller: "NestFood",
    price: 28.85,
    discount: 32.8,
  },
  {
    sale: "Hot",
    img: product_9_1,
    hovImg: product_9_2,
    type: "snack",
    heading: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    seller: "NestFood",
    price: 28.85,
    discount: 32.8,
  },
  {
    sale: "Hot",
    img: product_10_1,
    hovImg: product_10_2,
    type: "snack",
    heading: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    seller: "NestFood",
    price: 28.85,
    discount: 32.8,
  },
];

const BestSells = () => {
  return (
    <div className="mx-6 ">
      <div className="my-6 xl:items-center font-quickSand lg:flex lg:justify-between mb-11">
        <h1 className="mb-2 font-bold text-[28px] lg:text-[32px]">
          Daily Best Sells
        </h1>
        <div className="flex items-center text-sm font-semibold gap-x-6 lg:text-base lg:mx-20 ">
          <p>Featured</p>
          <p>Popular</p>
          <p>New added</p>
        </div>
      </div>
      <div className="flex gap-x-6">
        <div
          className="flex-col items-center hidden h-full py-24 bg-center bg-cover lg:inline-flex max-w-80 gap-y-12 rounded-2xl"
          style={{ backgroundImage: `url(${banner4})` }}
        >
          <h1 className="mt-12 font-bold text-[40px] mx-8 font-quickSand">
            Bring nature into your home
          </h1>
          <Button />
        </div>
        <div className="grid grid-cols-1 xs:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-4">
          {BestSellsProduct.map((item, index) => (
            <Product
              key={index}
              sale={item.sale}
              img={item.img}
              hovImg={item.hovImg}
              type={item.type}
              heading={item.heading}
              seller={item.seller}
              price={item.price}
              discount={item.discount}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSells;
