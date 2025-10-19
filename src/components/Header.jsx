import React, { useEffect, useState } from "react";
import logo from "../assets/images/logo.png";
import { FiShoppingCart, FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 75);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      
      <div className="bg-emerald-500 overflow-hidden py-2 hidden md:block">
        <div className="flex animate-scroll whitespace-nowrap">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center text-sm font-medium">
              <span className="mx-4">Get one year FREE</span>
              <span className="mx-2">✦</span>
              <span className="mx-4">Only for limited users</span>
              <span className="mx-2">✦</span>
              <span className="mx-4">Join the launch event</span>
              <span className="mx-2">✦</span>
            </div>
          ))}
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 px-8 py-4 flex items-center justify-between transition-colors duration-300 ${
          scrolled ? "bg-black/80" : "bg-black"
        }`}
      >
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
          <span className="text-lg font-bold text-white">CirriNote</span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-white font-medium">
          <a href="#" className="hover:text-emerald-500 transition-colors">
            About
          </a>
          <a href="#" className="hover:text-emerald-500 transition-colors">
            Features
          </a>
          <a href="#" className="hover:text-emerald-500 transition-colors">
            FAQs
          </a>
          <a href="#" className="hover:text-emerald-500 transition-colors">
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <span className="relative flex items-center bg-white rounded-full border-2 border-white overflow-hidden group w-[120px] h-[48px] md:w-[150px] md:h-[60px] cursor-pointer">
          
            <span className="absolute left-0 top-0 w-0 h-full bg-black transition-all duration-500 ease-in-out group-hover:w-full rounded-full"></span>

            
            <span className="bg-black relative flex items-center justify-center rounded-full h-[40px] w-[40px] md:h-[52px] md:w-[52px] ml-1 transition-colors duration-500 ease-in-out group-hover:text-white">
              <FiShoppingCart className="text-[#00BB77] text-lg md:text-xl group-hover:text-white transition-colors duration-500" />
            </span>

            
            <button className="relative flex-1 text-black font-medium text-sm md:text-lg transition-colors duration-500 ease-in-out group-hover:text-white">
              Try Now
            </button>
          </span>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white text-2xl focus:outline-none"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="md:hidden fixed top-36 left-0 w-full bg-black text-white flex flex-col items-center py-4 space-y-4 z-50">
          <a href="#about" className="hover:text-emerald-500 transition-colors">
            About
          </a>
          <a
            href="#features"
            className="hover:text-emerald-500 transition-colors"
          >
            Features
          </a>
          <a href="#faqs" className="hover:text-emerald-500 transition-colors">
            FAQs
          </a>
          <a
            href="#contact"
            className="hover:text-emerald-500 transition-colors"
          >
            Contact
          </a>
        </div>
      )}

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .animate-scroll {
          animation: scroll 10s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </>
  );
}
