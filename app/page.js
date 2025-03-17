"use client";
import HeroSection from "@/Components/home/heroSection";
import CreativeDesign from "@/Components/home/creativeDesign";
import SmartDevelopment from "@/Components/home/smartDevelopment";
import BrandIdentities from "@/Components/home/brandIdentities";
import { HelloSparkles } from "@/Components/home/helloComponent";
import LatestUpdates from "@/Components/home/latestUpdates";

import Header from "@/Components/global/header";

export default function Home() {
  return (
    <main className="">
      <Header />
      <HeroSection />
      {/* <BiggerBetter /> */}
      <CreativeDesign />
      <SmartDevelopment />
      <BrandIdentities />
      {/* <ArtDirection />
        <InHouseSolutions />
        <CoolestProjects />
        <DevelopmentTools /> */}

      <LatestUpdates />

      <HelloSparkles />
    </main>
  );
}
