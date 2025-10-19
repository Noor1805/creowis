import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import bodyImage from "../assets/images/bodyImage.png";
import bgImage from "../assets/images/bg.png";
import Icon from "../assets/images/Icon.png";

gsap.registerPlugin(ScrollTrigger);

const Body = () => {
  const iconRef = useRef(null);
  const headingRef = useRef(null);
  const paraRef = useRef(null);

  useEffect(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: iconRef.current,
      start: "top 80%",
    },
  });

  
  tl.fromTo(
    iconRef.current,
    { y: -500, opacity: 0 },
    { y: 0, opacity: 1, duration: 1, ease: "bounce.out" }
  )
    
    .fromTo(
      headingRef.current,
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1 },
      "-=0.5" 
    )
    
    .fromTo(
      paraRef.current,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1 },
      "-=0.5"
    );
}, []);


  return (
    <>
      <div className="flex justify-center bg-black w-full h-[900px] relative">
        <img src={bodyImage} alt="Body" className="hidden md:block h-[725px]" />

        <div className="block md:hidden relative w-full h-full">
          <img
            src={bgImage}
            alt="Background"
            className="absolute top-40 right-[-50px] h-[725px]"
          />

          <div className="absolute top-16 left-10 z-10 flex flex-col gap-3">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white">
              Note-Taking
            </h1>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-emerald-500">
              Redefined
            </h1>
          </div>
        </div>
      </div>

      <div className="bg-[#1a1a1a] flex flex-col items-center justify-center gap-8 md:gap-12 w-full min-h-[700px] md:h-[900px] px-4 md:px-0">
        <h2
          ref={headingRef}
          className="text-white text-3xl sm:text-4xl md:text-5xl text-center leading-snug"
        >
          An extraordinary note <br /> for{" "}
          <span className="text-[#00BB77]">makers, creators..</span>
        </h2>

        <span ref={iconRef}>
          <img
            src={Icon}
            alt="Icon"
            className="w-[120px] sm:w-[140px] md:w-[160px] h-[120px] sm:h-[140px] md:h-[160px]"
          />
        </span>

        <p
          ref={paraRef}
          className="text-white text-base sm:text-lg md:text-xl text-center leading-relaxed max-w-2xl"
        >
          Creators around the planet use this app <br />
          for creating <span className="text-[#00BB77]">magic.</span>
        </p>
      </div>
    </>
  );
};

export default Body;


