import React from "react";

const CategoryCard = ({ img, text }) => {
  return (
    <div className="flex items-center px-2 py-2 text-sm border rounded-lg font-lato gap-x-4">
      <img src={img} alt="" className="justify-start w-8 h-8" />
      <h1 className="flex flex-wrap flex-1">{text}</h1>
      <p className="px-2 py-1 text-xs rounded-full justify-end bg-[#BCE3C9]">
        0
      </p>
    </div>
  );
};

export default CategoryCard;
