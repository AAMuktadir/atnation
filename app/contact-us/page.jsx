import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import Header from "@/Components/global/header";

export default function page() {
  return (
    <>
      <div className="bg-background">
        <Header />
        <div className="pb-40 pt-20 px-4 sm:px-0">
          <p className="flex items-center justify-center text-[18px] sm:text-[22px] uppercase text-white pt-2 font-light">
            <span className="border-t border-2 border-footer h-0 w-6 sm:w-12 mr-2"></span>
            <h2 className="text-center uppercase text-[32px] sm:text-[56px] text-white">
              Get In touch
            </h2>
            <span className="border-t border-2 border-footer h-0 w-6 sm:w-12 ml-2"></span>
          </p>
        </div>
        <div className="bg-black px-0 sm:px-20 pb-0 sm:pb-16">
          <div className="grid grid-rows sm:grid-cols-3 gap-8 sm:gap-0 sm:place-items-center bg-darkBG text-footer py-8 sm:-translate-y-1/2">
            <div className="flex">
              <span className="px-4">
                <FaMapMarkerAlt className="text-footer text-[40px]" />
              </span>
              <span>
                <h2 className="uppercase text-[26px] font-light font-inter">
                  Corporate Office
                </h2>
                <p className="pt-2 text-[18px] font-extralight text-gray-300">
                  Green Castle, House 5A (Apt. C1), Road 136/137 Gulshan 1,
                  Dhaka-1212, Bangladesh
                </p>
              </span>
            </div>

            <div className="flex sm:justify-self-center sm:self-start">
              <span className="px-4">
                <FaPhoneAlt className="text-footer text-[40px]" />
              </span>
              <span>
                <h2 className="uppercase text-[26px] font-light">Phones</h2>
                <p className="pt-2 text-[18px] font-extralight text-gray-300">
                  {/* +8801331-220333
                  <br /> */}
                  +880 133 122 0333
                </p>
              </span>
            </div>
            <div className="flex sm:place-self-start">
              <span className="px-4">
                <FaEnvelope className="text-footer text-[40px]" />
              </span>
              <span>
                <h2 className="uppercase text-[26px] font-light font-inter">
                  Write Us
                </h2>
                <p className="pt-2 text-[18px] font-extralight text-gray-300">
                  connect@atnation.live
                </p>
              </span>
            </div>
          </div>
        </div>
        <div className="w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.1900500677943!2d90.41211617468119!3d23.776245787784816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c70c238f1ee1%3A0xd26985a110f395b9!2sPlanet%20X%20Inc.!5e0!3m2!1sen!2sbd!4v1712043977525!5m2!1sen!2sbd"
            width="100%"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
}
