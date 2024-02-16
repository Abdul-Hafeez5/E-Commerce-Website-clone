import React, { useState } from "react";
import { Rating } from "primereact/rating";

const VegetableCard = ({ img, heading, price, discount }) => {
  const [value, setValue] = useState(null);
  return (
    <div className="w-[360px] h-[110px] overflow-hidden flex items-center  xs:block md:flex">
      <div className="cursor-pointer md:w-[30%] md:h-[80%]">
        <img
          src={img}
          alt=""
          className="object-cover  rounded-xl lg:w-[100%] lg:h-[100%]"
        />
      </div>
      <div className="mx-4 font-quickSand">
        <h1 className="flex-wrap text-sm font-bold leading-4 lg:leading-5 lg:text-base hover:text-primary">
          {heading}
        </h1>
        <div className="flex mt-1 card gap-x-2">
          <Rating
            value={value}
            onChange={(e) => setValue(e.value)}
            cancel={false}
            className="mx-1 text-yellow-300"
          />
          <span className="text-sm font-lato text-secondary">(3.5)</span>
        </div>
        <div className="flex items-center mt-2 font-quickSand gap-x-2">
          <p className="text-[18px] font-bold text-primary">${price}</p>
          <p className="text-sm font-bold text-secondary">${discount}</p>
        </div>
      </div>
    </div>
  );
};

export default VegetableCard;
