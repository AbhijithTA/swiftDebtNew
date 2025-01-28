import WhyChooseUsComponent from "./ChooseSwift";
import HeroSectionComponent from "./HeroSection";
import WhatWeStandFor from "./WhatWeStandFor";

const IndexHomePage = () => {
  return (
    <>
      <HeroSectionComponent />
      <div className="pt-20">
      <WhatWeStandFor />
      </div>
      <WhyChooseUsComponent />
    </>
  );
};

export default IndexHomePage;
