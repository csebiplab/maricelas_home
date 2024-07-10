
import HeadingIcon from "@/components/__ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className=" ">
      <div className="padding__top full__section_r_p">
        <div className="grid md:grid-cols-6 grid-cols-1 gap-7">
          <div className="md:col-span-3 flex justify-end items-center md:items-start">
            <div className="">
              <Image
                src="/assets/cleaningServices/About us.png"
                width={923}
                height={614}
                alt="about us image"
                className=""
              />
            </div>
          </div>

          <div className="md:col-span-3 flex flex-col justify-center items-center md:items-start pt-6 md:pt-0">
            <div className="flex md:justify-normal justify-center md:items-start items-center mb-4">
              <HeadingIcon text={headingIconText.aboutUs__headingIconText}/>
            </div>
            <h3 className="text-black text-[32px] md:text-[33px] xl:text-[34px] 2xl:text-[36px] 3xl:text-[38px]4xl:text-[40px] 5xl:text-[42px] font-normal text-center md:text-left">
            About Our Expert Cleaners 
in Richmond
            </h3>

            <p className="text-[#111] text-lg font-normal mt-4 text-center md:text-left">
            At Maricela's Cleaning Magnificence, we take pride in offering top-notch cleaning services in Richmond. Our expert cleaners are dedicated to transforming your spaces with meticulous attention to detail and a commitment to excellence. Whether it's your home or office, we use eco-friendly products and state-of-the-art equipment to ensure a spotless and healthy environment. With years of experience in the cleaning industry, we understand each client's unique needs and customize our services to meet them. Our expert cleaners are your go-to solution for a pristine space from regular maintenance cleaning to deep cleaning and special projects. We value your time and trust, offering flexible scheduling and competitive pricing to fit your lifestyle and budget. Experience the difference of a truly magnificent clean with our cleaning company - where quality meets perfection every time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;