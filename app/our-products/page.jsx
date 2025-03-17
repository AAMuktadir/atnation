import React from "react";
import Header from "@/Components/global/header";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <>
      <div className="bg-whiteBG text-background">
        <section className="">
          <Header />
        </section>
        <h3 className="text-4xl sm:text-7xl font-semibold text-center py-12">
          Our Products
        </h3>
        <div className="px-12">
          <section className="sm:flex justify-center py-0 sm:py-8">
            <Link
              href={"/our-products/shebok"}
              className="sm:w-1/2 flex flex-col items-center hover:scale-105 duration-500 hover:text-footer"
            >
              <Image
                src={"/image/products/shebok.png"}
                height={500}
                width={500}
                alt="img"
              />
              <p className="font-bold py-4">Shebok</p>
            </Link>
            <Link
              href={"/our-products/thersor"}
              className="sm:w-1/2 flex flex-col items-center sm:translate-y-1/2 hover:scale-105 duration-500 hover:text-footer"
            >
              <Image
                src={"/image/products/Thersor.png"}
                height={500}
                width={500}
                alt="img"
              />
              <p className="font-bold py-4">Thersor</p>
            </Link>
          </section>
          <section className="sm:flex justify-center py-0 sm:py-8">
            <Link
              href={"/our-products/bakko"}
              className="sm:w-1/2 flex flex-col items-center hover:scale-105 duration-500 hover:text-footer"
            >
              <Image
                src={"/image/products/bakko.png"}
                height={500}
                width={500}
                alt="img"
              />
              <p className="font-bold py-4">Bakko</p>
            </Link>
            <Link
              href={"/our-products/meawaco"}
              className="sm:w-1/2 flex flex-col items-center sm:translate-y-1/2 hover:scale-105 duration-500 hover:text-footer"
            >
              <Image
                src={"/image/products/meawaco.png"}
                height={500}
                width={500}
                alt="img"
              />
              <p className="font-bold py-4">Meawaco</p>
            </Link>
          </section>
          <section className="sm:flex justify-start py-0 sm:py-8">
            <Link
              href={"/our-products/moveh"}
              className="sm:w-1/2 flex flex-col items-center hover:scale-105 duration-500 hover:text-footer"
            >
              <Image
                src={"/image/products/moveh.png"}
                height={500}
                width={500}
                alt="img"
              />
              <p className="font-bold py-4">MoVeh</p>
            </Link>
          </section>
        </div>
      </div>
    </>
  );
}
