"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

export default function ReviewSlider() {
  return (
    <div className="sm:flex px-2 py-8 gap-8 sm:py-20 bg-whiteBG">
      <div className="sm:w-1/2 y-8">
        <h1 className="text-right text-[42px]">Clients Feedback</h1>
        <Image
          src={"/image/sliderImage.png"}
          height={200}
          width={200}
          alt="image"
        />
      </div>
      <div className="pb-8 sm:w-1/2">
        <Image
          src={"/image/commaInvert.png"}
          height={60}
          width={60}
          alt="image"
        />
        <Swiper
          modules={[Navigation, A11y]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          navigation
          className=""
        >
          <SwiperSlide>
            <div className="flex flex-col items-center justify-center px-2 sm:px-6 py-4">
              <h1 className="text-center text-[16px]">
                &quot;Planet x inc developed a product roadmap, user flows,
                wireframes, and high-fidelity designs, all tuned to the unique
                requirements of our three user groups, prioritizing
                user-friendliness. Best design company.&quot;
              </h1>
              <p className="uppercase pt-8 pb-2">Abdul Bashar</p>
              <p className=" text-[10px] text-footer">
                Founder, Center Insights
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center justify-center px-2 sm:px-6 py-4">
              <h1 className="text-center text-[16px]">
                &quot;Planet x inc developed a product roadmap, user flows,
                wireframes, and high-fidelity designs, all tuned to the unique
                requirements of our three user groups, prioritizing
                user-friendliness. Best design company.&quot;
              </h1>
              <p className="uppercase pt-8 pb-2">Zahirul Shezan</p>
              <p className=" text-[10px] text-footer">Beverage Aficionado</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
