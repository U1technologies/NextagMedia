import React from "react";
import AboutUsSection from "@/components/AboutUs";
import ValuesSection from "@/components/OurValues";
import AboutCEO from "@/components/AboutCEO";
import Celebrations from "@/components/Celebrations";
import IndustriesWeServe from "@/components/IndustriesServe";
import TimelineSection from "@/components/Milestones";

const AboutPage = () => {
  return (
    <div>
      <AboutUsSection />
      <ValuesSection />
      <IndustriesWeServe />
      <AboutCEO />
      <TimelineSection />
      <Celebrations />
      {/* <IndustriesWeServe /> */}
    </div>
  );
};

export default AboutPage;
