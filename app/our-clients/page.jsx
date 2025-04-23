import React from "react";
import OurClients from "@/Components/home/ourClients";
import ReviewSlider from "@/Components/ourClients/reviewSlider";
import Header from "@/Components/global/header";

export default function page() {
  return (
    <div className="">
      <Header />
      <div className="pt-8 bg-background">
        <OurClients />
      </div>
      <div className="">
        <ReviewSlider />
      </div>
    </div>
  );
}
