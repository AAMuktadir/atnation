import React from "react";
import Image from "next/image";

export default function Campaign() {
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
            Campaign Planning
          </h3>
        </section>
        <h5 className="text-3xl text-black font-semibold px-4 py-6">
          Brand initiation that require significant planning
        </h5>
        <p className="text-black px-4 text-sm font-medium text-justify">
          For long-term projects based on brand launches and brand initiation
          that require significant planning, we have an interactive process
          where every single team member is involved in ensuring that that your
          brand’s campaign is successful.
        </p>
      </div>
    </div>
  );
}
