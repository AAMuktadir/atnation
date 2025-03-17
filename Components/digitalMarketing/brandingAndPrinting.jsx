import React from "react";
import Image from "next/image";

export default function BrandingAndPrinting() {
  return (
    <div
      id="web-development"
      className="bg-gradient-to-r from-footer to-gray-700 sm:to-black p-4 flex flex-col sm:flex-row items-start gap-8 sm:gap-0"
    >
      <div className="sm:w-1/2">
        <section className="flex">
          <h3 className="bg-white text-black text-2xl font-medium text-left px-4 py-2 rounded-2xl">
            Branding & Printing
          </h3>
        </section>

        <h5 className="text-3xl text-black font-semibold px-4 py-6">
          Marketing services <br /> includes designing
        </h5>

        <p className="text-black px-4 text-sm font-medium text-justify">
          This segment of our marketing services includes designing leaflets and
          brochures for your business and printing them uses the finest quality
          of papers that are available.
        </p>
      </div>

      <div className="sm:w-1/2 sm:h-80">
        <Image
          src={"/image/digital-marketing/digitalMarketing1.png"}
          height={500}
          width={600}
          alt="image"
        />
      </div>
    </div>
  );
}
