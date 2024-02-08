import React from "react";
import { IoMenuSharp } from "react-icons/io5";
import { PiCaretDown } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";

import logo from "../assets/logo.svg";
import NavItemList from "../components/NavItemList";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-2 py-5 sm:py-4 sm:px-4 sm:shadow-sm lg:mx-8 ">
      <div className="sm:order-2 lg:hidden">
        <IoMenuSharp className="w-6 h-5 " />
      </div>
      <div className="sm:order-1">
        <img src={logo} alt="logo" className="w-36 " />
      </div>
      <div className="hidden lg:inline-flex font-quickSand text-sm order-2 items-center justify-start flex-grow-0 border-2 border-[#3bb77e] rounded-md px-7 xl:flex-1 xl:mx-8 ">
        <p className="font-semibold cursor-pointer ">All Categories</p>
        <PiCaretDown className="mx-2 cursor-pointer " /> <span>|</span>
        <input
          type="text"
          className="py-2 pr-8 mx-2 text-sm xl:pr-24 "
          placeholder="Search for items...."
        />
        <CiSearch className="w-6 h-6 xl:mx-auto" />
      </div>
      <div className="sm:order-3">
        <NavItemList />
      </div>
    </div>
  );
};

export default Navbar;
