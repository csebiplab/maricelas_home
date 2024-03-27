import cost1 from "@/public/assets/images/cost1.png";
import cost2 from "@/public/assets/images/cost2.png";
import Heading from "@/ui/Heading";
import Image from "next/image";
const CostForServicesSection = () => {
  return <div className="lg:px-[35px] xs:px-[20px]">
    
    <Heading text={'Cost For Services'} />
    
      <div className="flex items-center justify-between gap-2 md:gap-3 lg:gap-[27px]">
      <div className="md:text-start text-center md:w-1/2">
        
        <h2 className="text-base lg:text-[32px] font-semibold mt-2 md:mt-[12px] text-[#1F1F1F] lg:leading-normal">How Much Does Commercial & Residential Cleaning Service Cost</h2>
        <p className="text-xs lg:text-base mt-2 lg:mt-[15px] lg:leading-[32px]">The cost of commercial & residential cleaning services varies depending on various factors such as the size of the space, the frequency of cleaning, and the specific services required. Generally, commercial cleaning services tend to be more expensive than residential ones due to the larger areas and specialized equipment often involved. 
Ultimately, the best way to determine the cost of cleaning services for either commercial or residential properties is to request quotes from multiple cleaning websites and compare their services and pricing structures. Additionally, considering factors like the reputation of the company, their level of experience, and the quality of their work can help ensure that you get the best value for your money.</p>
      </div>
      {/* ================ Images card section ========== */}
      <div className="flex gap-2 md:gap-4 lg:gap-[80px] md:w-1/2">
      <div className="w-full">
              <Image
                src={cost1}
                width={301}
                height={229}
                alt=""
                className="w-full"
              />
              <div className="text-center py-3 md:px-2 px-1">
                <h4 className="lg:text-base md:text-sm  text-[12px] py-1 md:py-2">
                Commercial spaces
                </h4>
                <p className="lg:text-sm md:text-xs text-[8px] md:px-1 text-[#252525] lg:leading-5">
                For commercial spaces, prices can range from $0.05 to $0.25 per square foot
                </p>
              </div>
            </div>
            <div className="w-full">
              <Image
                src={cost2}
                width={301}
                height={229}
                alt=""
                className="w-full"
              />
              <div className="text-center py-3 md:px-2 px-1">
                <h4 className="lg:text-base md:text-sm  text-[12px] py-1 md:py-2">
                Residential cleaning
                </h4>
                <p className="lg:text-sm md:text-xs text-[8px] md:px-1 text-[#252525] lg:leading-5">
                 Residential cleaning services typically charge by the hour, with rates averaging between $25 to $50 per hour.
                </p>
              </div>
            </div>
            
      </div>
      </div>

  </div>;
};

export default CostForServicesSection;
