import React from "react";
import { IoIosHeartEmpty } from "react-icons/io";
import { TfiReload } from "react-icons/tfi";
import { BsCart } from "react-icons/bs";
import { FiUser } from "react-icons/fi";

const ItemList = () => {
  return (
    <div className="flex gap-x-6 ">
      <p className="xl:flex gap-x-1 hidden ">
        <TfiReload className="w-8 h-8 " />
        <span>compare</span>
      </p>
      <p className="flex gap-x-1">
        <IoIosHeartEmpty className="w-8 h-8 lg:hidden" />
        <span className="xl:flex hidden">wishList</span>
      </p>
      <p className="flex gap-x-1">
        <BsCart className="w-8 h-8 lg:hidden" />
        <span className="xl:flex hidden">Cart</span>
      </p>
      <p className="xl:flex gap-x-1 hidden">
        <FiUser className="w-8 h-8" />
        <span>Account</span>
      </p>
    </div>
  );
};

export default ItemList;
