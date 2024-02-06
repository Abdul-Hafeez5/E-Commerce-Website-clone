import React from "react";

const PreNav = () => {
  const element = ["About Us", "My Accout", "WishList", "Order Tracking"];
  return (
    <div className=" hidden lg:flex justify-between font-Lato text-sm py-2">
      <div className="flex">
        {element.map((item, index) => (
          <p key={index}>
            {item} <span className="mx-2">|</span>
          </p>
        ))}
      </div>
      <div className="mx-1">
        <span>Need help?</span>
        <span>
          Call US: <span className="text-[#3bb77e]">+1800 900</span>
        </span>
        <span>
          <span className="mx-2">|</span>English
        </span>
        <span>
          <span className="mx-2">|</span>USD
        </span>
      </div>
      <hr />
    </div>
  );
};

export default PreNav;
