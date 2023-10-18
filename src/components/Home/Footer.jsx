/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Container from "../Container";
import Instagram from "../../assets/svgs/Instagram.svg";
import Whatsapp from "../../assets/svgs/WhatsApp.svg";

export default function Footer() {
  return (
    <div className="mt-[10%] bg-black">
      <Container>
        <div className="flex flex-col gap-4 md:gap-0 md:flex-row justify-between mt-20">
          <div className="flex flex-col justify-between text-sm sm:text-base md:text-xl lg:text-2xl font-bold gap-5 mt-20 mb-10 md:mb-20">
            <p className="text-white  ">CONTACT US:</p>
            <p className="text-white">
              Phone: <span className="text-[#25B6AD]">+917999280914</span>
            </p>
            <a href="mailto:Contact@Vidiotics.com">
              <p className="text-white">
                EMAIL:{" "}
                <span className="text-[#25B6AD] underline">
                  Contact@Vidiotics.com
                </span>
              </p>
            </a>
          </div>
          <div className="flex flex-col gap-5 justify-between text-sm sm:text-base md:text-xl lg:text-2xl font-bold md:mt-20 mb-20">
            <p className="text-white md:text-center">SOCIALS:</p>
            <div className="flex flex-row md:justify-between gap-10">
              <a
                href="https://www.instagram.com/nandy/"
                target="_blank"
                alt="instagram"
              >
                <img src={Instagram} />
              </a>
              <a
                href="https://wa.me/+919600261109"
                target="_blank"
                alt="whatsapp"
              >
                <img src={Whatsapp} />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
