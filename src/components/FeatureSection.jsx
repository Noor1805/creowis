import FeatureCard from "./FeatureCard";
import { useState, useEffect } from "react";

export default function FeatureSection() {
  const [isMdUp, setIsMdUp] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMdUp(window.innerWidth >= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section aria-labelledby="key-features-heading">
      {!isMdUp && (
        <div className="md:hidden bg-black text-white px-5 pt-20 pb-16 min-h-screen">
          {/* Button */}
          <button
            aria-label="Whats the best"
            className="rounded-full inline-flex h-8 items-center px-3 text-sm font-medium bg-[#00BB77] text-black"
          >
            Whats the best
          </button>

          {/* Heading */}
          <h2 id="key-features-heading" className="mt-4 text-4xl font-medium">
            Key Features
          </h2>

          {/* Paragraph */}
          <p className="mt-3 text-base leading-relaxed text-white/85">
            We’re proud to announce with the features that empower creatives
            every day.
          </p>

          {/* Feature Cards Horizontal Scroll */}
          <div className="mt-6 overflow-x-hidden relative">
            <div className="flex gap-4 animate-scroll-x w-max">
              <FeatureCard featureName={"Feature\nName 1"} />
              <FeatureCard featureName={"Feature\nName 2"} />
              <FeatureCard featureName={"Feature\nName 3"} />
              <FeatureCard featureName={"Feature\nName 4"} />
              <FeatureCard featureName={"Feature\nName 5"} />
            </div>
          </div>

          <style jsx>{`
            @keyframes scroll-x {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }

            .animate-scroll-x {
              animation: scroll-x 15s linear infinite;
            }
          `}</style>

          {/* Final Paragraph */}
          <p className="mt-8 text-2xl font-medium leading-snug">
            Creative people worldwide rely on this app to craft ideas into{" "}
            <span className="text-[#00BB77]">digital magic.</span>
          </p>
        </div>
      )}

      {isMdUp && (
        <div className="pt-[120px] md:pt-[160px] pb-8 px-6 md:px-[60px] bg-black min-h-screen">
          <button className="rounded-full w-[110px] md:w-[122px] h-[30px] md:h-[32px] text-xs md:text-sm leading-[19.6px] py-[6px] px-[12px] bg-[#00BB77]">
            What's the best
          </button>

          <h2 className="font-medium text-4xl md:text-[100px] text-white mt-4">
            Key features
          </h2>

          <p className="text-base md:text-2xl text-white mt-3">
            We’re proud to announce with the features{" "}
            <br className="hidden md:block" />
            that empower creatives every day.
          </p>

          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-6 mt-8">
            <div className="w-[260px]  md:w-[320px] lg:w-[400px]">
              <FeatureCard featureName={"Feature\nName 1"} />
            </div>
            <div className="w-[260px] md:w-[320px] lg:w-[400px]">
              <FeatureCard featureName={"Feature\nName 2"} />
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <div className="w-[260px] md:w-[320px] lg:w-[400px]">
              <FeatureCard featureName={"Feature\nName 3"} />
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-1 mt-8 overflow-hidden">
            <p className="text-white text-2xl md:text-4xl md:w-[55%] lg:w-[55%] lg:text-6xl font-medium text-center md:text-left">
              Creative people worldwide rely <br className="hidden md:block" />{" "}
              on this app to craft ideas <br className="hidden md:block" /> into{" "}
              <span className="text-[#00BB77]">digital magic.</span>
            </p>
            <div className="w-[260px] md:w-[300px] lg:w-[400px]">
              <FeatureCard featureName={"Feature\nName 4"} />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-6 mt-6">
            <div className="w-[260px] md:w-[320px] lg:w-[400px]">
              <FeatureCard featureName={"Feature\nName 5"} />
            </div>
            <div className="w-[260px] md:w-[320px] lg:w-[400px]">
              <FeatureCard featureName={"Feature\nName 6"} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
