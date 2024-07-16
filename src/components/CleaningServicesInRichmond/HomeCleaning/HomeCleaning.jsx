import HeadingIcon from "@/components/__ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";
import React from "react";

const HomeCleaning = () => {
  return (
    <div className="">
      <div className="container padding__top">
        <div className="grid md:grid-cols-6 grid-cols-1  gap-10">
          <div className="md:col-span-3">
            <div>
              <Image
                src="/assets/cleaningServices/Home Cleaning.png"
                alt="Home Cleaning image"
                width={665}
                height={500}
              />
            </div>
          </div>
          <div className="md:col-span-3">
            <div className="flex justify-center md:justify-start ">
                <HeadingIcon text={headingIconText.homeCleaning__headingIconText}/>
            </div>
            <h3 className="text-black text-[32px] md:text-[33px] lg:text-[34px] xl:text-[36px] 2xl:text-[38px] 3xl:text-[40px] 4xl:text-[41px] 5xl:text-[42px] font-bold  text-center md:text-left pt-[10px]">Home Cleaning Services Richmond</h3>
            <p className="text-lg font-normal text-[#111] text-center md:text-left pt-[10px]">Maricela's Cleaning Magnificence in Richmond offers top-tier home cleaning services tailored to your needs. Our professional team ensures every corner of your home sparkles, providing thorough and meticulous cleaning that exceeds expectations. Our dedicated cleaning staff takes pride in transforming your space into a haven of cleanliness and comfort. With years of experience and a commitment to excellence, we handle everything from floors to ceilings with precision and care. Whether you need detailed kitchen sanitization, carpet steam cleaning, or general tidying up, our services are designed to meet your specific requirements. We prioritize your satisfaction and aim to create a healthier living environment for you and your family. Discover the difference with our professional cleaning company and enjoy a home that shines brilliantly after every visit.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCleaning;
