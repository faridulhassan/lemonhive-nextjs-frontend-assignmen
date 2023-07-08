"use client";
import React, { useState, useEffect } from "react";

export const useAnimatedClass = (className: string, delay: number) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % elements.length);
    }, delay);

    return () => clearInterval(interval);
  }, []);

  const elements = document.getElementsByClassName(className);

  Array.from(elements).forEach((element, index) => {
    if (index === activeIndex) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  });
};
