import React, { useState } from "react";
import { Rating } from "primereact/rating";

const NewProduct = ({ img, title, price }) => {
  const [value, setValue] = useState(null);

  return (
    <div className="flex items-center py-2 border-b gap-x-3">
      <div>
        <img src={img} alt="" className="w-20 h-20" />
      </div>
      <div>
        <h1 className="text-[18px] font-bold font-quickSand text-primary hover:text-yellow-400">
          {title}
        </h1>
        <p className="text-base font-lato text-secondary">${price}</p>
        <div className="flex mb-1 card gap-x-2">
          <Rating
            value={value}
            onChange={(e) => setValue(e.value)}
            cancel={false}
            className="mx-1 text-yellow-300"
          />
          <span className="text-sm font-lato text-secondary">(3.5)</span>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
