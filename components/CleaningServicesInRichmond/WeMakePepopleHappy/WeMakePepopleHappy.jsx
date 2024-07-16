
import HeadingIcon from "@/components/__ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";

const WeMakePepopleHappy = () => {
  return (
    <div className=" ">
      <div className="padding__top full__section_r_p pl-3 md:pl-0">
        <div className="grid md:grid-cols-6 grid-cols-1 gap-7">
          <div className="md:col-span-3 flex justify-end items-center md:items-start">
            <div className="">
              <Image
                src="/assets/cleaningServices/We Make People Happy.png"
                width={923}
                height={614}
                alt="We Make People Happy image"
                className=""
              />
            </div>
          </div>

          <div className="md:col-span-3 flex flex-col justify-center items-center md:items-start pt-6 md:pt-0">
            <div className="flex md:justify-normal justify-center md:items-start items-center mb-4">
              <HeadingIcon text={headingIconText.weMakePepoleHappy__headingIconText}/>
            </div>
            <h3 className="text-black text-[32px] md:text-[33px] xl:text-[34px] 2xl:text-[36px] 3xl:text-[38px]4xl:text-[40px] 5xl:text-[42px] font-bold text-center md:text-left">
            A Clean Home Always Be A Happy Home
            </h3>

            <p className="text-[#111] text-lg font-normal mt-4 text-center md:text-left">
            A clean home is a happy home." At Maricela's Cleaning Magnificence, we wholeheartedly believe in this mantra. Our mission is to bring joy and comfort to every household in Richmond through our exceptional cleaning services. That's what we strive to achieve with every visit. Our team of dedicated professionals understands the transformative power of a clean environment. We go beyond surface cleaning to ensure every corner is pristine, using only the safest, chemical-free, and non-toxic products. Whether you need regular maintenance or a thorough deep cleaning, we are here to cater to your needs. We take pride in our work, treating each home with the care and attention it deserves. Your satisfaction is our priority, and we guarantee reliable and trustworthy service every time.

            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeMakePepopleHappy;