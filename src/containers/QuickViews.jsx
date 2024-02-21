import React from "react";
import { icon1, icon2, icon3, icon4, icon5 } from "../assets/FooterIcons";
import QuickView from "../componets/QuickView";

let QuickViewList = [
  {
    img: icon1,
    heading: "Best prices & offers",
    subHeading: "Orders $50 or more",
  },
  {
    img: icon2,
    heading: "Free delivery",
    subHeading: "24/7 amazing services",
  },
  {
    img: icon3,
    heading: "Great daily deal",
    subHeading: "When you sign up",
  },
  {
    img: icon4,
    heading: "Wide assortment",
    subHeading: "Mega Discounts",
  },
  {
    img: icon5,
    heading: "Easy returns",
    subHeading: "Within 30 days",
  },
];

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
