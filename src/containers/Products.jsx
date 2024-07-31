import React from "react";
import Product from "../componets/Product";

import { BestSellsProduct } from "../constants/constant";

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
        {BestSellsProduct.map((item, index) => (
          <Product key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
