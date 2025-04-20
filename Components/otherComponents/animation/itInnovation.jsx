import React from "react";
import Spline from "@splinetool/react-spline";

export default function ItInnovation() {
  return (
    <div className="relative w-full h-screen">
      <Spline scene="https://prod.spline.design/GsIb7gDcbdl49Yfz/scene.splinecode" />

      <div className="absolute inset-0 flex items-center justify-center text-white pointer-events-none"></div>
    </div>
  );
}
