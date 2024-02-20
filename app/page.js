import HeroSection from "@/components/__shared_one_time/HomeSections/HeroSection";
import OurClients from "@/components/__shared_one_time/HomeSections/OurClients";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="custom-container">
        <section>
          <HeroSection />
        </section>
        <section className="container">
          <OurClients />
        </section>
      </div>
    </main>
  );
}
