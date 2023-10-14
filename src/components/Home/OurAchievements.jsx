/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import Container from "../Container";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import ClientSuccess from "../../assets/svgs/ClientSucess.svg";
import handshake from "../../assets/svgs/Handshake.svg";
import Users from "../../assets/svgs/Users.svg";
import CheckMark from "../../assets/svgs/Checkmark.svg";
export default function OurAchievements() {
  const [counterOn, setCounterOn] = useState(false);
  const data = [
    {
      ratingimage: ClientSuccess,
      ratingno: "50",
      ratingtext: "Satisified Clients",
    },
    {
      ratingimage: CheckMark,
      ratingno: "9",
      ratingtext: "Successful Campaigns",
    },
    {
      ratingimage: handshake,
      ratingno: "200+",
      ratingtext: "Brands Joined",
    },
    {
      ratingimage: Users,
      ratingno: "11+",
      ratingtext: "Expert Developers",
    },
  ];
  return (
    <Container className={"mt-20 mb-20"}>
      <div className=" flex flex-col">
        <p className="mx-auto bg-[#e97543] px-7 py-3 text-white rounded-full font-semibold text-xl">
          Our Achievements
        </p>
        <div className="flex flex-row gap-5 mt-10">
          <div className="flex flex-col gap-6 mt-10 w-6/12 my-auto">
            <p className="text-4xl text-gray-400">Some of Our Achievements</p>
            <p className="text-xl ">
              We specialize in web development and UI/UX design, utilizing a
              data-driven approach to help businesses reach new heights with our
              award-winning services.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-10">
            {data.map((el, index) => (
              <div
                className={`px-10 py-8  text-black flex flex-col gap-4 rounded-xl text-center ${
                  index === 0
                    ? "bg-[#fdad5d]"
                    : index === 2
                    ? "bg-[#fdad5d]"
                    : "bg-white"
                }`}
              >
                <img
                  src={el.ratingimage}
                  width={50}
                  height={50}
                  alt="image"
                  className="mx-auto"
                />
                <p className="text-black body mt-auto lg:text-3xl md:text-xl sm:text-xl text-base sm:mt-5 lg:mt-auto md:mt-auto font-semibold">
                  <ScrollTrigger
                    onEnter={() => setCounterOn(true)}
                    onExit={() => setCounterOn(false)}
                  >
                    {counterOn && (
                      <CountUp
                        end={parseInt(el.ratingno)}
                        suffix="+"
                        duration={3}
                      ></CountUp>
                    )}
                  </ScrollTrigger>
                </p>
                <p>{el.ratingtext}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
