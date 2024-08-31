import Heading from "@/components/__ui/Heading";
import cost1 from "../../../../public/assets/images/cost_service1.png";
import cost2 from "../../../../public/assets/images/cost_service2.png";
import Image from "next/image";
const CostForServicesSection = () => {
  return (
    <div className="bg-[#FFF3FC]  container">
      <div className="3xl:py-[120px] lg:py-[100px] py-[60px]  w-full">
        <div className="block md:flex items-center gap-2 md:gap-x-7 lg:gap-x-10 2xl:gap-x-11 3xl:gap-x-12 4xl:gap-x-14 5xl:gap-[66px]  w-full">
          <div className="mb-5 md:mb-0 md:text-start text-center w-full ">
            <div className="flex justify-center lg:justify-normal items-center">
              <Heading text={"Cost For Services"} />
            </div>
            <h2 className="text-[28px] md:text-[32px]  text-[#1F1F1F] md:pb-0 pb-[20px] font-bold mt-[15px]">
              How Much Does Commercial & Residential Cleaning Service Cost
            </h2>
            <p className="text-base mt-2 lg:mt-[15px] lg:leading-[200%]">
              The cost of commercial & residential cleaning services varies
              depending on various factors such as the size of the space, the
              frequency of cleaning, and the specific services required.
              Generally, commercial cleaning services tend to be more expensive
              than residential ones due to the larger areas and specialized
              equipment often involved. Ultimately, the best way to determine
              the cost of cleaning services for either commercial or residential
              properties is to request quotes from multiple cleaning websites
              and compare their services and pricing structures. Additionally,
              considering factors like the reputation of the company, their
              level of experience, and the quality of their work can help ensure
              that you get the best value for your money.
            </p>
          </div>
          {/* ================ Images card section ========== */}
          <div className="flex flex-col md:flex-row gap-2 md:gap-4 lg:gap-16 w-full ">
            <div className="w-full">
              <Image
                src={cost1}
                width={301}
                height={229}
                alt="cost"
                className="w-full "
              />
              <div className="text-center py-3 md:px-2 px-1">
                <p className="text-[25px] font-bold py-1 md:py-2">
                  Commercial spaces
                </p>
                <p className="text-base font-normal md:px-1 text-[#252525] lg:leading-5">
                  For commercial spaces, prices can range from $0.05 to $0.25
                  per square foot
                </p>
              </div>
            </div>
            <div className="w-full">
              <Image
                src={cost2}
                width={301}
                height={229}
                alt="cost"
                className="w-full "
              />
              <div className="text-center py-3 md:px-2 px-1">
                <p className="text-base  md:text-[25px] font-bold py-1 md:py-2">
                  Residential cleaning
                </p>
                <p className="text-sm md:text-base font-normar md:px-1 text-[#252525] lg:leading-5">
                  Residential cleaning services typically charge by the hour,
                  with rates averaging between $25 to $50 per hour.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostForServicesSection;
