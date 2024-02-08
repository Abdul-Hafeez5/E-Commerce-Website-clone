import React from "react";
import Banner from "../components/Banner";
import { banner1, banner2, banner3 } from "../assets/index";

const Banners = () => {
  return (
    <div className="flex gap-x-6 lg:mx-6">
      <Banner
        title={"Everyday Fresh and clean with our Products"}
        img={banner1}
      />
      <Banner title={"Make your Breakfast Healthy and Easy"} img={banner2} />
      <Banner title={"The best Organic Products Online"} img={banner3} />
    </div>
  );
};

export default Banners;
