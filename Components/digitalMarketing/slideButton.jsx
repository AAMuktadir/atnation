"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ourWorks } from "@/utils/data/creativeSolutions";
import { motionGraphics } from "@/utils/data/creativeSolutions";

export default function SlideButton() {
  const [unlocked, setUnlocked] = useState(false);
  const sliderRef = useRef(null);
  const containerRef = useRef(null);
  const offsetX = useRef(0);

  const handleStart = (e) => {
    const slider = sliderRef.current;
    const container = containerRef.current;

    const startX = e.clientX || e.touches?.[0]?.clientX;
    const sliderRect = slider.getBoundingClientRect();
    offsetX.current = startX - sliderRect.left;

    const onMove = (moveEvent) => {
      const clientX = moveEvent.clientX || moveEvent.touches?.[0]?.clientX;
      const containerRect = container.getBoundingClientRect();
      let newLeft = clientX - containerRect.left - offsetX.current;

      const maxLeft = containerRect.width - slider.offsetWidth;
      newLeft = Math.max(0, Math.min(newLeft, maxLeft));
      slider.style.left = `${newLeft}px`;

      if (newLeft >= maxLeft - 5) {
        unlock();
        removeListeners();
      }
    };

    const onEnd = () => {
      if (!unlocked) slider.style.left = "0px";
      removeListeners();
    };

    const removeListeners = () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseup", onEnd);
      document.removeEventListener("touchmove", onMove);
      document.removeEventListener("touchend", onEnd);
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onEnd);
    document.addEventListener("touchmove", onMove);
    document.addEventListener("touchend", onEnd);
  };

  const unlock = () => {
    setUnlocked(true);
  };

  return (
    <div className="py-8 sm:py-16 flex flex-col items-center justify-start bg-gray-100 dark:bg-[#2C063B] px-4">
      <div
        ref={containerRef}
        className="relative w-full max-w-md h-16 bg-gray-300 dark:bg-white/30 rounded-full overflow-hidden shadow-lg"
      >
        <div className="absolute inset-0 flex items-center justify-center text-gray-600 dark:text-gray-300 font-medium text-base select-none">
          {unlocked ? "Our works!" : "Slide to see our work"}
        </div>

        {!unlocked && (
          <div
            ref={sliderRef}
            onMouseDown={handleStart}
            onTouchStart={handleStart}
            className="absolute top-1 left-1 h-14 w-14 bg-white dark:bg-gray-100 rounded-full shadow-md flex items-center justify-center cursor-pointer transition-none "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        )}
      </div>

      {unlocked && (
        <div className="w-full h-full">
          <p className="mt-6 text-xl font-semibold text-gray-800 dark:text-white text-center">
            🎉 You’ve revealed our works!
          </p>

          <div className="w-full px-4 sm:px-20 py-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {ourWorks.map((data, id) => (
                <div
                  key={id}
                  className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-800"
                >
                  <Image
                    src={data.image}
                    height={500}
                    width={500}
                    alt="Our Work Image"
                    className="w-full h-auto object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <p className="mt-6 text-xl font-semibold text-gray-800 dark:text-white text-center">
            🎉 Some of our motion graphics!
          </p>

          <div className="w-full px-4 sm:px-20 py-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {motionGraphics.map((data, id) => (
                <div
                  key={id}
                  className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-800"
                >
                  <video
                    className="w-full h-full object-cover"
                    src={data.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
