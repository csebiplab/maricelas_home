
import HeadingIcon from "@/components/__ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";

const CustomizedCleaning = () => {
  return (
    <div className=" ">
      <div className="padding__top full__section_r_p pl-3 md:pl-0">
        <div className="grid md:grid-cols-6 grid-cols-1 gap-7 ">
          <div className="md:col-span-3 flex justify-end items-center md:items-start">
            <div className="">
              <Image
                src="/assets/houseCleaningServices/Customized Cleaning.png"
                width={923}
                height={523}
                alt="Customized Cleaning image"
                className=""
              />
            </div>
          </div>

          <div className="md:col-span-3 flex flex-col justify-center items-center md:items-start pt-6 md:pt-0">
            <div className="flex md:justify-normal justify-center md:items-start items-center mb-4">
              <HeadingIcon text={headingIconText.customizedCleaing__headingIconText}/>
            </div>
            <h3 className="text-black text-[32px] md:text-[33px] xl:text-[34px] 2xl:text-[36px] 3xl:text-[38px]4xl:text-[40px] 5xl:text-[42px] font-bold text-center md:text-left">
            Customized Cleaning by Our Caring Cleaners
            </h3>

            <p className="text-[#111] text-lg font-normal mt-4 text-center md:text-left">
            Experience customized cleaning like never before with Maricela's Cleaning Magnificence. Our caring cleaners in Katy, TX, are dedicated to crafting a cleaning plan that perfectly suits your needs and preferences. Whether you require regular maintenance, deep cleaning, or specialized services for a particular event, our team is equipped to deliver. Our approach is characterized by meticulous attention to detail and the use of eco-friendly cleaning products, ensuring a safe and healthy environment for your home. We handle everything with care, from floors to fixtures, ensuring every surface shines. Trust our cleaning experts for reliable service and a personalized touch. We believe in building lasting relationships through open communication and consistently exceeding expectations. Discover the difference with our dedicated cleaners who go above and beyond to make your home beautifully clean and inviting
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomizedCleaning;