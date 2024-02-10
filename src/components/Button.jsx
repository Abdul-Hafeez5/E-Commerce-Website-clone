import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Button = () => {
  return (
    <div className="inline-flex items-center sm:justify-center gap-x-2 py-2 xs:px-4 text-white bg-[#3bb77e] rounded-md">
      <button className="xs:font-bold text-[12px]">Shop Now</button>
      <FaArrowRight />
    </div>
  );
};

export default Button;
