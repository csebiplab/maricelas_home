"use client";
import work1 from "@/public/assets/images/working1.png";
import work2 from "@/public/assets/images/working2.png";
import work3 from "@/public/assets/images/working3.png";
import work4 from "@/public/assets/images/working4.png";
import work5 from "@/public/assets/images/working5.png";
import work6 from "@/public/assets/images/working6.png";
import Image from "next/image";

import Heading from "@/components/__ui/Heading";
import "./WorkingProcess.css";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/virtual";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


const breakpoints = {
  0: {
    slidesPerView: 1,
  },
  768: {
    slidesPerView: 3,
  },
  1024: {
    slidesPerView: 6,
  },

};


const slideData = [
  {
    imgSrc: work1,
    title: 'Initial Consultation',
    description: `Clients reach out to us either through phone, email, or our
    website to inquire about our services.`,
  },
  {
    imgSrc: work2,
    title: 'Scheduling',
    description: `Once the client approves the proposal, we work with them to
    schedule the cleaning appointment at a time that is convenient
    for them.`,
  },
  {
    imgSrc: work3,
    title: 'Preparation',
    description: `Before the scheduled cleaning date, our team prepares all the
    necessary equipment, supplies, and tools needed for the job.`,
  },
  {
    imgSrc: work4,
    title: ' Execution',
    description: `On the day of the cleaning appointment, our trained and
    experienced cleaning professionals arrive at the client's
    location promptly.`,
  },
  {
    imgSrc: work5,
    title: 'Quality Assurance',
    description: `Throughout the cleaning process, we maintain a high standard of
    quality and attention to detail.`,
  },
  {
    imgSrc: work6,
    title: 'Client Feedback',
    description: `After completing the cleaning service, we welcome feedback from
    our clients. We encourage them to share their thoughts and any
    areas.`,
  },
  {
    imgSrc: work1,
    title: 'Initial Consultation',
    description: `Clients reach out to us either through phone, email, or our
    website to inquire about our services.`,
  },
  {
    imgSrc: work2,
    title: 'Scheduling',
    description: `Once the client approves the proposal, we work with them to
    schedule the cleaning appointment at a time that is convenient
    for them.`,
  },
  {
    imgSrc: work3,
    title: 'Preparation',
    description: `Before the scheduled cleaning date, our team prepares all the
    necessary equipment, supplies, and tools needed for the job.`,
  },
  {
    imgSrc: work4,
    title: ' Execution',
    description: `On the day of the cleaning appointment, our trained and
    experienced cleaning professionals arrive at the client's
    location promptly.`,
  },
  {
    imgSrc: work5,
    title: 'Quality Assurance',
    description: `Throughout the cleaning process, we maintain a high standard of
    quality and attention to detail.`,
  },
  {
    imgSrc: work6,
    title: 'Client Feedback',
    description: `After completing the cleaning service, we welcome feedback from
    our clients. We encourage them to share their thoughts and any
    areas.`,
  },
  

];

const OurWorkingProcessSection = () => {
  return (
    <div className="bg__workingProcess container">
      <div className="lg:py-[44px] py-8">
        <div className="text-start ">
          <Heading text={"Our Working Process"} />
          <h2 className="text-lg lg:text-2xl 2xl:text-[32px] font-semibold text-[#1F1F1F] mt-[15px]  md:pb-0 pb-[6px]">
            How Does Our Cleaning Company Work?
          </h2>
          <p className="lg:mt-[15px] mt-2 mb-4 lg:mb-[35px] text-base">
            Certainly! Here's a breakdown of how our cleaning company operates:
          </p>
        </div>

        {/* ==================== swiper slider ================ */}
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
            allowTouchMove={false}
            breakpoints={breakpoints}
            spaceBetween={12}
          >
            {slideData.map((slideInfo, index) => (
          <SwiperSlide key={index} className={`px-[90px] md:px-0`}>
              
        <div className="w-full card-sd bg-[#fff] h-auto md:h-[332px]">
            <Image
              src={slideInfo?.imgSrc}
              width={215}
              height={148}
              alt="sliderImage"
              className="w-full"
            />
            <div className="text-center py-3 md:px-2 px-1">
              <h4 className="text-base py-1 md:py-2">
               {slideInfo?.title}
              </h4>
              <p className="text-sm md:px-1 text-[#252525]">
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

export default OurWorkingProcessSection;
