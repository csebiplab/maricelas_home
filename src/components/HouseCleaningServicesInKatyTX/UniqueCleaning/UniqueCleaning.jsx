
import HeadingIcon from "@/components/__ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";
import Link from "next/link";

const UniqueCleaning = () => {
  return (
    <div className=" ">
      <div className="padding__top container">
        <div className="grid md:grid-cols-6 grid-cols-1 gap-7 ">
          <div className="order-2 md:col-span-3 flex justify-end items-center md:items-start">
            <div className="">
              <Image
                src="/assets/houseCleaningServices/Unique Cleaning.png"
                width={923}
                height={523}
                alt="Unique Cleaning image"
                className=""
              />
            </div>
          </div>

          <div className="order-1 md:col-span-3 flex flex-col justify-center items-center md:items-start pt-6 md:pt-0">
            <div className="flex md:justify-normal justify-center md:items-start items-center mb-4">
              <HeadingIcon text={headingIconText.uniqueCleaning__headingIconText}/>
            </div>
            <h2 className="text-black text-[32px] md:text-[33px] xl:text-[34px] 2xl:text-[36px] 3xl:text-[38px]4xl:text-[40px] 5xl:text-[42px] font-bold text-center md:text-left">
            We Use Unique Cleaning Materials
            </h2>

            <p className="text-[#111] text-lg font-normal mt-4 text-center md:text-left">
            At <Link href="https://maricelascleaningmagnificence.com/" target="_blank" rel="nofollow" className="text-primary  hover:underline">Maricela's Cleaning Magnificence</Link> in Katy, TX, we stand out by utilizing unique cleaning materials that enhance the quality and effectiveness of our services. These materials are specially chosen to ensure thorough cleaning without harsh chemicals, promoting a healthier environment for your home and family. From specialized surface cleaners to innovative tools, our unique cleaning materials are tailored to tackle every cleaning challenge with precision. Whether it's removing tough stains, sanitizing surfaces, or enhancing indoor air quality, we prioritize using products that deliver superior results while minimizing environmental impact. Experience the difference with our unique cleaning materials that not only clean but also care for your home, ensuring a pristine and inviting living space with every visit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniqueCleaning;