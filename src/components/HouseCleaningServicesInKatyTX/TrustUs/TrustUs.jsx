
import HeadingIcon from "@/components/__ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";

const TrustUs = () => {
  return (
    <div className=" ">
      <div className="padding__top container">
        <div className="grid md:grid-cols-6 grid-cols-1 gap-7 ">
          <div className="order-2 md:col-span-3 flex justify-end items-center md:items-start">
            <div className="">
              <Image
                src="/assets/houseCleaningServices/Trust Us.png"
                width={923}
                height={558}
                alt="Trust Us image"
                className=""
              />
            </div>
          </div>

          <div className="order-1 md:col-span-3 flex flex-col justify-center items-center md:items-start pt-6 md:pt-0">
            <div className="flex md:justify-normal justify-center md:items-start items-center mb-4">
              <HeadingIcon text={headingIconText.trustUs__headingIconText}/>
            </div>
            <h2 className="text-black text-[32px] md:text-[33px] xl:text-[34px] 2xl:text-[36px] 3xl:text-[38px]4xl:text-[40px] 5xl:text-[42px] font-bold text-center md:text-left">
            Katy House Cleaning Services You Can Trust
            </h2>

            <p className="text-[#111] text-lg font-normal mt-4 text-center md:text-left">
            We pride ourselves on delivering meticulous cleaning solutions tailored to meet the unique needs of each home. Our dedicated team of cleaning professionals is committed to exceeding your expectations with every visit. Whether you require regular maintenance cleaning, deep cleaning, or specialized services for a special occasion, we have you covered. Our approach is rooted in attention to detail and using eco-friendly cleaning products to ensure a safe and healthy living space for you and your family. We customize our cleaning plans to address specific areas of concern and prioritize areas that matter most to you. With Maricela's Cleaning Magnificence, you can expect reliability, transparency, and exceptional customer service. We aim to build long-lasting relationships based on trust and satisfaction, making us the preferred choice for house cleaning services in Katy, TX. Let us take care of the cleaning, so you can enjoy more time doing what you love.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustUs;