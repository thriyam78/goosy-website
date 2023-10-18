/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Container from "../Container";
import AboutSectionImg from "../../assets/imgs/AboutUsSectionImg.png";
import { Element } from "react-scroll";
import { Fade } from "react-awesome-reveal";
export default function AboutUsSection() {
  return (
    <Element name="scroll-to-Home">
      <Container className={"mt-[10%] mb-20"}>
        <div className="flex flex-col md:flex-row gap-[100px]">
          <img
            src={AboutSectionImg}
            alt="Image"
            className="w-10/12 mx-auto md:w-[40%] lg:w-[38%] xl:w-[35%]"
          />
          <Fade direction="right">
            <div className="flex flex-col gap-3 my-auto mx-auto">
              <p className="bg-purple-700 font-semibold  px-7 py-3 rounded-full text-white text-sm sm:text-sm md:text-base lg:text-lg w-fit">
                About Goosy
              </p>
              <p className=" text-lg md:text-xl lg:text-4xl font-semibold md:my-10">
                2+ Years of Experience in Development
              </p>
              <p className=" text-base md:text-base lg:text-lg">
                Hello there!👋 We're your digital allies, on a mission to
                supercharge your online presence. With expertise in Web
                Development, Mobile App Development, UI/UX Design, Web Scraping,
                and SEO wizardry, we're here to revamp your digital realm and
                bring customers flocking to your doorstep.
              </p>
            </div>
          </Fade>
        </div>
      </Container>
    </Element>
  );
}
