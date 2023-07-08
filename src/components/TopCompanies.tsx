import { CompanyImage } from "@/types";
import Image from "next/image";
import React from "react";

const companiesImages: CompanyImage[] = [
  {
    name: "codelab",
    image: "/images/client-1.png",
  },
  {
    name: "treva",
    image: "/images/client-2.png",
  },
  {
    name: "atica",
    image: "/images/client-3.png",
  },
  {
    name: "fox hub",
    image: "/images/client-4.png",
  },
  {
    name: "aven",
    image: "/images/client-5.png",
  },
];

export default function TopCompanies({
  topCompanies = [...companiesImages],
}: {
  topCompanies?: CompanyImage[];
}) {
  return (
    <div>
      <h3 className="text-primary text-center text-h4 mb-9">
        Trusted by Top-tier product campanies
      </h3>
      <ul className="flex justify-center gap-24">
        {topCompanies.map((company) => (
          <li key={company.name}>
            <Image
              src={company.image}
              width={212}
              height={56}
              alt={company.name}
              className="w-auto"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
