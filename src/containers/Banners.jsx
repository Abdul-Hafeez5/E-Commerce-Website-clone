import React from "react";
import Banner from "../componets/Banner";
import { banner1, banner2, banner3 } from "../assets/Cards";

let BannerDetails = [
  { title: "Everyday Fresh and clean with our Products", img: banner1 },
  { title: "Make your Breakfast Healthy and Easy", img: banner2 },
  { title: "The best Organic Products Online", img: banner3 },
];

const Banners = () => {
  return (
    <div className="grid grid-cols-1 mx-2 gap-y-4 md:grid-cols-2 lg:grid-cols-3 gap-x-4 lg:mx-6">
      {BannerDetails.map((item, index) => (
        <Banner key={index} {...item} />
      ))}
    </div>
  );
};

export default Banners;
