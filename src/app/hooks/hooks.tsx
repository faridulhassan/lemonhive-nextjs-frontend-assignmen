"use client";
import React, { useState, useEffect } from "react";

export const useAnimatedClass = (className: string, delay: number) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [startAnim, setStartAnim] = useState(false);
  let elements: Array<Element>;

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (startAnim && elements) {
      interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % elements.length);
      }, delay);
    }

    return () => {
      interval && clearInterval(interval);
    };
  }, [startAnim]);

  if (startAnim) {
    elements = [...document.getElementsByClassName(className)];

    Array.from(elements).forEach((element, index) => {
      if (index === activeIndex) {
        element.classList.add("active");
      } else {
        element.classList.remove("active");
      }
    });
  }
  return {
    setStartAnim,
  };
};
