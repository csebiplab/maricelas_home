import Heading from "@/components/__ui/Heading";
import Image from "next/image";
import rImg from "../../../public/assets/exPool/r.png";
import xImg from "../../../public/assets/exPool/x.png";
import whychoose from "../../../public/assets/random/whychoose.png";
import "./ourexpert.css";

const usualPool = [
  {
    title: "Management problem",
  },
  {
    title: "All materials hassle on you",
  },
  {
    title: "Unprofessional labour",
  },
  {
    title: "Poor customer service",
  },
  {
    title: "Poor quality of service",
  },
  {
    title: "Unclear price changes",
  },
  {
    title: "Minimal or no design",
  },
  {
    title: "Poor communication",
  },
  {
    title: "Lack of professionalism",
  },
  {
    title: "Lack of Concentrate",
  },
];

const benefits = [
  {
    title: "Start to finish customer support",
  },
  {
    title: "Materials ordered and delivered",
  },
  {
    title: "Professional trusted cleaners",
  },
  {
    title: "Trained and Trustworthy Staff",
  },
  {
    title: "Upfront transparent proposal",
  },
  {
    title: "Experienced design help",
  },
  {
    title: "Customized Cleaning Plans",
  },
  {
    title: "Consistent Quality Assurance",
  },
];

const WhyChooseUsSection = () => {
  return (
    <div className="bg-[#C477B126] container">
      <div className="grid grid-cols-1 lg:grid-cols-4">
        <div className="lg:col-span-1 order-2 lg:block hidden ml-[48px]">
          <Image
            src={whychoose}
            width={360}
            height={658}
            className="w-[360px] h-[664px]"
          />
        </div>

        <div className="order-1 col-span-3 shadow-sm py-12">
          <div className="mx-auto flex flex-col sm:text-left text-center">
            <div className="flex justify-center md:justify-normal items-center">
              <Heading text={"Why Choose Us"} />
            </div>

            <p className="text-[18px] md:text-lg 2xl:text-[32px] mt-[15px] mb-5 font-semibold ">
              Why Choose Maricela's Cleaning Magnificence Cleaning Services?
            </p>

            <p className="text-xs lg:text-base lg:leading-[200%] mb-[25px]">
              Maricela's Cleaning Magnificence stands out as a premier choice
              for commercial & residential cleaning services in Houston due to
              our unwavering commitment to excellence and customer
              satisfaction.f
            </p>
          </div>

          {/* 2 card */}
          <div className="grid sm:grid-cols-2 gap-5 md:gap-4">
            <div className="bg-white border shadow rounded-lg">
              <h2 className="title-bg text-center 2xl:py-[8px] py-[5px] text-white 2xl:text-[16px] text-sm  rounded-t-lg">
                Usual Cleaner Experience
              </h2>
              <div className="grid grid-cols-2 py-4 px-5 3xl:px-[25px] text-[8px] lg:text-xs 2xl:text-sm">
                {usualPool.map((usual, idx) => (
                  <div
                    key={idx}
                    className="flex gap-x-3 items-center mb-6 md:mb-9 leading-none  "
                  >
                    <img
                      src={xImg.src}
                      className="lg:h-[14px] lg:w-[14px] h-[9px] w-[9px] "
                    />
                    <p>{usual.title}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border shadow rounded-lg ">
              <h2 className="title-bg text-center 2xl:py-[8px] py-[5px] text-white 2xl:text-[16px] text-sm rounded-t-lg">
                Usual Cleaner Experience
              </h2>
              <div className="grid grid-cols-2 py-4 px-5 3xl:px-[25px] text-[8px] lg:text-xs 2xl:text-sm">
                {benefits.map((usual, idx) => (
                  <div
                    key={idx}
                    className="flex gap-x-3 items-center mb-6 md:mb-9 leading-none "
                  >
                    <img
                      src={rImg.src}
                      className="lg:h-[14px] lg:w-[14px] h-[9px] w-[9px] "
                    />
                    <p className="">{usual.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsSection;
