"use client";
import React from "react";
import Spline from "@splinetool/react-spline";

export default function CreativeSolutionAnimation() {
  return (
    <div className="py-20">
      <div className="flex flex-col items-center justify-center">
        <h2>This is a example Page</h2>
        <Spline scene="https://prod.spline.design/IRs-hpEoDY7olt0e/scene.splinecode" />
      </div>
    </div>
  );
}
