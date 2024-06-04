import AboutUsSection from "@/src/components/__shared_one_time/HomeSections/AboutUsSection";
import DifferentApproachForWorkSection from "@/src/components/__shared_one_time/HomeSections/Approach/DifferentApproachForWorkSection";
import BestServicesSection from "@/src/components/__shared_one_time/HomeSections/BestServicesSection";
import CleanWithUsSection from "@/src/components/__shared_one_time/HomeSections/CleaningWithUs/CleanWithUsSection";
import CleaningServicesSection from "@/src/components/__shared_one_time/HomeSections/CleaningServicesSection";
import CostForServicesSection from "@/src/components/__shared_one_time/HomeSections/CostForServicesSection";
import FaqSection from "@/src/components/__shared_one_time/HomeSections/FaqSection";
import GiveUsFeedbackSection from "@/src/components/__shared_one_time/HomeSections/GiveUsFeedbackSection";
import HomeBanner from "@/src/components/__shared_one_time/HomeSections/HomeBanner/HomeBanner";
import MessageFromManagerSection from "@/src/components/__shared_one_time/HomeSections/MessageFromManeger/MessageFromManagerSection";
import OurOtherServicesSection from "@/src/components/__shared_one_time/HomeSections/OurOtherServicesSection";
import ProjectGallerySection from "@/src/components/__shared_one_time/HomeSections/ProjectGallerySection";
import RatingNReveiwSection from "@/src/components/__shared_one_time/HomeSections/Rating/RatingNReveiwSection";
import ReasonWhyHireUsSection from "@/src/components/__shared_one_time/HomeSections/ReasonWhyHireUs/ReasonWhyHireUsSection";
import ServicesAreaSection from "@/src/components/__shared_one_time/HomeSections/ServicesAreaSection";
import UserReviewNRatingSection from "@/src/components/__shared_one_time/HomeSections/UserReviewNRatingSection";

import OurWorkingProcessSection from "@/src/components/__shared_one_time/HomeSections/WorkingProcess/OurWorkingProcessSection";
import WhyChooseUsSection from "@/src/components/__shared_one_time/WhyChooseUs/WhyChooseUsSection";


export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="">
        <div>
          <HomeBanner />
        </div>
        <section>
          <RatingNReveiwSection />
        </section>
        <section>
          <AboutUsSection />
        </section>
        <div>
          <WhyChooseUsSection />
        </div>
        <section>
          <CleaningServicesSection />
        </section>
        <div>
          <BestServicesSection />
        </div>
        <div>
          <MessageFromManagerSection />
        </div>
        <div>
          <OurWorkingProcessSection />
        </div>
        <section>
          <DifferentApproachForWorkSection />
        </section>
        <div>
          <OurOtherServicesSection />
        </div>
        <section>
          <CostForServicesSection />
        </section>
        <div>
          <UserReviewNRatingSection />
        </div>
        <div>
          <ProjectGallerySection />
        </div>
        <div>
          <ReasonWhyHireUsSection />
        </div>
        <div>
          <ServicesAreaSection />
        </div>
        <div>
          <FaqSection />
        </div>
        <div>
          <GiveUsFeedbackSection />
        </div>
        <div>
          <CleanWithUsSection />
        </div>
      </div>
    </main>
  );
}
