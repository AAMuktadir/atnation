"use client";
import React from "react";
import dynamic from "next/dynamic";

const SplineWrapper = dynamic(() => import("./splineWrapperMarketing"), {
  ssr: false,
});

export default function CreativeSolutionAnimation() {
  return (
    <div className="flex flex-col items-center justify-center">
      <SplineWrapper />
    </div>
  );
}
