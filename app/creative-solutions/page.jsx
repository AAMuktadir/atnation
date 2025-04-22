"use client";
import React from "react";
import Header from "@/Components/global/header";
import LayoutFooter from "@/Components/global/layoutFooter";
import SlideButton from "@/Components/digitalMarketing/slideButton";
import TestAnimation from "@/Components/testAnimation";

export default function Page() {
  return (
    <div>
      <Header />
      <TestAnimation />
      <SlideButton />
      <LayoutFooter />
    </div>
  );
}
