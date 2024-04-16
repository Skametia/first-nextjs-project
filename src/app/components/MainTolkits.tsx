import React from "react";
import { WavyBackground } from "./ui/wavy-background";
import Toolkits from "./Toolkits";

const MainTolkits = () => {
  return (
    <div className="h-[40rem] relative overflow-hidden  items-center justify-center">
      <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
        <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
          Meet Our Instructors
        </h2>
        <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
          Discover the talented Professionals who will guide your musical
          journey
        </p>
        <Toolkits />
      </WavyBackground>
    </div>
  );
};

export default MainTolkits;
