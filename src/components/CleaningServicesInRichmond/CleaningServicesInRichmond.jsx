import React from "react";
import CleaningServicesInRichmondBanner from "./CleaningServicesInRichmondBanner/CleaningServicesInRichmondBanner";
import RatingNReviewSection from "../__shared_one_time/HomeSections/Rating/RatingNReveiwSection";
import AboutUs from "./AboutUs/AboutUs";
import HouseCleaning from "./HouseCleaning/HouseCleaning";
import CleanAnsFresh from "./CleanAnsFresh/CleanAnsFresh";
import ProjectGallerySection from "./../__shared_one_time/HomeSections/ProjectGallerySection";
import ServicesAreaSection from "../__shared_one_time/HomeSections/ServicesAreaSection";
import WeMakePepopleHappy from "./WeMakePepopleHappy/WeMakePepopleHappy";
import TrustedCleaning from "./TrustedCleaning/TrustedCleaning";
import HomeCleaning from "./HomeCleaning/HomeCleaning";
import FreeCleaning from "./FreeCleaning/FreeCleaning";
import EnjoyableFreshly from "./EnjoyableFreshly/EnjoyableFreshly";
import Professional from "./Professional/Professional";
import ResidentialCleaning from "./ResidentialCleaning/ResidentialCleaning";
import CommercialCleaning from "./CommercialCleaning/CommercialCleaning";
import WhyWeSpecial from "./WhyWeSpecial/WhyWeSpecial";
import ReviewSlider from "./ReviewSwipper/ReviewSlider/ReviewSlider";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";

const CleaningServicesInRichmond = () => {
  return (
    <div>
      <section>
        <CleaningServicesInRichmondBanner />
      </section>

      <section>
        <RatingNReviewSection />
      </section>

      <section>
        <AboutUs />
      </section>

      <section>
        <Professional />
      </section>

      <section>
        <CleanAnsFresh />
      </section>

      <section>
        <HomeCleaning />
      </section>

      <section>
        <HouseCleaning />
      </section>

      <section>
        <ResidentialCleaning />
      </section>

      <section>
        <CommercialCleaning />
      </section>
      
      

      <section>
        <ProjectGallerySection />
      </section>

      <section>
        <FreeCleaning />
      </section>

      <section>
        <TrustedCleaning />
      </section>

      <section>
        <WhyWeSpecial/>
      </section>

      <section className="container padding__top">
        <ReviewSlider/>
      </section>

      <section>
        <WeMakePepopleHappy />
      </section>

      <section>
        <WhyChooseUs/>
      </section>

      <section>
        <EnjoyableFreshly />
      </section>

      <section className="padding__all">
        <ServicesAreaSection />
      </section>
    </div>
  );
};

export default CleaningServicesInRichmond;
