import React from "react";
import Image from "next/image";

export default function InHouseSolutions() {
  return (
    <>
      <div className="bg-footer">
        <section className="px-4 sm:px-0 sm:flex">
          <h3 className="text-5xl sm:text-8xl pt-20 sm:translate-x-28">
            WE BUILD A STABLE CODE USING IN-HOUSE SOLUTIONS
          </h3>
          <div className="pt-12 sm:pt-0">
            <Image
              src={"/image/inhouseDevelopment.png"}
              width={2500}
              height={2500}
              alt="photo"
            />
          </div>
        </section>
        <section className="flex items-center justify-end pt-12 sm:pt-40 sm:pr-20 pb-20 w-full">
          <p className="px-4 sm:px-0 sm:w-[450px]">
            Developing digital products since 2010. We help bring ideas to life
            and create digital products that work
          </p>
        </section>
      </div>
    </>
  );
}
