import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function SmartDevelopment() {
  return (
    <>
      <div className="bg-background py-12 px-4 sm:px-16 sm:flex items-center">
        <section className="px-4 sm:px-12 py-4 sm:py-4 sm:w-1/2">
          <div className="bg-black rounded-full flex items-center justify-center">
            <Image
              src={"/image/smartDevelopment.png"}
              height={300}
              width={300}
              alt="image"
              className="py-2 sm:py-8"
            />
            {/* <video
              width="500"
              height="500"
              autoPlay
              loop
              muted
              className="py-4 p-16 sm:p-0"
            >
              <source
                src="/image/anim/smartDevelopmentAnim.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video> */}
          </div>
        </section>
        <section className="px-0 sm:px-4 sm:w-1/2 pt-8 sm:pt-0">
          <h3 className="text-3xl sm:text-5xl uppercase text-white">
            SMART IT DEVELOPMENT
          </h3>

          <p className="text-white pt-8 font-extralight text-justify">
            The technological needs of the world are changing at a pace that has
            never been seen before. Which is why ATnation is always updated
            about the latest technological trends of the world while
            simultaneously implementing the solutions arising from these trends
            for the benefit of our clients. To know more, have a look at our IT
            & IoT portfolio{" "}
            <Link
              href={"/it-solutions"}
              className="underline hover:text-blue-400 duration-300"
            >
              click here
            </Link>
          </p>
        </section>
      </div>
    </>
  );
}
