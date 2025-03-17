import React from "react";
import Header from "@/Components/global/header";
import { productData } from "@/data/productData";
import Image from "next/image";

export default async function page({ params }) {
  const oneProduct = productData.find((pro) => pro.slug == params?.id);

  return (
    <div className="bg-background">
      <Header />
      <div className="flex flex-col items-center justify-center w-full">
        <h2 className="text-4xl sm:text-7xl font-semibold text-center text-white bg-darkBG w-full py-8">
          {oneProduct.title}
        </h2>
        <Image
          src={oneProduct.image}
          height={700}
          width={700}
          alt="img"
          className="py-10 px-8"
        />
      </div>
      <div className="px-4 sm:px-20 py-10 text-white">
        <p>
          <span className="font-bold">{oneProduct.title}: </span>
          {oneProduct.description}
        </p>
      </div>
    </div>
  );
}
