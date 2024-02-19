import React from "react";

const Category = ({ img, Name, items, bgColor }) => {
  return (
    <div
      className={`min-w-32 h-full flex flex-col items-center hover:border border-primary  rounded-md mx-2  my-3 `}
      style={{ backgroundColor: bgColor }}
    >
      <div>
        <img
          src={img}
          alt=""
          className="w-24 h-24 transition duration-500 transform cursor-pointer scale-[0.8] hover:scale-[1] "
        />
      </div>
      <div className="flex flex-col items-center justify-center mb-3">
        <h2 className="font-semibold cursor-pointer hover:text-primary">
          {Name}
        </h2>
        <span className="text-sm text-secondary">{items} items</span>
      </div>
    </div>
  );
};

export default Category;
