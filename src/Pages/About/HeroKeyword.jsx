import React from "react";
import { LiaGreaterThanSolid } from "react-icons/lia";
import { BiHome } from "react-icons/bi";
import { Link } from "react-router-dom";

const HeroKeyword = () => {
  return (
    <>
      <div className="flex pl-5 my-5 text-sm font-semibold lg:pl-8 font-lato gap-x-4 text-secondary">
        <div className="flex items-center cursor-pointer gap-x-1 text-primary hover:text-yellow-400 ">
          <BiHome className="w-4 h-4" />
          <Link to="/">
            <p>Home</p>
          </Link>
        </div>
        <div className="flex items-center gap-x-2">
          <LiaGreaterThanSolid className="w-2 h-6" />
          <p>Pages</p>
        </div>
        <div className="flex items-center gap-x-2">
          <LiaGreaterThanSolid className="w-2 h-6 " />
          <p>About Us</p>
        </div>
      </div>
      <hr className="text-secondary " />
    </>
  );
};

export default HeroKeyword;
