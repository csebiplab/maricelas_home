"use client";

import app1 from "../../../../../public/assets/da/da1.png";
import app2 from "../../../../../public/assets/da/da2.png";
import app4 from "../../../../../public/assets/da/da4.png";
import app5 from "../../../../../public/assets/da/da5.png";
import app6 from "../../../../../public/assets/da/da6.png";
import app7 from "../../../../../public/assets/da/da7.png";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/virtual";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Approach.css";
import Heading from "@/components/__ui/Heading";

const breakpoints = {
  0: {
    slidesPerView: 1,
  },
  768: {
    slidesPerView: 2,
  },
  1024: {
    slidesPerView: 2,
  },
};

const slideData = [
  {
    imgSrc: app1,
    title: "Customized Cleaning Plans",
    description: `At our commercial & residential cleaning service in Houston, TX, we believe in tailoring our approach to meet the unique needs of each client. We don't offer a one-size-fits-all solution; instead, we work closely with our customers to understand their specific requirements and preferences.`,
  },
  {
    imgSrc: app2,
    title: "Advanced Cleaning Techniques",
    description: `We stay ahead of the curve by utilizing the latest cleaning technologies and techniques. From eco-friendly products to advanced equipment, we ensure that our cleaning methods are not only effective but also environmentally conscious. We stay ahead of the curve by utilizing.`,
  },
  {
    imgSrc: app4,
    title: "Trained and Professional Staff",
    description: `Our team consists of highly trained and professional cleaners who are committed to delivering exceptional service. They undergo rigorous training and adhere to strict quality standards to ensure that every job is completed to perfection.`,
  },
  {
    imgSrc: app5,
    title: "Transparent Communication",
    description: `
    We prioritize clear and transparent communication with our clients. From initial consultations to ongoing updates, we keep our clients informed every step of the way, ensuring that their expectations are always met.`,
  },
  {
    imgSrc: app6,
    title: "Flexible Scheduling",
    description: `Recognizing that our clients have busy lives, we offer flexible scheduling options to accommodate their needs. Whether it's a one-time deep clean or regularly scheduled maintenance, we work around our client's schedules to provide convenience and peace of mind.`,
  },
  {
    imgSrc: app7,
    title: "Commitment to Excellence",
    description: `We strive for perfection in everything we do, and we're not satisfied until our clients are thrilled with the results.`,
  },
];

const DifferentApproachForWorkSection = () => {
  return (
    <div className="container">
      <div className="3xl:py-[120px] lg:py-[100px] py-[60px] md:flex gap-2">
        <div className="flex justify-center lg:justify-normal md:text-start text-center md:me-4 me-0 lg:col-span-3 w-full md:w-4/12">
          <div>
            <div className="flex justify-center lg:justify-normal">
              <Heading text={"Different Approach For Work"} />
            </div>
            <h2 className="text-[28px] md:text-[32px] font-bold text-[#1F1F1F] mt-[15px]">
              Our Approach To Cleaning Service Is Different
            </h2>
            <p className="text-base font-normal mt-2 md:mt-4 mb-5 lg:leading-[32px]">
              Welcome to a cleaning service experience like no other. At
              Maricela's Cleaning Magnificence, our approach to cleaning
              transcends the ordinary.
            </p>
            <div className="hidden lg:flex lg:gap-5 md:gap-3 md:justify-start justify-center mt-2 md:mt-4 md:block">
              <button className="p-3 rounded-full border-2  hover:text-white hover:bg-[#880769]">
                <FaChevronLeft className="fill-[#880769] hover:fill-white" />
              </button>
              <button className=" hover:text-black hover:bg-white border-2 p-3 bg-[#880769] rounded-full">
                <FaChevronRight className="hover:fill-[#880769] fill-white" />
              </button>
              {/* <SwiperNavButtons/> */}
            </div>
          </div>
        </div>

        {/* ====================== swiper slider ============== */}
        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 3000,
            pauseOnMouseEnter: false,
            disableOnInteraction: false,
            stopOnLastSlide: false,
          }}
          speed={3000}
          allowTouchMove={true}
          breakpoints={breakpoints}
          spaceBetween={20}
        >
          {slideData.map((slideInfo, index) => (
            <SwiperSlide key={index} className={`px-[30px] md:px-0`}>
              <div className="w-full my-card bg-white h-auto md:h-[420px] border">
                <Image
                  src={slideInfo?.imgSrc}
                  width={440}
                  height={190}
                  alt="different approach"
                  className="w-full rounded-md"
                />
                <div className="text-center py-3 md:px-2 px-1 ">
                  <p className="text-[20px] md:text-[25px] font-bold py-1 md:py-2">
                    {slideInfo?.title}
                  </p>
                  <p className="text-base font-normal mt-1 md:mt-0  md:px-1 text-[#252525] leading-[25px]">
                    {slideInfo?.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default DifferentApproachForWorkSection;
