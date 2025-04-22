"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
});

export default function CreativeSolutionAnimation() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="flex flex-col items-center justify-center">
      <Spline scene="https://prod.spline.design/IRs-hpEoDY7olt0e/scene.splinecode" />
    </div>
  );
}
