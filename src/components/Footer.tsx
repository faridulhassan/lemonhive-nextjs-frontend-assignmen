import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="py-28">
      <div className="container text-h5 leading-normal  font-medium">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="md:w-5/12 mb-9 md:mb-0">
            <Link href={"/"} className="inline-block mb-10">
              <Image
                src="/images/Logo-light.svg"
                width={145}
                height={80}
                alt="logo"
              />
            </Link>
            <p>
              &copy; 2023 <span className="text-primary">abc.</span> All rights
              reserved.
            </p>
          </div>
          <div className="md:w-4/12 mb-9 md:mb-0">
            <address className="not-italic  mb-4">
              <p className="text-secondary ">LONDON</p>
              <p>20-22 Wenlock Road, London, N1 7GU</p>
            </address>
            <p className="text-primary mb-4">
              <a href="tel:+44 207 1188550">+44 207 1188550</a>
            </p>
            <p>
              <a href="mailto:">career@lemonhive.com</a>
            </p>
          </div>
          <div className="">
            <ul className="">
              <li className="mb-3">
                <Link
                  href={"https://facebook.com"}
                  target="_blank"
                  className="hover:text-primary border-b border-transparent hover:border-primary transition-all duration-300"
                >
                  Facebook
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  href={"https://twitter.com"}
                  target="_blank"
                  className="hover:text-primary border-b border-transparent hover:border-primary transition-all duration-300"
                >
                  Twitter
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  href={"https://linkedin.com"}
                  target="_blank"
                  className="hover:text-primary border-b border-transparent hover:border-primary transition-all duration-300"
                >
                  Linkedin
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  href={"https://instagram.com"}
                  target="_blank"
                  className="hover:text-primary border-b border-transparent hover:border-primary transition-all duration-300"
                >
                  Instagram
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
