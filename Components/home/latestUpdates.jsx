import React from "react";
import { FaAngleRight } from "react-icons/fa6";

export default function LatestUpdates() {
  return (
    <>
      <div className="bg-background py-20 text-white">
        <div className="flex flex-col gap-8 items-center">
          <h4 className="uppercase text-[12px] font-medium">Newsletter</h4>
          <h4 className="text-3xl sm:text-4xl text-center">
            Subscribe to get <br />
            the latest updates
          </h4>
          <section className="flex flex-col items-center sm:flex-row gap-4">
            <input
              className="border border-white px-4 sm:px-8 py-1 bg-background text-left placeholder:text-white placeholder:font-light"
              placeholder="Email address"
            />
            <button className="py-1 px-8 bg-footer flex gap-8 items-center justify-center">
              <p>Subscribe</p> <FaAngleRight />
            </button>
          </section>
        </div>
      </div>
    </>
  );
}
