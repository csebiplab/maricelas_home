"use client";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/scrollbar";
import "swiper/css/virtual";

const breakpoints = {
  0: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
  767: {
    slidesPerView: 4,
    spaceBetween: 30,
  },
  1024: {
    slidesPerView: 5,
    spaceBetween: 40,
  },
  1280: {
    slidesPerView: 6,
    spaceBetween: 50,
  },
};

const brands = [
  {
    src: "/assets/icons/review-companies-logo/google_review.png",
    width: 198,
    height: 111,
  },
  {
    src: "/assets/icons/review-companies-logo/vosb.png",
    width: 124,
    height: 124,
  },
  {
    src: "/assets/icons/review-companies-logo/hub.png",
    width: 209,
    height: 82,
  },
  {
    src: "/assets/icons/review-companies-logo/home_advisor.png",
    width: 96,
    height: 111,
  },
  {
    src: "/assets/icons/review-companies-logo/veteran.png",
    width: 115,
    height: 115,
  },
  {
    src: "/assets/icons/review-companies-logo/yelp.png",
    width: 167,
    height: 111,
  },
  {
    src: "/assets/icons/review-companies-logo/groupon.png",
    width: 450,
    height: 74,
  },
];

const BrandSwiper = () => {
  return (
    <div>
      <Swiper
        // spaceBetween={13}
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
        {brands.map((brand, index) => (
          <SwiperSlide key={index} className="text-center !h-auto">
            <div className="flex items-center justify-center !h-full w-full">
              <Image
                src={brand.src}
                width={brand.width}
                height={brand.height}
                alt={`brand${index + 1}`}
                className="mx-auto"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BrandSwiper;
