import React, { useEffect, useState } from "react";
import logo from "../assets/images/logo.png";
import { FiShoppingCart, FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMdUp, setIsMdUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 75);
    const handleResize = () => setIsMdUp(window.innerWidth >= 768);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isMdUp && (
        <div
          className={`fixed top-0 left-0 w-full z-50 bg-emerald-500 overflow-hidden py-1 transition-transform duration-300 ${
            scrolled ? "-translate-y-full" : "translate-y-0"
          }`}
        >
          <div className="flex animate-scroll whitespace-nowrap min-w-max justify-center w-full">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="flex items-center text-xs sm:text-sm md:text-base font-medium"
              >
                <span className="mx-2 sm:mx-4">Get one year FREE</span>
                <span className="mx-1 sm:mx-2">✦</span>
                <span className="mx-2 sm:mx-4">Only for limited users</span>
                <span className="mx-1 sm:mx-2">✦</span>
                <span className="mx-2 sm:mx-4">Join the launch event</span>
                <span className="mx-1 sm:mx-2">✦</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Navbar */}
      <header
        className={`fixed left-0 w-full z-30 flex items-center justify-between px-8 py-4 backdrop-blur-md bg-black/20 transition-all duration-300 ${
          isMdUp ? (scrolled ? "top-0" : "top-4") : "top-0"
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
          <span className="relative flex items-center bg-white rounded-full border-2 border-white overflow-hidden group w-[120px] h-[48px] md:w-[150px] md:h-[60px] cursor-pointer transition-all duration-500 ease-in-out">
            
            <span className="absolute left-0 top-0 w-[48px] h-[48px] md:w-[60px] md:h-[60px] bg-black rounded-full transition-all duration-500 ease-in-out group-hover:w-full group-hover:rounded-full"></span>

            <span className="relative flex items-center justify-center h-[40px] w-[40px] md:h-[52px] md:w-[52px] ml-1 z-10 transition-colors duration-500 ease-in-out">
              <FiShoppingCart className="text-[#00BB77] text-lg md:text-xl group-hover:text-white transition-colors duration-500" />
            </span>

            <button className="relative flex-1 text-black font-medium text-sm md:text-lg z-10 transition-colors duration-500 ease-in-out group-hover:text-white">
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
        <div className="md:hidden fixed top-[96px] left-0 w-full bg-black text-white flex flex-col items-center py-4 space-y-4 z-50">
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
