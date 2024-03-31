"use client";
import Image from "next/image";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import google from "@/public/assets/icons/google.png";
import star from "@/public/assets/icons/star.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/virtual";
import { SwiperNavButtons } from "./SwiperSliderButton";

import Heading from "@/ui/Heading";
import "./ReviewSlider.css";

const breakpoints = {
  0: {
    slidesPerView: 1,
  },
  768: {
    slidesPerView: 3,
  },
};

const reviews = [
  {
    reviewText:
      "They Are Professional and do great job cleaning the house!!! I Locked myself out of my house the other day and they were the only ones with a key. They were kind enough to drive over to unlock their door. That speaks volumes!!! They really care about their clients.",
    author: "Lisa Silva",
    address: "North York",
  },
  {
    reviewText:
      "They Are Professional and do great job cleaning the house!!! I Locked myself out of my house the other day and they were the only ones with a key. They were kind enough to drive over to unlock their door. That speaks volumes!!! They really care about their clients.",
    author: "Lisa Silva",
    address: "North York",
  },
  {
    reviewText:
      "They Are Professional and do great job cleaning the house!!! I Locked myself out of my house the other day and they were the only ones with a key. They were kind enough to drive over to unlock their door. That speaks volumes!!! They really care about their clients.",
    author: "Lisa Silva",
    address: "North York",
  },
  {
    reviewText:
      "They Are Professional and do great job cleaning the house!!! I Locked myself out of my house the other day and they were the only ones with a key. They were kind enough to drive over to unlock their door. That speaks volumes!!! They really care about their clients.",
    author: "Lisa Silva",
    address: "North York",
  },
  {
    reviewText:
      "They Are Professional and do great job cleaning the house!!! I Locked myself out of my house the other day and they were the only ones with a key. They were kind enough to drive over to unlock their door. That speaks volumes!!! They really care about their clients.",
    author: "Lisa Silva",
    address: "North York",
  },
  {
    reviewText:
      "They Are Professional and do great job cleaning the house!!! I Locked myself out of my house the other day and they were the only ones with a key. They were kind enough to drive over to unlock their door. That speaks volumes!!! They really care about their clients.",
    author: "Lisa Silva",
    address: "North York",
  },
];

const ReviewSlider = () => {
  return (
    <div className="md:flex">

      {/* ============ For mobile view ========== */}
      <div className="md:text-start text-center lg:py-10 md:py-5 px-3 w-full md:w-4/12 md:hidden">
        <Heading text={"Review"} />
        <h2 className="lg:leading-8 text-base lg:text-[32px] font-semibold md:py-3 py-2 text-[#1F1F1F]">
          Here’s what to expect when you hire us as your Cleaning Services in
          Houston
        </h2>
      </div>
      
      <Swiper
        // spaceBetween={21}
        // slidesPerView={3}
        modules={[Navigation]}
        breakpoints={breakpoints}
      >
        {reviews.map(({ address, author, reviewText }, i) => (
          <SwiperSlide
            key={i}
            className={`text-center py-5 lg:py-10 pr-[21px]`}
          >
            <div className="w-full card-sd py-1 md:py-[5px] bg-[#fff] ">
              <Image
                src={google}
                width={89.92}
                height={51}
                alt="google"
                className="my-1 ml-2"
              />
              <Image
                src={star}
                width={97}
                height={13.9}
                alt="google"
                className="ml-3"
              />
              <div className="text-start md:p-2 lg:p-3">
                <p className="lg:text-[12px] text-xs text-black lg:leading-6">
                  {reviewText}
                </p>
                <h6 className="font-semibold lg:text-sm text-xs py-1">
                  {author}
                </h6>
                <p className="text-[#4A4A4A] lg:text-sm text-xs">{address}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <SwiperNavButtons />
      </Swiper>

          {/* =========== For desktop view ========= */}
      <div className="md:text-start text-center lg:py-10 md:py-5 px-3 w-full md:w-4/12 hidden md:block">
        <Heading text={"Review"} />
        <h2 className="lg:leading-8 text-base lg:text-[32px] font-semibold md:py-3 py-2 text-[#1F1F1F]">
          Here’s what to expect when you hire us as your Cleaning Services in
          Houston
        </h2>
      </div>
    </div>
  );
};

export default ReviewSlider;
