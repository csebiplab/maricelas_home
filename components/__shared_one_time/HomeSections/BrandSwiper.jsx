"use client";
import band1 from "@/public/assets/images/band1.png";
import band2 from "@/public/assets/images/band2.png";
import band3 from "@/public/assets/images/band3.png";
import band4 from "@/public/assets/images/band4.png";
import band5 from "@/public/assets/images/band5.png";
import band6 from "@/public/assets/images/band6.png";
import Image from "next/image";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/scrollbar";
import "swiper/css/virtual";
import { Autoplay, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const BrandSwiper = () => {
  return (
    <div>
      <Swiper
        spaceBetween={13}
        // slidesPerView={3}
        slidesPerView={3}
        modules={[Autoplay, Scrollbar]}
        loop={true}
        autoplay={{
          delay: 3000,
          pauseOnMouseEnter: false,
          disableOnInteraction: false,
          stopOnLastSlide: false,
        }}
        speed={3000}
        allowTouchMove={false}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide className={`text-center mt-5`}>
          <div className="brand w-full h-[130px]  text-center">
            <div>
              <Image
                src={band1}
                width={66}
                height={37}
                alt="brand1"
                className="mt-[21px] mx-auto"
              />
            </div>
            <p className="text-center text-[10px] leading-[16px] pt-2 px-2">
            Maricela Maldonado responds to texts.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={`text-center mt-5`}>
          <div className="brand w-full h-[130px]  text-center">
            <Image
              src={band2}
              width={44}
              height={37}
              alt="brand1"
              className="mx-auto mt-[15px]"
            />
            <p className="text-center text-[10px] leading-[16px] pt-2 px-2">
            The cleanest house I have ever seen.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={`text-center mt-5`}>
          <div className="brand w-full h-[130px]  text-center">
            <Image
              src={band3}
              width={44}
              height={37}
              alt="brand1"
              className="mt-[15px] mx-auto"
            />
            <p className="text-center text-[10px] leading-[16px] pt-2 px-2">
            We hired Maricelas CleaningÂ  Magnificence
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={`text-center mt-5`}>
          <div className="brand w-full h-[130px]  text-center">
            <Image
              src={band4}
              width={44}
              height={37}
              alt="brand1"
              className="mt-[15px] mx-auto"
            />
            <p className="text-center text-[10px] leading-[16px] pt-2 px-2">
            Maricelas CleaningÂ Magnificence
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={`text-center mt-5`}>
          <div className="brand w-full h-[130px]  text-center">
            <Image
              src={band5}
              width={44}
              height={37}
              alt="brand1"
              className="mt-[15px] mx-auto"
            />
            <p className="text-center text-[10px] leading-[16px] pt-2 px-2">
            We never used a cleaning service
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={`text-center mt-5`}>
          <div className="brand w-full h-[130px]  text-center">
            <Image
              src={band6}
              width={65}
              height={37}
              alt="brand1"
              className="mt-[15px] mx-auto"
            />
            <p className="text-center text-[10px] leading-[16px] pt-2 px-2">
            What a pleasure it was working with Maricelaâ s
            </p>
          </div>
        </SwiperSlide>
       
      </Swiper>
    </div>
  );
};

export default BrandSwiper;