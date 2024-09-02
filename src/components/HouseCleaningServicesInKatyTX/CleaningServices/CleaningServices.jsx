
import HeadingIcon from "@/components/__ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";

const CleaningServices = () => {
  return (
    <div className=" ">
      <div className="padding__top container">
        <div className="grid md:grid-cols-6 grid-cols-1 gap-7 ">
          <div className="order-1 md:order-2 md:col-span-3 flex justify-end items-center md:items-start">
            <div className="">
              <Image
                src="/assets/houseCleaningServices/Cleaning Services.png"
                width={923}
                height={523}
                alt="cleaning services image"
                className=""
              />
            </div>
          </div>

          <div className="order-2 md:order-1 md:col-span-3 flex flex-col justify-center items-center md:items-start pt-6 md:pt-0">
            <div className="flex md:justify-normal justify-center md:items-start items-center mb-4">
              <HeadingIcon text={headingIconText.cleaningServices__headingIconText}/>
            </div>
            <h2 className="text-black text-[32px] md:text-[33px] xl:text-[34px] 2xl:text-[36px] 3xl:text-[38px]4xl:text-[40px] 5xl:text-[42px] font-bold text-center md:text-left">
            Best House Cleaning Services in Katy
            </h2>

            <p className="text-[#111] text-lg font-normal mt-4 text-center md:text-left">
            Our trusted team of experienced cleaners is dedicated to transforming your home into a pristine sanctuary. We offer comprehensive solutions tailored to your needs, including deep cleaning, regular maintenance, and move-in/move-out services. Using eco-friendly products and state-of-the-art equipment, we ensure a safe and healthy environment for your family. Our house cleaners' meticulous attention to detail guarantees every nook and cranny is spotless, from gleaming kitchens and bathrooms to dust-free living areas and bedrooms. Flexible scheduling options make it easy to find a convenient time that works for you. Whether you need a one-time deep clean or regular upkeep, our friendly and professional staff are here to help.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CleaningServices;