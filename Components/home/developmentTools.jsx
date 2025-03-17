import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import DevelopmentCard from "../otherComponents/developmentCard";
import { FaSwift } from "react-icons/fa";
import { SiKotlin } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { SiRedis } from "react-icons/si";

export default function DevelopmentTools() {
  return (
    <>
      <div className="bg-background pb-20">
        <div className="py-28">
          <DevelopmentCard />
        </div>
        <div className="">
          <Marquee autoFill={true}>
            <div className="flex gap-12 sm:gap-32 items-center justify-center text-white text-2xl sm:text-5xl pr-12 sm:pr-32 py-2">
              <div className="text-xl sm:text-3xl text-black">
                <p className="bg-[#5FECC8] px-4 sm:px-6 py-1 sm:py-2 rounded-full uppercase">
                  Mobile
                </p>
              </div>

              <div className="flex gap-2 items-center">
                <FaSwift />
                <h4>Swift</h4>
              </div>

              <div className="flex gap-2 items-center">
                <SiKotlin />
                <h4>Kotlin</h4>
              </div>

              <div className="flex gap-2 items-center">
                <FaReact />
                <h4>React</h4>
              </div>
              <div className="flex gap-2 items-center">
                <FaJava />
                <h4>Java</h4>
              </div>
            </div>
          </Marquee>
          <Marquee direction="right" className="pt-20">
            <div className="flex gap-12 sm:gap-32 items-center justify-center text-white text-2xl sm:text-5xl py-2 pr-12 sm:pr-32">
              <div className="text-xl sm:text-3xl text-black">
                <p className="bg-[#5FECC8] px-4 sm:px-6 py-1 sm:py-2 rounded-full uppercase">
                  Web
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <SiJavascript />
                <h4>JavaScript</h4>
              </div>
              <div className="flex gap-2 items-center">
                <FaNode />
                <h4>Node.js</h4>
              </div>
              <div className="flex gap-2 items-center">
                <FaHtml5 />
                <h4>Html</h4>
              </div>
              <div className="flex gap-2 items-center">
                <SiRedis />
                <h4>Redis</h4>
              </div>
            </div>
          </Marquee>
        </div>
      </div>
    </>
  );
}
