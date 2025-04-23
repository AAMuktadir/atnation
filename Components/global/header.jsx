"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-white p-4 px-4 sm:px-12">
      <div className="container mx-auto flex justify-end sm:justify-center items-center z-50 w-full pt-8">
        {/* <div className="">
          <Link href={"/"}>
            <Image
              src={"/Global/Logo.png"}
              height={150}
              width={150}
              alt="logo"
              className="hidden sm:block"
            />
            <Image
              src={"/Global/Logo.png"}
              height={90}
              width={90}
              alt="logo"
              className="block sm:hidden"
            />
          </Link>
        </div> */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className={` ${
              pathname == "/" ? "text-footer" : "hover:text-footer"
            }`}
          >
            Home
          </Link>

          <Link
            href="/about-us"
            className={` ${
              pathname == "/about-us" ? " text-footer" : "hover:text-footer"
            }`}
          >
            About Us
          </Link>
          <Link
            href="/it-solutions"
            className={` ${
              pathname == "/it-solutions" ? "text-footer" : "hover:text-footer"
            }`}
          >
            IT Innovation
          </Link>

          <Link
            href="/marketing-solutions"
            className={` ${
              pathname == "/marketing-solutions"
                ? "text-footer"
                : "hover:text-footer"
            }`}
          >
            Marketing Solutions
          </Link>

          <Link
            href="/promotional-events"
            className={` ${
              pathname == "/promotional-events"
                ? "text-footer"
                : "hover:text-footer"
            }`}
          >
            Promotional Events
          </Link>

          <Link
            href="/contact-us"
            className={` ${
              pathname == "/contact-us" ? "text-footer" : "hover:text-footer"
            }`}
          >
            Contact Us
          </Link>
        </div>
        <button onClick={toggleMenu} className="md:hidden block">
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="fixed top-0 right-0 w-4/5 h-full bg-gray-900 shadow-lg p-4 md:hidden z-50">
          <button onClick={toggleMenu} className="absolute top-4 right-4">
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="flex flex-col px-8 items-start space-y-4 mt-10">
            <Link
              href="/"
              className={` ${
                pathname == "/" ? "text-footer" : "hover:text-footer"
              }`}
            >
              Home
            </Link>

            <Link
              href="/about-us"
              className={` ${
                pathname == "/about-us" ? "text-footer" : "hover:text-footer"
              }`}
            >
              About
            </Link>

            <Link
              href="/it-solutions"
              className={` ${
                pathname == "/it-solutions"
                  ? "text-footer"
                  : "hover:text-footer"
              }`}
            >
              IT Innovation
            </Link>

            <Link
              href="/marketing-solutions"
              className={` ${
                pathname == "/marketing-solutions"
                  ? "text-footer"
                  : "hover:text-footer"
              }`}
            >
              Marketing Solutions
            </Link>

            <Link
              href="/promotional-events"
              className={` ${
                pathname == "/promotional-events"
                  ? "text-footer"
                  : "hover:text-footer"
              }`}
            >
              Promotional Events
            </Link>

            <Link
              href="/contact-us"
              className={` ${
                pathname == "/contact-us" ? "text-footer" : "hover:text-footer"
              }`}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 md:hidden"
          style={{ width: "20%" }}
          onClick={toggleMenu}
        ></div>
      )}
    </nav>
  );
}
