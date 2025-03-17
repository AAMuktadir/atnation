import React from "react";
import Image from "next/image";

export default function Seo() {
  return (
    <div
      id="appDevelopment"
      className="bg-gradient-to-l from-footer to-gray-700 sm:to-black p-4 flex flex-col-reverse sm:flex-row items-start gap-y-8 sm:gap-0"
    >
      <div className="w-full sm:w-1/2 h-80 ">
        <Image
          src={"/image/digital-marketing/ecommerce.png"}
          height={300}
          width={350}
          alt="image"
          className=""
        />
      </div>
      <div className="sm:w-1/2 text-right">
        <section className="flex justify-end">
          <h3 className="bg-white text-black text-2xl font-medium text-left px-4 py-2 rounded-2xl">
            SEO
          </h3>
        </section>
        <h5 className="text-3xl text-black font-semibold px-4 py-6">
          Developing a website is not enough
        </h5>
        <p className="text-black px-4 text-sm font-medium text-justify">
          Currently developing a website is not enough. Your target audience
          needs to know about the existence of your website during their
          internet searches. This is where we can help you stand out among your
          competitors by performing Search Engine Optimization that will allow
          your website to appear among the first results during an internet
          search query.
        </p>
      </div>
    </div>
  );
}
