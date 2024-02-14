import React from "react";
import { BsCart } from "react-icons/bs";

const BestSell = ({
  sale,
  img,
  hovImg,
  type,
  heading,
  seller,
  price,
  discount,
  sellBg,
}) => {
  return (
    <div className="flex flex-col border max-w-72 rounded-3xl">
      <h1
        className="w-16 px-4 py-2 text-white font-lato text-[12px] rounded-br-3xl"
        style={{ backgroundColor: sellBg }}
      >
        {sale}
      </h1>
      <div className="justify-center w-52 h-52 xl:w-52 xl:h-52">
        <img src={img} alt="products" />
      </div>
      <div className="mx-8 my-8 ">
        <span className="text-xs font-lato text-secondary">{type}</span>
        <h1 className="my-2 text-base font-bold font-quickSand">{heading}</h1>
        <p>star and rating</p>
        <p className="text-sm font-lato text-secondary">
          By <span className=" text-primary">{seller}</span>
        </p>
        <div className="flex items-center justify-between mt-3 ">
          <div className="font-bold font-quickSand">
            <p className="text-[18px]  text-primary ">${price}</p>
            <p className="relative text-sm text-secondary">
              ${discount}
              <span className="absolute left-0 w-9 bottom-2 h-[1.5px] bg-secondary"></span>
            </p>
          </div>
          <div className="flex px-4 py-2  items-center text-sm font-bold rounded-md cursor-pointer bg-[#c0fadf] gap-x-2 text-primary font-lato">
            <BsCart className="w-4 h-4" />
            <button>Add</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSell;
