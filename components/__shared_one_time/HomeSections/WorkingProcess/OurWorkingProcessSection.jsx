import work1 from "@/public/assets/images/working1.png";
import work2 from "@/public/assets/images/working2.png";
import work3 from "@/public/assets/images/working3.png";
import work4 from "@/public/assets/images/working4.png";
import work5 from "@/public/assets/images/working5.png";
import work6 from "@/public/assets/images/working6.png";

import Heading from "@/ui/Heading";
import Image from "next/image";
import "./WorkingProcess.css";

const OurWorkingProcessSection = () => {
  return (
    <div className="bg__workingProcess container">
      <div className="lg:py-[44px] md:py-6 py-3">
        <div className="md:text-start text-center">
          <Heading text={"Our Working Process"} />
          <h2 className="2xl:text-[32px] md:text-[20px] text-[18px] md:pb-0 pb-[20px] font-semibold  text-[#1F1F1F]">
            How Does Our Cleaning Company Work?
          </h2>
          <p className="lg:py-[10px] py-2">
            Certainly! Here's a breakdown of how our cleaning company operates:
          </p>
        </div>
        <div className="grid md:grid-cols-6 grid-cols-2 gap-2 lg:gap-3 text-center pt-5 lg:pt-6 ">
          <div className="w-full card-sd bg-[#fff]">
            <Image
              src={work1}
              width={215}
              height={148}
              alt=""
              className="w-full"
            />
            <div className="text-center py-3 md:px-2 px-1">
              <h4 className="lg:text-base md:text-sm  text-[12px] py-1 md:py-2">
                Initial Consultation
              </h4>
              <p className="lg:text-sm md:text-xs text-[8px] md:px-1 text-[#252525]">
                Clients reach out to us either through phone, email, or our
                website to inquire about our services.
              </p>
            </div>
          </div>
          <div className="w-full card-sd bg-[#fff]">
            <Image
              src={work2}
              width={215}
              height={148}
              alt=""
              className="w-full"
            />
            <div className="text-center py-3 md:px-2 px-1">
              <h4 className="lg:text-base md:text-sm py-1 md:py-2 text-[12px]">
                Scheduling
              </h4>
              <p className="lg:text-sm md:text-xs text-[8px] md:px-1 text-[#252525]">
                Once the client approves the proposal, we work with them to
                schedule the cleaning appointment at a time that is convenient
                for them.
              </p>
            </div>
          </div>
          <div className="w-full card-sd bg-[#fff]">
            <Image
              src={work3}
              width={215}
              height={148}
              alt=""
              className="w-full"
            />
            <div className="text-center py-3 md:px-2 px-1">
              <h4 className="lg:text-base md:text-sm py-1 md:py-2 text-[12px]">
                Preparation
              </h4>
              <p className="lg:text-sm md:text-xs text-[8px] md:px-1 text-[#252525]">
                Before the scheduled cleaning date, our team prepares all the
                necessary equipment, supplies, and tools needed for the job.
              </p>
            </div>
          </div>
          <div className="w-full card-sd bg-[#fff]">
            <Image
              src={work4}
              width={215}
              height={148}
              alt=""
              className="w-full"
            />
            <div className="text-center py-3 md:px-2 px-1">
              <h4 className="lg:text-base md:text-sm py-1 md:py-2 text-[12px]">
                Execution
              </h4>
              <p className="lg:text-sm md:text-xs text-[8px] md:px-1 text-[#252525]">
                On the day of the cleaning appointment, our trained and
                experienced cleaning professionals arrive at the client's
                location promptly.
              </p>
            </div>
          </div>
          <div className="w-full card-sd bg-[#fff]">
            <Image
              src={work5}
              width={215}
              height={148}
              alt=""
              className="w-full"
            />
            <div className="text-center py-3 md:px-2 px-1">
              <h4 className="lg:text-base md:text-sm py-1 md:py-2 text-[12px]">
                Quality Assurance
              </h4>
              <p className="lg:text-sm md:text-xs text-[8px] md:px-1 text-[#252525]">
                Throughout the cleaning process, we maintain a high standard of
                quality and attention to detail.
              </p>
            </div>
          </div>
          <div className="w-full card-sd bg-[#fff]">
            <Image
              src={work6}
              width={215}
              height={148}
              alt=""
              className="w-full"
            />
            <div className="text-center py-3 md:px-2 px-1">
              <h4 className="lg:text-base md:text-sm py-1 md:py-2 text-[12px]">
                Client Feedback
              </h4>
              <p className="lg:text-sm md:text-xs text-[8px] md:px-1 text-[#252525]">
                After completing the cleaning service, we welcome feedback from
                our clients. We encourage them to share their thoughts and any
                areas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWorkingProcessSection;
