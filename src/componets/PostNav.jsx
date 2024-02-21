import { SiWindows } from "react-icons/si";
import { RxCaretDown } from "react-icons/rx";
import { LuHeadphones } from "react-icons/lu";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DropdownNav from "./DropdownNav";

const PostNav = () => {
  const [isNavFixed, setIsNavFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsNavFixed(true);
      } else {
        setIsNavFixed(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`hidden lg:flex justify-between font-quickSand text-base font-bold bg-white items-center py-3 px-3  z-10 ${
        isNavFixed ? "fixed top-0 w-full" : ""
      }`}
    >
      <div className="inline-flex items-center px-1 py-2 mx-2 text-white rounded-md cursor-pointer gap-x-1 bg-primary">
        <SiWindows />
        <p className="flex flex-wrap">Browse All Categories</p>
        <RxCaretDown />
      </div>

      <div className="flex flex-wrap mr-3 ">
        <ul className="flex gap-x-4 xl:gap-x-4 ">
          <li className="cursor-pointer hover:text-primary">
            <Link to="/deals">Deals</Link>
          </li>
          <Link to="/">
            <DropdownNav title={"Home"}>
              <li>Welcome</li>
              <li>Home</li>
              <li>Again</li>
              <li>with</li>
              <li>Hot</li>
              <li>Smile</li>
            </DropdownNav>
          </Link>
          <li className="cursor-pointer hover:text-primary">About</li>

          <Link to="/deals">
            <DropdownNav title={"Shop"}>
              <li>Shop1</li>
              <li>Shop2</li>
              <li>Shop3</li>
              <li>Shop3</li>
              <li>Shop4</li>
            </DropdownNav>
          </Link>

          <DropdownNav title={"Vendors"}>
            <li>Vendor1</li>
            <li>Vendor2</li>
            <li>Vendor3</li>
            <li>Vendor4</li>
            <li>Vendor5</li>
          </DropdownNav>

          <DropdownNav title={"Mega Menu"}>
            <li>Shop1</li>
            <li>Shop2</li>
            <li>Shop3</li>
            <li>Shop3</li>
            <li>Shop4</li>
          </DropdownNav>

          <DropdownNav title={"Blog"}>
            <li>Shop1</li>
            <li>Shop2</li>
            <li>Shop3</li>
            <li>Shop3</li>
            <li>Shop4</li>
          </DropdownNav>

          <DropdownNav title={"Pages"}>
            <li>Shop1</li>
            <li>Shop2</li>
            <li>Shop3</li>
            <li>Shop3</li>
            <li>Shop4</li>
          </DropdownNav>
          <li className="cursor-pointer hover:text-primary">Contact</li>
        </ul>
      </div>
      <div className="items-center hidden xl:flex gap-x-3">
        <LuHeadphones className="w-12 h-12" />
        <div>
          <p className="text-2xl font-bold text-primary">1900 - 888</p>
          <span className="text-[11px] text-secondary font-[500] ">
            24/7 Support Center
          </span>
        </div>
      </div>
    </div>
  );
};

export default PostNav;
