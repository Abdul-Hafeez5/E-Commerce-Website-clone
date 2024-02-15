import React from "react";
import Banner from "../components/Banner";
import { banner1, banner2, banner3 } from "../assets/Cards/index";

let BannerDetails = [
  { title: "Everyday Fresh and clean with our Products", img: banner1 },
  { title: "Make your Breakfast Healthy and Easy", img: banner2 },
  { title: "The best Organic Products Online", img: banner3 },
];

const Banners = () => {
  return (
    <div className="grid grid-cols-1 mx-6 md:grid-cols-2 lg:grid-cols-3 gap-x-6 lg:mx-8">
      {BannerDetails.map((item, index) => (
        <Banner key={index} title={item.title} img={item.img} />
      ))}
    </div>
  );
};

export default Banners;
