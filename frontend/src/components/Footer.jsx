import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-row sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40  text-sm">
        <div>
          <img src={assets.logo1} className="mb-5 w-32" alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
          Quality products, seamless shopping—only at ShopEase
            
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">Get In Touch</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+1-212-459-7890</li>
            <li>contact@shopease.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center ">
          Copy2024@ shopease.com - All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
