import React from "react";
import Header from "@/Components/global/header";
import DevelopmentTools from "@/Components/home/developmentTools";
import CoolestProjects from "@/Components/home/coolestProjects";
import { servicesData } from "@/data/servicesData";

export default function Page() {
  const singleItem = servicesData.find((item) => item.idx == "IT");
  return (
    <div>
      <Header />

      <div className="bg-black py-8">
        <section className="text-white px-4 sm:px-36 pb-16">
          <h3 className="text-3xl sm:text-5xl">Delivering IT solutions </h3>{" "}
          <p className="py-4 font-medium">
            that enable you to work smarter. We are a team of experienced IT
            specialists, ready to solve your issues.
          </p>{" "}
        </section>

        <DevelopmentTools />
        <CoolestProjects />

        {/* <div className="px-4 sm:px-36">
          <div className="pt-20 text-white">{singleItem.featureTitle}</div>
          <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-10 md:mx-0 mx-5">
            {singleItem.featureData.map((feature) => (
              <div
                className="col-span-1 flex flex-row hover:bg-footer bg-darkBG text-whiteBG hover:text-darkBG duration-300"
                key={feature.id}
              >
                <div className="p-3 w-1/4 flex items-center justify-center">
                  <Image
                    src={feature.url}
                    width={50}
                    height={50}
                    alt="feature icon"
                  />
                </div>
                <div className="w-3/4 flex items-center justify-center">
                  <span className="text-center  text-sm">{feature.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
}
