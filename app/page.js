import AboutUsSection from "@/components/__shared_one_time/HomeSections/AboutUsSection";
import BestServicesSection from "@/components/__shared_one_time/HomeSections/BestServicesSection";
import CleanWithUsSection from "@/components/__shared_one_time/HomeSections/CleanWithUsSection";
import CleaningServicesSection from "@/components/__shared_one_time/HomeSections/CleaningServicesSection";
import CostForServicesSection from "@/components/__shared_one_time/HomeSections/CostForServicesSection";
import DifferentApproachForWorkSection from "@/components/__shared_one_time/HomeSections/DifferentApproachForWorkSection";
import FaqSection from "@/components/__shared_one_time/HomeSections/FaqSection";
import GiveUsFeedbackSection from "@/components/__shared_one_time/HomeSections/GiveUsFeedbackSection";
import HeroSection from "@/components/__shared_one_time/HomeSections/HeroSection";
import MessageFromManagerSection from "@/components/__shared_one_time/HomeSections/MessageFromManagerSection";
import OurOtherServicesSection from "@/components/__shared_one_time/HomeSections/OurOtherServicesSection";
import OurWorkingProcessSection from "@/components/__shared_one_time/HomeSections/OurWorkingProcessSection";
import ProjectGallerySection from "@/components/__shared_one_time/HomeSections/ProjectGallerySection";
import RatingNReveiwSection from "@/components/__shared_one_time/HomeSections/RatingNReveiwSection";
import ReasonWhyHireUsSection from "@/components/__shared_one_time/HomeSections/ReasonWhyHireUsSection";
import ServicesAreaSection from "@/components/__shared_one_time/HomeSections/ServicesAreaSection";
import UserReviewNRatingSection from "@/components/__shared_one_time/HomeSections/UserReviewNRatingSection";
import WhyChooseUsSection from "@/components/__shared_one_time/HomeSections/WhyChooseUsSection";


export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="custom-container">
        <HeroSection />
        <section>
          <RatingNReveiwSection />
        </section>
        <section>
          <AboutUsSection />
        </section>
        <section>
          <WhyChooseUsSection />
        </section>
        <section>
          <CleaningServicesSection />
        </section>
        <section>
          <BestServicesSection />
        </section>
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
        <section>
          <ProjectGallerySection />
        </section>
        <section>
          <ReasonWhyHireUsSection />
        </section>
        <section>
          <ServicesAreaSection />
        </section>
        <section>
          <FaqSection />
        </section>
        <section>
          <GiveUsFeedbackSection />
        </section>
        <section>
          <CleanWithUsSection />
        </section>
      </div>
    </main>
  );
}
