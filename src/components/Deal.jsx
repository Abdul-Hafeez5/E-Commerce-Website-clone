import React from "react";
// import { banner5 } from "..//assets/Deals/index";

const Deal = ({ bgImage }) => {
  return (
    <div
      className="bg-center bg-cover min-h-80 rounded-2xl min-w-[340px]"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      Hello
    </div>
  );
};

export default Deal;
