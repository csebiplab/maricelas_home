"use client";
import band1 from "@/public/assets/images/band1.png";
import band2 from "@/public/assets/images/band2.png";
import band3 from "@/public/assets/images/band3.png";
import band4 from "@/public/assets/images/band4.png";
import band5 from "@/public/assets/images/band5.png";
import band6 from "@/public/assets/images/band6.png";
import brand7 from "@/public/assets/images/brand7.png";
import brand8 from "@/public/assets/images/brand8.png";
import Image from "next/image";
import { Autoplay, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/scrollbar";
import "swiper/css/virtual";

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
        allowTouchMove={false}
        // scrollbar={{ draggable: false }}
        breakpoints={breakpoints}
        className=""
      >
        <SwiperSlide className={`text-center`}>
          <div className="brand w-full">
            <Image
              src={band1}
              width={66}
              height={37}
              alt="brand1"
              className="mx-auto"
            />
            <p className="text-center text-[10px] leading-[16px] pt-2 px-2">
              Maricela Maldonado responds to texts.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={`text-center`}>
          <div className="brand w-full">
            <Image
              src={band2}
              width={44}
              height={37}
              alt="brand1"
              className="mx-auto "
            />
            <p className="text-center text-[10px] leading-[16px] pt-2 px-2">
              The cleanest house I have ever seen.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={`text-center`}>
          <div className="brand w-full">
            <Image
              src={band3}
              width={44}
              height={37}
              alt="brand1"
              className="mx-auto"
            />
            <p className="text-center text-[10px] leading-[16px] pt-2 px-2">
              We hired Maricelas Cleaning Magnificence
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={`text-center`}>
          <div className="brand w-full">
            <Image
              src={band4}
              width={44}
              height={37}
              alt="brand1"
              className="mx-auto"
            />
            <p className="text-center text-[10px] leading-[16px] pt-2 px-2">
              Maricelas Cleaning Magnificence
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={`text-center`}>
          <div className="brand w-full">
            <Image
              src={band5}
              width={44}
              height={37}
              alt="brand1"
              className="mx-auto"
            />
            <p className="text-center text-[10px] leading-[16px] pt-2 px-2">
              We never used a cleaning service
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={`text-center`}>
          <div className="brand w-full">
            <Image
              src={band6}
              width={65}
              height={37}
              alt="brand1"
              className="mx-auto"
            />
            <p className="text-center text-[10px] leading-[16px] pt-2 px-2">
              What a pleasure it was working with Maricela
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide className={`text-center`}>
          <div className="brand w-full">
            <Image
              src={brand8}
              width={78}
              height={79}
              alt="brand1"
              className="w-[78px] h-[79px] mx-auto"
            />
            <p className="text-center text-[10px] leading-[16px] pt-2 px-2">
              What a pleasure it was working with Maricelaâ s
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide className={`text-center`}>
          <div className="brand w-full">
            <Image
              src={brand7}
              width={153}
              height={25}
              alt="brand1"
              className="mx-auto mt-6"
            />
            <p className="text-center text-[10px] leading-[16px] pt-2 px-2">
              We never used a cleaning service
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BrandSwiper;
