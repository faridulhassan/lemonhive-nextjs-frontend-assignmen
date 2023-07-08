"use client";
import { useAnimatedClass } from "@/app/hooks/hooks";
import Link from "next/link";
import React, { useRef, MutableRefObject } from "react";

export default function TopHeader() {
  const textAnimationWrapperRef =
    useRef() as MutableRefObject<HTMLHeadingElement>;
  useAnimatedClass("text-color-animation", 3000);
  return (
    <div className="text-center">
      <div>
        <h1
          className="text-h1 text-animation-wrapper leading-[110%] mb-10"
          ref={textAnimationWrapperRef}
        >
          <span className="block transition-all delay-300 text-color-animation text-primary-animation active">
            Innovative Solutions
          </span>
          <span className="block">
            for a{" "}
            <span className="transition-all delay-300 text-color-animation text-secondary-animation">
              Digital World
            </span>
          </span>
          <span className="block transition-all delay-300 text-gradient-animation text-color-animation">
            Trusted Agency
          </span>
        </h1>
        <p className="text-h4 font-medium leading-[130%]">
          Elevate Your Brand: Powerhouse Agency for Impactful Strategies
        </p>
      </div>
      <div className="flex justify-center gap-6 mt-20">
        <Link href={"/"} className="btn-outline">
          Our Services
        </Link>
        <Link href={"/"} className="btn-primary btn-animation">
          Work With Us{" "}
        </Link>
      </div>
    </div>
  );
}
