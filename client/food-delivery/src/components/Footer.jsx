import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter , FaLinkedinIn  } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="grid grid-cols-4 w-full h-[429px] mt-28 bg-[#FAFAFF] ">
      <div className="flex flex-col gap-[30px] p-10 justify-center">
        <img src="images/logo.png" className="w-[181px] h-[108px]" />
        <h1 className="text-lg font-medium text-[#B6B6B6]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo
          libero viverra dapibus odio sit malesuada in quis. Arcu tristique
          elementum viverra integer id.
        </h1>

        <div className="flex gap-10">
            <div className="w-11 h-11 bg-[#F5DDC4] rounded-full flex items-center justify-center text-xl"><FaFacebookF /></div>
            <div className="w-11 h-11 bg-[#F5DDC4] rounded-full flex items-center justify-center text-xl"><FaLinkedinIn /></div>
            <div className="w-11 h-11 bg-[#F5DDC4] rounded-full flex items-center justify-center text-xl"><FaTwitter /></div>
            <div className="w-11 h-11 bg-[#F5DDC4] rounded-full flex items-center justify-center text-xl"><FaInstagram /></div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-11">
        <h1 className="text-3xl font-bold">Opening Restaurant</h1>
        <div className="text-[#B6B6B6] font-medium text-lg flex flex-col">
          <span>Sat-Wet: 09:00am-10:00PM</span>
          <span>Thursdayt: 09:00am-11:00PM</span>
          <span>Friday: 09:00am-8:00PM</span>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-11">
        <h1 className="text-3xl font-bold">User Link</h1>
        <div className="text-[#B6B6B6] font-medium text-lg flex flex-col">
          <span>About Us</span>
          <span>Contact Us</span>
          <span>Order Delivery</span>
          <span>Payment & Tax</span>
          <span>Terms of Service</span>
        </div>
      </div>
      
      <div className="flex flex-col items-center justify-center gap-11">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <div className="text-[#B6B6B6] font-medium text-lg flex flex-col">
          <span>1234 Country Club Ave</span>
          <span>NC 123456, London, UK</span>
          <span>+0123 456 7891</span>
        </div>
      </div>

    </div>
  );
};

export default Footer;
