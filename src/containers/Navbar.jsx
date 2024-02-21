import React from "react";
import { IoMenuSharp } from "react-icons/io5";
import { PiCaretDown } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";

import { logo } from "../assets/Logo & raw";
import NavItemList from "../componets/NavItemList";

const Navbar = () => {
  return (
    <div className="relative flex items-center justify-between px-2 py-5 shadow-md sm:py-4 sm:px-4 ">
      <div className="sm:order-2 lg:hidden">
        <IoMenuSharp className="w-5 h-5 mxs:h-7 mxs:w-7" />
      </div>

      <div className="sm:order-1">
        <img src={logo} alt="logo" className="w-36 " />
      </div>
      <div className="hidden lg:flex  font-quickSand text-sm order-2 items-center justify-start flex-grow-0 border-2 border-[#3bb77e] rounded-md px-4 py-2 xl:flex-1 xl:mx-8 ">
        <p className="font-semibold cursor-pointer">All Categories</p>
        <PiCaretDown className="mx-2 cursor-pointer" /> <span>|</span>
        <input
          type="text"
          className="flex-1 px-4 py-2 mx-2 text-sm "
          placeholder="Search for items...."
        />
        <CiSearch className="w-6 h-6 cursor-pointer " />
      </div>
      <div className="sm:order-3">
        <NavItemList />
      </div>
    </div>
  );
};

export default Navbar;
