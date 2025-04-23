import React from "react";
import TextAnimation from "./textAnimation";
import Link from "next/link";

export default function BrandIdentities() {
  const quotes = [
    "Let us organize your events and promote your business",
    "We take responsibility while you get the benefits",
  ];
  return (
    <>
      <div className="bg-footer py-12 px-4 sm:px-16 sm:flex">
        <h3 className="text-3xl sm:text-5xl uppercase  sm:w-1/2 pb-8 sm:pb-0">
          Promotional <br />
          events
        </h3>

        <div className="sm:w-1/2">
          <h4 className="animated-heading text-2xl h-16">
            <TextAnimation texts={quotes} />
          </h4>
          <p className="font-light pt-8 sm:pt-4 text-justify">
            Sophistication is bliss. With this mentality ATnation has been
            organizing promotional events for many clients while ensuring that
            our clients are more than satisfied with our services. With a huge
            array of enlisted vendors at our disposal, we have the capacity and
            ability to create and implement promotional events that your
            business’ consumers will remember forever! Take a look at some of
            the events that we have managed within the last few years{" "}
            <Link
              href={"/promotional-events"}
              className="underline hover:text-blue-400"
            >
              click here.
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
