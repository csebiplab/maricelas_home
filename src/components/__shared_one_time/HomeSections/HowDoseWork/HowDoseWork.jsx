"use client"
import React, { useState } from "react";
import "./HowDoseWork.css";
import HeadingIcon from "@/components/__ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";

const ourRenovatorData1 = [
  {
    id: 1,
    bgImg: "/assets/homePage/about-us.png",
    img: "/assets/homePage/how-dose-work/hdw1.png",
    title: "Professional Cleaning",
    desc: "We use eco-friendly products and the latest equipment to give your space the deep clean it deserves.",
  },
  {
    id: 2,
    bgImg: "/assets/homePage/cleaning-services.png",
    img: "/assets/homePage/how-dose-work/hdw2.png",
    title: "Initial Consultation",
    desc: "Whether it's for your home or business, we discuss your specific requirements, preferred schedule.",
  },
  {
    id: 3,
    bgImg: "/assets/homePage/about-us.png",
    img: "/assets/homePage/how-dose-work/hdw3.png",
    title: "Professional Cleaning Service",
    desc: "Our skilled cleaning team arrives promptly with top-quality, eco-friendly products and tools.",
  },
  {
    id: 4,
    bgImg: "/assets/homePage/cleaning-services.png",
    img: "/assets/homePage/how-dose-work/hdw4.png",
    title: "Ongoing Support",
    desc: "For recurring clients, we maintain a consistent schedule and keep track of your preferences",
  },
  {
    id: 5,
    bgImg: "/assets/homePage/about-us.png",
    img: "/assets/homePage/how-dose-work/hdw5.png",
    title: "Flexible Scheduling Options",
    desc: "our time is important, so we offer flexible scheduling to accommodate your busy lifestyle or business operations.",
  },
  {
    id: 6,
    bgImg: "/assets/homePage/cleaning-services.png",
    img: "/assets/homePage/how-dose-work/hdw6.png",
    title: "Trusted & Experienced Team",
    desc: "Our cleaners are fully trained, background-checked, and committed to maintaining a high standard of professionalism. ",
  },
  {
    id: 7,
    bgImg: "/assets/homePage/about-us.png",
    img: "/assets/homePage/how-dose-work/hdw7.png",
    title: "Communication & Reliability",
    desc: "Whether it's for your home or business, we discuss your our time is important, so we offer flexible scheduling to accommodate",
  },
  {
    id: 8,
    bgImg: "/assets/homePage/cleaning-services.png",
    img: "/assets/homePage/how-dose-work/hdw8.png",
    title: "Satisfaction Guarantee",
    desc: "At Maricela's Cleaning Magnificence, your satisfaction is our priority. We aim to ensure your home or business",
  },
  {
    id: 9,
    bgImg: "/assets/homePage/about-us.png",
    img: "/assets/homePage/how-dose-work/hdw9.png",
    title: "Your Trusted Consultant for Success",
    desc: "we are dedicated to being your reliable partner on the path to success. With a blend of industry expertise, innovative strategies",
  },
];

const HowDoseWork = () => {
  const [hoverCart, setHoverCart] = useState(true);
  return (
    <div className="bg-white py-[25px] xl:py-[30px] 5xl:py-[35px]">
      <div data-aos="zoom-in" className="container ">
        <div className="flex flex-col items-center justify-center">
          <HeadingIcon text={headingIconText.howDoesWork__headingIconText} />
          <h2 className="text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-black leading-tight 5xl:leading-normal mb-[10px] text-center">
            How Does Our Cleaning Company Work?
          </h2>
          <p className="text-base 4xl:text-[17px] 5xl:text-lg font-normal text-dark leading-[30px] 5xl:leading-[36px] text-center">
            At Maricela's Cleaning Magnificence, we've streamlined our process
            to provide hassle-free and efficient cleaning services Let
            Maricela's Cleaning Magnificence transform your space into a clean,
            organized, and welcoming environment. Contact us today to schedule
            your service and experience the difference between working with a
            cleaning company that truly cares!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[18px] 2xl:gap-[21px] 3xl:gap-[24px] 4xl:gap-[27px] 5xl:gap-[30px] mt-[25px]">
          {ourRenovatorData1?.map((data) => {
            return (
              <>
                <div
                  key={data.id}
                  className="relative"
                  onMouseEnter={() => setHoverCart(false)}
                  onMouseLeave={() => setHoverCart(true)}
                >
                  {hoverCart ? (
                    <>
                      <div className="group howDoesWork__cart__bg pl-[18px] 5xl:pl-[22px] pt-[18px] 5xl:pt-[22px] pb-[25px] 5xl:pb-[30px] pr-[12px] 5xl:pr-[15px]">
                        <Image
                          src={data.img}
                          alt="how does work"
                          width={57}
                          height={57}
                          className="group-hover:hidden w-[67px] h-[67px] border border-black border-opacity-20 shadow-md p-3 rounded-full bg-white "
                        />
                        <p className="text-lg 4xl:text-[19px] 5xl:text-[20px] font-bold text-dark-50 group-hover:text-white leading-normal">
                          {data.title}
                        </p>
                        <p className="text-base 4xl:text-[17px] 5xl:text-lg font-light text-black group-hover:text-white leading-[30px]">
                          {data.desc}
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div>
                        <Image
                          src={data?.bgImg}
                          alt="how does work bg"
                          width={200}
                          height={200}
                          className="w-full h-full"
                        />
                      </div>
                      <div className="absolute inset-0 group pl-[18px] 5xl:pl-[22px] pt-[18px] 5xl:pt-[22px] pb-[25px] 5xl:pb-[30px] pr-[12px] 5xl:pr-[15px]">
                        <Image
                          src={data.img}
                          alt="how does work"
                          width={57}
                          height={57}
                          className="group-hover:hidden w-[67px] h-[67px] border border-black border-opacity-20 shadow-md p-3 rounded-full bg-white "
                        />
                        <p className="text-lg 4xl:text-[19px] 5xl:text-[20px] font-bold text-dark-50 group-hover:text-white leading-normal">
                          {data.title}
                        </p>
                        <p className="text-base 4xl:text-[17px] 5xl:text-lg font-light text-black group-hover:text-white leading-[30px]">
                          {data.desc}
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HowDoseWork;
