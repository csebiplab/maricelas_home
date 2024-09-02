import HeadingIcon from "@/components/__ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";
import React from "react";

const CommercialCleaning = () => {
  return (
    <div className="">
      <div className="container padding__top">
        <div className="grid md:grid-cols-6 grid-cols-1  gap-10">
          <div className="order-2 md:col-span-3">
            <div>
              <Image
                src="/assets/cleaningServices/Commercial Cleaning.png"
                alt="Commercial Cleaning image"
                width={665}
                height={500}
              />
            </div>
          </div>
          <div className="order-1 md:col-span-3">
            <div className="flex justify-center md:justify-start ">
                <HeadingIcon text={headingIconText.commercialCleaning__headingIconText}/>
            </div>
            <h2 className="text-black text-[32px] md:text-[33px] lg:text-[34px] xl:text-[36px] 2xl:text-[38px] 3xl:text-[40px] 4xl:text-[41px] 5xl:text-[42px] font-bold  text-center md:text-left pt-[10px] py-3">Commercial Cleaning Services Richmond Hill</h2>
            <p className="text-lg font-normal text-[#111] text-center md:text-left pt-[10px]">Our comprehensive commercial cleaning services in Richmond Hill extend beyond routine tasks to address specific needs such as janitorial services, disinfection protocols, and specialized cleaning for high-traffic areas. Maricela's Cleaning Magnificence is dedicated to delivering consistent, high-quality results that create a welcoming and productive environment for your employees and customers alike. We understand the importance of a clean and sanitized workplace in today's world, and we prioritize health and safety in every service we provide. Whether you operate a corporate office, a retail store, a healthcare facility, or any other commercial space, you can rely on us for reliable service and exceptional cleanliness. We also offer.

            </p>
            <div className=" mt-[40px] grid md:grid-cols-2 grid-cols-1 gap-[13px]">
              <div className="flex flex-col items-center justify-center ">
                <div className="w-full border-2 border-[#880769] rounded-[10px] p-4">
                <Image className="-mt-[43px] p-2 rounded-full border-2 border-[#880769] w-[53px] h-[53px] mx-auto" src="/assets/cleaningServices/cc1.png" alt="professional image" width={53} height={53} />
                <p className="text-center text-[#880769] text-lg font-bold">Carpet and upholstery cleaning</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center justify-center mt-[30px] md:mt-0">
                <div className="w-full border-2 border-[#880769] rounded-[10px] p-4">
                <Image className="-mt-[43px] p-2 rounded-full border-2 border-[#880769] w-[53px] h-[53px] mx-auto" src="/assets/cleaningServices/cc2.png" alt="professional image" width={53} height={53} />
                <p className="text-center text-[#880769] text-lg font-bold">Carpet and upholstery cleaning</p>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center mt-[30px]">
                <div className="w-full border-2 border-[#880769] rounded-[10px] p-4">
                <Image className="-mt-[43px] p-2 rounded-full border-2 border-[#880769] w-[53px] h-[53px] mx-auto" src="/assets/cleaningServices/cc3.png" alt="professional image" width={53} height={53} />
                <p className="text-center text-[#880769] text-lg font-bold">Carpet and upholstery cleaning</p>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center mt-[30px]">
                <div className="w-full border-2 border-[#880769] rounded-[10px] p-4">
                <Image className="-mt-[43px] p-2 rounded-full border-2 border-[#880769] w-[53px] h-[53px] mx-auto" src="/assets/cleaningServices/cc4.png" alt="professional image" width={53} height={53} />
                <p className="text-center text-[#880769] text-lg font-bold">Carpet and upholstery cleaning</p>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommercialCleaning;
