import React from "react";
import { FaLinkedinIn, FaInstagram, FaXTwitter } from "react-icons/fa6";
import logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="py-[80px] px-[40px] flex flex-col gap-16 bg-[#1C1C1C] md:flex md:col">
      {/* Left Section */}
      <div className="flex justify-between">
        <div className="flex items-between items-center gap-2">
          <img src={logo} alt="" />
          <span className="font-semibold text-lg text-white">CirriNote</span>
        </div>
        <div className="flex justify-center items-center gap-4 text-xl">
          <a href="#" aria-label="LinkedIn">
            <FaLinkedinIn className="text-white" />
          </a>
          <a href="#" aria-label="Instagram">
            <FaInstagram className="text-white" />
          </a>
          <a href="#" aria-label="X (Twitter)">
            <FaXTwitter className="text-white" />
          </a>
        </div>
      </div>
      <div className="flex justify-between">
        <p className="text-gray-400 text-sm md:ml-4">© CirriNote 2025</p>
        <p className="text-gray-400 text-sm md:mt-0">
          Crafted with passion by CreoWis
        </p>
      </div>
    </footer>
  );
};

export default Footer;
