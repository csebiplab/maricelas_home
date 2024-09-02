
import HeadingIcon from "@/components/__ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";

const CleanAnsFresh = () => {
  return (
    <div className=" ">
      <div className="padding__top full__section_l_p pr-3 md:pr-0">
        <div className="grid md:grid-cols-6 grid-cols-1 gap-7 ">
          <div className="order-1 md:order-2 md:col-span-3 flex justify-end items-center md:items-start">
            <div className="">
              <Image
                src="/assets/cleaningServices/Clean and Fresh.png"
                width={923}
                height={523}
                alt="Clean and Fresh image"
                className=""
              />
            </div>
          </div>

          <div className="order-2 md:order-1 md:col-span-3 flex flex-col justify-center items-center md:items-start pt-6 md:pt-0">
            <div className="flex md:justify-normal justify-center md:items-start items-center mb-4">
              <HeadingIcon text={headingIconText.cleanAndFresh__headingIconText}/>
            </div>
            <h2 className="text-black text-[32px] md:text-[33px] xl:text-[34px] 2xl:text-[36px] 3xl:text-[38px]4xl:text-[40px] 5xl:text-[42px] font-bold text-center md:text-left">
            Keep Your Home Clean & Fresh
            </h2>

            <p className="text-[#111] text-lg font-normal mt-4 text-center md:text-left">
            Keep your home clean and fresh with Maricela's Cleaning Magnificence! Our professional cleaning services are tailored to meet your needs, ensuring every corner of your home sparkles. From deep cleaning to regular maintenance, our skilled team uses top-quality products and techniques to deliver impeccable results. With our comprehensive cleaning packages, you can choose the level of service that fits your lifestyle and budget. Whether it's spring cleaning, holiday prep, or routine maintenance, our cleaning company is your partner in creating a cleaner, healthier home. Our trustworthy and trained staff treat your home with the utmost respect, ensuring your belongings are safe and secure. With our satisfaction guarantee, we strive to leave you delighted with every service. Don't wait - elevate your living space with our exceptional cleaning services today!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CleanAnsFresh;