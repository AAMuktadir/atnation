import React from "react";
import Image from "next/image";

export default function MobileApplication() {
  return (
    <div
      id="appDevelopment"
      className="bg-gradient-to-r from-black to-footer p-4 flex flex-col-reverse sm:flex-row items-start gap-y-8 sm:gap-0"
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
            Mobile applications
          </h3>
        </section>
        <h5 className="text-3xl text-black font-semibold px-4 py-6">
          Using React, Flutter and Kotlin
        </h5>
        <p className="text-black px-4 text-sm font-light">
          Using React, Flutter and Kotlin we have experience in developing
          state-of-the-art mobile applications that can be used for a myriad of
          needs.
        </p>
      </div>
    </div>
  );
}
