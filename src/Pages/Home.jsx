import React from "react";
import BannerSection from "../components/Home/BannerSection";
import ChooseUsSection from "../components/Home/ChooseUsSection";
import AboutUsSection from "../components/Home/AboutUsSection";
import OurServices from "../components/Home/OurServices";
import OurProcess from "../components/Home/OurProcess";
import OurProjects from "../components/Home/OurProjects";
import OurAchievements from "../components/Home/OurAchievements";
import Benifit from "../components/Home/Benfits";
import Contacts from "../components/Home/Contacts";

export default function Home() {
  return (
    <div>
      <BannerSection />
      <ChooseUsSection />
      <AboutUsSection />
      <OurServices />
      <Benifit />
      <OurProcess />
      <OurProjects />
      <OurAchievements />
      <Contacts />
    </div>
  );
}
