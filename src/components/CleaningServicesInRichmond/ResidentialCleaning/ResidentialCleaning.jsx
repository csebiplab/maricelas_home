import HeadingIcon from "@/components/__ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";
import React from "react";

const ResidentialCleaning = () => {
  return (
    <div className="">
      <div className="container padding__top">
        <div className="grid md:grid-cols-6 grid-cols-1  gap-10">
          <div className="md:col-span-3">
            <div>
              <Image
                src="/assets/cleaningServices/Residential Cleaning.png"
                alt="Residential Cleaning image"
                width={665}
                height={500}
              />
            </div>
          </div>
          <div className="md:col-span-3">
            <div className="flex justify-center md:justify-start ">
                <HeadingIcon text={headingIconText.residentialCleaning__headingIconText}/>
            </div>
            <h2 className="text-black text-[32px] md:text-[33px] lg:text-[34px] xl:text-[36px] 2xl:text-[38px] 3xl:text-[40px] 4xl:text-[41px] 5xl:text-[42px] font-bold  text-center md:text-left pt-[10px] py-3">Residential Cleaning Services Richmond</h2>
            <p className="text-lg font-normal text-[#111] text-center md:text-left pt-[10px]">Maricela's Cleaning Magnificence offers premier residential cleaning services in Richmond. With a commitment to impeccable service and attention to detail, we transform homes into pristine sanctuaries. Our comprehensive residential cleaning services cover all areas of your home, from kitchens and bathrooms to living spaces and bedrooms. We pay meticulous attention to details like dusting, vacuuming, mopping, and sanitizing surfaces, ensuring a hygienic and inviting environment. Maricela's Cleaning Magnificence is known for our professionalism, punctuality, and friendly customer service.
            </p>
            <div className=" mt-[40px] grid md:grid-cols-2 grid-cols-1 gap-[13px]">
              <div className="flex flex-col items-center justify-center ">
                <div className="w-full border-2 border-[#880769] rounded-[10px] p-4">
                <Image className="-mt-[43px] p-2 rounded-full border-2 border-[#880769] w-[53px] h-[53px] mx-auto" src="/assets/cleaningServices/rc1.png" alt="professional image" width={53} height={53} />
                <p className="text-center text-[#880769] text-lg font-bold">Regular housekeeping</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center justify-center mt-[30px] md:mt-0">
                <div className="w-full border-2 border-[#880769] rounded-[10px] p-4">
                <Image className="-mt-[43px] p-2 rounded-full border-2 border-[#880769] w-[53px] h-[53px] mx-auto" src="/assets/cleaningServices/rc2.png" alt="professional image" width={53} height={53} />
                <p className="text-center text-[#880769] text-lg font-bold">Deep cleaning</p>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center mt-[30px]">
                <div className="w-full border-2 border-[#880769] rounded-[10px] p-4">
                <Image className="-mt-[43px] p-2 rounded-full border-2 border-[#880769] w-[53px] h-[53px] mx-auto" src="/assets/cleaningServices/rc3.png" alt="professional image" width={53} height={53} />
                <p className="text-center text-[#880769] text-lg font-bold">Move-in/move-out cleaning</p>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center mt-[30px]">
                <div className="w-full border-2 border-[#880769] rounded-[10px] p-4">
                <Image className="-mt-[43px] p-2 rounded-full border-2 border-[#880769] w-[53px] h-[53px] mx-auto" src="/assets/cleaningServices/rc4.png" alt="professional image" width={53} height={53} />
                <p className="text-center text-[#880769] text-lg font-bold">Post-renovation cleaning</p>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResidentialCleaning;
