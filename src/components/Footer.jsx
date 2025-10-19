import React from "react";
import { FaLinkedinIn, FaInstagram, FaXTwitter } from "react-icons/fa6";
import logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="py-12 px-6 md:px-20 bg-[#1C1C1C]">
      <div className="flex flex-col md:flex-row md:justify-between gap-8">
        
        <div className="flex items-center gap-2">
          <img src={logo} alt="CirriNote Logo" className="h-8 w-auto" />
          <span className="font-semibold text-lg text-white">CirriNote</span>
        </div>
        <div className="flex items-center gap-4 text-xl md:justify-center">
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

      <div className="mt-8 flex flex-col gap-2 md:flex-row md:justify-between text-left">
        <p className="text-gray-400 text-sm">© CirriNote 2025</p>
        <p className="text-gray-400 text-sm">Crafted with passion by CreoWis</p>
      </div>
    </footer>
  );
};

export default Footer;
