import BorderBottom from "@/components/__ui/BorderBottom";
import React from "react";

const CleanedWithUs = () => {
  return (
    <div
      className="bg-center bg-cover bg-fixed bg-no-repeat w-full min-h-screen"
      style={{
        backgroundImage: `linear-gradient(to right, #612179 5%, transparent 100%), url(/ourteam.jpg)`,
      }}
    >
      <section className="py-10 text-white">
        <div className="w-full md:w-7/12">
          <div className="w-full">
            <h3 className="font-semibold text-3xl text-white">
              Get Your Commercial & Residential Area Cleaned With Us
            </h3>

            <BorderBottom
              classProps={{
                child: "w-24",
                parrent: "flex justify-start mt-4",
              }}
            />
          </div>
          <p className="mt-4 text-white font-medium text-xl leading-relaxed">
            Transform your commercial and residential spaces into pristine
            havens with our professional cleaning services in Houston, TX. Our
            dedicated team utilizes state-of-the-art equipment and eco-friendly
            cleaning products to ensure a thorough and safe cleaning experience.
            Whether it's deep cleaning carpets, sanitizing surfaces, or tackling
            tough stains, we are committed to exceeding your expectations. Say
            goodbye to dirt, dust, and grime, and hello to a fresh, welcoming
            environment. Contact us today to schedule your cleaning appointment
            and let us bring cleanliness and comfort back to your space.
          </p>
        </div>
      </section>
    </div>
  );
};

export default CleanedWithUs;
