import React from "react";
import { wmudfoData } from "@/data/wmudfoData";

export default function WhatMakesUsDifferent() {
  return (
    <div className="w-full bg-whiteBG px-4 sm:px-20 pt-4 pb-16">
      <h4 className="text-xl sm:text-6xl pb-4 sm:py-8 font-medium">
        What makes us
        <br /> different from others
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-20">
        {wmudfoData.map((data, id) => (
          <div
            className="hover:bg-footer rounded-2xl p-4 h-60 text-center hover:text-black drop-shadow-2xl shadow-black px-8 -skew-y-6 hover:skew-y-0 text-whiteBG bg-darkBG duration-300"
            key={data.id}
          >
            <h2 className="text-lg sm:text-xl font-medium">{data.title}</h2>
            <p className="text-sm sm:text-sm pt-4">{data.description}</p>
          </div>
        ))}
      </div>
    </div>
    // bg-gray-200 rounded-2xl p-4 h-60 text-center text-darkBG drop-shadow-2xl shadow-black px-8 hover:-skew-y-6 hover:text-whiteBG hover:bg-darkBG duration-300
  );
}
