import React, { useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import { flag_dt, flag_fr, flag_ru } from "../assets/flag-icons";

const PreNav = () => {
  const [isEngOpen, setEngOpen] = useState(false);
  const [isUSDOpen, setUSDOpen] = useState(false);
  const handleMouseEnter = () => {
    setEngOpen(true);
  };
  const handleMouseLeave = () => {
    setEngOpen(false);
  };
  const handleUSEnter = () => {
    setUSDOpen(true);
  };
  const handleUSLeave = () => {
    setUSDOpen(false);
  };
  const element = ["About Us", "My Accout", "WishList", "Order Tracking"];
  return (
    <div className="hidden lg:flex justify-between font-lato text-[13px] text-secondary py-3">
      <div className="flex ml-5">
        {element.map((item, index) => (
          <p key={index} className="cursor-pointer hover:text-secondary">
            {item}
            <span className="mx-2 cursor-none ">|</span>
          </p>
        ))}
      </div>
      <div>
        <p className="hidden lg:block">
          Trendy silver jewelwry, save upto 35% off today
        </p>
      </div>
      <div className="mx-1">
        <span>Need help?</span>
        <span>
          Call US: <span className="text-[#3bb77e]">+1800 900</span>
        </span>
        <span
          className="relative inline-flex"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <span className="mx-2">|</span>English
          <RxCaretDown className="w-3 h-3 cursor-pointer" />
          {isEngOpen && (
            <div className="absolute z-10 flex flex-col w-full bg-white border rounded-md top-5">
              <div className="flex items-center m-1 gap-x-1">
                <img src={flag_fr} alt="" className="w-3 h-3" />
                <span>Francis</span>
              </div>
              <div className="flex items-center m-1 gap-x-1">
                <img src={flag_dt} alt="" className="w-3 h-3" />
                <span>Deutich</span>
              </div>
              <div className="flex items-center m-1 gap-x-1">
                <img src={flag_ru} alt="" className="w-3 h-3" />
                <span>Russian</span>
              </div>
            </div>
          )}
        </span>
        <span
          className="inline-flex"
          onMouseEnter={handleUSEnter}
          onMouseLeave={handleUSLeave}
        >
          <span className="relative mx-2">|</span>USD
          <RxCaretDown className="w-3 h-3 cursor-pointer " />
          {isUSDOpen && (
            <div className="absolute z-10 flex flex-col w-full bg-white border rounded-md top-8 ">
              <div className="flex items-center m-1 gap-x-1">
                <img src={flag_fr} alt="" className="w-3 h-3" />
                <span>Francis</span>
              </div>
              <div className="flex items-center m-1 gap-x-1">
                <img src={flag_dt} alt="" className="w-3 h-3" />
                <span>Deutich</span>
              </div>
              <div className="flex items-center m-1 gap-x-1">
                <img src={flag_ru} alt="" className="w-3 h-3" />
                <span>Russian</span>
              </div>
            </div>
          )}
        </span>
      </div>
    </div>
  );
};

export default PreNav;
