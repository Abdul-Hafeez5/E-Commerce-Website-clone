import React from "react";

const Category = ({ img, Name, items }) => {
  return (
    <div className={`w-40 flex flex-col items-center rounded-md mx-2 mt-3 `}>
      <img src={img} alt="" />
      <div className="flex flex-col mb-3">
        <h2 className="text-[253D4E]">{Name}</h2>
        <span className="text-sm text-[#7E7E7E]">{items} items</span>
      </div>
    </div>
  );
};

export default Category;
