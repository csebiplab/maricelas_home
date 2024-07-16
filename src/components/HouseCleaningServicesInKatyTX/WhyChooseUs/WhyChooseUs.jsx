"use client";
import "./WhyChooseUs.css";
import HeadingIcon from "@/components/__ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";

import Image from "next/image";

const usualPool = [
  {
    title: "Inconsistent quality",
  },
  {
    title: "Lack of attention to detail",
  },
  {
    title: "Poor communication",
  },
  {
    title: "Limited flexibility",
  },
  {
    title: "High turnover of staff",
  },
  {
    title: "Use of harsh chemicals",
  },
  {
    title: "Hidden fees",
  },
  {
    title: "Lack of proper training",
  },
  {
    title: "Difficulty in scheduling",
  },
  {
    title: "No guarantee of satisfaction",
  }
];
const easyPool = [
  {
    title: "Reliable and punctual",
  },
  {
    title: "Attention to detail",
  },
  {
    title: "Use of high-quality cleaning products",
  },
  {
    title: "Flexible scheduling",
  },
  {
    title: "Excellent customer service",
  },
  {
    title: "Trustworthy and professional",
  },
  {
    title: "Tailored cleaning plans",
  },
  {
    title: "Environmentally friendly practices",
  },
  {
    title: "Quick response to inquiries",
  },
  {
    title: "Competitive Pricing",
  }
];

const WhyChooseUs = () => {
  return (
    <div className="bg_vinylPool">
      <div className="container padding__top">
        <div className="shadow-sm md:mx-0 xs:mx-[35px] ">
          <div className=" grid md:grid-cols-3 2xl:gap-[40px] md:gap-[30px] ">
            <div className="mx-auto flex flex-col items-center justify-center">
              <div className="w-full flex md:justify-start justify-center md:items-start items-center">
              
              <HeadingIcon text={headingIconText.whyChooseUs__headingIconText}/>
              </div>

              <div>
                <h3 className="text-3xl lg:text-[32px] xl:text-[34px] 2xl:text-4xl 3xl:text-[38px] 4xl:text-[40px] 5xl:text-[42px]  font-bold text-black md:text-start text-center">
                Why Choose Our House Cleaning Experts
                </h3>
              </div>

              <div>
                <p className="text-lg font-normal md:text-start text-center py-[10px]">
                Choosing our house cleaning experts ensures a pristine home without the hassle, allowing you to enjoy a cleaner, more comfortable living space. Experience the difference with our dedicated house cleaning experts who are committed to delivering consistent, superior results with every visit.

                </p>
              </div>
            </div>

            <div className="w-full border-2 my-6 md:my-0 cart1">
              <p className="title-bg text-center 2xl:py-[15px] py-[10px] text-white text-base md:text-lg font-bold">
              Usual Cleaners
              </p>
              <div className=" grid grid-rows-8 3xl:py-[35px] py-[25px] px-[10px] 2xl:text-[16px] lg:text-[14px] xs:text-[9px]  ">
                {usualPool.map((usual, idx) => (
                  <div
                    key={idx}
                    className="flex gap-4 items-center mb-[25px]  leading-none  "
                  >
                    <Image
                      src="/assets/houseCleaningServices/x.png"
                      alt="x"
                      width={20}
                      height={20}
                      className="2xl:h-[20px] 2xl:w-[20px] h-[15px] w-[15px]"
                    />
                    <p className="text-xs md:text-sm text-black font-bold">
                      {usual.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="border-2 my-6 md:my-0 cart2">
              <p className="title-bg2 text-center 2xl:py-[15px] py-[10px] text-white text-base md:text-lg font-bold">
              Our House Cleaning Experts
              </p>
              <div className=" grid grid-rows-8 3xl:py-[35px] py-[25px]  px-[10px] 2xl:text-[16px] lg:text-[14px] xs:text-[9px]  ">
                {easyPool.map((usual, idx) => (
                  <div
                    key={idx}
                    className="flex  gap-2 items-center mb-[25px]  leading-none  "
                  >
                    <Image
                      src="/assets/houseCleaningServices/r.png"
                      alt="r"
                      width={20}
                      height={20}
                      className="2xl:h-[20px] 2xl:w-[20px] h-[15px] w-[15px]"
                    />
                    <p className="text-xs md:text-sm text-black font-bold">
                      {usual.title}
                    </p>
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

export default WhyChooseUs;