import React from "react";
import { SiWindows11 } from "react-icons/si";
import { PiCaretDown } from "react-icons/pi";
import Product from "../../Landing Page/components/Product";
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
} from "../../Landing Page/assets/Products/index";

let productList = [
  {
    sale: "Hot",
    saleBg: "#f59758",

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
    saleBg: "#3bb77e",
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
    saleBg: "#f74b81",
    img: product_3_1,
    hovImg: product_3_2,
    type: "snack",
    heading: "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
    seller: "StarKist",
    price: 48.85,
    discount: 52.8,
  },
  {
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
    saleBg: "#f59758",
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
    saleBg: "#ac3ef5",
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
    saleBg: "#f74b81",

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
    saleBg: "#f59758",
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
    saleBg: "#f74b81",
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
    saleBg: "#f59758",
    img: product_10_1,
    hovImg: product_10_2,
    type: "snack",
    heading: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    seller: "NestFood",
    price: 28.85,
    discount: 32.8,
  },
];

const DealsCategories = () => {
  return (
    <div className="flex mx-2 my-6 xs:mx-6">
      <div>
        <div className="flex flex-col justify-between my-6 gap-y-3 sm:flex-row">
          <h1 className="text-base font-lato text-secondary">
            We found <span className="text-primary">29</span> items for you
          </h1>
          <div className="flex items-center text-[13px] gap-x-2 font-lato text-secondary">
            <div className="flex flex-wrap items-center px-3 py-2 border rounded-lg cursor-pointer mxs:gap-x-1">
              <SiWindows11 />
              <p>Show: 50</p>
              <PiCaretDown className="cursor-pointer mxs:mx-2" />
            </div>
            <div className="flex flex-wrap items-center px-2 py-1 border rounded-lg cursor-pointer mxs:py-2 mxs:px-3 gap-x-1">
              <SiWindows11 />
              <p>Sort by: Featured</p>
              <PiCaretDown className="cursor-pointer mxs:mx-2" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-6">
          {productList.map((item, index) => (
            <Product key={index} {...item} />
          ))}
        </div>
      </div>
      <div className="w-[40%]">Side Grid</div>
    </div>
  );
};

export default DealsCategories;
