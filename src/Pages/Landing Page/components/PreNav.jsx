import React from "react";
import { RxCaretDown } from "react-icons/rx";

const PreNav = () => {
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
        <span className="inline-flex">
          <span className="mx-2">|</span>English
          <RxCaretDown className="w-3 h-3 cursor-pointer" />
        </span>
        <span className="inline-flex">
          <span className="mx-2">|</span>USD
          <RxCaretDown className="w-3 h-3 cursor-pointer " />
        </span>
      </div>
      {/* <hr className="m bg-primary" /> */}
    </div>
  );
};

export default PreNav;
