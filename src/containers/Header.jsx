import React from "react";
import NavDiscount from "../componets/NavDiscount";
import PreNav from "../componets/PreNav";
import Navbar from "./Navbar";
import PostNav from "../componets/PostNav";

const Header = () => {
  return (
    <div>
      <NavDiscount />
      <PreNav />
      <Navbar/>
      <PostNav/>
    </div>
  );
};

export default Header;
