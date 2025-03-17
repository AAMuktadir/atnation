import React from "react";
import Image from "next/image";

export default function BottomSlideAnimation() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex justify-between w-full max-w-screen-xl">
        <div className="w-1/2 flex justify-center animate-slide-in-from-bottom">
          <Image
            src={"/image/services/interior_design.jpeg"}
            height={500}
            width={500}
            alt="Image"
            className="max-h-full max-w-full"
          />
        </div>
        <div className="w-1/2 flex justify-center items-center animate-slide-in-from-bottom">
          <p className="text-lg">
            Your text goes here. jgjhs ljkjlji lorem ipsum
          </p>
        </div>
      </div>
    </div>
  );
}
