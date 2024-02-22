import React from "react";
import {
  icon_1,
  icon_2,
  icon_3,
  icon_4,
  icon_5,
  wave,
  icon_6,
} from "../../assets/About";

let data = [
  {
    img: icon_1,
    heading: "Best Prices & Offers",
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
  },
  {
    img: icon_2,
    heading: "Wide Assortment",
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
  },
  {
    img: icon_3,
    heading: "Free Delivery",
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
  },
  {
    img: icon_4,
    heading: "Easy Returns",
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
  },
  {
    img: icon_5,
    heading: "100% Satisfaction",
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
  },
  {
    img: icon_6,
    heading: "Great Daily Deal",
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
  },
];

let Service = ({ img, heading, desc }) => {
  return (
    <div className="flex flex-col items-center p-4 border hover:shadow-lg font-lato rounded-xl gap-y-4">
      <img src={img} alt="" className="w-24 h-24" />
      <h1 className="text-2xl font-bold font-quickSand">{heading}</h1>
      <p className="text-[17px] text-secondary">{desc}</p>
      <span className="text-primary hover:text-yellow-400">Read More</span>
    </div>
  );
};

const Services = () => {
  return (
    <div className="mx-2 my-6 xs:mx-6">
      <div className="flex flex-col items-center my-6 text-center gap-y-2">
        <h1 className="font-bold font-quickSand leading-[48px] text-[40px]">
          What We Provide?
        </h1>
        <img src={wave} alt="" className="" />
      </div>
      <div className="grid grid-cols-1 gap-y-5 gap-x-5 md:grid-cols-2 lg:grid-cols-3">
        {data.map((item, index) => (
          <Service key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Services;
