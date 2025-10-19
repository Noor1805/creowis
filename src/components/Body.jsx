import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import bgImage from "../assets/images/bg.png";
import Icon from "../assets/images/Icon.png";

gsap.registerPlugin(ScrollTrigger);

const Body = () => {
  const noteRef = useRef(null); 
  const redefinedRef = useRef(null); 
  const bgRef = useRef(null); 

  const iconRef = useRef(null); 
  const headingRef = useRef(null);
  const paraRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth >= 768) {
      const tl = gsap.timeline();

      tl.fromTo(
        bgRef.current,
        { y: 500, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
      )
        .fromTo(
          noteRef.current,
          { x: 200, opacity: 0 },
          { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
          "-=0.8"
        )
        .fromTo(
          redefinedRef.current,
          { x: -200, opacity: 0 },
          { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
          "-=0.8"
        );

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: iconRef.current,
          start: "top 80%",
        },
      });

      scrollTl
        .fromTo(
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
    }
  }, []);

  return (
    <>
      <div className="hidden md:flex items-center justify-center bg-black w-full md:h-[650px] lg:h-[750px] relative overflow-hidden px-4 lg:px-20">
        {/* Background Image */}
        <img
          ref={bgRef}
          src={bgImage}
          alt="Background"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[725px] object-contain opacity-90"
        />

        {/* Left Text */}
        <div
          ref={noteRef}
          className="absolute left-[4%] md:left-[4%] lg:left-[4%] xl:left-[8%] 2xl:left-[8%] top-[40%] md:top-[35%] xl:top-[30%] -translate-y-[40%] z-10 max-w-[35vw]"
        >
          <h1 className="text-white text-5xl md:text-5xl lg:text-6xl xl:text-7xl  2xl:text-8xl font-bold leading-tight text-left whitespace-nowrap">
            Note Taking
          </h1>
        </div>

        {/* Right Text */}
        <div
          ref={redefinedRef}
          className="absolute right-[4%] md:right-[4%] lg:right-[5%] xl:right-[9%] 2xl:right-[12%] top-[48%] -translate-y-[40%] z-10 max-w-[35vw]"
        >
          <h1 className="text-emerald-500 text-5xl md:text-5xl lg:text-7xl 2xl:text-8xl  font-bold leading-tight text-right whitespace-nowrap">
            Redefined
          </h1>
        </div>
      </div>

      <div className="block md:hidden relative w-full h-[700px] bg-black overflow-hidden">
        <img
          src={bgImage}
          alt="Background"
          className="absolute top-1/2 right-[-80px] transform -translate-y-1/2 scale-125 h-[400px] w-[700px] object-cover opacity-100"
        />

        <div className="absolute top-40 md:top-20 left-2.5 -translate-y-1/2 z-10 flex flex-col gap-0">
          <h1 className="text-4xl sm:text-6xl font-bold text-white leading-tight">
            Note Taking
          </h1>
          <h1 className="text-4xl sm:text-6xl font-bold text-emerald-500 leading-tight">
            Redefined
          </h1>
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
