"use client";
import { useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";
import Image from "next/image";

export default function GalleryComponent({ images }) {
  const [selectedImg, setSelectedImg] = useState(null);

  const handleClose = () => {
    setSelectedImg(null);
  };

  const handleOutsideClick = (e) => {
    if (e.target.id === "overlay") {
      setSelectedImg(null);
    }
  };

  const handlePrevNext = (direction) => {
    const currentIndex = images.findIndex((img) => img.id === selectedImg.id);
    const nextIndex =
      (currentIndex + direction + images.length) % images.length;
    setSelectedImg(images[nextIndex]);
  };

  return (
    <div className="">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
        {images.map((image) => (
          <Image
            key={image.id}
            height={500}
            width={500}
            src={image.src}
            alt={`Gallery image ${image.id}`}
            className="cursor-pointer w-full object-cover h-48 md:h-auto rounded-lg"
            onClick={() => setSelectedImg(image)}
          />
        ))}
      </div>
      {selectedImg && (
        <div
          id="overlay"
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-40 p-2 sm:p-10"
          onClick={handleOutsideClick}
        >
          <div className="relative max-w-2xl w-full">
            <Image
              src={selectedImg.src}
              height={2000}
              width={2000}
              className="animate-scale-up max-w-full h-auto"
              alt="Expanded view"
            />
            <button
              className="absolute top-4 right-4 text-white text-3xl"
              onClick={handleClose}
            >
              &times;
            </button>
            <button
              className="absolute left-2 top-1/2"
              onClick={() => handlePrevNext(-1)}
            >
              <div className="text-footer text-6xl">
                <MdNavigateBefore />
              </div>
            </button>
            <button
              className="absolute right-2 top-1/2"
              onClick={() => handlePrevNext(1)}
            >
              <p className="text-footer text-6xl">
                <MdNavigateNext />
              </p>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
