"use client";
import Image from "next/image";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import google from "../../../../../public/assets/icons/google.png"
import star from "../../../../../public/assets/icons/star.png"
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/virtual";
import { SwiperNavButtons } from "./SwiperSliderButton";

import Heading from "@/components/__ui/Heading";
import "./ReviewSlider.css";

const breakpoints = {
  0: {
    slidesPerView: 1,
  },
  768: {
    slidesPerView: 2,
  },
  1024: {
    slidesPerView: 3,
  },
};

const reviews = [
  {
    reviewText: `Maricela's cleaning service's are top notch service. They did a deep cleaning in our home and we're very impressed. I Highly Recommend there service.  Thanks Lady's`,
    author: "Erik Webb",
    address: "Local Guide",
  },
  {
    reviewText: `Maricela's team did an amazing job with the move out cleaning of our old home.  They tended to every detail of the house. I would definitely use their service again.`,
    author: "kristy Bryant",
    address: "Houston",
  },
  {
    reviewText: `In all my entire life of using housekeeping services, l've never had a more efficient service. The cleaners were complete on time so I figured it couldn't be that good it was. `,
    author: "Jessica Villegas",
    address: "Houston",
  },
  {
    reviewText: `Maricela's cleaning service's are top notch service. They did a deep cleaning in our home and we're very impressed. I Highly Recommend there service.  Thanks Lady's`,
    author: "Erik Webb",
    address: "Local Guide",
  },
  {
    reviewText: `Maricela's team did an amazing job with the move out cleaning of our old home.  They tended to every detail of the house. I would definitely use their service again.`,
    author: "kristy Bryant",
    address: "Houston",
  },
  {
    reviewText: `In all my entire life of using housekeeping services, l've never had a more efficient service. The cleaners were complete on time so I figured it couldn't be that good it was. `,
    author: "Jessica Villegas",
    address: "Houston",
  },
  {
    reviewText: `Maricela's cleaning service's are top notch service. They did a deep cleaning in our home and we're very impressed. I Highly Recommend there service.  Thanks Lady's`,
    author: "Erik Webb",
    address: "Local Guide",
  },
  {
    reviewText: `Maricela's team did an amazing job with the move out cleaning of our old home.  They tended to every detail of the house. I would definitely use their service again.`,
    author: "kristy Bryant",
    address: "Houston",
  },
  {
    reviewText: `In all my entire life of using housekeeping services, l've never had a more efficient service. The cleaners were complete on time so I figured it couldn't be that good it was. `,
    author: "Jessica Villegas",
    address: "Houston",
  },
];

const ReviewSlider = () => {
  return (
    <div className="md:flex px-[30px] md:px-0">
      {/* ============ For mobile view ========== */}
      <div className="md:text-start text-center lg:py-10 md:py-5 px-3 w-full md:w-5/12 mt-[7px] md:mt-0">
        <div className="flex justify-center md:justify-start">
          <Heading text={"Review"} />
        </div>
        <h2 className="md:leading-8 text-[28px] md:text-[32px] font-bold md:py-3 py-2 text-[#1F1F1F] leading-normal text-center md:text-left">
          Here's what to expect when you hire us as your Cleaning Services in
          Houston
        </h2>
      </div>

      <Swiper
        spaceBetween={21}
        // slidesPerView={3}
        modules={[Autoplay, Navigation]}
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
      >
        {reviews.map(({ address, author, reviewText }, i) => (
          <SwiperSlide
            key={i}
            className={`text-center !h-auto !md:h-full swiper-slide__reveiw`}
          >
            <div className="p-[14px] md:mx-0 mx-auto ">
              <Image
                src={google}
                width={89.92}
                height={51}
                alt="google"
                className="mb-2"
              />
              <Image
                src={star}
                width={97}
                height={13.9}
                alt="google"
                className=""
              />
              <div className="text-start">
                <p className="text-base mt-4  text-black leading-[22px] md:leading-6">
                  {reviewText}
                </p>
                <p className="font-semibold text-base mt-2">{author}</p>
                <p className="text-[#4A4A4A] text-sm">{address}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <SwiperNavButtons />
      </Swiper>

      {/* =========== For desktop view ========= */}
      {/* <div className="md:text-start text-center px-3 w-full md:w-4/12 hidden md:block">
        <Heading text={"Review"} />
        <h2 className="lg:leading-8 text-base lg:text-[32px] font-bold md:py-3 py-2 text-[#1F1F1F]">
        Here's what to expect when you hire us as your Cleaning Services in
          Houston
        </h2>
      </div> */}
    </div>
  );
};

export default ReviewSlider;
