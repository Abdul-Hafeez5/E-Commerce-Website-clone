import React from "react";
import Product from "../componets/Product";
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
} from "../assets/Products";

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

const Products = () => {
  return (
    <div className="mx-2 my-6 xs:mx-6">
      <div className=" xl:items-center font-quickSand lg:flex lg:justify-between mb-11">
        <h1 className="mb-2 font-bold text-[28px] lg:text-[32px]">
          Popular products
        </h1>
        <div className="flex flex-wrap items-center text-sm font-semibold just gap-x-6 lg:text-base ">
          <p className="transition duration-300 ease-in-out delay-150 cursor-pointer hover:-translate-y-1 hover:scale-110 text-primary">
            All
          </p>
          <p className="transition duration-300 ease-in-out delay-150 cursor-pointer hover:-translate-y-1 hover:scale-110 hover:text-primary">
            Milks & Dairies
          </p>
          <p className="transition duration-300 ease-in-out delay-150 cursor-pointer hover:-translate-y-1 hover:scale-110 hover:text-primary">
            Coffes & Teas
          </p>
          <p className="transition duration-300 ease-in-out delay-150 cursor-pointer hover:-translate-y-1 hover:scale-110 hover:text-primary">
            Pet Foods
          </p>
          <p className="transition duration-300 ease-in-out delay-150 cursor-pointer hover:-translate-y-1 hover:scale-110 hover:text-primary">
            Meats
          </p>
          <p className="transition duration-300 ease-in-out delay-150 cursor-pointer hover:-translate-y-1 hover:scale-110 hover:text-primary">
            Vegetables
          </p>
          <p className="transition duration-300 ease-in-out delay-150 cursor-pointer hover:-translate-y-1 hover:scale-110 hover:text-primary">
            Fruits
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-6">
        {productList.map((item, index) => (
          <Product key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
