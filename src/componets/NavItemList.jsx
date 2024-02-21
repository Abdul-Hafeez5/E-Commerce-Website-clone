import React from "react";
import { IoIosHeartEmpty } from "react-icons/io";
import { TfiReload } from "react-icons/tfi";
import { BsCart } from "react-icons/bs";
import { FiUser } from "react-icons/fi";

const ItemList = () => {
  return (
    <div className="flex gap-x-2 xs:gap-x-6 font-lato ">
      <div className="items-baseline hidden cursor-pointer xl:flex gap-x-1 ">
        <div className="inline-flex ">
          <TfiReload className="w-6 h-6 " />
          <span className="relative flex items-center justify-center w-5 h-5 text-xs text-white rounded-full -left-2 bg-primary">
            6
          </span>
        </div>
        <span className="text-secondary">Compare</span>
      </div>
      <div className="flex items-baseline cursor-pointer gap-x-1">
        <div className="inline-flex">
          <IoIosHeartEmpty className="w-6 h-6 lg:hidden xl:block" />
          <span className="relative flex items-center justify-center w-5 h-5 text-xs text-white rounded-full -left-2 lg:hidden xl:flex bg-primary">
            6
          </span>
        </div>
        <span className="hidden xl:flex text-secondary">WishList</span>
      </div>
      <div className="flex items-baseline cursor-pointer gap-x-1">
        <div className="inline-flex">
          <BsCart className="w-6 h-6 lg:hidden xl:block" />
          <span className="relative flex items-center justify-center w-5 h-5 text-xs text-white rounded-full -left-2 lg:hidden xl:flex bg-primary">
            6
          </span>
        </div>
        <span className="hidden xl:flex text-secondary">Cart</span>
      </div>
      <div className="items-baseline hidden cursor-pointer xl:flex gap-x-1">
        <FiUser className="w-6 h-6" />
        <span className="text-secondary">Account</span>
      </div>
    </div>
  );
};

export default ItemList;
