import { SiWindows } from "react-icons/si";
import { RxCaretDown } from "react-icons/rx";
import { LuHeadphones } from "react-icons/lu";
import React, { useState, useEffect } from "react";

const PostNav = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        // Adjust the offset as needed
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`hidden lg:flex justify-between bg-white items-center py-3 px-8 z-10 ${
        isFixed ? "fixed top-0 w-full" : ""
      }`}
    >
      <div className="inline-flex items-center rounded-md p-2 gap-x-2 mx-3 text-white bg-[#3bb77e] cursor-pointer">
        <SiWindows />
        <p>Browse All Categories</p>
        <RxCaretDown />
      </div>

      <div className="">
        <ul className="flex gap-x-8 ">
          <li className="cursor-pointer hover:text-[#3bb77e]">Deals</li>
          <li className=" flex items-center gap-x-2 cursor-pointer hover:text-[#3bb77e]">
            Home
            <span>
              <RxCaretDown />
            </span>
          </li>
          <li className="cursor-pointer hover:text-[#3bb77e]">About</li>
          <li className="flex items-center gap-x-2 cursor-pointer hover:text-[#3bb77e]">
            Shop
            <span>
              <RxCaretDown />
            </span>
          </li>
          <li className="flex items-center gap-x-2 cursor-pointer hover:text-[#3bb77e]">
            Vendors
            <span>
              <RxCaretDown />
            </span>
          </li>
          <li className="flex items-center gap-x-2 cursor-pointer hover:text-[#3bb77e]">
            Mega Menu
            <span>
              <RxCaretDown />
            </span>
          </li>
          <li className="flex items-center gap-x-2 cursor-pointer hover:text-[#3bb77e]">
            Blog
            <span>
              <RxCaretDown />
            </span>
          </li>
          <li className="flex items-center gap-x-2 cursor-pointer hover:text-[#3bb77e]">
            Pages
            <span>
              <RxCaretDown />
            </span>
          </li>
          <li className="cursor-pointer hover:text-[#3bb77e]">Contact</li>
        </ul>
      </div>
      <div className="flex gap-x-3 items-center">
        <LuHeadphones className="w-12 h-12" />
        <div>
          <p className="font-bold text-lg text-[#3bb77e]">1900 - 888</p>
          <span className="text-[11px]">24/7 Support Center</span>
        </div>
      </div>
    </div>
  );
};

export default PostNav;
