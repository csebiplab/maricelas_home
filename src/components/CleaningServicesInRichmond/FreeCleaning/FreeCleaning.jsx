import HeadingIcon from "@/components/__ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";
import React from "react";

const FreeCleaning = () => {
  return (
    <div className="">
      <div className="container padding__top">
        <div className="grid md:grid-cols-6 grid-cols-1  gap-10">
          <div className="md:col-span-3">
            <div>
              <Image
                src="/assets/cleaningServices/Free Non-Toxic Cleaning.png"
                alt="free Cleaning image"
                width={665}
                height={500}
              />
            </div>
          </div>
          <div className="md:col-span-3">
            <div className="flex justify-center md:justify-start ">
                <HeadingIcon text={headingIconText.freeCleaning__headingIconText}/>
            </div>
            <h2 className="text-black text-[32px] md:text-[33px] lg:text-[34px] xl:text-[36px] 2xl:text-[38px] 3xl:text-[40px] 4xl:text-[41px] 5xl:text-[42px] font-bold  text-center md:text-left pt-[10px]">We Provide Chemical Free Non-Toxic Cleaning Supplies</h2>
            <p className="text-lg font-normal text-[#111] text-center md:text-left pt-[10px]">Maricela's Cleaning Magnificence is one of the best cleaning services companies providing chemical-free, non-toxic cleaning supplies in Richmond. We are dedicated to revolutionizing the cleaning industry by offering products that are safe for both your family and the environment. Our expert cleaning suppliers understand the importance of using free from harsh chemicals cleaning products. Our carefully curated selection includes everything you need for a spotless home without compromising on health or cleanliness. From all-purpose cleaners and dishwashing liquids to laundry detergents and floor cleaners, each product is crafted with natural ingredients that effectively clean without leaving behind harmful residues. We rigorously vet each product to ensure it meets our high standards for non-toxicity and environmental responsibility. When you want to tackle everyday messes or deep cleaning projects, you can trust that our cleaning company has the solution.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeCleaning;
