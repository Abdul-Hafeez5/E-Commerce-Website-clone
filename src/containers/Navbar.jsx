import React from "react";
import PreNav from "../components/PreNav";
import { IoMenuSharp } from "react-icons/io5";

import logo from "../assets/logo.svg";
import ItemList from "../components/ItemList";
import InputBox from "../components/InputBox";
import PostNav from "../components/PostNav";

const Discount = () => {
  return (
    <div className=" flex justify-center font-Lato text-sm text-white py-2 bg-[#3bb77e] sm:hidden">
      Grand opening, <span className="font-semibold">up to 15% </span> off all
      items. only <span className="font-semibold">3 days</span> left
    </div>
  );
};

const Navbar = () => {
  return (
    <div>
      <Discount />
      <PreNav />
      <div className="flex justify-between  py-5 px-12 sm:py-4 sm:px-4 sm:shadow-sm lg:mx-8 ">
        <div className="sm:order-2 lg:hidden">
          <IoMenuSharp className=" w-8 h-8 " />
        </div>
        <div className="sm:order-1">
          <img src={logo} alt="logo" className="w-36 " />
        </div>
        <div className="sm:order-3">
          <ItemList />
        </div>
        <div className="order-3 ">
          <InputBox />
        </div>
      </div>
      <PostNav />
    </div>
  );
};

export default Navbar;
