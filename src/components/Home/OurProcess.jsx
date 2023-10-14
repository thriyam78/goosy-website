import React from "react";
import Container from "../Container";
import OurProcessImage from "../../assets/svgs/OurProcess.svg";
import OurProcessImageMobile from "../../assets/svgs/OurProcessMobile.svg";
import WorkProcess from "../../assets/svgs/WorkProcess.svg";
import WorkProcessMobile from "../../assets/svgs/WorkProcessMobile.svg";
export default function OurProcess() {
  return (
    <Container>
      <div className=" flex flex-col">
        <p className="mx-auto bg-[#e97543] px-7 py-3 text-white rounded-full font-semibold text-xl">
          Our Process
        </p>
        <img
          src={OurProcessImage}
          alt="OurProcess"
          className="mx-auto mt-20 hidden md:block"
        />
        <img
          src={OurProcessImageMobile}
          alt="OurProcess"
          className="mt-20 block md:hidden"
        />
        <p className="text-5xl text-white font-semibold text-center mt-10">
          Our Workflow Process
        </p>
        <img
          src={WorkProcess}
          alt="WorkProcess"
          className="mx-auto mt-20 hidden md:block"
        />
        <img
          src={WorkProcessMobile}
          alt="WorkProcessMobile"
          className="mt-20 block md:hidden"
        />
      </div>
    </Container>
  );
}
