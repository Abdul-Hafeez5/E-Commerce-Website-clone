import React from "react";
import HeroKeyword from "./HeroKeyword";
import { about_1 } from "../../assets/About";
import HeroCrousel from "./HeroCrousel";

const HeroAbout = () => {
  return (
    <>
      <HeroKeyword />
      <div className="items-center justify-between mx-2 my-6 xs:mx-6 lg:flex gap-x-12">
        <div
          className=" w-[98%] lg:w-[6000px]  h-screen bg-center bg-cover rounded-xl my-6"
          style={{ backgroundImage: `url('${about_1}')` }}
        ></div>
        <div className="flex flex-col gap-y-4">
          <div className="flex flex-col gap-y-3">
            <h1 className="font-bold font-quickSand text-[40px] leading-[48px] lg:text-center">
              Welcome to Nest
            </h1>
            <p className="text-base font-lato text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate id est laborum. Ius ferri velit sanctus
              cu, sed at soleat accusata. Dictas prompta et Ut placerat legendos
              interpre.Donec vitae sapien ut libero venenatis faucibus. Nullam
              quis ante Etiam sit amet orci eget. Quis commodo odio aenean sed
              adipiscing. Turpis massa tincidunt dui ut ornare lectus. Auctor
              elit sed vulputate mi sit amet. Commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate id est laborum.
            </p>
          </div>
          <div>
            <HeroCrousel />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroAbout;
