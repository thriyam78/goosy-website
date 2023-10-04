import React from "react";
import Container from "../Container";

export default function OurServices() {
  return (
    <Container className={"mb-20"}>
      <div className=" flex flex-col">
        <p className="mx-auto bg-[#e97543] p-4 text-white rounded-full font-semibold text-xl">
          Our Services
        </p>
        <div className="flex flex-row gap-10">
          <div className="flex flex-col gap-3 p-7 bg-blue-300 scale-50 origin-bottom-left ">
            <p className="text-2xl">Hello from Services</p>
            <p className="text-2xl">Hello from Services</p>
            <p className="text-2xl">Hello from Services</p>
            <p className="text-2xl">Hello from Services</p>
          </div>
        </div>
      </div>
    </Container>
  );
}
