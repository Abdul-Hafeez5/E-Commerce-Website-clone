import React from "react";

const Categories = ({ img, name, items }) => {
  return (
    <div className="bg-[#fff3eb] w-40 flex flex-col items-center rounded-md mx-2 mt-3">
      <img src={img} alt="" />
      <div className="flex flex-col mb-3">
        <h2 className="text-[253D4E]">Peach</h2>
        <span className="text-sm text-[#7E7E7E]">28 items</span>
      </div>
    </div>
  );
};

export default Categories;
