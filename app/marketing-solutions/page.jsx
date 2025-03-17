import React from "react";
import Header from "@/Components/global/header";
import { servicesData } from "@/data/servicesData";
import Image from "next/image";
import MotionGraphics from "@/Components/digitalMarketing/motionGraphics";
import IdeaAndBrand from "@/Components/digitalMarketing/ideaGeneration";
import GoogleAnalytics from "@/Components/digitalMarketing/googleAnalytics";
import MobileApplication from "@/Components/digitalMarketing/mobileApplication";
import MarketResearch from "@/Components/digitalMarketing/MarketResearch";
import Seo from "@/Components/digitalMarketing/seo";
import EmailMarketing from "@/Components/digitalMarketing/emailMarketing";
import TVC from "@/Components/digitalMarketing/tvc";
import BrandingAndPrinting from "@/Components/digitalMarketing/brandingAndPrinting";
import Campaign from "@/Components/digitalMarketing/campaign";

export default function Page() {
  const singleItem = servicesData.find((item) => item.idx == "M");
  return (
    <div>
      <Header />
      <div className="bg-black py-8">
        <section className="text-white pb-16 px-4 sm:px-36">
          <h3 className="text-3xl sm:text-5xl">Lift your business </h3>{" "}
          <p className="py-4 font-medium">
            to new heights with our digital marketing services. Stay connected
            with us and get your digital marketing strategy in place
          </p>{" "}
        </section>

        <div className="px-4 sm:px-36 py-12 flex flex-col gap-20">
          <MotionGraphics />
          <IdeaAndBrand />
          <GoogleAnalytics />
          {/* <MobileApplication /> */}

          <Seo />
          <EmailMarketing />
          <TVC />
          <BrandingAndPrinting />
          <Campaign />
          <MarketResearch />
        </div>

        {/* <div className="pt-20">
          <OurClients />
        </div> */}

        {/* <div className="px-4 sm:px-36">
          <div className="pt-20 text-white">{singleItem.featureTitle}</div>
          <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-10 md:mx-0 mx-5 px-4">
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
