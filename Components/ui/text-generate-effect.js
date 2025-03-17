"use client";
import React from "react";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/cn";

const TextGenerateEffect = ({ words, className }) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return React.createElement(
      motion.div,
      { ref: scope },
      wordsArray.map((word, idx) => {
        return React.createElement(
          motion.span,
          {
            key: word + idx,
            className: "dark:text-white text-black opacity-0",
          },
          word + " "
        );
      })
    );
  };

  return React.createElement(
    "div",
    { className: cn("font-regular", className) },
    React.createElement(
      "div",
      { className: "mt-4" },
      React.createElement(
        "div",
        {
          className: " dark:text-white text-black leading-snug tracking-wide",
        },
        renderWords()
      )
    )
  );
};

// Export the component if needed
export default TextGenerateEffect;
