import React from "react";
import Deal from "../components/Deal";
import { LiaGreaterThanSolid } from "react-icons/lia";

const Deals = () => {
  return (
    <div className="mx-6">
      <div className="items-center justify-between my-6 font-quickSand lg:flex mb-11">
        <h1 className="mb-2 font-bold text-[28px] lg:text-[32px]">
          Deals Of The Day
        </h1>
        <div className="flex items-center gap-x-2">
          <p className="">All deals</p>
          <LiaGreaterThanSolid className="cursor-pointer" />
        </div>
      </div>
      <div>
        <Deal />
      </div>
    </div>
  );
};

export default Deals;
