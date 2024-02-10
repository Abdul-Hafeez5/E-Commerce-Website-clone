import React from "react";
import Product from "../components/Product";
// import {product_1_1, product_1_2, product_2_1, product_2_2,product_3_1,product_3_2,product_4_1,product_4_2,product_5_1,product_5_2,product_6_1,product_6_2,product_7_1,product_7_2,product_8_1,product_8_2,product_9_1,product_9_2,product_10_1,product_10_2} from "../assets/Products/index"

let productList = [{sale:"Hot", img: "iage1", type:"snack", heading: "h1", seller: "seller", price: 43, discount:50}]

const Products = () => {
  return (
    <div>
      <div className="mx-6 xl:items-center font-quickSand lg:flex lg:justify-between mb-11">
        <h1 className="mb-2 font-bold text-[28px] lg:text-[32px]">
          Popular products
        </h1>
        <div className="flex items-center text-sm font-semibold just gap-x-6 lg:text-base lg:mx-20 ">
          <p>All</p>
          <p>Milks & Dairies</p>
          <p>Coffes & Teas</p>
          <p>Pet Foods</p>
          <p>Meats</p>
          <p>Vegetables</p>
          <p>Fruits</p>
        </div>
      </div>
      <div className="flex mx-6 gap-x-6">
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default Products;
