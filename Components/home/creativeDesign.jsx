import React from "react";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Link from "next/link";

export default function CreativeDesign() {
  return (
    <>
      <div className="bg-[#FEFEFE] py-12 px-4 sm:px-16 w-full">
        <section className="sm:flex items-center justify-between gap-8">
          <div className="sm:w-1/2">
            <h3 className="text-3xl sm:text-5xl uppercase">
              CREATIVE <br /> Marketing <br /> solutions
            </h3>
          </div>
          <div className="sm:w-1/2 text-8xl flex gap-8 w-full justify-center">
            <FaFacebook />
            <FaInstagram />
            <FaGoogle />
            <FaLinkedin />
            <FaYoutube />

            {/* <Image
              src={"/image/SocialMedia-icon/Facebook.png"}
              height={100}
              width={100}
              alt="icon"
            />

            <Image
              src={"/image/SocialMedia-icon/Instagram.png"}
              height={100}
              width={100}
              alt="icon"
            />

            <Image
              src={"/image/SocialMedia-icon/Google.png"}
              height={100}
              width={100}
              alt="icon"
            />

            <Image
              src={"/image/SocialMedia-icon/Linkedin.png"}
              height={100}
              width={100}
              alt="icon"
            />

            <Image
              src={"/image/SocialMedia-icon/Youtube.png"}
              height={100}
              width={100}
              alt="icon"
            /> */}
          </div>
        </section>

        <div className="py-8">
          <p className="font-light text-justify">
            Need a hand with your marketing needs? We’ve got it covered! Our
            rich portfolio of clients are a testament of our capabilities when
            it comes to increasing the brand outreach of various organizations.
            If you’re interested to know more about our marketing services,{" "}
            <Link
              href={"/marketing-solutions"}
              className="underline hover:text-blue-400"
            >
              click here.
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
