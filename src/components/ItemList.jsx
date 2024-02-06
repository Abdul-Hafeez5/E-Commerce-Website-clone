import React from "react";
import { IoIosHeartEmpty } from "react-icons/io";
import { TfiReload } from "react-icons/tfi";
import { BsCart } from "react-icons/bs";
import { FiUser } from "react-icons/fi";

const ItemList = () => {
  return (
    <div className="flex gap-x-3 ">
      <p className="flex gap-x-1 ">
        <TfiReload className="w-6 h-6 " />
       <span>compare
        </span> 
      </p>
      <p className="flex gap-x-1">
        <IoIosHeartEmpty className="w-6 h-6" />
        wishList
      </p>
      <p className="flex gap-x-1">
        <BsCart className="w-6 h-6" />
        Cart
      </p>
      <p className="flex gap-x-1">
        <FiUser className="w-6 h-6" />
        Account
      </p>
    </div>
  );
};

export default ItemList;
