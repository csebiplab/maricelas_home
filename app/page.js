import CleaningServiceInHouston from "@/components/__shared_one_time/HomeSections/CleaningServiceInHouston";
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
      </div>
    </main>
  );
}
