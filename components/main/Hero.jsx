import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div
      id="hero"
      className="relative min-h-[720px] lg:min-h-[820px] w-full flex flex-col overflow-hidden"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-[-120px] z-[1] h-[820px] w-full rotate-180 object-cover opacity-90 sm:top-[-220px] sm:h-[900px] lg:top-[-340px] lg:h-full"
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>

      <div className="absolute inset-0 z-[2] bg-gradient-to-b from-[#030014]/20 via-transparent to-[#030014]" />

      <HeroContent />
    </div>
  );
};

export default Hero;