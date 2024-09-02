import HeadingIcon from "@/components/__ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";
import React from "react";

const Professional = () => {
  return (
    <div className="">
      <div className="container padding__top">
        <div className="grid md:grid-cols-6 grid-cols-1  gap-10">
          <div className="order-2 md:col-span-3">
            <div>
              <Image
                src="/assets/cleaningServices/professional5years.png"
                alt="Professional image"
                width={665}
                height={500}
              />
            </div>
          </div>
          <div className="order-1 md:col-span-3">
            <div className="flex justify-center md:justify-start ">
              <HeadingIcon
                text={headingIconText.professional__headingIconText}
              />
            </div>
            <h2 className="text-black text-[32px] md:text-[33px] lg:text-[34px] xl:text-[36px] 2xl:text-[38px] 3xl:text-[40px] 4xl:text-[41px] 5xl:text-[42px] font-bold  text-center md:text-left pt-[10px] py-3">
              Professional Cleaning Services in Richmond
            </h2>
            <p className="text-lg font-normal text-[#111] text-center md:text-left pt-[10px]">
              Maricela's Cleaning Magnificence offers top-tier professional
              cleaning services in Richmond. With a dedicated team of
              experienced cleaners, we specialize in both residential and
              commercial spaces, ensuring your home or office sparkles with
              cleanliness. Our services include deep cleaning, regular
              maintenance, move-in/move-out cleaning, and customized cleaning
              plans tailored to your needs. We offer flexible scheduling to
              accommodate your busy lifestyle, and our competitive pricing
              ensures you get the best value for your investment. Whether it's a
              one-time deep clean or regular upkeep, our professional cleaning
              company is here to make your life easier and your spaces shine.
              Our cleaners also offer.
            </p>
            <div className=" mt-[40px] grid md:grid-cols-2 grid-cols-1 gap-[13px]">
              <div className="flex flex-col items-center justify-center ">
                <div className="w-full border-2 border-[#880769] rounded-[10px] p-4">
                  <Image
                    className="-mt-[43px] p-2 rounded-full border-2 border-[#880769] w-[53px] h-[53px] mx-auto"
                    src="/assets/cleaningServices/p1.png"
                    alt="professional image"
                    width={53}
                    height={53}
                  />
                  <p className="text-center text-[#880769] text-lg font-bold">
                    Carpet and upholstery cleaning
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center mt-[30px] md:mt-0">
                <div className="w-full border-2 border-[#880769] rounded-[10px] p-4">
                  <Image
                    className="-mt-[43px] p-2 rounded-full border-2 border-[#880769] w-[53px] h-[53px] mx-auto"
                    src="/assets/cleaningServices/p2.png"
                    alt="professional image"
                    width={53}
                    height={53}
                  />
                  <p className="text-center text-[#880769] text-lg font-bold">
                    Window cleaning
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center mt-[30px]">
                <div className="w-full border-2 border-[#880769] rounded-[10px] p-4">
                  <Image
                    className="-mt-[43px] p-2 rounded-full border-2 border-[#880769] w-[53px] h-[53px] mx-auto"
                    src="/assets/cleaningServices/p3.png"
                    alt="professional image"
                    width={53}
                    height={53}
                  />
                  <p className="text-center text-[#880769] text-lg font-bold">
                    Pressure washing
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center mt-[30px]">
                <div className="w-full border-2 border-[#880769] rounded-[10px] p-4">
                  <Image
                    className="-mt-[43px] p-2 rounded-full border-2 border-[#880769] w-[53px] h-[53px] mx-auto"
                    src="/assets/cleaningServices/p4.png"
                    alt="professional image"
                    width={53}
                    height={53}
                  />
                  <p className="text-center text-[#880769] text-lg font-bold">
                    Green/eco-friendly cleaning
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Professional;
