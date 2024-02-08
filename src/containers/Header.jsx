import React from "react";
import NavDiscount from "../components/NavDiscount";
import PreNav from "../components/PreNav";
import Navbar from "./Navbar";
import PostNav from "../components/PostNav";

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
