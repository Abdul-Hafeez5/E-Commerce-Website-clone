import React from "react";
import { PiCaretDown } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";

const InputBox = () => {
  return (
    <div className="hidden lg:flex items-center justify-center border-2 border-[#3bb77e] rounded-md xl:hidden p-3 flex-1">
      <p className="mx-2 font-semibold">All Categories </p>
      <PiCaretDown className="mx-2" /> <span>|</span>
      <p className="mx-2 text-sm">Search for items....</p>
      <CiSearch className="w-8" />
    </div>
  );
};

export default InputBox;
