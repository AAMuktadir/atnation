import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import Link from "next/link";

export default function CoolestProjects() {
  return (
    <>
      <div className="bg-[url('/image/CoolestProject.jpeg')] bg-cover bg-no-repeat bg-center h-full w-full px-4 sm:px-32">
        <section className="py-32 px-4">
          <h3 className="text-white text-left text-5xl sm:text-8xl">
            OUR COOLEST PROJECTS
          </h3>
        </section>
        <div className="px-4">
          <section className="bg-[url('/image/product-cover.jpeg')] bg-cover bg-no-repeat bg-center h-full w-full py-20 sm:py-40 rounded-3xl">
            <Link href={"/our-products"}>
              <Marquee autoFill={true}>
                <p className="flex gap-4 items-center justify-center text-5xl sm:text-8xl text-white">
                  Our Products
                  <Image
                    src={"/image/caseIcon.png"}
                    width={150}
                    height={150}
                    alt="icon"
                  />
                </p>
              </Marquee>
            </Link>
          </section>
        </div>
      </div>
      {/* <div className="bg-background py-16 px-4">
        <section className="bg-[url('/image/ProjectCase2.jpeg')] bg-cover bg-no-repeat bg-center h-full w-full py-20 sm:py-40 rounded-t-3xl">
          <Marquee direction="right" autoFill={true}>
            <p className="flex gap-4 items-center justify-center text-4xl sm:text-9xl text-white">
              View case
              <Image
                src={"/image/caseIcon.png"}
                width={150}
                height={150}
                alt="icon"
              />
            </p>
          </Marquee>
        </section>
      </div> */}

      <div className="bg-background py-16 flex items-center justify-end sm:pr-20 px-4 sm:px-0">
        <p className="text-footer -skew-x-12 sm:w-80">
          WE THINK AND SPEAK MAINLY SWIFT, KOTLIN, NODE, REACT. THAT’S
          EVERYTHING YOU NEED!
        </p>
      </div>
    </>
  );
}
