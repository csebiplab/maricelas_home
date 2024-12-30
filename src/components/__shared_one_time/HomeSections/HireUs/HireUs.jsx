"use client";

import Image from "next/image";
import HeadingIcon from '@/components/__ui/HeadingIcon';
import { headingIconText } from '@/utils/heading-text';

const benefitsData = [
  {
    id: 1,
    img: "/assets/homePage/hire-us/hu1.png",
    title: "Reputation and Reviews",
    desc: "Look for cleaning agencies with positive reviews and a favorable reputation in the community.",
  },
  {
    id: 2,
    img: "/assets/homePage/hire-us/hu2.png",
    title: "Services Offered",
    desc: "Ensure the company offers the specific magnificent cleaning services in Houston you need, whether it's residential, commercial, deep cleaning, etc.",
  },
  {
    id: 3,
    img: "/assets/homePage/hire-us/hu3.png",
    title: "Experience and expertise",
    desc: "To ensure quality service, choose a company with experienced and well-trained employees.",
  },
  {
    id: 4,
    img: "/assets/homePage/hire-us/hu4.png",
    title: "Licensing and Insurance",
    desc: "Every cleaning company in Houston has the required licenses and insurance to protect you and your property.",
  },
  {
    id: 5,
    img: "/assets/homePage/hire-us/hu5.png",
    title: "Friendly Cleaning Products",
    desc: "If you value sustainability, consider companies that use environmentally friendly cleaning products and methods.",
  },
  {
    id: 6,
    img: "/assets/homePage/hire-us/hu6.png",
    title: "Customization Options",
    desc: "Seek out companies that offer customizable cleaning plans to tailor services to your needs.",
  },
  {
    id: 7,
    img: "/assets/homePage/hire-us/hu7.png",
    title: "Pricing and Transparency",
    desc: "Compare pricing structures and ensure the company is transparent about costs and potential additional fees.",
  },
  {
    id: 8,
    img: "/assets/homePage/hire-us/hu8.png",
    title: "Availability and Flexibility",
    desc: "Choose a cleaning service that can accommodate your schedule and offers flexible appointment times.",
  },
  {
    id: 9,
    img: "/assets/homePage/hire-us/hu9.png",
    title: "Customer Service",
    desc: "To ensure a smooth experience, evaluate the company's customer service responsiveness and professionalism.",
  },
];

const HireUs = () => {
  return (
    <div className=" ">
      <div
        data-aos="zoom-in"
        className="container padding__top"
      >
        <div className="!overflow-hidden">
          <div className="flex flex-col items-center">
            <div className="flex justify-center lg:justify-normal items-center">
            <HeadingIcon text={headingIconText.hireUs__headingIconText}/>
            </div>
            <h2 className="text-[32px] md:text-[33px] lg:text-[34px] xl:text-[36px] 2xl:text-[38px] 3xl:text-[39px] 4xl:text-[41px] 5xl:text-[42px] font-bold text-black leading-normal mb-[10px] text-center">
            What to Consider First When You Want to Hire a Cleaning Company?
            </h2>
          </div>
          {/* first div  */}
          <div className="grid grid-cols-1 md:grid-cols-3 mt-[25px]">
            {benefitsData?.map((data) => {
              return (
                <div
                  key={data.id}
                  className="bg-white border-t border-x border-[#880769] px-[18px] pt-[16px] pb-[22px]"
                >
                  <Image
                    src={data.img}
                    alt="benefits image"
                    width={62}
                    height={62}
                    className="w-[62px] h-[62px]"
                  />
                  <p className="text-lg 4xl:text-[19px] 5xl:text-[20px] font-bold text-left text-dark-50 leading-normal mt-[10px]">
                    {data.title}
                  </p>
                  <p className="text-base 4xl:text-[17px] 5xl:text-lg font-normal text-black text-left leading-normal mt-[5px]">
                    {data.desc}
                  </p>
                </div>
              );
            })}
          </div>
          {/* second div  */}
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="md:col-span-1 bg-white border border-[#880769] px-[18px] pt-[16px] pb-[22px]">
              <Image
                src="/assets/homePage/hire-us/hu10.png"
                alt="benefits image"
                width={62}
                height={62}
                className="w-[62px] h-[62px]"
              />
              <p className="text-[20px] font-bold text-left text-black leading-normal mt-[10px]">
              Guarantees & Satisfaction Policies
              </p>
              <p className="text-lg font-normal text-black text-left leading-normal mt-[5px]">
              Look for companies that offer satisfaction guarantees or policies to address any issues that may arise during or after cleaning.
              </p>
            </div>
            <div className="md:col-span-2 bg-white border border-[#880769] px-[18px] pt-[16px] pb-[22px]">
              <Image
                src="/assets/homePage/hire-us/hu11.png"
                alt="benefits image"
                width={62}
                height={62}
                className="w-[62px] h-[62px]"
              />
              <p className="text-[20px] font-bold text-left text-black leading-normal mt-[10px]">
              Choosing the Right Cleaning Service in Houston
              </p>
              <p className="text-lg font-normal text-black text-left leading-normal mt-[5px]">
              Finding the perfect cleaning service in Houston involves several key considerations. Start by researching companies with positive reviews and a strong reputation in the community. Ensure they offer the specific services you need, whether it's residential, commercial, or deep cleaning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HireUs;
