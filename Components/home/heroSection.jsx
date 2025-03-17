"use client";
import React from "react";
import TextAnimation from "./textAnimation";

export default function HeroSection() {
  const texts = ["It", "Marketing", "and", "Promotional Event Management"];
  return (
    <>
      <section className="bg-black sm:flex items-center sm:px-16 pb-16">
        {/* <div className="text-white text-5xl sm:text-9xl tracking-widest py-20  px-4 sm:px-0 z-10">
          <h2 className="pb-4">WE CREATE</h2>
          <TextAnimation />
        </div> */}

        <div className="text-white text-5xl sm:text-8xl tracking-widest py-20  px-4 sm:px-0 z-10 w-full">
          <section className="w-full items-center justify-start">
            <div className="">
              <h2 className="">WE CREATE</h2>
            </div>

            <div className="h-32 flex items-center justify-left">
              <h5 className="text-footer uppercase text-4xl sm:text-5xl tracking-wide ">
                <TextAnimation texts={texts} />
              </h5>
            </div>
          </section>

          <h2 className=" uppercase">Solutions</h2>
        </div>
      </section>
    </>
  );
}
