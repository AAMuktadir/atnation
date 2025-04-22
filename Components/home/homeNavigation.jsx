"use client";
import Link from "next/link";
import { Paths } from "@/data/navigation";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

export default function HomeNavigation() {
  const pathname = usePathname();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="grid grid-cols-2 gap-4 sm:flex justify-between items-center px-8 sm:px-20 w-full max-w-screen-xl mx-auto">
      {Paths.map((item, index) => (
        <Link
          key={index}
          href={item.path}
          className={`transition-colors duration-300 ${
            pathname === item.path
              ? "text-[#FF04D7]"
              : "text-[#FF04D7] sm:text-white hover:text-[#FF04D7]"
          }`}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <p
            className={`transition-all duration-200 ease-in-out ${
              hoveredIndex === index ? "animate-buzz blur-[0.3px]" : ""
            }`}
          >
            {item.title}
          </p>
        </Link>
      ))}
    </div>
  );
}
