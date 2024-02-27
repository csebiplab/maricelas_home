import CleaningServiceInHouston from "@/components/__shared_one_time/HomeSections/CleaningServiceInHouston";
import CommercialNResidentialCleaningService from "@/components/__shared_one_time/HomeSections/CommercialNResidentialCleaningService";
import { FaqAccordion } from "@/components/__shared_one_time/HomeSections/FaqAccordion";
import HeroSection from "@/components/__shared_one_time/HomeSections/HeroSection";
import HowDoesCleaningCompanyWorks from "@/components/__shared_one_time/HomeSections/HowDoesCleaningCompanyWorks";
import OurClients from "@/components/__shared_one_time/HomeSections/OurClients";
// import CSBGIMG3 from "@/assets/cs3.jpg"

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="custom-container">
        <HeroSection />
        <section>
          <OurClients />
        </section>
        <section>
          <CleaningServiceInHouston />
        </section>
        <section>
          <CommercialNResidentialCleaningService />
        </section>
        <section>
          <HowDoesCleaningCompanyWorks />
        </section>

        <section>
          <FaqAccordion />
        </section>
      </div>
    </main>
  );
}
