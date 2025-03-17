import React from "react";
import { devCardInfo } from "@/data/developmentCardInfo";
import Image from "next/image";

export default function DevelopmentCard() {
  return (
    <>
      <div className="grid sm:grid-cols-2 gap-x-4 gap-y-8 px-4 sm:px-36">
        {devCardInfo.map((card, id) => (
          <div className="relative hover:scale-105 duration-500" key={card.id}>
            <Image
              src={card.background}
              height={300}
              width={500}
              alt="image"
              className="rounded-2xl "
            />
            <section className="absolute inset-0 flex">
              <div className="w-3/4 sm:w-2/3 pl-4 sm:pl-12">
                <h4 className="text-2xl sm:text-3xl font-medium uppercase tracking-wider pt-6 sm:pt-10 pb-6">
                  {card.title}
                </h4>
                <div className="flex uppercase gap-4 text-[10px] sm:text-[16px]">
                  <p className="border border-black px-2 rounded-full">
                    {card.primary}
                  </p>
                  <p className="border border-black px-2 rounded-full">
                    {card.secondary}
                  </p>
                </div>
              </div>
              <div className="w-1/4 sm:w-1/3"></div>
            </section>
          </div>
        ))}
      </div>
    </>
  );
}
