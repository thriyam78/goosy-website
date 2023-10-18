import React, { useEffect, useRef, useState } from "react";
import Container from "../Container";
import Portfolio from "./OurProjects/Portfolio";
import ViewProjectsArrow from "../../assets/svgs/arrow_black.svg";
import { Element } from "react-scroll";
import { Fade } from "react-awesome-reveal";
export default function OurProjects() {
  const [isClicked, setIsClicked] = useState(false);
  const isClickedRef = useRef(null);

  const handleClick = () => {
    setIsClicked(true);
  };

  const handleClickOutside = (e) => {
    if (isClickedRef.current && !isClickedRef.current.contains(e.target)) {
      setIsClicked(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <>
      <Element name="scroll-to-Projects">
        <Container className={"mt-20"}>
          <Fade direction="left">
            <div className="flex flex-col lg:flex-row justify-between">
              <div className="flex flex-col gap-6">
                <p className="bg-purple-700 px-6 py-3 rounded-full text-white text-lg w-fit mx-auto md:m-0 font-semibold">
                  Our Projects
                </p>
                <p className="text-black text-3xl font-semibold mx-auto md:m-0">
                  PROJECTS WE HAVE DONE
                </p>
              </div>

              <p className="text-black text-opacity-50 text-lg lg:w-6/12 md:my-auto mx-auto md:m-0 mt-10 md:mt-0 w-4/5">
                Goosy specializes in Figma design, web development, and
                delivery, along with crafting compelling copy. Choose your
                stage, and we'll take it from there, ensuring your digital needs
                are met with precision and creativity. We use the finest tools
                and join your project at just the right moment, guaranteeing
                results that stand out.
              </p>
            </div>
          </Fade>
          <img
            src={ViewProjectsArrow}
            alt="Arrow"
            width={80}
            height={80}
            className="mx-auto mt-10"
          />
          <p
            class="text-center px-7 py-3 bg-[#e97543] hover:bg-purple-700 rounded-full mx-auto mt-6 transform hover:translate-y-[-7px] transition-transform hover:ease-in-out w-fit lg:w-4/12 cursor-pointer"
            onClick={handleClick}
          >
            View Projects
          </p>
        </Container>
        <div
          className={`${
            isClicked ? "block" : "hidden"
          } transition-all duration-300 ease-in-out`}
          ref={isClickedRef}
        >
          <div className="bg-[#fdad5d] bg-opacity-70 mt-10" ref={isClickedRef}>
            <Portfolio />
          </div>
        </div>
      </Element>
    </>
  );
}
