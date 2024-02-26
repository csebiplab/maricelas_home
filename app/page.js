import CleaningServiceInHouston from "@/components/__shared_one_time/HomeSections/CleaningServiceInHouston";
import { FaqAccordion } from "@/components/__shared_one_time/HomeSections/FaqAccordion";
import HeroSection from "@/components/__shared_one_time/HomeSections/HeroSection";
import OurClients from "@/components/__shared_one_time/HomeSections/OurClients";

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
          <FaqAccordion />
        </section>
      </div>
    </main>
  );
}
