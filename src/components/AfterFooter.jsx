import React from "react";
import { LuPhoneCall } from "react-icons/lu";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";

const AfterFooter = () => {
  return (
    <div className="flex items-center justify-center text-sm md:justify-between font-lato">
      <div>
        <p>
          © 2024, <span className="font-semibold text-primary">Nest </span>- An
          E-Commerce Clone
        </p>
        <p>All rights reserved</p>
      </div>
      <div className="hidden xl:flex gap-x-20">
        <div className="flex gap-x-3">
          <LuPhoneCall className="items-center w-7 h-9 text-secondary " />
          <div>
            <p className="font-bold font-quickSand text-primary text-[26px]">
              1900 - 6666
            </p>
            <p className="mt-1 text-xs text-secondary">Working 8:00 - 22:00</p>
          </div>
        </div>
        <div className="flex gap-x-3">
          <LuPhoneCall className="items-center w-7 h-9 text-secondary " />
          <div>
            <p className="font-bold font-quickSand text-primary text-[26px]">
              1900 - 8888
            </p>
            <p className="mt-1 text-xs text-secondary">24/7 Support Center</p>
          </div>
        </div>
      </div>
      <div className="hidden md:flex">
        <div className="flex items-center gap-x-4">
          <p className="text-base font-bold font-quickSand">Follow Us</p>
          <div className="flex gap-x-2">
            <FaFacebookF className="p-2 text-white rounded-full bg-primary w-7 h-7" />
            <FaTwitter className="p-2 text-white rounded-full bg-primary w-7 h-7" />
            <FaInstagram className="p-2 text-white rounded-full bg-primary w-7 h-7" />
            <FaPinterestP className="p-2 text-white rounded-full bg-primary w-7 h-7" />
            <AiOutlineYoutube className="p-2 text-white rounded-full bg-primary w-7 h-7" />
            <div>
              <p className="text-secondary">
                Up to 15% discount on your first subscribe
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AfterFooter;
