import React from "react";
import { SparklesCore } from "../ui/sparkles";
import HelloClickable from "./helloClickable";

export function HelloSparkles() {
  return (
    <div className="h-[40rem] relative w-full bg-black flex flex-col items-center justify-start overflow-hidden rounded-md gap-24">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <section className="text-white pt-20">
        {/* <button className="border-2 border-white px-4 sm:px-8 py-0 sm:py-1 rounded-full uppercase">
          <HelloClickable /> Start a project with us
        </button> */}
        <HelloClickable />
      </section>
      <h1 className="md:text-7xl text-8xl lg:text-[250px] font-medium text-center text-white relative z-20 pt-20 sm:pt-0">
        HELLO
      </h1>
    </div>
  );
}
