
import HomeBanner from "@/components/__shared_one_time/HomeSections/HomeBanner/HomeBanner";
import RatingNReviewSection from "@/components/__shared_one_time/HomeSections/Rating/RatingNReveiwSection";
import MessageFromManagerSection from "@/components/__shared_one_time/HomeSections/MessageFromManeger/MessageFromManagerSection";
import ProjectGallerySection from "@/components/__shared_one_time/HomeSections/ProjectGallerySection";
import ServicesAreaSection from "@/components/__shared_one_time/HomeSections/ServicesAreaSection";
import GiveUsFeedbackSection from "@/components/__shared_one_time/HomeSections/GiveUsFeedbackSection";
import AboutUs from "@/components/__shared_one_time/HomeSections/AboutUs/AboutUs";
import CleaningServices from "@/components/__shared_one_time/HomeSections/CleaningServices/CleaningServices";
import Experienced from "@/components/__shared_one_time/HomeSections/Experienced/Experienced";
import Faq from "@/components/__shared_one_time/HomeSections/Faq/Faq";
import OurApproach from "@/components/__shared_one_time/HomeSections/OurApproach/OurApproach";
import Benefits from "@/components/__shared_one_time/HomeSections/Benefits/Benefits";
import WhyChooseUs from "@/components/__shared_one_time/HomeSections/WhyChooseUs/WhyChooseUs";
import HireUs from "@/components/__shared_one_time/HomeSections/HireUs/HireUs";
import HowMuchDoesCost from "@/components/__shared_one_time/HomeSections/HowMuchDoesCost/HowMuchDoesCost";
import HowDoseWork from "@/components/__shared_one_time/HomeSections/HowDoseWork/HowDoseWork";
import GetAreaCleanedWithUs from "@/components/__shared_one_time/HomeSections/GetAreaCleanedWithUs/GetAreaCleanedWithUs";
import Services from "@/components/__shared_one_time/HomeSections/Services/Services";
import Review from "@/components/__shared_one_time/HomeSections/Review/Review";


export default function Home() {
  return (
    <main className="">
      <div className="custom-container">
        <section>
          <HomeBanner />
        </section>

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
          <HowDoseWork/>
        </section>

        <section>
          <Experienced/>
        </section>

        <section>
        <MessageFromManagerSection />
        </section>

        <section>
          <Benefits />
        </section>
        
        <section>
          <Services />
        </section>

        <section>
          <ProjectGallerySection />
        </section>

        <section>
          <OurApproach/>
        </section>

        <section>
          <HowMuchDoesCost/>
        </section>

        <section>
          <Review/>
        </section>

        <section>
          <HireUs/>
        </section>

        <section>
          <GetAreaCleanedWithUs/>
        </section>

        <section>
          <Faq />
        </section>

        <section>
          <ServicesAreaSection />
        </section>

        <section>
          <GiveUsFeedbackSection />
        </section>
      </div>
    </main>
  );
}
