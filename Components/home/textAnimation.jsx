import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function TextAnimation({ texts }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2500); // Change text every 3 seconds

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div key={currentIndex} className="animated-text">
      {texts[currentIndex]}
    </div>
  );
}
