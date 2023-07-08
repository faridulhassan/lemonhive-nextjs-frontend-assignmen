"use client";

import Image from "next/image";
import React, { useRef, useEffect, MutableRefObject } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import styles from "./FlippedBanner.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function FlippedBanner() {
  const ref = useRef() as MutableRefObject<HTMLDivElement>;
  useEffect(() => {
    const element = ref.current;

    const anim = gsap.to(element, {
      rotateX: 0,
      // duration: 4,
      scrollTrigger: {
        trigger: element,
        start: "top center+=200",
        end: "bottom center-=100",
        scrub: 0.4,
      },
    });

    return () => {
      anim.kill();
    };
  }, []);

  return (
    <div className="py-5 flex justify-center">
      <div className={styles["flipped-image-container"]}>
        <div className={styles["flipped-image"]} ref={ref}>
          <Image
            src={"/images/dashboard.png"}
            width={1050}
            height={644}
            alt="dashboard"
          />
        </div>
      </div>
    </div>
  );
}
