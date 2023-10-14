import React from "react";
import Container from "../../Container";
import portfolioImage1 from "../../../assets/imgs/biAcademyImage.png";
import portfolioImage2 from "../../../assets/imgs/tryRabbitImage.png";
import portfolioImage3 from "../../../assets/imgs/akshayPortfolioImage.png";
import portfolioImage4 from "../../../assets/imgs/sharavariPortfolioImage.png";
import portfolioImage5 from "../../../assets/imgs/Vidiotics.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";

export default function Portfolio() {
  const projectData = [
    {
      image: portfolioImage1,
      title: "Bi Academy",
    },
    {
      image: portfolioImage2,
      title: "TryRabbit",
    },
    {
      image: portfolioImage5,
      title: "Vidiotics",
    },
    {
      title: "Akshay Portfolio",
      image: portfolioImage3,
    },
    {
      title: "Sharavari Portfolio",
      image: portfolioImage4,
    },
  ];

  return (
    <div className="py-5 md:py-5" id="portfolio">
      <Container>
        <div className="text-2xl md:text-5xl font-semibold text-center">
          <p className="text-color-two pb-2 md:pb-10">
            My <span className="text-color-one">Works</span>
          </p>
          <div className="w-11/12 mx-auto">
            <Carousel
              renderIndicator={false}
              showThumbs={false}
              renderArrowPrev={(clickHandler, hasPrev) => {
                return (
                  <div
                    className={`${
                      hasPrev ? "absolute" : "hidden"
                    } top-0 bottom-0 left-0 flex justify-center items-center p-3 opacity-100 hover:opacity-30 cursor-pointer z-20`}
                    onClick={clickHandler}
                  >
                    <AiOutlineArrowLeft className="w-9 h-9 text-white" />
                  </div>
                );
              }}
              renderArrowNext={(clickHandler, hasNext) => {
                return (
                  <div
                    className={`${
                      hasNext ? "absolute" : "hidden"
                    } top-0 bottom-0 right-0 flex justify-center items-center p-3 opacity-100 hover:opacity-30 cursor-pointer z-20`}
                    onClick={clickHandler}
                  >
                    <AiOutlineArrowRight className="w-9 h-9 text-white" />
                  </div>
                );
              }}
              swipeable={true}
              className="px-1 sm:px-10"
            >
              {projectData.map((currEle, index) => {
                return (
                  <div className="w-7/12 mx-auto">
                    <div className="my-10">
                      <img
                        className="w-full h-full my-auto rounded-xl shadow-2xl shadow-black"
                        src={currEle.image}
                        alt={currEle.image}
                      />
                    </div>
                    <div className="">
                      <p className="text-xl mt-2 md:mt-0 md:text-3xl font-semibold text-color-one">
                        {currEle.title}
                      </p>
                    </div>
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>
      </Container>
    </div>
  );
}
