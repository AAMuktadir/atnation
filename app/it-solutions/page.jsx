import React from "react";
import Header from "@/Components/global/header";
import DevelopmentTools from "@/Components/home/developmentTools";
import CoolestProjects from "@/Components/home/coolestProjects";

import LayoutFooter from "@/Components/global/layoutFooter";

export default function Page() {
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
      </div>
      <LayoutFooter />
    </div>
  );
}
