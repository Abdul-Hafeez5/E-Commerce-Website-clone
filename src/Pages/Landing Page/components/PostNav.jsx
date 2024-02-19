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
      className={`hidden lg:flex justify-between font-quickSand text-base font-bold bg-white items-center py-3 px-3  z-10 ${
        isNavFixed ? "fixed top-0 w-full" : ""
      }`}
    >
      <div className="inline-flex items-center px-2 py-2 mx-3 text-white rounded-md cursor-pointer gap-x-2 bg-primary">
        <SiWindows />
        <p>Browse All Categories</p>
        <RxCaretDown />
      </div>

      <div className="flex-wrap mr-3">
        <ul className="flex gap-x-6 xl:gap-x-8 ">
          <li className="cursor-pointer hover:text-primary">Deals</li>
          <li
            className="relative flex items-center cursor-pointer gap-x-2 text-primary"
            onMouseEnter={handleHomeEnter}
            onMouseLeave={handleHomeLeave}
          >
            Home
            <span>
              <RxCaretDown />
            </span>
            {isHomeOpen && (
              <div className="absolute z-10 w-48 bg-white border rounded-md shadow-lg text-secondary top-6">
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
          <li className="cursor-pointer hover:text-primary">About</li>
          <li
            className="relative flex items-center cursor-pointer gap-x-2 hover:text-primary"
            onMouseEnter={handleShopEnter}
            onMouseLeave={handleShopLeave}
          >
            Shop
            <span>
              <RxCaretDown />
            </span>
            {isShopOpen && (
              <div className="absolute z-10 w-48 bg-white border rounded-md shadow-lg text-secondary top-6">
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
            className="relative flex items-center cursor-pointer gap-x-2 hover:text-primary"
            onMouseEnter={handleVendorEnter}
            onMouseLeave={handleVendorLeave}
          >
            Vendors
            <span>
              <RxCaretDown />
            </span>
            {isVendorsOpen && (
              <div className="absolute z-10 w-48 bg-white border rounded-md shadow-lg text-secondary top-6">
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
            className="relative flex items-center cursor-pointer gap-x-2 hover:text-primary"
            onMouseEnter={handleMegaMenuEnter}
            onMouseLeave={handleMegaMenuLeave}
          >
            Mega Menu
            <span>
              <RxCaretDown />
            </span>
            {isMegaMenuOpen && (
              <div className="absolute z-10 w-48 bg-white border rounded-md shadow-lg text-secondary top-6">
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
            className="relative flex items-center cursor-pointer gap-x-2 hover:text-primary"
            onMouseEnter={handleBlogEnter}
            onMouseLeave={handleBlogLeave}
          >
            Blog
            <span>
              <RxCaretDown />
            </span>
            {isBlogOpen && (
              <div className="absolute z-10 w-48 bg-white border rounded-md shadow-lg text-secondary top-6">
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
            className="relative flex items-center cursor-pointer gap-x-2 hover:text-primary"
            onMouseEnter={handlePagesEnter}
            onMouseLeave={handlePagesLeave}
          >
            Pages
            <span>
              <RxCaretDown />
            </span>
            {isPagesOpen && (
              <div className="absolute z-10 w-48 bg-white border rounded-md shadow-lg text-secondary top-6">
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
