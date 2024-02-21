import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Button = () => {
  return (
    <div className="inline-flex items-center justify-center px-4 py-2 text-white rounded-md hover:bg-yellow-300 hover:mx-4 gap-x-2 bg-primary">
      <button className="text-xs font-bold">Shop Now</button>
      <FaArrowRight />
    </div>
  );
};

export default Button;
