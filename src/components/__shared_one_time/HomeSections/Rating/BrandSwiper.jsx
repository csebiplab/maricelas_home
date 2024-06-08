"use client";
import band1 from "../../../../../public/assets/icons/review-companies-logo/google_review.png";
import band2 from "../../../../../public/assets/icons/review-companies-logo/vosb.png";
import band3 from "../../../../../public/assets/icons/review-companies-logo/hub.png";
import band4 from "../../../../../public/assets/icons/review-companies-logo/home_advisor.png";
import band5 from "../../../../../public/assets/icons/review-companies-logo/veteran.png";
import band6 from "../../../../../public/assets/icons/review-companies-logo/yelp.png";
import brand7 from "../../../../../public/assets/images/brand7.png";
import brand8 from "../../../../../public/assets/images/brand8.png";

import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/scrollbar";
import "swiper/css/virtual";
import { merriWeather } from "@/app/font";

const breakpoints = {
  0: {
    slidesPerView: 3,
  },
  767: {
    slidesPerView: 4,
  },
  1024: {
    slidesPerView: 5,
  },
  1280: {
    slidesPerView: 6,
  },
};

const BrandSwiper = () => {
  return (
    <div>
      <Swiper
        spaceBetween={13}
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
      >
        <SwiperSlide className="text-center">
          <div className="brand w-full">
            <Image
              src={band1}
              width={198}
              height={111}
              alt="brand1"
              className="w-[198px] h-[111px] mx-auto"
            />
            <p
              className={`rating__para text-xl pt-2 px-2 ${merriWeather.className}`}
            >
              #1 Cleaning Services Google
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-center">
          <div className="brand w-full">
            <Image
              src={band2}
              width={124}
              height={124}
              alt="brand1"
              className="w-[124px] h-[124px] mx-auto"
            />
            <p
              className={`rating__para text-xl pt-2 px-2 ${merriWeather.className}`}
            >
              Veteran Owned Small Business
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-center">
          <div className="brand w-full">
            <Image
              src={band3}
              width={209}
              height={82}
              alt="brand1"
              className="w-[209px] h-[82px] mx-auto"
            />
            <p
              className={`rating__para text-xl pt-2 px-2 ${merriWeather.className}`}
            >
              Texas HUB Certification
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-center">
          <div className="brand w-full">
            <Image
              src={band4}
              width={96}
              height={111}
              alt="brand1"
              className="w-[96px] h-[111px] mx-auto"
            />
            <p
              className={`rating__para text-xl pt-2 px-2 ${merriWeather.className}`}
            >
              Screened & Approved
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-center">
          <div className="brand w-full">
            <Image
              src={band5}
              width={115}
              height={115}
              alt="brand1"
              className="w-[115px] h-[115px] mx-auto"
            />
            <p
              className={`rating__para text-xl pt-2 px-2 ${merriWeather.className}`}
            >
              Veteran Business Certification
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-center">
          <div className="brand w-full">
            <Image
              src={band6}
              width={167}
              height={111}
              alt="brand1"
              className="w-[167px] h-[111px] mx-auto"
            />
            <p
              className={`rating__para text-xl pt-2 px-2 ${merriWeather.className}`}
            >
              Top rated Cleaning Services
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-center">
          <div className="brand w-full">
            <Image
              src={brand8}
              width={85}
              height={100}
              alt="brand1"
              className="w-[85px] h-[100px] mx-auto"
            />
            <p
              className={`rating__para text-xl pt-2 px-2 ${merriWeather.className}`}
            >
              We never used a cleaning service
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-center">
          <div className="brand w-full">
            <Image
              src={brand7}
              width={95}
              height={40}
              alt="brand1"
              className="w-[95px] h-[40px] mx-auto mt-6"
            />
            <p
              className={`rating__para text-xl pt-2 px-2 ${merriWeather.className}`}
            >
              What a pleasure it was working with Maricelaâ s
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BrandSwiper;
