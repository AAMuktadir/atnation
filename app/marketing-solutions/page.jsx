"use client";
import React from "react";
import Header from "@/Components/global/header";
import LayoutFooter from "@/Components/global/layoutFooter";
import SlideButton from "@/Components/digitalMarketing/slideButton";
import CreativeSolutionAnimation from "@/Components/otherComponents/animation/creativeSolutions";

export default function Page() {
  return (
    <div>
      <Header />
      <CreativeSolutionAnimation />
      <SlideButton />
      <LayoutFooter />
    </div>
  );
}
