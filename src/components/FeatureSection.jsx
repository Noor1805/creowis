import FeatureCard from "./FeatureCard";
import { useState, useEffect } from "react";

export default function FeatureSection() {
  const [isMdUp, setIsMdUp] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMdUp(window.innerWidth >= 768);
    handleResize(); // initialize correctly
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section aria-labelledby="key-features-heading">
      {/* Mobile */}
      {!isMdUp && (
        <div className="md:hidden bg-black text-white px-5 pt-20 pb-16 min-h-screen">
          <button
            aria-label="Whats the best"
            className="rounded-full inline-flex h-8 items-center px-3 text-sm font-medium bg-[#00BB77] text-black"
          >
            Whats the best
          </button>

          <h2 id="key-features-heading" className="mt-4 text-4xl font-medium">
            Key Features
          </h2>

          <p className="mt-3 text-base leading-relaxed text-white/85">
            We’re proud to announce with the features that empower creatives
            every day.
          </p>

          <div className="mt-6 -mx-5 overflow-x-auto [&::-webkit-scrollbar]:hidden">
            <div className="px-5 flex gap-4">
              <FeatureCard featureName={"Feature\nName"} />
              <FeatureCard featureName={"Feature\nName"} />
              <FeatureCard featureName={"Feature\nName"} />
            </div>
          </div>

          <p className="mt-8 text-2xl font-medium leading-snug">
            Creative people worldwide rely on this app to craft ideas into{" "}
            <span className="text-[#00BB77]">digital magic.</span>
          </p>
        </div>
      )}

      {/* Desktop */}
      {isMdUp && (
        <div className="pt-[160px] pr-[40px] pl-[40px] bg-black min-h-screen">
          <button className="rounded-full w-[122px] h-[32px] text-sm leading-[19.6px] py-[6px] px-[12px] bg-[#00BB77]">
            What's the best
          </button>

          <h2 className="font-medium text-[80px] text-white">Key features</h2>

          <p className="text-xl text-white">
            We’re proud to announce with the features <br /> that empower
            creatives every day.
          </p>

          <div className="flex justify-between mt-8">
            <FeatureCard featureName={"Feature\nName 1"} />
            <FeatureCard featureName={"Feature\nName 2"} />
          </div>
          <div className="flex justify-center mt-8">
            <FeatureCard featureName={"Feature\nName 3"} />
          </div>
          <div className="flex justify-between mt-8">
            <p className="text-white text-5xl font-medium">
              Creative people worldwide rely <br /> on this app to craft ideas{" "}
              <br /> into <span className="text-[#00BB77]">digital magic.</span>
            </p>
            <FeatureCard featureName={"Feature\nName 4"} />
          </div>
        </div>
      )}
    </section>
  );
}
