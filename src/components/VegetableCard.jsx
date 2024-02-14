import React from "react";

const VegetableCard = ({ img, heading, price, discount }) => {
  return (
    <div className="flex items-center xs:block md:flex">
      <div className="mb-4 cursor-pointer lg:w-full lg:h-full">
        <img src={img} alt="" className="rounded-xl" />
      </div>
      <div className="mx-6 font-quickSand">
        <h1 className="text-base font-bold hover:text-primary">{heading}</h1>
        {/* <p className="xs:block">star and rating</p> */}
        <div className="flex items-center mt-2 font-quickSand gap-x-2">
          <p className="text-[18px] font-bold text-primary">${price}</p>
          <p className="text-sm font-bold text-secondary">${discount}</p>
        </div>
      </div>
    </div>
  );
};

export default VegetableCard;
