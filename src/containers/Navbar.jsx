import React from "react";
import PreNav from "../components/PreNav";
import { IoMenuSharp } from "react-icons/io5";

import logo from "../assets/logo.svg";
import ItemList from "../components/ItemList";
import InputBox from "../components/InputBox";

const Discount = () => {
  return (
    <div className=" flex justify-center font-Lato text-sm text-white bg-[#3bb77e] md:hidden">
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
      <div className="flex justify-between py-5">
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
    </div>
  );
};

export default Navbar;
