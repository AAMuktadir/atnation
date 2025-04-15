"use client";
import React from "react";
import Footer from "@/Components/global/footer";
import OurClients from "@/Components/home/ourClients";
import { usePathname } from "next/navigation";

export default function LayoutFooter() {
  const path = usePathname();
  return (
    <div>
      {path != "/" && (
        <div className="">
          <OurClients />
          <Footer />
        </div>
      )}
    </div>
  );
}
