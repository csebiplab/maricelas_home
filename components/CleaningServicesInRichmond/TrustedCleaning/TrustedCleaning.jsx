
import HeadingIcon from "@/components/__ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";

const TrustedCleaning = () => {
  return (
    <div className=" ">
      <div className="padding__top full__section_l_p pr-3 md:pr-0">
        <div className="grid md:grid-cols-6 grid-cols-1 gap-7">
          <div className="order-2 md:col-span-3 flex justify-end items-center md:items-start">
            <div className="">
              <Image
                src="/assets/cleaningServices/Trusted Cleaning.png"
                width={923}
                height={614}
                alt="Trusted Cleaning image"
                className=""
              />
            </div>
          </div>

          <div className="order-1 md:col-span-3 flex flex-col justify-center items-center md:items-start pt-6 md:pt-0">
            <div className="flex md:justify-normal justify-center md:items-start items-center mb-4">
              <HeadingIcon text={headingIconText.trustedCleaning__headingIconText}/>
            </div>
            <h3 className="text-black text-[32px] md:text-[33px] xl:text-[34px] 2xl:text-[36px] 3xl:text-[38px]4xl:text-[40px] 5xl:text-[42px] font-bold text-center md:text-left">
            Trusted Cleaning Services in Richmond
            </h3>

            <p className="text-[#111] text-lg font-normal mt-4 text-center md:text-left">
            Maricela's Cleaning Magnificence is your trusted partner for premier cleaning services in Richmond. We specialize in delivering exceptional cleaning solutions tailored to meet your specific needs, whether for homes or businesses. Our cleaners prioritize your well-being by using only chemical-free and non-toxic cleaning products. The main commitment of our cleaners to sustainability ensures that your space is not only clean but also safe for you, your family, and the environment. From regular maintenance to specialized deep cleaning projects, our dedicated team is equipped with the expertise and tools to handle any cleaning task with meticulous attention to detail. We understand that every space is unique and we tailor our services to exceed your expectations every time. Join our community of satisfied clients in Richmond who rely on our cleaning company for professional, reliable, and trustworthy cleaning services.

            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedCleaning;