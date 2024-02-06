import React from "react";
import PreNav from "../components/PreNav";
import { IoMenuSharp } from "react-icons/io5";

import logo from "../assets/logo.svg";
import ItemList from "../components/ItemList";
import InputBox from "../components/InputBox";
import PostNav from "../components/PostNav";

const Discount = () => {
  return (
    <div className=" flex justify-center font-Lato text-sm text-white py-2 bg-[#3bb77e] lg:hidden">
      Grand opening, <span className="font-semibold">up to 15% </span> off all
      items. only <span className="font-semibold">3 days</span> left
    </div>
  );
};

const Navbar = () => {
  return (
    <div>
      <PreNav />
      <Discount />
      <div className="flex justify-between py-5 mx-12 ">
        <div>
          <IoMenuSharp className="w-6 h-6 lg:hidden" />
        </div>
        <div>
          <img src={logo} alt="logo" className="w-36" />
        </div>
        <div>
          <ItemList />
          <InputBox />
        </div>
      </div>
      <PostNav />
    </div>
  );
};

export default Navbar;
