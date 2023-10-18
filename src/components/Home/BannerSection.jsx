import React from "react";
import Container from "../Container";
import BannerSectionImg from "../../assets/imgs/BannerSection.png";
import SatisifedClients from "../../assets/svgs/SatisifiedClients.svg";
import { Fade } from "react-awesome-reveal";

export default function BannerSection() {
  return (
    <>
      <Container>
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-[10%] mt-20">
          <div className="flex flex-col gap-3 my-auto w-full md:8/12 lg:w-6/12 ">
            <Fade direction="left">
              <p className="bg-purple-700 px-7 py-3  text-center rounded-full font-semibold text-white text-sm sm:text-base md:text-lg lg:text-xl w-fit">
                Welcome to Goosy
              </p>
              <p className=" text-xl md:text-3xl lg:text-4xl font-semibold md:my-10">
                We craft digital experiences that bring your vision to life, one
                pixel at a time.
              </p>
              <p className=" text-opacity-50  text-lg md:text-lg lg:text-xl">
                With a mastery of cutting-edge technologies and a passion for
                innovation, we turn ideas into stunning websites that captivate
                audiences and drive success.
              </p>
            </Fade>
            <Fade direction="down">
              <div className="flex flex-row gap-5 mt-8">
                <img
                  src={SatisifedClients}
                  alt="Clients"
                  className="w-6/12 md:w-6/12 lg:w-4/12"
                />
                <p className="font-semibold text-lg md:text-xl  md:my-auto">
                  100+ Satisfied Clients
                </p>
                {/* <img src={Emoji} className="relative" /> */}
              </div>
            </Fade>
          </div>
          <img
            src={BannerSectionImg}
            alt="BannerImg"
            className="w-10/12 md:8/12 lg:w-6/12 xl:w-5/12 mx-auto mt-4 md:mt-0"
          />
        </div>
      </Container>
    </>
  );
}
