import React from "react";

const NavDiscount = () => {
  return (
    <div className="flex flex-wrap justify-center py-2 text-[11px] text-white mxs:text-sm font-lato bg-primary xs:hidden md:block md:text-center lg:hidden">
      Grand opening, <span className="mx-1 font-semibold">up to 15% </span> off
      all items. only <span className="mx-1 font-semibold">3 days </span> left
    </div>
  );
};

export default NavDiscount;
