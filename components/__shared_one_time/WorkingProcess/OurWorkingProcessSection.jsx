import work1 from "@/public/assets/images/working1.png";
import work2 from "@/public/assets/images/working2.png";
import Image from "next/image";
import "./WorkingProcess.css";


const OurWorkingProcessSection = () => {
  return <div className="bg">
    <div className="grid grid-cols-3 gap-3 lg:gap-3 text-center pt-5 lg:pt-6">
            <div className="w-full card-sd rounded-[9x]">
              <Image
                src={work1}
                width={221}
                height={148}
                alt=""
                className="w-full"
              />
              <div className="text-center py-3">
                <h4 className="lg:text-base md:text-sm py-1 md:py-2 text-[12px]">
                  Highly trained Staff
                </h4>
                <p className="lg:text-sm md:text-xs text-[8px] md:px-1 text-black">
                  We hire only highly trained staff for best results.
                </p>
              </div>
            </div>
            <div className="w-full card-sd rounded-[9x]">
              <Image
                src={work2}
                width={221}
                height={148}
                alt=""
                className="w-full"
              />
              <div className="text-center py-3">
                <h4 className="lg:text-base md:text-sm py-1 md:py-2 text-[12px]">
                  Competitive Pricing
                </h4>
                <p className="lg:text-sm md:text-xs text-[8px] md:px-1 text-black">
                  We quote the best price possible in the industry.
                </p>
              </div>
            </div>
            
          </div>
  </div>;
};

export default OurWorkingProcessSection;
