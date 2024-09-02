
import HeadingIcon from "@/components/__ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";

const HomeCleaningServices = () => {
  return (
    <div className=" ">
      <div className="padding__top full__section_l_p pr-3 md:pr-0">
        <div className="grid md:grid-cols-6 grid-cols-1 gap-7 ">
          <div className="order-1 md:order-2 md:col-span-3 flex justify-end items-center md:items-start">
            <div className="">
              <Image
                src="/assets/houseCleaningServices/Home Cleaning Services.png"
                width={923}
                height={523}
                alt="Home Cleaning Services image"
                className=""
              />
            </div>
          </div>

          <div className="order-2 md:order-1 md:col-span-3 flex flex-col justify-center items-center md:items-start pt-6 md:pt-0">
            <div className="flex md:justify-normal justify-center md:items-start items-center mb-4">
              <HeadingIcon text={headingIconText.homeCleaningServices__headingIconText}/>
            </div>
            <h2 className="text-black text-[32px] md:text-[33px] xl:text-[34px] 2xl:text-[36px] 3xl:text-[38px]4xl:text-[40px] 5xl:text-[42px] font-bold text-center md:text-left">
            Home Cleaning Services Katy TX
            </h2>

            <p className="text-[#111] text-lg font-normal mt-4 text-center md:text-left">
            Looking for top-notch home cleaning services in Katy, TX? Our expert team at Maricela's Cleaning Magnificence offers thorough, reliable, and customizable cleaning solutions to keep your home spotless. From regular maintenance to deep cleaning, we tailor our services to meet your needs and ensure your satisfaction. We pride ourselves on attention to detail, punctuality, and excellent customer service, making your cleaning experience hassle-free. Our services include dusting, vacuuming, mopping, bathroom and kitchen sanitization, window cleaning, and more. We understand that each home is different, and we offer customizable packages to fit your specific requirements and schedule. Whether you need a one-time clean or a recurring service, our home cleaning experts have covered you. The flexible scheduling options from our cleaners allow you to choose a time that works best for you, ensuring minimal disruption to your daily routine.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCleaningServices;