import React from "react";
import Image from "next/image";

export default function RightSlideAnimation({ image, text }) {
  return (
    <div className="flex justify-center items-center">
      <div className="sm:flex justify-between w-full max-w-screen-xl">
        <div className="sm:w-1/2 flex justify-center items-center animate-slide-in-from-right">
          <Image
            src={image}
            height={500}
            width={500}
            alt="Image"
            className="max-h-full max-w-full rounded-xl"
          />
        </div>
        <div className="pt-4 sm:pt-0 sm:w-1/2 flex justify-center items-center animate-slide-in-from-right">
          <p className="text-lg">{text}</p>
        </div>
      </div>
    </div>
  );
}
