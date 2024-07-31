import React from "react";
import { QuickViewList } from "../constants/constant";
import QuickView from "../componets/QuickView";

const QuickViews = () => {
  return (
    <div className="grid gap-4 mx-2 my-8 xs:mx-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {QuickViewList.map((item, index) => (
        <QuickView key={index} {...item} />
      ))}
    </div>
  );
};

export default QuickViews;
