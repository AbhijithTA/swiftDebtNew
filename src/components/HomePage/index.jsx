import WhyChooseUsComponent from "./ChooseSwift";
import HeroSectionComponent from "./HeroSection";
import WhatWeStandFor from "./WhatWeStandFor";

const IndexHomePage = () => {
  return (
    <>
      <HeroSectionComponent />
      <div className="pt-40">
      <WhatWeStandFor />
      </div>
      <WhyChooseUsComponent />
    </>
  );
};

export default IndexHomePage;
