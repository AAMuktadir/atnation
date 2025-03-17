"use client";
import React from "react";
import Image from "next/image";
import TextGenerateEffect from "../ui/text-generate-effect";

export default function BiggerBetter() {
  return (
    <>
      <div className="bg-black py-16 px-4 sm:px-40 text">
        <div className="text-left sm:text-center">
          <TextGenerateEffect
            words={
              "Planet X Inc is a complete solutions provider that provides technology integrated end-to-end impact oriented and data driven organisational solutions. Taking a needs based approach, the company designs technology that augments business and organisational performances. Having provided solutions to various organisations, it has recently started expanding its reach by designing technological solutions to address community societal issues."
            }
          />
        </div>

        <div className="py-20 ">
          <section className="flex items-center justify-end">
            <Image
              src={"/image/Bigger.png"}
              width={900}
              height={400}
              alt={"bigger"}
            />
          </section>
          <span className="flex items-center justify-end pr-12 py-8">
            <p className="text-white w-52">
              We think bigger. May not be in terms of the size of our creative
              agency, but in our big ideas, thinking and creativity.
            </p>
          </span>

          <section className="flex items-center justify-start pt-12">
            <Image
              src={"/image/Bolder.png"}
              width={900}
              height={400}
              alt={"bigger"}
            />
          </section>
          <span className="flex items-center justify-start pl-12 py-8">
            <p className="text-white w-52">
              Being bold is in our DNA. We dare to do what others will not and
              embrace everything to create impactful work.
            </p>
          </span>
        </div>
        <h2 className="text-6xl sm:text-9xl font-extrabold text-footer tracking-wider text-center">
          BETTER
        </h2>
        <div className="w-full flex items-center justify-center pt-8">
          <p className="text-white w-80 text-center">
            Better to work with. In the end, it’s just better to have an agency
            that will not only deliver but one that you’ll enjoy working with as
            well.
          </p>
        </div>
      </div>
    </>
  );
}
