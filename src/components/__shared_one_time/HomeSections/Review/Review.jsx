"use client";

import "./Review.css";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/virtual";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import HeadingIcon from "@/components/__ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import { SwiperNavButtons } from "./SwiperSliderButton";

const breakpoints = {
  0: {
    slidesPerView: 1,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  1024: {
    slidesPerView: 2,
    spaceBetween: 30,
  },
  1536: {
    slidesPerView: 3,
    spaceBetween: 30,
  },
};

const reviews = [
  {
    google: "/assets/icons/google.png",
    star: "/assets/icons/star.png",
    text: "Maricela's cleaning service's are top notch service. They did a deep cleaning in our home and we're very impressed. I Highly Recommend there service.  Thanks Lady's",
    author: "Erik Webb",
    location: "Local Guide",
  },
  {
    google: "/assets/icons/google.png",
    star: "/assets/icons/star.png",
    text: "Maricela's team did an amazing job with the move out cleaning of our old home.  They tended to every detail of the house. I would definitely use their service again.",
    author: "kristy Bryant",
    location: "Houston",
  },
  {
    google: "/assets/icons/google.png",
    star: "/assets/icons/star.png",
    text: "In all my entire life of using housekeeping services, l've never had a more efficient service. The cleaners were complete on time so I figured it couldn't be that good it was.",
    author: "Jessica Villegas",
    location: "Houston",
  },
  {
    google: "/assets/icons/google.png",
    star: "/assets/icons/star.png",
    text: "Maricela's cleaning service's are top notch service. They did a deep cleaning in our home and we're very impressed. I Highly Recommend there service.  Thanks Lady's",
    author: "Erik Webb",
    location: "Local Guide",
  },
  {
    google: "/assets/icons/google.png",
    star: "/assets/icons/star.png",
    text: "Maricela's team did an amazing job with the move out cleaning of our old home.  They tended to every detail of the house. I would definitely use their service again.",
    author: "kristy Bryant",
    location: "Houston",
  },
  {
    google: "/assets/icons/google.png",
    star: "/assets/icons/star.png",
    text: "In all my entire life of using housekeeping services, l've never had a more efficient service. The cleaners were complete on time so I figured it couldn't be that good it was.",
    author: "Jessica Villegas",
    location: "Houston",
  },
];

const Review = () => {
  return (
    <div className="bg-dark-200">
      <div className="container padding__top">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-[16px] 4xl:gap-[18px] 5xl:gap-[20px]">
          <div className="block md:hidden md:col-span-1">
            <div className="flex justify-start items-center">
              <HeadingIcon text={headingIconText.review__headingIconText} />
            </div>
            <h2 className="text-[25px] md:text-[27px] lg:text-[29px] xl:text-[32px] 2xl:text-[34px] 3xl:text-[36px] 4xl:text-[38px] 5xl:tex-[40px] font-bold text-black text-center leading-normal pt-[5px]">
            Here's what to expect when you hire us as your Cleaning Services in Houston
            </h2>
          </div>

          {/* ==================== swiper slider ================ */}
          <div className="md:col-span-3">
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
            {reviews.map((slideInfo, index) => (
              <SwiperSlide key={index} className={`!h-auto !md:h-full`}>
              <div className="w-full !h-full card-bg pt-[5px] pb-[13px] px-[14px]">
                    <Image
                      src={slideInfo.google}
                      alt="google logo"
                      width={89}
                      height={50}
                    />
                    <Image
                      className="py-[5px]"
                      src={slideInfo.star}
                      alt="star logo"
                      width={97}
                      height={14}
                    />
                    <p className="text-lg font-normal leading-[25px] 5xl:leading-[30px] text-balck">
                      {slideInfo?.text}
                    </p>
                    <p className="text-xs font-bold leading-normal text-black pt-[12px]">
                      {slideInfo?.author}
                    </p>
                    <p className="text-[10px] font-normal text-dark-400 leading-normal">
                      {slideInfo?.location}
                    </p>
                  </div>
              </SwiperSlide>
            ))}
            <SwiperNavButtons />
          </Swiper>
          </div>
          <div className="hidden md:block md:col-span-1">
            <div className="flex justify-start items-center">
              <HeadingIcon text={headingIconText.review__headingIconText} />
            </div>
            <h2 className="text-[25px] md:text-[27px] lg:text-[29px] xl:text-[32px] 2xl:text-[34px] 3xl:text-[36px] 4xl:text-[38px] 5xl:tex-[40px] font-bold text-black text-start leading-normal pt-[5px]">
            Here's what to expect when you hire us as your Cleaning Services in Houston
            </h2>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Review;
