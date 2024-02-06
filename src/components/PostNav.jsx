import React from "react";
import { SiWindows } from "react-icons/si";
import { RxCaretDown } from "react-icons/rx";
const PostNav = () => {
  const items = [
    "Deals",
    "Home",
    "About",
    "Shop",
    "Vendors",
    "Mega Menu",
    "Blog",
    "Pages",
    "Contact",
  ];
  return (
    <div className="flex items-center my-3">
      <div className="inline-flex items-center rounded-md p-2 gap-x-2 text-white bg-[#3bb77e]">
        <SiWindows />
        <p>Browse All Categories</p>
        <RxCaretDown />
      </div>
      <div className="flex">
        {items.map((item, index) => (
          <div key={index} className="mx-5">
            <p className="cursor-pointer">{item}</p>
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default PostNav;
