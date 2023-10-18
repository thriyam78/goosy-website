import Container from "../Container";
import webImage from "../../assets/imgs/web_developement.jpg";
import appImage from "../../assets/imgs/mobile_app_development.jpg";
import uiImage from "../../assets/imgs/ui_ux_design.jpg";
import { Element } from "react-scroll";

export default function MyServices() {
  const data = [
    {
      title: "Website Developement",
      approach: [
        "Unique figma Design",
        "Premium Look",
        "Graphic Design",
        "Content Upload",
        "Responsive",
        "Highly Scalable",
        "Third Integration",
        "Payment Gateway",
        "And Much More…",
      ],
      imagePath: webImage,
    },
    {
      title: "Mobile App Development",
      approach: [
        "complete Re-Branding",
        "New Premium Designs",
        "Graphic Design",
        "Responsive",
        "Content Upload",
        "Highly Scalable",
        "Third Integration",
        "Payment Gateway",
        "And Much More…",
      ],
      imagePath: appImage,
    },

    {
      title: "UI/UX Design",
      approach: [
        "complete Re-Branding",
        "New Premium Designs",
        "Graphic Design",
        "Responsive",
        "Content Upload",
        "Highly Scalable",
        "Third Integration",
        "Payment Gateway",
        "And Much More…",
      ],
      imagePath: uiImage,
    },
  ];
  return (
    <Element name="scroll-to-Services">
      <div className="mt-10 pb-10" id="servicesOffered">
        <Container>
          <p className="text-center text-color-one text-5xl font-semibold mb-10">
            Services<span className="text-color-two"> We Offer</span>
          </p>
          <div className="w-10/12 mx-auto flex flex-col md:flex-row gap-10">
            {data.map((currEle, index) => {
              return (
                <div className="bg-[#25B6AD] rounded-2xl hover:scale-105 hover:shadow-lg hover:shadow-[#81d5dd] pb-5 cursor-pointer basis-1/3">
                  <div className="w-full py-5 rounded-t-2xl text-lg font-semibold text-color-two text-center">
                    <p className="my-auto">{currEle.title}</p>
                  </div>
                  <div className="w-10/12 mx-auto text-lg font-semibold mt-5">
                    <img
                      className="w-[250px] h-[250px] mx-auto"
                      src={currEle.imagePath}
                      alt={currEle.imagePath}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </div>
    </Element>
  );
}
