import React, { useState } from "react";
import { BsCart } from "react-icons/bs";
import { IoEyeOutline } from "react-icons/io5";
import { MdCompareArrows } from "react-icons/md";
import { IoIosHeartEmpty } from "react-icons/io";

const Product = ({
  sale,
  bgSale,
  img,
  hovImg,
  type,
  heading,
  seller,
  price,
  discount,
}) => {
  const [hovered, setHovered] = useState(false);
  const [showIcons, setShowIcons] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
    setShowIcons(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setShowIcons(false);
  };

  return (
    <div
      className="box-border flex flex-col items-center w-full h-full border rounded-3xl hover:border-primary hover:shadow-lg"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h1
        className="w-16 px-4 py-2 self-start text-white font-lato text-[12px] rounded-tl-3xl rounded-br-3xl"
        style={{ backgroundColor: bgSale }}
      >
        {sale}
      </h1>
      <div className="relative flex items-center justify-center cursor-pointer h-52 w-52 group">
        <img
          src={hovered ? hovImg : img}
          alt="products"
          className="w-full h-full"
        />
        {showIcons && (
          <div className="absolute inset-0 flex items-center justify-center transition duration-300 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 ease top-1/2 left-1/2">
            <div className="p-2 bg-white">
              <IoIosHeartEmpty className="w-5 h-5 text-primary hover:text-yellow-400" />
              {/* <p className="text-xs text-primary">Add</p> */}
            </div>
            <div className="p-2 bg-white">
              <MdCompareArrows className="w-5 h-5 text-primary hover:text-yellow-400" />
              {/* <p className="text-xs text-primary">Wishlist</p> */}
            </div>
            <div className="p-2 bg-white">
              <IoEyeOutline className="w-5 h-5 text-primary hover:text-yellow-400" />
              {/* <p className="text-xs text-primary">Chat</p> */}
            </div>
          </div>
        )}
      </div>
      <div className="mx-8 ">
        <span className="text-xs font-lato text-secondary">{type}</span>
        <h1 className="mb-2 text-base font-bold cursor-pointer hover:text-primary font-quickSand">
          {heading}
        </h1>
        <p>star and rating</p>
        <p className="text-sm font-lato text-secondary">
          By{" "}
          <span className=" text-primary hover:text-yellow-300">{seller}</span>
        </p>
        <div className="flex items-center justify-between my-2 ">
          <div className="font-bold font-quickSand">
            <p className="text-[18px]  text-primary ">${price}</p>
            <p className="relative text-sm line-through text-secondary">
              ${discount}
            </p>
          </div>
          <div className="flex px-4 py-2  items-center text-sm font-bold rounded-md cursor-pointer bg-[#c0fadf] gap-x-2 text-primary font-lato hover:text-white hover:bg-primary">
            <BsCart className="w-4 h-4" />
            <button>Add</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
