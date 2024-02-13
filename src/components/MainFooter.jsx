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
} from "../assets/Logo & raw/index";

const MainFooter = () => {
  return (
    <div className="font-lato">
      <div className="flex justify-between ">
        <div>
          <div className="my-2">
            <img src={logo} alt="" />
            <p className="my-4 text-[17px]">
              Awesome grocery store website template
            </p>
          </div>
          <div className="flex flex-col gap-y-2 text-[15px]">
            <div className="flex items-center justify-center gap-x-2">
              <CiLocationOn className="w-4 h-4 text-primary" />
              <p>
                <span className="hidden font-bold lg:inline-block ">
                  Address:
                </span>
                5171 W Campbell Ave undefined Kent, Utah 53127 United States
              </p>
            </div>
            <div className="flex items-center gap-x-2">
              <LiaHeadphonesAltSolid className="w-4 h-4 text-primary" />
              <p>
                <span>Call Us:</span>(+91) - 540-025-124553
              </p>
            </div>
            <div className="flex items-center gap-x-2">
              <BsSend className="w-4 h-4 text-primary" />

              <p>
                <span>Email:</span>sale@Nest.com
              </p>
            </div>
            <div className="flex items-center gap-x-2">
              <PiClockCountdownLight className="w-4 h-4 text-primary" />
              <p>
                <span>Hours:</span>10:00 - 18:00, Mon - Sat
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-4">
          <p>Company</p>
          <p>About Us</p>
          <p>Delivery Information</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
          <p>Contact Us</p>
          <p>Support Center</p>
          <p>Careers</p>
        </div>
        <div className="flex flex-col gap-y-4">
          <h1>Account</h1>
          <p>Sign In</p>
          <p>View Cart</p>
          <p>My Wishlist</p>
          <p>Track My Order</p>
          <p>Help Ticket</p>
          <p>Shipping Details</p>
          <p>Compare products</p>
        </div>
        <div className="flex flex-col gap-y-4">
          <h1>Corporate</h1>
          <p>Become a Vendor</p>
          <p>Affiliate Program</p>
          <p>Farm Business</p>
          <p>Farm Careers</p>
          <p>Our Suppliers</p>
          <p>Accessibility</p>
          <p>Promotions</p>
        </div>
        <div className="flex flex-col gap-y-4">
          <h1>Popular</h1>
          <p>Milk and Flavored Milk</p>
          <p>Butter and Margraine</p>
          <p>Eggs Substitutes</p>
          <p>Marmalades</p>
          <p>Sour Cream and Dips</p>
          <p>Tea and Kombucha</p>
          <p>Cheese</p>
        </div>
      </div>
      <div>
        <h1>Install App</h1>
        <p>From App Store or Google Play</p>
        <div className="inline-flex gap-x-4 ">
          <img src={app_store} alt="" className="w-32 h-10" />
          <img src={google_play} alt="" className="w-32 h-10" />
        </div>
        <div>
          <p>Secured Payment Gateways</p>
          <img src={payment_method} alt="" />
        </div>
      </div>
    </div>
  );
};

export default MainFooter;
