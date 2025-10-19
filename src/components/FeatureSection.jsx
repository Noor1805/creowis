import FeatureCard from "./FeatureCard";
import { useState, useEffect } from "react";

export default function FeatureSection() {
  const [isLgUp, setIsLgUp] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsLgUp(window.innerWidth >= 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section aria-labelledby="key-features-heading">
      {!isLgUp && (
        <div className="bg-black text-white px-5 pt-16 pb-16 min-h-screen">
         
          <button
            aria-label="Whats the best"
            className="rounded-full inline-flex h-10 items-center px-4 text-base font-medium bg-[#00BB77] text-black"
          >
            Whats the best
          </button>

          <h2
            id="key-features-heading"
            className="mt-4 text-5xl sm:text-6xl font-semibold leading-tight"
          >
            Key Features
          </h2>

          <p className="mt-2 text-lg sm:text-xl leading-snug text-white/85">
            We’re proud to announce with the features that empower creatives
            every day.
          </p>

          <div className="mt-6 overflow-x-auto scroll-smooth -mx-5 px-5">
            <div className="flex gap-4 flex-nowrap">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="min-w-[260px] flex-shrink-0">
                  <FeatureCard featureName={`Feature\nName ${i}`} />
                </div>
              ))}
            </div>
          </div>

          <p className="mt-6 text-2xl sm:text-3xl font-medium leading-snug">
            Creative people worldwide rely on this app to craft ideas into{" "}
            <span className="text-[#00BB77]">digital magic.</span>
          </p>
        </div>
      )}

      {isLgUp && (
        <div className="pt-[120px] md:pt-[160px] pb-8 px-6 md:px-12 lg:px-20 bg-black min-h-screen">
          <button className="rounded-full w-[122px] h-[32px] text-sm leading-[19.6px] py-[6px] px-[12px] bg-[#00BB77]">
            What's the best
          </button>

          <h2 className="font-medium text-4xl lg:text-[100px] text-white mt-4">
            Key features
          </h2>

          <p className="text-base lg:text-2xl text-white mt-2">
            We’re proud to announce with the features{" "}
            <br className="hidden lg:block" />
            that empower creatives every day.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-between items-center gap-6 mt-8">
            <div className="flex-1 min-w-[260px] max-w-[400px]">
              <FeatureCard featureName={"Feature\nName 1"} />
            </div>
            <div className="flex-1 min-w-[260px] max-w-[400px]">
              <FeatureCard featureName={"Feature\nName 2"} />
            </div>
          </div>

          <div className="flex justify-center mt-8 flex-wrap gap-6">
            <div className="flex-1 min-w-[260px] max-w-[400px]">
              <FeatureCard featureName={"Feature\nName 3"} />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row flex-wrap justify-between items-center gap-8 mt-8 overflow-hidden">
            <p className="text-white text-2xl lg:text-6xl font-medium text-center lg:text-left lg:flex-[0.6]">
              Creative people worldwide rely <br className="hidden lg:block" /> on
              this app to craft ideas <br className="hidden lg:block" /> into{" "}
              <span className="text-[#00BB77]">digital magic.</span>
            </p>
            <div className="flex-1 min-w-[260px] max-w-[400px] mt-6 lg:mt-0">
              <FeatureCard featureName={"Feature\nName 4"} />
            </div>
          </div>

          
          <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-6 mt-6">
            <div className="flex-1 min-w-[260px] max-w-[400px]">
              <FeatureCard featureName={"Feature\nName 5"} />
            </div>
            <div className="flex-1 min-w-[260px] max-w-[400px]">
              <FeatureCard featureName={"Feature\nName 6"} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
