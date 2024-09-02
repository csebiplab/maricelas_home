
import HeadingIcon from "@/components/__ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";

const HouseCleaning = () => {
  return (
    <div className=" ">
      <div className="padding__top full__section_l_p pr-3 md:pr-0">
        <div className="grid md:grid-cols-6 grid-cols-1 gap-7">
          <div className="order-1 md:order-2 md:col-span-3 flex justify-end items-center md:items-start">
            <div className="">
              <Image
                src="/assets/cleaningServices/House Cleaning.png"
                width={923}
                height={614}
                alt="House Cleaning image"
                className=""
              />
            </div>
          </div>

          <div className="order-2 md:order-1 md:col-span-3 flex flex-col justify-center items-center md:items-start pt-6 md:pt-0">
            <div className="flex md:justify-normal justify-center md:items-start items-center mb-4">
              <HeadingIcon text={headingIconText.houseCleaning__headingIconText}/>
            </div>
            <h2 className="text-black text-[32px] md:text-[33px] xl:text-[34px] 2xl:text-[36px] 3xl:text-[38px]4xl:text-[40px] 5xl:text-[42px] font-bold text-center md:text-left">
            House Cleaning Services Richmond
            </h2>

            <p className="text-[#111] text-lg font-normal mt-4 text-center md:text-left">
            Maricela's Cleaning Magnificence offers top-tier house cleaning services in Richmond. With a commitment to excellence, our skilled team ensures every corner of your home shines with cleanliness. From routine maintenance to deep cleaning, we tailor our services to meet your specific needs, using eco-friendly products for a healthier environment. Whether you need weekly, bi-weekly, or one-time cleaning, our reliable staff delivers impeccable results, leaving you with a fresh and inviting space to enjoy. From bathrooms, kitchens, and living rooms to bedrooms, we tackle dust, grime, and dirt with precision and care. With competitive pricing and flexible scheduling, we strive to make professional cleaning accessible and convenient for all our clients. Experience peace of mind knowing your home is in capable hands with our cleaning company, where we strive for nothing less than magnificence in every clean.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseCleaning;