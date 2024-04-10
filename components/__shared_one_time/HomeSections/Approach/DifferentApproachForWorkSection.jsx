import app1 from "@/public/assets/images/app1.png";
import app2 from "@/public/assets/images/app2.png";
import app3 from "@/public/assets/images/app3.png";
import Heading from "@/components/__ui/Heading";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const DifferentApproachForWorkSection = () => {
  return (
    <div className="">
      <div className="3xl:py-[120px] lg:py-[100px] py-[60px]">
        <div className="grid lg:grid-cols-4 gap-2 lg:gap-3 text-center pt-5 lg:pt-6 ">
          <div className="flex justify-center lg:justify-normal md:text-start text-center md:me-4 me-0 lg:col-span-1">
            <div>
              <div className="flex justify-center lg:justify-normal">
                <Heading text={"Different Approach For Work"} />
              </div>
              <h2 className="2xl:text-[32px] md:text-[24px] text-[18px] font-semibold text-dark-200">
                Our Approach To Cleaning Service Is Different
              </h2>
              <p className="text-xs lg:text-base my-5">
                Welcome to a cleaning service experience like no other. At
                Maricela's Cleaning Magnificence, our approach to cleaning
                transcends the ordinary.
              </p>
              <div className="hidden lg:flex lg:gap-5 md:gap-3 md:justify-start justify-center mt-2">
                <button className="p-3 rounded-full border-2  hover:text-white hover:bg-[#880769]">
                  <FaChevronLeft fill="#880769" />
                </button>
                <button className=" hover:text-black hover:bg-white border-2 p-3 bg-[#880769] rounded-full">
                  <FaChevronRight fill="#ffffff" />
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:col-span-3">
            <div className="w-full card-sd bg-white">
              <Image
                src={app1}
                width={215}
                height={203}
                alt=""
                className="w-full"
              />
              <div className="text-center py-3 md:px-2 px-1">
                <h4 className="lg:text-base md:text-sm  text-[12px] py-1 md:py-2">
                  Customized Cleaning Plans
                </h4>
                <p className="lg:text-sm md:text-xs text-[8px] md:px-1 text-[#252525]">
                  At our commercial & residential cleaning service in Houston,
                  TX, we believe in tailoring our approach to meet the unique
                  needs of each client. We don't offer a one-size-fits-all
                  solution; instead, we work closely with our customers to
                  understand their specific requirements and preferences.
                </p>
              </div>
            </div>
            <div className="w-full card-sd bg-white">
              <Image
                src={app2}
                width={215}
                height={203}
                alt=""
                className="w-full"
              />
              <div className="text-center py-3 md:px-2 px-1">
                <h4 className="lg:text-base md:text-sm py-1 md:py-2 text-[12px]">
                  Advanced Cleaning Techniques
                </h4>
                <p className="lg:text-sm md:text-xs text-[8px] md:px-1 text-[#252525]">
                  We stay ahead of the curve by utilizing the latest cleaning
                  technologies and techniques. From eco-friendly products to
                  advanced equipment, we ensure that our cleaning methods are
                  not only effective but also environmentally conscious. We stay
                  ahead of the curve by utilizing.
                </p>
              </div>
            </div>
            <div className="w-full card-sd bg-white">
              <Image
                src={app3}
                width={215}
                height={203}
                alt=""
                className="w-full"
              />
              <div className="text-center py-3 md:px-2 px-1">
                <h4 className="lg:text-base md:text-sm py-1 md:py-2 text-[12px]">
                  Trained and Professional Staff
                </h4>
                <p className="lg:text-sm md:text-xs text-[8px] md:px-1 text-[#252525]">
                  Our team consists of highly trained and professional cleaners
                  who are committed to delivering exceptional service. They
                  undergo rigorous training and adhere to strict quality
                  standards to ensure that every job is completed to perfection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DifferentApproachForWorkSection;
