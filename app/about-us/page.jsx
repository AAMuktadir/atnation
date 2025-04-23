import React from "react";
import WhatMakesUsDifferent from "@/Components/about/wmudfo";
import Header from "@/Components/global/header";
import LayoutFooter from "@/Components/global/layoutFooter";

export default function page() {
  return (
    <>
      <div className="">
        <Header />
        <div className="bg-black pt-8 h-full px-4 sm:px-32">
          <h3 className="text-4xl sm:text-7xl text-white font-semibold">
            ATnation Inc is a complete solutions provider
          </h3>
          <p className="text-white text-sm pb-8 pt-2 font-medium text-justify">
            that provides technology integrated end-to-end impact oriented and
            data driven organisational solutions. Taking a needs based approach,
            the company designs technology that augments business and
            organisational performances. Having provided solutions to various
            organisations, it has recently started expanding its reach by
            designing technological solutions to address community societal
            issues.
          </p>
          <div className="sm:flex items-center justify-center gap-12">
            <div className="sm:w-1/2">
              <video width="400" height="400" autoPlay loop muted className="">
                <source src="/image/anim/aboutAnim.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="text-white sm:w-1/2 text-justify">
              <p>
                Over the years, we have propelled numerous businesses to thrive,
                maintaining robust partnerships through our collaborative
                approach.
              </p>

              <p className="py-8 text-justify">
                We are proud to help businesses grow and succeed in different
                industries. From startups to established enterprises, our
                tailored solutions have helped them conquer challenges, reach
                milestones, and actualize their visions.
              </p>
            </div>
          </div>
        </div>
        <WhatMakesUsDifferent />
        <LayoutFooter />
      </div>
    </>
  );
}
