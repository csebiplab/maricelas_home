import Image from "next/image";
import React from "react";
import CleaningService from "@/assets/cs2.jpg";
import BorderBottom from "@/components/__ui/BorderBottom";

const CommercialNResidentialCleaningService = () => {
  return (
    <div className="mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <div className="w-full md:col-span-3">
          <div className="my-4">
            <div className="w-full">
              <h3 className="font-semibold text-3xl">
                Best Commercial & Residential Cleaning Services in Houston
              </h3>

              <BorderBottom
                classProps={{
                  child: "w-24",
                  parrent: "flex justify-start mt-4",
                }}
              />
            </div>
            <div className="pt-4">
              <p>
                When it comes to finding the best cleaning services in Houston,
                quality and reliability are paramount. Look no further than our
                dedicated team of professionals who are committed to delivering
                exceptional cleaning solutions tailored to meet your specific
                needs. Whether it's maintaining the cleanliness of your office
                space or ensuring your home sparkles, we prioritize customer
                satisfaction above all else.
                <br />
                <br />
                Choosing Maricela's Cleaning Magnificence means entrusting your
                property to a team that values integrity and attention to
                detail. We understand the importance of a clean and healthy
                environment, which is why we strive for perfection in every job
                we undertake. Let us handle the dirty work while you focus on
                what matters most – enjoying a spotless space you can be proud
                of.
              </p>
            </div>
          </div>

          <div className="w-full md:hidden">
            <Image
              src={CleaningService}
              alt="Maricela"
              width={450}
              height={300}
              loading="lazy"
              className="h-full w-full"
            />
          </div>

          <div className="my-4">
            <div className="w-full">
              <h3 className="font-semibold text-3xl">
                Commercial & Residential Cleaning Services You Can Belief
              </h3>

              <BorderBottom
                classProps={{
                  child: "w-24",
                  parrent: "flex justify-start mt-4",
                }}
              />
            </div>
            <div className="pt-4">
              <p>
                At Maricela's Cleaning Magnificence, we understand the
                importance of reliability and professionalism when it comes to
                maintaining cleanliness in both commercial and residential
                settings. Our trained staff is committed to upholding the
                highest standards of quality and integrity in every job we
                undertake. From routine cleanings to deep sanitization, we
                prioritize customer satisfaction and strive to exceed
                expectations with our meticulous attention to detail. With our
                trusted commercial and residential cleaning services in Houston,
                you can enjoy peace of mind knowing that your space is in
                capable hands.
                <br />
                <br />
                Whether it is a large-scale commercial project or a small-scale
                residential renovation, we are equipped to handle it all with
                the utmost efficiency and precision. We strive to maintain the
                highest standards of professionalism and expertise in all our
                endeavors, and we look forward to serving our clients in
                Houston, Texas, with excellence.
              </p>
            </div>
          </div>
        </div>
        <div className="hidden md:block w-full md:col-span-2">
          <Image
            src={CleaningService}
            alt="Maricela"
            width={450}
            height={300}
            loading="lazy"
            className="h-full w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default CommercialNResidentialCleaningService;
