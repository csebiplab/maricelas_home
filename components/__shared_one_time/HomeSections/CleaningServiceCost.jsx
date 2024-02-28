import BorderBottom from "@/components/__ui/BorderBottom";
import Image from "next/image";
import React from "react";

const CleaningServiceCost = () => {
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-9 gap-4">
        <div className="w-full md:col-span-5 md:order-2">
          <div className="w-full">
            <h3 className="font-semibold text-3xl">
              How Much Does Commercial & Residential Cleaning Service Cost?
            </h3>

            <BorderBottom
              classProps={{
                child: "w-24",
                parrent: "flex justify-start mt-4",
              }}
            />
          </div>
          <p className="mt-4">
            The cost of commercial & residential cleaning services varies
            depending on various factors such as the size of the space, the
            frequency of cleaning, and the specific services required.
            Generally, commercial cleaning services tend to be more expensive
            than residential ones due to the larger areas and specialized
            equipment often involved. For commercial spaces, prices can range
            from $0.05 to $0.25 per square foot, while residential cleaning
            services typically charge by the hour, with rates averaging between
            $25 to $50 per hour.
            <br />
            <br />
            Ultimately, the best way to determine the cost of cleaning services
            for either commercial or residential properties is to request quotes
            from multiple cleaning websites and compare their services and
            pricing structures. Additionally, considering factors like the
            reputation of the company, their level of experience, and the
            quality of their work can help ensure that you get the best value
            for your money.
          </p>
        </div>
        <div className="w-full md:col-span-4 md:order-1">
          <Image
            src="/cost.jpg"
            alt="Maricela"
            width={450}
            height={300}
            loading="lazy"
            className="w-full"
            style={{ height: "450px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default CleaningServiceCost;
