import React from "react";
import Container from "../Container";
import BannerSectionImg from "../../assets/imgs/BannerSection.png";
import SatisifedClients from "../../assets/svgs/SatisifiedClients.svg";
export default function BannerSection() {
  return (
    <>
      <Container>
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-[10%] mt-20">
          <div className="flex flex-col gap-3 my-auto lg:w-6/12 ">
            <p className="bg-[#e97543] py-1 px-2 md:p-2 lg:p-3 text-center rounded-full font-semibold text-white text-sm sm:text-base md:text-lg lg:text-xl w-fit">
              Welcome to Goosey academy
            </p>
            <p className="text-white text-xl md:text-3xl lg:text-4xl font-semibold md:my-10">
              We craft digital experiences that bring your vision to life, one
              pixel at a time.
            </p>
            <p className="text-white text-opacity-50  text-lg md:text-lg lg:text-xl">
              With a mastery of cutting-edge technologies and a passion for
              innovation, we turn ideas into stunning websites that captivate
              audiences and drive success.
            </p>

            <div className="flex flex-row gap-5">
              <img src={SatisifedClients} alt="Clients" className="w-4/12" />
              <p className="font-semibold text-xl text-white md:my-auto">
                100+ Satisfied Clients
              </p>
              {/* <img src={Emoji} className="relative" /> */}
            </div>
          </div>
          <img src={BannerSectionImg} alt="BannerImg" className="w-5/12" />
        </div>
      </Container>
    </>
  );
}
