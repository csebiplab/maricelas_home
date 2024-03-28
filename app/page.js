import AboutUsSection from "@/components/__shared_one_time/HomeSections/AboutUsSection";
import DifferentApproachForWorkSection from "@/components/__shared_one_time/HomeSections/Approach/DifferentApproachForWorkSection";
import BestServicesSection from "@/components/__shared_one_time/HomeSections/BestServicesSection";
import CleanWithUsSection from "@/components/__shared_one_time/HomeSections/CleanWithUsSection";
import CleaningServicesSection from "@/components/__shared_one_time/HomeSections/CleaningServicesSection";
import CostForServicesSection from "@/components/__shared_one_time/HomeSections/CostForServicesSection";
import FaqSection from "@/components/__shared_one_time/HomeSections/FaqSection";
import GiveUsFeedbackSection from "@/components/__shared_one_time/HomeSections/GiveUsFeedbackSection";
import HomeBanner from "@/components/__shared_one_time/HomeSections/HomeBanner/HomeBanner";
import MessageFromManagerSection from "@/components/__shared_one_time/HomeSections/MessageFromManagerSection";
import OurOtherServicesSection from "@/components/__shared_one_time/HomeSections/OurOtherServicesSection";
import ProjectGallerySection from "@/components/__shared_one_time/HomeSections/ProjectGallerySection";
import RatingNReveiwSection from "@/components/__shared_one_time/HomeSections/Rating/RatingNReveiwSection";
import ReasonWhyHireUsSection from "@/components/__shared_one_time/HomeSections/ReasonWhyHireUsSection";
import ServicesAreaSection from "@/components/__shared_one_time/HomeSections/ServicesAreaSection";
import UserReviewNRatingSection from "@/components/__shared_one_time/HomeSections/UserReviewNRatingSection";

import OurWorkingProcessSection from "@/components/__shared_one_time/HomeSections/WorkingProcess/OurWorkingProcessSection";
import WhyChooseUsSection from "@/components/__shared_one_time/WhyChooseUs/WhyChooseUsSection";


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
        <section>
          <MessageFromManagerSection />
        </section>
        <section>
          <OurWorkingProcessSection />
        </section>
        <section>
          <DifferentApproachForWorkSection />
        </section>
        <section>
          <OurOtherServicesSection />
        </section>
        <section>
          <CostForServicesSection />
        </section>
        <section>
          <UserReviewNRatingSection />
        </section>
        <div>
          <ProjectGallerySection />
        </div>
        <section>
          <ReasonWhyHireUsSection />
        </section>
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
