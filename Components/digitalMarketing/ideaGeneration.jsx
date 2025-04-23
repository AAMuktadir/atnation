import React from "react";
import Image from "next/image";

export default function IdeaAndBrand() {
  return (
    <div
      id="appDevelopment"
      className="bg-gradient-to-l from-footer to-gray-700 sm:to-black p-4 flex flex-col-reverse sm:flex-row items-start gap-y-8 sm:gap-0"
    >
      <div className="w-full sm:w-1/2 h-80 ">
        <Image
          src={"/image/digital-marketing/ecommerce.png"}
          height={300}
          width={350}
          alt="image"
          className=""
        />
      </div>
      <div className="sm:w-1/2 text-right">
        <section className="flex justify-end">
          <h3 className="bg-white text-black text-2xl font-medium text-left px-4 py-2 rounded-2xl">
            Idea Generation and Brand Strategy
          </h3>
        </section>
        <h5 className="text-3xl text-black font-semibold px-4 py-6">
          Want to promote your business
        </h5>
        <p className="text-black px-4 text-sm font-medium text-justify">
          Want to promote your business but don’t know where to start? Don’t
          worry as we perform research and analysis of any potential client’s
          existing brand strategies and present solutions as to how they can be
          improved upon.
        </p>
      </div>
    </div>
  );
}
