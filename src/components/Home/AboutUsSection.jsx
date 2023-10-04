/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Container from "../Container";
import AboutSectionImg from "../../assets/imgs/AboutUsSectionImg.png";
export default function AboutUsSection() {
  return (
    <Container className={"mt-[10%] mb-20"}>
      <div className="flex flex-row gap-[100px]">
        <img src={AboutSectionImg} alt="Image" className="w-[35%]" />
        <div className="flex flex-col gap-3 my-auto mx-auto">
          <p className="bg-[#e97543] font-semibold  p-3 rounded-full text-white text-sm sm:text-sm md:text-base lg:text-lg w-fit">
            About Goosey Academy
          </p>
          <p className="text-white text-lg md:text-xl lg:text-4xl font-semibold md:my-10">
            2+ Years of Experience in Development
          </p>
          <p className="text-white text-base md:text-base lg:text-lg">
            Hello there!👋 We're your digital allies, on a mission to
            supercharge your online presence. With expertise in Web Development,
            Mobile App Development, UI/UX Design, Web Scraping, and SEO
            wizardry, we're here to revamp your digital realm and bring
            customers flocking to your doorstep.
          </p>
        </div>
      </div>
    </Container>
  );
}