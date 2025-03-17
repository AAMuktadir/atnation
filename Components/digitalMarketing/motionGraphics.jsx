import React from "react";
import Image from "next/image";

export default function MotionGraphics() {
  return (
    <div
      id="web-development"
      className="bg-gradient-to-r from-footer to-gray-700 sm:to-black p-4 flex flex-col sm:flex-row items-start gap-8 sm:gap-0"
    >
      <div className="sm:w-1/2">
        <section className="flex">
          <h3 className="bg-white text-black text-2xl font-medium text-left px-4 py-2 rounded-2xl">
            Motion Graphics, Animation & CGI
          </h3>
        </section>

        <h5 className="text-3xl text-black font-semibold px-4 pt-6">
          Interaction with
          <br /> audiences is key
        </h5>

        <p className="text-black px-4 text-sm font-medium text-justify pt-6">
          Interaction with audiences is key for business organizations nowadays.
          To meet this expectation, ATnation designs and develops engaging
          motion graphics, animation and CGI videos.
        </p>
      </div>

      <div className="sm:w-1/2 sm:h-80">
        <Image
          src={"/image/digital-marketing/contentCreation.png"}
          height={350}
          width={350}
          alt="image"
        />
      </div>
    </div>
  );
}
