import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { LiaHeadphonesAltSolid } from "react-icons/lia";
import { BsSend } from "react-icons/bs";
import { PiClockCountdownLight } from "react-icons/pi";
import {
  logo,
  payment_method,
  app_store,
  google_play,
} from "../assets/Logo & raw";

const MainFooter = () => {
  return (
    <div className=" font-lato text-[15px] ">
      <div className="grid justify-between mb-8 gap-y-8 xs:grid-cols-2 gap-x-8 lg:gap-x-16 lg:grid-cols-3 xl:grid-cols-5">
        <div>
          <div className="my-2">
            <img src={logo} alt="" />
            <p className="my-6 text-[17px]">
              Awesome grocery store website template
            </p>
          </div>
          <div className="flex flex-col gap-y-2 text-[15px]">
            <div className="flex items-center justify-center gap-x-2">
              <CiLocationOn className="w-4 h-[17px] text-primary" />
              <p>
                <span className="hidden font-bold lg:inline-block ">
                  Address:
                </span>
                Phase-I Qasimabad Hyderabad Sindh Pakistan
              </p>
            </div>
            <div className="flex items-center gap-x-2">
              <LiaHeadphonesAltSolid className="w-4 h-4 text-primary" />
              <p>
                <span className="hidden font-bold lg:inline-block ">
                  Call Us:
                </span>
                (+92) - 340-4035783
              </p>
            </div>
            <div className="flex items-center gap-x-2">
              <BsSend className="w-4 h-4 text-primary" />

              <p>
                <span className="hidden font-bold lg:inline-block ">
                  Email:
                </span>
                sale@Dummy.com
              </p>
            </div>
            <div className="flex items-center gap-x-2">
              <PiClockCountdownLight className="w-4 h-4 text-primary" />
              <p>
                <span className="hidden font-bold lg:inline-block ">
                  Hours:
                </span>
                10:00 - 18:00, Mon - Sat
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-4">
          <p className="text-secondary">Company</p>
          <p className="footer-tags">About Us</p>
          <p className="footer-tags">Delivery Information</p>
          <p className="footer-tags">Privacy Policy</p>
          <p className="footer-tags">Terms & Conditions</p>
          <p className="footer-tags">Contact Us</p>
          <p className="footer-tags">Support Center</p>
          <p className="footer-tagsy">Careers</p>
        </div>
        <div className="flex flex-col gap-y-4">
          <h1 className="text-2xl font-bold font-quickSand">Account</h1>
          <p className="footer-tags">Sign In</p>
          <p className="footer-tags">View Cart</p>
          <p className="footer-tags">My Wishlist</p>
          <p className="footer-tags">Track My Order</p>
          <p className="footer-tags">Help Ticket</p>
          <p className="footer-tags">Shipping Details</p>
          <p className="footer-tags">Compare products</p>
        </div>
        <div className="flex flex-col gap-y-4">
          <h1 className="text-2xl font-bold font-quickSand">Corporate</h1>
          <p className="footer-tags">Become a Vendor</p>
          <p className="footer-tags">Affiliate Program</p>
          <p className="footer-tags">Farm Business</p>
          <p className="footer-tags">Farm Careers</p>
          <p className="footer-tags">Our Suppliers</p>
          <p className="footer-tags">Accessibility</p>
          <p className="footer-tags">Promotions</p>
        </div>
        <div className="flex flex-col gap-y-4">
          <h1 className="text-2xl font-bold font-quickSand">Popular</h1>
          <p className="footer-tags">Milk and Flavored Milk</p>
          <p className="footer-tags">Butter and Margraine</p>
          <p className="footer-tags">Eggs Substitutes</p>
          <p className="footer-tags">Marmalades</p>
          <p className="footer-tags">Sour Cream and Dips</p>
          <p className="footer-tags">Tea and Kombucha</p>
          <p className="footer-tags">Cheese</p>
        </div>
      </div>
      <div className="flex flex-col gap-y-3">
        <h1 className="text-2xl font-bold font-quickSand">Install App</h1>
        <p>From App Store or Google Play</p>
        <div className="inline-flex my-4 gap-x-4 ">
          <img src={app_store} alt="" className="w-32 h-10 cursor-pointer" />
          <img src={google_play} alt="" className="w-32 h-10 cursor-pointer" />
        </div>
        <div>
          <p className="mb-4">Secured Payment Gateways</p>
          <img src={payment_method} alt="" />
        </div>
      </div>
      <hr className="my-16 bg-primary" />
    </div>
  );
};

export default MainFooter;
