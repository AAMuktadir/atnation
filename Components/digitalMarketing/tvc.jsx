import React from "react";
import Image from "next/image";

export default function TVC() {
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
            Cinematography, TVC, OVC & AVC
          </h3>
        </section>
        <h5 className="text-3xl text-black font-semibold px-4 py-6">
          Audio-video services for purposes of brand promotion
        </h5>
        <p className="text-black px-4 text-sm font-medium text-justify">
          Our audio-video services for purposes of brand promotion is second to
          none. With a dedicated crew to serve your needs, you can be assured
          that the final output will meet your expectations.
        </p>
      </div>
    </div>
  );
}
