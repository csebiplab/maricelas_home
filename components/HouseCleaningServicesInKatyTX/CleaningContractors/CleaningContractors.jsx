
import HeadingIcon from "@/components/__ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";

const CleaningContractors = () => {
  return (
    <div className=" ">
      <div className="padding__top full__section_r_p">
        <div className="grid md:grid-cols-6 grid-cols-1 gap-7 ">
          <div className="md:col-span-3 flex justify-end items-center md:items-start">
            <div className="">
              <Image
                src="/assets/houseCleaningServices/Cleaning Contractors.png"
                width={923}
                height={523}
                alt="cleaning Contractors image"
                className=""
              />
            </div>
          </div>

          <div className="md:col-span-3 flex flex-col justify-center items-center md:items-start pt-6 md:pt-0">
            <div className="flex md:justify-normal justify-center md:items-start items-center mb-4">
              <HeadingIcon text={headingIconText.cleaningContractors__headingIconText}/>
            </div>
            <h3 className="text-black text-[32px] md:text-[33px] xl:text-[34px] 2xl:text-[36px] 3xl:text-[38px]4xl:text-[40px] 5xl:text-[42px] font-bold text-center md:text-left">
            Experienced Cleaning Contractors in Katy
            </h3>

            <p className="text-[#111] text-lg font-normal mt-4 text-center md:text-left">
            With years of expertise in the industry, we pride ourselves on delivering top-notch cleaning services tailored to meet the specific requirements of each client. Our skilled team of professionals is equipped with the latest cleaning techniques and high-quality products, ensuring a spotless and hygienic environment for your home or business. We offer a comprehensive range of services, including residential cleaning, commercial cleaning, carpet and upholstery cleaning, window cleaning, and more. Our commitment to excellence and attention to detail set our cleaners apart from the competition. We understand that every space is unique, and we work closely with our clients to create customized cleaning plans that fit their schedules and budgets.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CleaningContractors;