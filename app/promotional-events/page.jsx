import React from "react";
import Header from "@/Components/global/header";
import { servicesData } from "@/data/servicesData";
import GalleryComponent from "@/Components/global/galleryComponent";
import { photos } from "@/data/galleryPhotos";
import LayoutFooter from "@/Components/global/layoutFooter";

export default function Page() {
  const singleItem = servicesData.find((item) => item.idx == "EM");
  return (
    <div>
      <Header />
      <div className="bg-black py-8">
        <section className="text-white px-4 sm:px-36 pb-16">
          <h3 className="text-3xl sm:text-5xl">Make any occasion </h3>{" "}
          <p className="py-4 font-medium">
            unforgettable. The event you imagine, brought to life
          </p>{" "}
        </section>

        <div className="px-4 sm:px-36">
          <GalleryComponent images={photos} />
        </div>
      </div>

      {/* <div className="px-4 sm:px-36 bg-darkBG">
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
      <LayoutFooter />
    </div>
  );
}
