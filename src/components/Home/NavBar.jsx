import React, { useState } from "react";
import Container from "../Container";
import { Link } from "react-scroll";
import Hamburger from "hamburger-react";

export default function NavBar() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const navOptions = [
    {
      linkto: "scroll-to-Home",
      name: "Home",
    },
    {
      linkto: "scroll-to-Services",
      name: "Services",
    },
    {
      linkto: "scroll-to-Process",
      name: "Process",
    },
    {
      linkto: "scroll-to-Projects",
      name: "Projects",
    },
    {
      linkto: "scroll-to-Achievements",
      name: "Achievements",
    },
    {
      linkto: "scroll-to-Contacts",
      name: "Contacts",
    },
  ];

  return (
    <>
      <Container>
        <div className="hidden md:block ">
          <div className="flex h-30 mb-10 md:mb-0 mt-20 ml-auto text-xl  flex-row bg-amber-300 bg-opacity-50 gap-10 rounded-full w-fit px-10 py-5 md:static ">
            {navOptions.map((el, index) => (
              <Link to={el.linkto} smooth={true} duration={500}>
                <p className="text-black text-lg cursor-pointer hover:text-amber-600">
                  {el.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </Container>
      <div className="bg-[#FFDBCE]  md:hidden w-full ml-auto flex justify-between p-3">
        <div className="my-auto px-3">Goosy Academy</div>
        <Hamburger
          color="#3D4754"
          size={25}
          toggled={isSmallScreen}
          toggle={setIsSmallScreen}
        />
      </div>

      {isSmallScreen && (
        <div className=" flex flex-col gap-3 items-center bg-[#FFDBCE] w-full py-8 justify-center ml-auto transition-all duration-500 ease-in">
          {navOptions.map((el, index) => (
            <Link to={el.linkto} smooth={true} duration={500}>
              <p className="text-black font-semibold text-xl">{el.name}</p>
              <hr className="w-full border-gray-600" />
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
