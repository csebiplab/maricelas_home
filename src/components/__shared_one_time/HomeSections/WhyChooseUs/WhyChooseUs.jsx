// "use client";
import "./WhyChooseUs.css";

import Image from "next/image";
import HeadingIcon from '@/components/__ui/HeadingIcon';
import { headingIconText } from '@/utils/heading-text';

const usualPool = [
  {
    id : 1,
    title: "Management problem",
  },
  {
    id : 2,
    title: "Unclear price changes",
  },
  {
    id : 3,
    title: "All materials bother you.",
  },
  {
    id : 4,
    title: "Minimal or no design",
  },
  {
    id : 5,
    title: "Unprofessional labour",
  },
  {
    id : 6,
    title: "Poor communication & customer service",
  },
  {
    id : 7,
    title: "Lack of professionalism",
  },
  {
    id : 8,
    title: "Service quality is subpar",
  }
];
const easyPool = [
  {
    id : 1,
    title: "Start to finish customer support",
  },
  {
    id : 2,
    title: "Upfront transparent proposal",
  },
  {
    id : 3,
    title: "Materials ordered and delivered",
  },
  {
    id : 4,
    title: "Experienced designers assist",
  },
  {
    id : 5,
    title: "Professional, trusted cleaners",
  },
  {
    id : 6,
    title: "Customized Cleaning Plans",
  },
  {
    id : 7,
    title: "Trained and trustworthy staff",
  },
  {
    id : 8,
    title: "Consistent quality assurance",
  }
];

const WhyChooseUs = () => {
  return (
    <div className="">
      <div className="">
        <div className="container bg-primary py-[25px] xl:py-[24px] 2xl:py-[26px] 3xl:py-[28px] 4xl:py-[30px] 5xl:py-[32px]">
          <div className=" grid md:grid-cols-3 gap-[25px] md:gap-[30px] lg:gap-[40px] xl:gap-[40px] 2xl:gap-[60px] 3xl:gap-[70px] 4xl:gap-[80px] 5xl:gap-[87px]">
            <div className="mx-auto flex flex-col items-center justify-center">
              <div className="w-full flex md:justify-start justify-center md:items-start items-center">
              <div className='flex gap-2 items-center'>
                          <Image src="/assets/cleaningServices/dot-heading-icon.png" width={20} height={20} alt='heading icon'/>
                          <p className="text-base text-white">Why Choose Us</p>
                      </div>
              </div>

              <div className="mt-[5px]">
                <h2 className="text-[32px] md:text-[33px] lg:text-[34px] xl:text-[36px] 2xl:text-[38px] 3xl:text-[39px] 4xl:text-[41px] 5xl:text-[42px] font-bold text-white leading-[30px] mb-[10px]">
                Why Choose <br/>
                <span className="text-[21px] 2xl:text-[22px] 3xl:text-[23px] 4xl:text-[24px] 5xl:text-[25px]">Maricela's Cleaning Magnificence's 
                Cleaning Services in Houston?</span>
                </h2>
                <p className="text-base 4xl:text-[17px] 5xl:text-lg font-normal text-white leading-[30px] 3xl:leading-[32px] 4xl:leading-[34px] 5xl:leading-[36px]">
                Maricela's Cleaning Magnificence stands out as a premier choice for residential and commercial cleaning services in Houston, Texas, due to our unwavering commitment to excellence and customer satisfaction. Choose Maricela's Cleaning Magnificence for a cleaning experience that exceeds expectations. Let us handle the mess so you can enjoy a clean, comfortable, and stress-free space.
                </p>
              </div>
            </div>

            <div className="w-full">
              <p className="title-bg py-[12px] 5xl:py-[14px] text-center text-primary text-[20px] xl:text-[21px] 2xl:text-[22px] 3xl:text-[23px] 4xl:text-[24px] 5xl:text-[25px] font-bold">
              Usual Cleaners
              </p>
              <div className="cart1 grid grid-rows-8 pl-[16px] 5xl:pl-[18px] pr-[8px] 5xl:pr-[10px] 2xl:text-[16px] lg:text-sm xs:text-[9px]">
                {usualPool?.map((usual) => (
                  <div key={usual?.id}>
                    <div className="flex gap-2 items-center leading-none border-b border-gray-50 py-[12px] 5xl:py-[15px]">
                      <Image
                        src="/assets/homePage/x.png"
                        alt="x"
                        width={20}
                        height={20}
                        className="2xl:h-[20px] 2xl:w-[20px] h-[15px] w-[15px]"
                      />
                      <p className="text-sm 4xl:text-[15px] 5xl:text-base text-black font-bold">
                        {usual.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full">
              <div className="flex items-center justify-center title-bg2 py-[4px] 5xl:py-[5px]">
                <Image
                  src="/assets/homePage/why_choose_logo.png"
                  alt="bland logo"
                  width={102}
                  height={46}
                />
              </div>
              <div className="cart2 grid grid-rows-8 pl-[16px] 5xl:pl-[18px] pr-[8px] 5xl:pr-[10px] lg:text-sm xs:text-[9px]">
                {easyPool.map((usual) => (
                  <div key={usual?.id}>
                    <div className="flex gap-2 items-center leading-none border-b border-gray-50 py-[12px] 5xl:py-[15px]">
                      <Image
                        src="/assets/homePage/r.png"
                        alt="r"
                        width={20}
                        height={20}
                        className="2xl:h-[20px] 2xl:w-[20px] h-[15px] w-[15px]"
                      />
                      <p className="text-sm 4xl:text-[15px] 5xl:text-base text-black font-bold">
                        {usual.title}
                      </p>
                    </div>
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
