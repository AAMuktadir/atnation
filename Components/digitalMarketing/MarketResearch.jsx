import React from "react";
import Image from "next/image";

export default function MarketResearch() {
  return (
    <div
      id="web-development"
      className="bg-gradient-to-r from-footer to-gray-700 sm:to-black p-4 flex flex-col sm:flex-row items-start gap-8 sm:gap-0"
    >
      <div className="sm:w-1/2">
        <section className="flex">
          <h3 className="bg-white text-black text-2xl font-medium text-left px-4 py-2 rounded-2xl">
            Market Research
          </h3>
        </section>

        <h5 className="text-3xl text-black font-semibold px-4 py-6">
          We perform market <br />
          research
        </h5>

        <p className="text-black px-4 text-sm font-medium text-justify">
          We perform market research for clients that are either seeking to
          deviate from their current business model or are looking to initiate a
          new business and would like to understand their target audience’s
          needs better.
        </p>
      </div>

      <div className="sm:w-1/2 sm:h-80">
        <Image
          src={"/image/digital-marketing/crmSolution.png"}
          height={350}
          width={350}
          alt="image"
        />
      </div>
    </div>
  );
}
