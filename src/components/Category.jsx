import React from "react";

const Category = ({ img, Name, items, bgColor }) => {
  return (
    <div
      className={`w-40 flex flex-col items-center hover:border border-primary  rounded-md mx-2 mt-3 `}
      style={{ backgroundColor: bgColor }}
    >
      <img src={img} alt="" className="cursor-pointer" />
      <div className="flex flex-col items-center justify-center mb-3">
        <h2 className="text-[253D4E] hover:text-primary font-semibold cursor-pointer">
          {Name}
        </h2>
        <span className="text-sm text-[#7E7E7E]">{items} items</span>
      </div>
    </div>
  );
};

export default Category;
