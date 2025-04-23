import React from "react";
import Header from "@/Components/global/header";
import ServicesItems from "@/Components/services/servicesItems";

export default function page() {
  return (
    <>
      <div className="bg-background text-whiteBG">
        <Header />
        <div className="py-0 pb-2 sm:pb-0 sm:py-8">
          <ServicesItems />
        </div>
      </div>
    </>
  );
}
