import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { ourClientsData } from "@/data/clientData";

export default function OurClients() {
  return (
    <>
      <div className="bg-background h-full pt-12 sm:pt-20">
        <div className=" px-4 sm:px-36">
          <h3 className="text-4xl sm:text-7xl text-white font-semibold">
            Our Clients
          </h3>
          <p className="text-white text-xl sm:text-sm py-8">
            We have developed digital marketing strategies, designed websites,
            and created content to engage customers for a number of small to
            medium-sized businesses.
          </p>
        </div>

        <section className="border-t border-white py-20 ">
          <Marquee
            pauseOnHover={true}
            autoFill={true}
            direction="right"
            className=""
          >
            <div className="pl-10 flex gap-10 items-center justify-center">
              {ourClientsData.map((client) => (
                <div key={client.id}>
                  <Image
                    src={client.image}
                    width={100}
                    height={100}
                    alt="icon"
                  />
                </div>
              ))}
            </div>
          </Marquee>
        </section>
      </div>
    </>
  );
}
