"use client";

import React, { useRef, useEffect, MutableRefObject } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import FeaturedCard from "./FeaturedCard";
import { Feature } from "@/types";

gsap.registerPlugin(ScrollTrigger);

const _features: Feature[] = [
  {
    image: "/images/feature-image-1.png",
    title: "Pre-processing",
    desc: "Your data is organized, cleaned, and given context as we interpret it. Your data gains meaning through the semantic layer, making it simpler for business users to comprehend. We assist you in gaining a clear understanding of what it signifies so you can take action.",
  },
  {
    image: "/images/feature-image-2.png",
    title: "Pre-processing",
    desc: "Your data is organized, cleaned, and given context as we interpret it. Your data gains meaning through the semantic layer, making it simpler for business users to comprehend. We assist you in gaining a clear understanding of what it signifies so you can take action.",
  },
  {
    image: "/images/feature-image-3.png",
    title: "Identify & automate",
    desc: "Explore your customer segments and automate e-mail marketing flows easily. Understand deeply why customers abandon shopping carts and find ways to attract them. Predict your future sales and identify payment cycles. ",
  },
  {
    image: "/images/feature-image-4.png",
    title: "Pre-processing",
    desc: "Your data is organized, cleaned, and given context as we interpret it. Your data gains meaning through the semantic layer, making it simpler for business users to comprehend. We assist you in gaining a clear understanding of what it signifies so you can take action.",
  },
];

export default function FeaturedCards({
  features = [..._features],
}: {
  features?: Feature[];
}) {
  const ref = useRef() as MutableRefObject<HTMLDivElement>;
  useEffect(() => {
    const parent = ref.current,
      targetElements = parent.querySelectorAll(".feature-card");

    const cards = gsap.utils.toArray<HTMLElement>(targetElements);
    const allAnimations: GSAPAnimation[] = [];
    cards.forEach((card: HTMLElement, i) => {
      const animation = gsap.to(card as HTMLElement, {
        // scale: () => 1 - (cards.length - i) * 0.09,
        filter: () => {
          return i !== cards.length - 1 ? "grayscale(0.8  )" : "grayscale(0)";
        },
        ease: "none",
        scrollTrigger: {
          trigger: card,
          start: "top-=" + 10 * i + " bottom-=100",
          end: "bottom 40%",
          scrub: true,
        },
      });
      ScrollTrigger.create({
        trigger: card,
        start: "top-=" + 40 * i + " top+=20%",
        end: "center bottom+=300",
        endTrigger: ".end-element",
        pin: true,
        pinSpacing: false,
        id: "card-" + i,
        // markers: true,
      });
      allAnimations.push(animation);
    });

    return () => {
      allAnimations.forEach((animation) => {
        animation.kill();
      });
    };
  }, []);
  return (
    <div>
      <div className="features-wrapper relative" ref={ref}>
        <div className="features-pin w-full">
          {features.map((feature, i) => (
            <FeaturedCard feature={feature} counter={i + 1} key={i} />
          ))}
        </div>
      </div>
      <div className="end-element h-[1px]"></div>
    </div>
  );
}
