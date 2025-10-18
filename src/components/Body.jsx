import React from "react";
import bodyImage from "../assets/images/bodyImage.png";
import bgImage from "../assets/images/bg.png";

const Body = () => {
  return (
    <>
      {/* Image Section */}
      <div className="flex justify-center bg-black w-full h-[900px] relative">
        {/* Desktop Image */}
        <img src={bodyImage} alt="Body" className="hidden md:block h-[725px]" />

        {/* Mobile Image */}
        <div className="block md:hidden relative w-full h-full">
          <img
            src={bgImage}
            alt="Background"
            className="absolute top-40 right-[-50px] h-[725px]"
          />

          {/* Mobile Texts */}
          <div className="absolute  top-16 left-10 z-10 flex flex-col gap-3">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white">Note-Taking</h1>
            <h1 className="text-5xl sm:text-6xl md:text-7xl  font-bold text-emerald-500">Redefined</h1>
          </div>
        </div>

        
      </div>

      {/* Text Section */}
      <div className="bg-[#1a1a1a] flex flex-col items-center justify-center gap-12 w-full h-[900px]">
        <h2 className="text-white text-5xl text-center">
          An extraordinary note <br /> for{" "}
          <span className="text-[#00BB77]">makers, creators..</span>
        </h2>
        <span>
          <img src={bodyImage} alt="Icon" className="w-[160px] h-[160px]" />
        </span>
        <p className="text-white text-xl text-center">
          Creators around the planet use this app <br />
          for creating <span className="text-[#00BB77]">magic.</span>
        </p>
      </div>
    </>
  );
};

export default Body;
