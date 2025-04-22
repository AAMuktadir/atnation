"use client";
import dynamic from "next/dynamic";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
});

export default function TestAnimation() {
  return (
    <div className="w-full h-screen">
      <Spline scene="https://prod.spline.design/J-29532UxVlnfs-Q/scene.splinecode" />
    </div>
  );
}
