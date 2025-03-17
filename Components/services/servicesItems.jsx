"use client";
import React, { useState } from "react";
import Image from "next/image";
import { servicesData } from "@/data/servicesData";
import RightSlideAnimation from "../otherComponents/rightSlideAnimation";

export default function ServicesItems() {
  const [selectedItem, setSelectedItem] = useState("IT");
  const singleItem = servicesData.find((item) => item.idx == selectedItem);

  const imgSource = () => {
    return singleItem.image;
  };
  return (
    <>
      <div className="px-4 sm:px-20">
        <div className="pt-8 sm:pt-0 text-sm flex gap-4 sm:gap-8 flex-wrap">
          <p
            className={`cursor-pointer ${
              selectedItem === "IT"
                ? "text-footer"
                : "hover:text-footer duration-300"
            }`}
            onClick={() => setSelectedItem("IT")}
          >
            IT Solution
          </p>
          <p
            className={`cursor-pointer ${
              selectedItem === "M"
                ? "text-footer"
                : "hover:text-footer duration-300"
            }`}
            onClick={() => setSelectedItem("M")}
          >
            Marketing
          </p>
          <p
            className={`cursor-pointer ${
              selectedItem === "ID"
                ? "text-footer"
                : "hover:text-footer duration-300"
            }`}
            onClick={() => setSelectedItem("ID")}
          >
            Interior Design
          </p>
          {/* <p
            className={`cursor-pointer ${
              selectedItem === "BF"
                ? "text-footer"
                : "hover:text-footer duration-300"
            }`}
            onClick={() => setSelectedItem("BF")}
          >
            Business Formation
          </p> */}
          <p
            className={`cursor-pointer ${
              selectedItem === "EM"
                ? "text-footer"
                : "hover:text-footer duration-300"
            }`}
            onClick={() => setSelectedItem("EM")}
          >
            Event Management
          </p>

          <p
            className={`cursor-pointer ${
              selectedItem === "CON"
                ? "text-footer"
                : "hover:text-footer duration-300"
            }`}
            onClick={() => setSelectedItem("CON")}
          >
            Consultancy
          </p>
        </div>

        <div className="pt-12">
          <RightSlideAnimation
            key={imgSource()}
            image={imgSource()}
            text={singleItem.shortDescription}
          />
        </div>

        <div className="pt-20">{singleItem.featureTitle}</div>
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
      </div>
    </>
  );
}
