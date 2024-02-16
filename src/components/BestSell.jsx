import React, { useState } from "react";
import { BsCart } from "react-icons/bs";
import { IoEyeOutline } from "react-icons/io5";
import { MdCompareArrows } from "react-icons/md";
import { IoIosHeartEmpty } from "react-icons/io";
import { Rating } from "primereact/rating";

const BestSell = ({
  sale,
  img,
  hovImg,
  type,
  heading,
  price,
  discount,
  sellBg,
}) => {
  const [hovered, setHovered] = useState(false);
  const [showIcons, setShowIcons] = useState(false);
  const [value, setValue] = useState(null);

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
      className="box-border flex flex-col items-center w-full h-full py-4 border lg:w-64 rounded-3xl hover:border-primary hover:shadow-lg"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h1
        className="w-16 px-4 py-2 self-start text-white font-lato text-[12px] rounded-tl-3xl rounded-br-3xl"
        style={{ backgroundColor: sellBg }}
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
        <h1 className="text-base font-bold leading-5 cursor-pointer hover:text-primary font-quickSand">
          {heading}
        </h1>
        <div className="flex mt-2 card ">
          <Rating
            value={value}
            onChange={(e) => setValue(e.value)}
            cancel={false}
            className="mx-1 text-yellow-300"
          />
          {/* <span className="text-sm font-lato text-secondary">(3.5)</span> */}
        </div>

        <div className="my-3">
          <div className="flex items-center font-bold font-quickSand gap-x-3">
            <p className="text-[18px]  text-primary ">${price}</p>
            <p className="relative text-sm line-through text-secondary">
              ${discount}
            </p>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-1.5 mt-4 dark:bg-gray-700">
            <div class="bg-primary h-1.5 rounded-full w-[70%] "></div>
          </div>
          <p className="mt-1 text-[13px] font-lato">Sold:90/120</p>
        </div>
        <div className="flex px-4 py-2  items-center justify-center text-sm font-bold rounded-md cursor-pointer bg-[#c0fadf] gap-x-2 text-primary font-lato hover:text-white hover:bg-primary">
          <BsCart className="w-4 h-4" />
          <button>Add</button>
        </div>
      </div>
    </div>
  );
};

export default BestSell;
