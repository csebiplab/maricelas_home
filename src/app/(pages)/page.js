
import HomeBanner from "@/components/__shared_one_time/HomeSections/HomeBanner/HomeBanner";
import RatingNReviewSection from "@/components/__shared_one_time/HomeSections/Rating/RatingNReveiwSection";
import MessageFromManagerSection from "@/components/__shared_one_time/HomeSections/MessageFromManeger/MessageFromManagerSection";
import OurWorkingProcessSection from "@/components/__shared_one_time/HomeSections/WorkingProcess/OurWorkingProcessSection";
import DifferentApproachForWorkSection from "@/components/__shared_one_time/HomeSections/Approach/DifferentApproachForWorkSection";
import OurOtherServicesSection from "@/components/__shared_one_time/HomeSections/OurOtherServicesSection";
import CostForServicesSection from "@/components/__shared_one_time/HomeSections/CostForServicesSection";
import UserReviewNRatingSection from "@/components/__shared_one_time/HomeSections/UserReviewNRatingSection";
import ProjectGallerySection from "@/components/__shared_one_time/HomeSections/ProjectGallerySection";
import ReasonWhyHireUsSection from "@/components/__shared_one_time/HomeSections/ReasonWhyHireUs/ReasonWhyHireUsSection";
import ServicesAreaSection from "@/components/__shared_one_time/HomeSections/ServicesAreaSection";
import GiveUsFeedbackSection from "@/components/__shared_one_time/HomeSections/GiveUsFeedbackSection";
import CleanWithUsSection from "@/components/__shared_one_time/HomeSections/CleaningWithUs/CleanWithUsSection";
import AboutUs from "@/components/__shared_one_time/HomeSections/AboutUs/AboutUs";
import CleaningServices from "@/components/__shared_one_time/HomeSections/CleaningServices/CleaningServices";
import Experienced from "@/components/__shared_one_time/HomeSections/Experienced/Experienced";
import Faq from "@/components/__shared_one_time/HomeSections/Faq/Faq";
import OurApproach from "@/components/__shared_one_time/HomeSections/OurApproach/OurApproach";
import Benefits from "@/components/__shared_one_time/HomeSections/Benefits/Benefits";
import WhyChooseUs from "@/components/__shared_one_time/HomeSections/WhyChooseUs/WhyChooseUs";
import HireUs from "@/components/__shared_one_time/HomeSections/HireUs/HireUs";


export default function Home() {
  return (
    <main className="">
      <div className="custom-container">
        <div>
          <HomeBanner />
        </div>

        <section>
          <RatingNReviewSection />
        </section>

        <section>
          <AboutUs/>
        </section>

        <section>
          <WhyChooseUs/>
        </section>

        <section>
          <CleaningServices/>
        </section>

        <section>
          <Experienced/>
        </section>

        <section>
          <Benefits />
        </section>

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

        <section>
          <OurApproach/>
        </section>

        <section>
          <HireUs/>
        </section>
        
        <div>
          <ReasonWhyHireUsSection />
        </div>
        <div>
          <ServicesAreaSection />
        </div>
        <div>
          <Faq />
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
