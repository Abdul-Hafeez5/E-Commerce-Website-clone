import React, { useState } from "react";
import { SiWindows11 } from "react-icons/si";
import { PiCaretDown } from "react-icons/pi";
import { CiFilter } from "react-icons/ci";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import "rc-slider/assets/index.css";
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
import Deals from "../../Landing Page/containers/Deals";
import {
  banner11,
  category1,
  category2,
  category3,
  category4,
  category5,
  thumbanil3,
  thumbanil4,
  thumbanil5,
} from "../Assets/Deals/index";
import NewProduct from "../Component/NewProduct";
import CategoryCard from "../Component/CategoryCard";

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
let CategoryList = [
  { text: "Milks & Dairies", img: category1 },
  { text: "Clothing", img: category2 },
  { text: "Pet Foods", img: category3 },
  { text: "Baking material", img: category4 },
  { text: "Fresh Fruit", img: category5 },
];
let DealProducts = [
  { img: thumbanil3, title: "Chen Cardigan", price: 99.5 },
  { img: thumbanil4, title: "Chen Sweater", price: 89 },
  { img: thumbanil5, title: "Colorful Jacket", price: 25 },
];

const DealsCategories = () => {
  const [isListOpen, setIsListOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);

  const handleListEnter = () => {
    setIsListOpen(true);
  };
  const handleListLeave = () => {
    setIsListOpen(false);
  };
  const handleSortEnter = () => {
    setIsSortOpen(true);
  };
  const handleSortLeave = () => {
    setIsSortOpen(false);
  };
  return (
    <div className="flex flex-col my-6 xl:flex-row gap-y-6 xs:mx-6">
      <div>
        <div className="flex flex-col justify-between mb-6 gap-y-3 sm:flex-row">
          <h1 className="text-base font-lato text-secondary">
            We found <span className="text-primary">29</span> items for you
          </h1>
          <div className="flex items-center text-[13px] gap-x-2 font-lato text-secondary">
            <div
              className="relative flex flex-wrap items-center px-3 py-2 border rounded-lg cursor-pointer mxs:gap-x-1"
              onMouseEnter={handleListEnter}
              onMouseLeave={handleListLeave}
            >
              <SiWindows11 />
              <p>Show: 50</p>
              <PiCaretDown className="cursor-pointer mxs:mx-2" />
              {isListOpen && (
                <div className="absolute flex flex-col gap-y-3  border z-10 w-full bg-[#ffffff] top-8 rounded-xl">
                  <div className="flex items-center py-2 gap-x-3 hover:bg-primary hover:text-white">
                    <TiTick className="w-4 h-4 text-primary hover:text-white" />
                    <p>50</p>
                  </div>
                  <p className="drop-list">100</p>
                  <p className="drop-list">150</p>
                  <p className="drop-list">All</p>
                </div>
              )}
            </div>
            <div
              className="relative flex flex-wrap items-center px-2 py-1 border rounded-lg cursor-pointer mxs:py-2 mxs:px-3 gap-x-1"
              onMouseEnter={handleSortEnter}
              onMouseLeave={handleSortLeave}
            >
              <SiWindows11 />
              <p>Sort by: Featured</p>
              <PiCaretDown className="cursor-pointer mxs:mx-2" />
              {isSortOpen && (
                <div className="absolute flex flex-col gap-y-3  border z-10 w-full bg-[#ffffff] top-8 rounded-xl">
                  <div className="flex items-center py-2 gap-x-3 hover:bg-primary hover:text-white">
                    <TiTick className="w-4 h-4 text-primary hover:text-white" />
                    <p>Featured</p>
                  </div>
                  <p className="drop-list">Price: Low to High</p>
                  <p className="drop-list">Price: High to low</p>
                  <p className="drop-list">Release Date</p>
                  <p className="drop-list">Avg. Rating</p>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 xl:gap-x-3">
          {productList.map((item, index) => (
            <Product key={index} {...item} />
          ))}
        </div>
        <div className="flex items-center my-6 text-base font-bold gap-x-2 mxs:gap-x-4 font-quickSand">
          <p className="navigation-arrows">
            <FaArrowLeft />
          </p>
          <p className="navigation-arrows">1</p>
          <p className="navigation-arrows">2</p>
          <p className="navigation-arrows">3</p>
          <p className="navigation-arrows">...</p>
          <p className="navigation-arrows">6</p>
          <p className="navigation-arrows">
            <FaArrowRight />
          </p>
        </div>
        <Deals />
      </div>
      <div className="ml-6 xl:w-[40%] flex flex-col gap-y-6 ">
        <div className="px-2 py-3 pl-4 border rounded-lg shadow-lg">
          <h1 className="py-2 my-2 text-xl font-bold leading-6 border-b lg:text-2xl font-quickSand">
            Category
          </h1>
          <div className="flex flex-col mx-2 gap-y-2">
            {CategoryList.map((item, index) => (
              <CategoryCard key={index} {...item} />
            ))}
          </div>
        </div>
        <div className="px-4 py-3 pl-4 border rounded-lg shadow-lg ">
          <h1 className="py-2 my-2 text-xl font-bold leading-6 border-b lg:text-2xl font-quickSand">
            Fill by Price
          </h1>
          <div>{/* for price selector */}</div>
          <div className="flex flex-col gap-y-5">
            <div className="flex flex-col gap-y-1">
              <h1 className="text-sm font-bold font-lato">Color</h1>
              <div className="checkbox-menu">
                <input type="checkbox" className="checkbox-icons" />
                <label htmlFor="">Red (56)</label>
              </div>
              <div className="checkbox-menu">
                <input type="checkbox" className="checkbox-icons" />
                <label htmlFor="">Green (78)</label>
              </div>
              <div className="checkbox-menu">
                <input type="checkbox" className="checkbox-icons" />
                <label htmlFor="">Blue (54)</label>
              </div>
            </div>
            <div className="flex flex-col gap-y-3">
              <h1 className="text-sm font-bold font-lato">Item Conditions</h1>
              <div className="checkbox-menu">
                <input type="checkbox" className="checkbox-icons" />
                <label htmlFor="">New (1506)</label>
              </div>
              <div className="checkbox-menu">
                <input type="checkbox" className="checkbox-icons" />
                <label htmlFor="">Refurnished (27)</label>
              </div>
              <div className="checkbox-menu">
                <input type="checkbox" className="checkbox-icons" />
                <label htmlFor="">Used (45)</label>
              </div>
            </div>
            <div>
              <div className="inline-flex items-center justify-center flex-grow-0 flex-shrink-0 px-4 py-2 text-white rounded-md hover:bg-yellow-300 gap-x-2 bg-primary">
                <CiFilter />
                <button className="text-xs font-bold">Shop Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 py-3 pl-4 border rounded-lg shadow-lg ">
          <h1 className="py-2 my-2 text-xl font-bold leading-6 border-b lg:text-2xl font-quickSand">
            New Products
          </h1>
          <div className="flex flex-col gap-y-4">
            {DealProducts.map((item, index) => (
              <NewProduct key={index} {...item} />
            ))}
          </div>
        </div>
        <div
          className="flex-col hidden w-full h-full pl-20 bg-center bg-cover rounded-lg xl:items-center xl:pl-0 lg:flex gap-y-2 py-80 xl:py-36"
          style={{ backgroundImage: `url(${banner11})` }}
        >
          <p className="text-sm font-lato text-secondary">Oganic</p>
          <div>
            <h1 className="heading-element">Save 17%</h1>
            <h1 className="heading-element">
              on <span className="text-primary">Oganic</span>
            </h1>
            <h1 className="text-[18px]  font-quickSand font-bold">Juice</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealsCategories;
