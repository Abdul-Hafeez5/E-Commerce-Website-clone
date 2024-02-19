import React from "react";

const QuickView = ({ img, heading, subHeading }) => {
  return (
    <div className="flex justify-center items-center gap-x-2 lg:gap-x-4 py-8 bg-[#f4f6fa] rounded-xl w-full h-full">
      <div className="w-14 h-14">
        <img
          src={img}
          alt=""
          className="transition duration-300 ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
        />
      </div>
      <div>
        <p className="font-quickSand font-semibold text-[18px]">{heading}</p>
        <p className="text-base font-lato text-secondary">{subHeading}</p>
      </div>
    </div>
  );
};

export default QuickView;
