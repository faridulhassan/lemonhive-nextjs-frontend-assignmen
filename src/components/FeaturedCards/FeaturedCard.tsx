import Image from "next/image";
import React from "react";

export default function FeaturedCard({
  counter,
  feature = {},
}: {
  counter: number;
  feature: object;
}) {
  const { title, image, desc } = feature;
  return (
    <div className="feature-card px-20 py-28 border border-primary rounded-[40px] bg-neutral2 origin-top-center">
      <div className="flex flex-col gap-5 justify-center lg:flex-row lg:justify-between ">
        <div className="left w-full  lg:w-5/12 ">
          <div className="mb-6 text-primary-200 font-medium text-h1 leading-[110%]">
            {counter}
          </div>
          <h3 className="text-primary font-semibold text-h2 mb-10 leading-[110%]">
            {title}
          </h3>
          <p className="leading-[130%] text-h4">{desc}</p>
        </div>
        <div className="right w-full  lg:w-5/12 flex justify-center lg:justify-end">
          <Image src={image} width={490} height={559} alt="feature 1" />
        </div>
      </div>
    </div>
  );
}
