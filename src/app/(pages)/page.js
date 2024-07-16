
import HomeBanner from "@/components/__shared_one_time/HomeSections/HomeBanner/HomeBanner";
import RatingNReviewSection from "@/components/__shared_one_time/HomeSections/Rating/RatingNReveiwSection";
import AboutUsSection from "@/components/__shared_one_time/HomeSections/AboutUsSection";
import WhyChooseUsSection from "@/components/__shared_one_time/HomeSections/WhyChooseUs/WhyChooseUsSection";
import CleaningServicesSection from "@/components/__shared_one_time/HomeSections/CleaningServicesSection";
import BestServicesSection from "@/components/__shared_one_time/HomeSections/BestServicesSection";
import MessageFromManagerSection from "@/components/__shared_one_time/HomeSections/MessageFromManeger/MessageFromManagerSection";
import OurWorkingProcessSection from "@/components/__shared_one_time/HomeSections/WorkingProcess/OurWorkingProcessSection";
import DifferentApproachForWorkSection from "@/components/__shared_one_time/HomeSections/Approach/DifferentApproachForWorkSection";
import OurOtherServicesSection from "@/components/__shared_one_time/HomeSections/OurOtherServicesSection";
import CostForServicesSection from "@/components/__shared_one_time/HomeSections/CostForServicesSection";
import UserReviewNRatingSection from "@/components/__shared_one_time/HomeSections/UserReviewNRatingSection";
import ProjectGallerySection from "@/components/__shared_one_time/HomeSections/ProjectGallerySection";
import ReasonWhyHireUsSection from "@/components/__shared_one_time/HomeSections/ReasonWhyHireUs/ReasonWhyHireUsSection";
import ServicesAreaSection from "@/components/__shared_one_time/HomeSections/ServicesAreaSection";
import FaqSection from "@/components/__shared_one_time/HomeSections/FaqSection";
import GiveUsFeedbackSection from "@/components/__shared_one_time/HomeSections/GiveUsFeedbackSection";
import CleanWithUsSection from "@/components/__shared_one_time/HomeSections/CleaningWithUs/CleanWithUsSection";


export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="">
        <div>
          <HomeBanner />
        </div>
        <section>
          <RatingNReviewSection />
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
