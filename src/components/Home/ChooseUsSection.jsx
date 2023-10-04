/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Container from "../Container";
import Sell from "../../assets/svgs/Sell.svg";
import Approval from "../../assets/svgs/Approval.svg";
import Time from "../../assets/svgs/Time Machine.svg";
import Consult from "../../assets/svgs/Consultation.svg";
export default function ChooseUsSection() {
  const data = [
    {
      title: "why Choose us",
      image: Consult,
      content:
        "Our seasoned professionals are well-versed in the latest web and app development trends and strategies:",
    },
    {
      title: "Save Your Time",
      image: Time,
      content:
        "Our team customizes solutions to align perfectly with your business objectives and the preferences of your target audience, letting you reclaim precious time for what matters most.",
    },
    {
      title: "Affordable Price For You",
      image: Sell,
      content:
        "Measurable Results, Amplified ROI – Our Commitment to Your Success.",
    },
    {
      title: "Quality Assurance",
      image: Approval,
      content: "  Elevating Excellence, One Check at a Time",
    },
  ];
  return (
    <Container className={"mt-20 mb-20"}>
      <div className="flex flex-row">
        {data.map((el, index) => (
          <div
            className={`bg-[#25B6AD] flex flex-col mx-auto p-8 gap-7 text-center text-black w-10/12 ${
              index === 2 ? "scale-115 bg-white rounded-xl w-9/12" : ""
            } ${
              index === 0
                ? "rounded-tl-xl rounded-bl-xl"
                : index === 3
                ? "rounded-tr-xl rounded-br-xl"
                : ""
            }`}
          >
            <img
              src={el.image}
              alt="Image"
              width={80}
              height={80}
              className="mx-auto"
            />
            <p className="text-3xl font-bold">{el.title}</p>
            <p className="text-base ">{el.content}</p>
          </div>
        ))}
      </div>
    </Container>
  );
}
