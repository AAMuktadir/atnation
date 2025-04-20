import React from "react";
import HomeNavigation from "./homeNavigation";
import Image from "next/image";

export default function NewHome() {
  return (
    <div className="relative w-full h-screen overflow-hidden z-0">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/video/Hero-video-06.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center backdrop-brightness-75 h-full w-full">
        <div className="z-10s">
          <Image
            src="/Global/Logo.png"
            alt="logo"
            width={600}
            height={600}
            className="w-64 sm:w-80 md:w-[300px] lg:w-[400px] xl:w-[500px] h-auto"
            priority
          />
        </div>

        {/* Navigation Container */}
        <div className="w-full bg-black/50 py-4 sm:py-6 md:py-8">
          <HomeNavigation />
        </div>
      </div>
    </div>
  );
}
