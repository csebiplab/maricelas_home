
import HomeBanner from "@/components/__shared_one_time/HomeSections/HomeBanner/HomeBanner";
import RatingNReviewSection from "@/components/__shared_one_time/HomeSections/Rating/RatingNReveiwSection";
import MessageFromManagerSection from "@/components/__shared_one_time/HomeSections/MessageFromManeger/MessageFromManagerSection";
import UserReviewNRatingSection from "@/components/__shared_one_time/HomeSections/UserReviewNRatingSection";
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
          <HowMuchDoesCost/>
        </section>

        <section>
          <HireUs/>
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
