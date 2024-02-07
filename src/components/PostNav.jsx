import { SiWindows } from "react-icons/si";
import { RxCaretDown } from "react-icons/rx";
import { LuHeadphones } from "react-icons/lu";
import React, { useState, useEffect } from "react";

const PostNav = () => {
  const [isNavFixed, setIsNavFixed] = useState(false);
  const [isHomeOpen, setIsHomeOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [isVendorsOpen, setIsVendorsOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isBlogOpen, setIsBlogOpen] = useState(false);
  const [isPagesOpen, setIsPagesOpen] = useState(false);

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

  const handleHomeEnter = () => {
    setIsHomeOpen(true);
  };
  const handleHomeLeave = () => {
    setIsHomeOpen(false);
  };
  const handleShopEnter = () => {
    setIsShopOpen(true);
  };

  const handleShopLeave = () => {
    setIsShopOpen(false);
  };
  const handleVendorEnter = () => {
    setIsVendorsOpen(true);
  };

  const handleVendorLeave = () => {
    setIsVendorsOpen(false);
  };
  const handleMegaMenuEnter = () => {
    setIsMegaMenuOpen(true);
  };

  const handleMegaMenuLeave = () => {
    setIsMegaMenuOpen(false);
  };
  const handleBlogEnter = () => {
    setIsBlogOpen(true);
  };

  const handleBlogLeave = () => {
    setIsBlogOpen(false);
  };
  const handlePagesEnter = () => {
    setIsPagesOpen(true);
  };

  const handlePagesLeave = () => {
    setIsPagesOpen(false);
  };

  return (
    <div
      className={`hidden lg:flex justify-between bg-white items-center py-3 px-8 z-10 ${
        isNavFixed ? "fixed top-0 w-full" : ""
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
          <li
            className=" flex items-center gap-x-2 cursor-pointer hover:text-[#3bb77e]"
            onMouseEnter={handleHomeEnter}
            onMouseLeave={handleHomeLeave}
          >
            Home
            <span>
              <RxCaretDown />
            </span>
            {isHomeOpen && (
              <div className="absolute top-44  w-48 bg-white rounded-md shadow-lg z-10">
                <ul className="p-3 ">
                  <li>Welcome</li>
                  <li>Home</li>
                  <li>Again</li>
                  <li>with</li>
                  <li>Hot</li>
                  <li>Smile</li>
                </ul>
              </div>
            )}
          </li>
          <li className="cursor-pointer hover:text-[#3bb77e]">About</li>
          <li
            className="flex items-center gap-x-2 cursor-pointer hover:text-[#3bb77e]"
            onMouseEnter={handleShopEnter}
            onMouseLeave={handleShopLeave}
          >
            Shop
            <span>
              <RxCaretDown />
            </span>
            {isShopOpen && (
              <div className="absolute top-44  w-48 bg-white rounded-md shadow-lg z-10">
                <ul className="p-3 ">
                  <li>Shop1</li>
                  <li>Shop2</li>
                  <li>Shop3</li>
                  <li>Shop3</li>
                  <li>Shop4</li>
                </ul>
              </div>
            )}
          </li>
          <li
            className="flex items-center gap-x-2 cursor-pointer hover:text-[#3bb77e]"
            onMouseEnter={handleVendorEnter}
            onMouseLeave={handleVendorLeave}
          >
            Vendors
            <span>
              <RxCaretDown />
            </span>
            {isVendorsOpen && (
              <div className="absolute top-44  w-48 bg-white rounded-md shadow-lg z-10">
                <ul className="p-3 ">
                  <li>Vendor1</li>
                  <li>Vendor2</li>
                  <li>Vendor3</li>
                  <li>Vendor4</li>
                  <li>Vendor5</li>
                </ul>
              </div>
            )}
          </li>
          <li
            className="flex items-center gap-x-2 cursor-pointer hover:text-[#3bb77e]"
            onMouseEnter={handleMegaMenuEnter}
            onMouseLeave={handleMegaMenuLeave}
          >
            Mega Menu
            <span>
              <RxCaretDown />
            </span>
            {isMegaMenuOpen && (
              <div className="absolute top-44  w-48 bg-white rounded-md shadow-lg z-10">
                <ul className="p-3 ">
                  <li>Shop1</li>
                  <li>Shop2</li>
                  <li>Shop3</li>
                  <li>Shop3</li>
                  <li>Shop4</li>
                </ul>
              </div>
            )}
          </li>
          <li
            className="flex items-center gap-x-2 cursor-pointer hover:text-[#3bb77e]"
            onMouseEnter={handleBlogEnter}
            onMouseLeave={handleBlogLeave}
          >
            Blog
            <span>
              <RxCaretDown />
            </span>
            {isBlogOpen && (
              <div className="absolute top-44  w-48 bg-white rounded-md shadow-lg z-10">
                <ul className="p-3 ">
                  <li>Shop1</li>
                  <li>Shop2</li>
                  <li>Shop3</li>
                  <li>Shop3</li>
                  <li>Shop4</li>
                </ul>
              </div>
            )}
          </li>
          <li
            className="flex items-center gap-x-2 cursor-pointer hover:text-[#3bb77e]"
            onMouseEnter={handlePagesEnter}
            onMouseLeave={handlePagesLeave}
          >
            Pages
            <span>
              <RxCaretDown />
            </span>
            {isPagesOpen && (
              <div className="absolute top-44  w-48 bg-white rounded-md shadow-lg z-10">
                <ul className="p-3 ">
                  <li>Shop1</li>
                  <li>Shop2</li>
                  <li>Shop3</li>
                  <li>Shop3</li>
                  <li>Shop4</li>
                </ul>
              </div>
            )}
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
