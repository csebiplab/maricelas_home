
import HeadingIcon from "@/components/__ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className=" ">
      <div className="padding__top container">
        <div className="grid md:grid-cols-6 grid-cols-1 gap-7 ">
          <div className="md:col-span-3 flex justify-end items-center md:items-start">
            <div className="">
              <Image
                src="/assets/houseCleaningServices/About Us.png"
                width={923}
                height={523}
                alt="about us image"
                className=""
              />
            </div>
          </div>

          <div className="md:col-span-3 flex flex-col justify-center items-center md:items-start pt-6 md:pt-0">
            <div className="flex md:justify-normal justify-center md:items-start items-center mb-4">
              <HeadingIcon text={headingIconText.aboutUs__headingIconText}/>
            </div>
            <h2 className="text-black text-[32px] md:text-[33px] xl:text-[34px] 2xl:text-[36px] 3xl:text-[38px]4xl:text-[40px] 5xl:text-[42px] font-bold text-center md:text-left">
            About Our Cleaning Company
            </h2>

            <p className="text-[#111] text-lg font-normal mt-4 text-center md:text-left">
            At Maricela's Cleaning Magnificence, we provide exceptional cleaning services tailored to each client's unique needs. With a team of highly trained and dedicated professionals, we ensure your home or office is spotless and inviting. Our professional team uses eco-friendly products and the latest cleaning techniques to ensure a spotless and healthy environment. Whether it's residential, commercial, or specialized cleaning, we guarantee reliable, efficient, and thorough service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;