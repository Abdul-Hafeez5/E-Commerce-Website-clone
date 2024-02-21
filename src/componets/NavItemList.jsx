import React, { useState } from "react";
import { IoIosHeartEmpty } from "react-icons/io";
import { TfiReload } from "react-icons/tfi";
import { BsCart } from "react-icons/bs";
import { FiUser } from "react-icons/fi";

const ItemList = () => {
  const [isCartOpen, setCartOpen] = useState(false);
  const [isAccountOpen, setAccountOpen] = useState(false);
  const handleAccountEnter = () => {
    setAccountOpen(true);
  };
  const handleAccountLeave = () => {
    setAccountOpen(false);
  };
  const handleCarttEnter = () => {
    setCartOpen(true);
  };
  const handleCartLeave = () => {
    setCartOpen(false);
  };

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
        <span
          className="relative hidden xl:flex text-secondary"
          onMouseEnter={handleCarttEnter}
          onMouseLeave={handleCartLeave}
        >
          Cart
          {isCartOpen && <div className="absolute top-4">Hello</div>}
        </span>
      </div>
      <div className="items-baseline hidden cursor-pointer xl:flex gap-x-1">
        <FiUser className="w-6 h-6" />
        <span
          className="relative text-secondary"
          onMouseEnter={handleAccountEnter}
          onMouseLeave={handleAccountLeave}
        >
          Account
          {isAccountOpen && (
            <div className="absolute z-10 text-sm text-black border rounded-md w-36 top-6 font-lato right-1">
              <div className="flex flex-col items-center p-2 gap-y-3">
                <div className="flex items-center gap-x-2">
                  <FiUser className="w-4 h-4" />
                  <p>My Account</p>
                </div>
                <div className="flex items-center gap-x-2">
                  <FiUser className="w-4 h-4" />
                  <p>My Account</p>
                </div>
                <div className="flex items-center gap-x-2">
                  <FiUser className="w-4 h-4" />
                  <p>My Account</p>
                </div>
                <div className="flex items-center gap-x-2">
                  <FiUser className="w-4 h-4" />
                  <p>My Account</p>
                </div>
                <div className="flex items-center gap-x-2">
                  <FiUser className="w-4 h-4" />
                  <p>My Account</p>
                </div>
              </div>
            </div>
          )}
        </span>
      </div>
    </div>
  );
};

export default ItemList;
