"use client";
import dynamic from "next/dynamic";
import React from "react";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
});

export default function CreativeSolutionAnimation() {
  return (
    <div className="relative w-full h-screen">
      <Spline scene="https://prod.spline.design/J-29532UxVlnfs-Q/scene.splinecode" />
      <div className="absolute inset-0 flex items-center justify-center text-white pointer-events-none"></div>
    </div>
  );
}
