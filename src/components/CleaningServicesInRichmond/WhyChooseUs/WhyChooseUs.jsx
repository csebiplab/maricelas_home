"use client";

import "./WhyChooseUs.css";

import Image from "next/image";

import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/virtual";
import HeadingIcon from "@/components/__ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import { SwiperNavButtons } from "../ReviewSwipper/ReviewSlider/SwiperSliderButton";


const breakpoints = {
  0: {
    slidesPerView: 1,
    spaceBetween: 30,
  },
  640: {
    slidesPerView: 1,
    spaceBetween: 20,
  },
  767: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
  1280: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
  1440: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
  1536: {
    slidesPerView: 4,
    spaceBetween: 20,
  },
  1736: {
    slidesPerView: 4,
    spaceBetween: 20,
  },
};

const services = [
  {
    img: "/assets/cleaningServices/wcu1.png",
    title: "Health-Conscious",
    para: "We prioritize your health and safety by using only chemical-free and non-toxic cleaning products. This ensures a clean environment without harmful residues.",
  },
  {
    img: "/assets/cleaningServices/wcu2.png",
    title: "Exceptional Quality",
    para: "Our team of experienced professionals delivers top-notch cleaning services with meticulous attention to detail. Our expert cleaners strive for excellence in every cleaning task they undertake.",
  },
  {
    img: "/assets/cleaningServices/wcu3.png",
    title: "Customized Cleaning",
    para: "Our expert cleaners understand that every home and business has unique cleaning requirements. Our expert cleaners offer tailored cleaning plans to suit your specific needs and preferences.",
  },
  {
    img: "/assets/cleaningServices/wcu4.png",
    title: "Reliability & Consistency",
    para: "You can rely on us to be punctual and dependable. We maintain high standards of reliability and consistency in our cleaning services.",
  },
  {
    img: "/assets/cleaningServices/wcu5.png",
    title: "Environmental",
    para: "We are committed to sustainability. By using eco-friendly practices and products, we minimize our environmental footprint while delivering effective cleaning results.",
  },
  {
    img: "/assets/cleaningServices/wcu6.png",
    title: "Transparent Pricing",
    para: "Our expert cleaners offer competitive and transparent pricing with no hidden fees. You'll know exactly what to expect with our upfront pricing structure.",
  },
  {
    img: "/assets/cleaningServices/wcu7.png",
    title: "Customer Satisfaction",
    para: "Your satisfaction is our priority. We work hard to ensure that our cleaning services meet or exceed your expectations, building long-term relationships with our clients.",
  },
  {
    img: "/assets/cleaningServices/wcu8.png",
    title: "Licensed and Insured",
    para: "Our cleaning zone is a fully licensed and insured cleaning company, giving you peace of mind knowing that your property is in safe hands.",
  },
];

const WhyChooseUs = () => {
  return (
    <div className="">
      <div className="!overflow-hidden padding__top">
        <div className="">
          <div className="container">
            <div className="flex flex-col items-center justify-center">
              <div className="flex justify-center lg:justify-normal items-center">
                <HeadingIcon text={headingIconText.whyChooseUs__headingIconText}/>
              </div>
              <h2 className="text-[28px] md:text-3xl lg:text-[32px] xl:text-[34px] 2xl:text-4xl 3xl:text-[38px] 4xl:text-[40px] 5xl:text-[42px]  leading-[35px] font-bold text-black text-center pb-[25px]">
              Reasons to Choose Our Cleaning Service
              </h2>
            </div>

            <div className="w-full h-[3px] bg-primary-500" />

            <div className="">
              <Swiper
                modules={[Navigation, Autoplay]}
                breakpoints={breakpoints}
                loop={true}
                autoplay={{
                  delay: 3000,
                  pauseOnMouseEnter: false,
                  disableOnInteraction: false,
                  stopOnLastSlide: false,
                }}
                speed={3000}
                allowTouchMove={false}
                className="!px-5 md:px-0 !overflow-hidden"
              >
                {services.map((service, index) => (
                  <SwiperSlide key={index} className="">

                    <div className="">
                      <div className="flex justify-around ">
                        <div className="w-[3px] h-[40px] bg-primary-500" />
                      </div>
                    </div>
                      
                    <div className="">
                      <Image
                        src={service.img}
                        width={58}
                        height={58}
                        alt="benifits image"
                        className="w-[58px] h-[58px] mx-auto p-2 border-2 border-primary-500 rounded-full"
                      />
                    </div>

                    <div className="">
                      <div className="flex justify-around ">
                        <div className="w-[3px] h-[40px] bg-primary-500" />
                      </div>
                    </div>
                    

                    <div className="mx-auto w-[323px] h-[226px] cart px-2 py-[13px]">
                      <div className="">
                        <p className="text-black text-2xl font-bold text-center">
                          {service.title}{" "}
                        </p>
                        <p className="text-black text-lg font-normal text-center">
                          {service.para}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
                <SwiperNavButtons/>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;