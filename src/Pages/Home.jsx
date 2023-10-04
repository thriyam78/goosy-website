import React from "react";
import BannerSection from "../components/Home/BannerSection";
import ChooseUsSection from "../components/Home/ChooseUsSection";
import AboutUsSection from "../components/Home/AboutUsSection";
import OurServices from "../components/Home/OurServices";

export default function Home() {
  return (
    <div>
      <BannerSection />
      <ChooseUsSection />
      <AboutUsSection />
      <OurServices />
    </div>
  );
}
