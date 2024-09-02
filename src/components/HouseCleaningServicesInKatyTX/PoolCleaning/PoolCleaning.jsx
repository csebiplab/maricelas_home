
import HeadingIcon from "@/components/__ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";

const PoolCleaning = () => {
  return (
    <div className=" ">
      <div className="padding__top container">
        <div className="grid md:grid-cols-6 grid-cols-1 gap-7 ">
          <div className="md:col-span-3 flex justify-end items-center md:items-start">
            <div className="">
              <Image
                src="/assets/houseCleaningServices/Pool Cleaning.png"
                width={923}
                height={558}
                alt="Pool Cleaning image"
                className=""
              />
            </div>
          </div>

          <div className="md:col-span-3 flex flex-col justify-center items-center md:items-start pt-6 md:pt-0">
            <div className="flex md:justify-normal justify-center md:items-start items-center mb-4">
              <HeadingIcon text={headingIconText.poolCleaning__headingIconText}/>
            </div>
            <h2 className="text-black text-[32px] md:text-[33px] xl:text-[34px] 2xl:text-[36px] 3xl:text-[38px]4xl:text-[40px] 5xl:text-[42px] font-bold text-center md:text-left">
            Pool Cleaning Services Katy TX
            </h2>

            <p className="text-[#111] text-lg font-normal mt-4 text-center md:text-left">
            Maricela's Cleaning Magnificence in Katy, TX, offers premier solutions for maintaining pristine pools throughout the area. With a dedicated team of experienced professionals, we specialize in comprehensive cleaning, maintenance, and repair services tailored to both residential and commercial pool owners. At our company, we understand the importance of regular upkeep to ensure your pool remains safe, clean, and inviting year-round. Our services include thorough weekly cleaning sessions, water testing and chemical balancing, debris removal, and equipment inspections to keep your pool in optimal condition. We also provide expert repair services for pumps, filters, heaters, and other pool equipment, ensuring efficient operation and extending the lifespan of your investment. We strive to exceed expectations with every visit, offering reliable scheduling and transparent communication throughout the process.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoolCleaning;