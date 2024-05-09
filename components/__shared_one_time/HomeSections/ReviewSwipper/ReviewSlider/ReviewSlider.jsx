"use client";
import Image from "next/image";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import google from "@/public/assets/icons/google.png";
import star from "@/public/assets/icons/star.png";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/virtual";
import { Autoplay } from "swiper/modules";
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
    reviewText: `Maricela's cleaning service's are top notch service. 
    They did a deep cleaning in our home and we're very impressed. 
    I Highly Recommend there service.  Thanks Lady's`,
    author: "Erik Webb",
    address: "Local Guide",
  },
  {
    reviewText: `Maricela's team did an amazing job with the move out cleaning of our old home. 
      They tended to every detail of the house. I would definitely use their service again.`,
    author: "kristy Bryant",
    address: "Houston",
  },
  {
    reviewText: `In all my entire life of using housekeeping services, 
      l've never had a more efficient service. The cleaners were 
      complete on time so I figured it couldn't be that good it was. 
      They did an excellent job and will be using this service on a 
      regular basis the lady did a great job I Highly recommend!`,
    author: "Jessica Villegas",
    address: "Houston",
  },
  {
    reviewText: `Maricela’s cleaning really is magnificent. 
      She takes care of our office building Monday-Friday 
      and the place always looks immaculate. Highly recommend!`,
    author: "Kendyl Georgie",
    address: "Local Guide",
  },
  {
    reviewText: `I saw them on Groupon and decided to call and book directly.
       My house has never been this clean. I am so happy with the service.`,
    author: "Felicia Esters",
    address: "Houston",
  },
  {
    reviewText: `I have a 4 bedrooms house and just had the pleasure of 
      hiring Maricela for cleaning services and oh boy am I happy with the service. 
      My house looks new. They not only clean the place but gives a personal touch to
       manage the chaos they find. Everything is back to its place where it belongs.`,
    author: "Ashar Khan",
    address: "Houston",
  },
  {
    reviewText: `The first cleaning when we started with the service, 
      we had a couple issues, but that was worked out on this visit. A payment agreement had been reached on the 1st visit, but was changed to a higher payment on the second visit, to which, I did not agree and pricing was reevaluated.`,
    author: "Sylvia Hughes",
    address: "Local Guide",
  },
  {
    reviewText: `We used Maricela’s team for the first time today and our house looks and smells like new! They were on time, brought their own equipment/supplies, and were very friendly. We will definitely use this service again!`,
    author: "Shayla Alkire",
    address: "Houston",
  },
  {
    reviewText: `I have a 4 bedrooms house and just had the pleasure of 
      hiring Maricela for cleaning services and oh boy am I happy with the service. 
      My house looks new. They not only clean the place but gives a personal touch to
       manage the chaos they find. Everything is back to its place where it belongs.`,
    author: "Mercy Lane",
    address: "Houston",
  },
  {
    reviewText: `Maricela's Cleaning Magnificence cleans our office on a monthly basis and does an excellent job! This cleaning service comes highly recommended by me. Maricela and her staff are both courteous and professional.`,
    author: "checks isj",
    address: "Local Guide",
  },
];

const ReviewSlider = () => {
  return (
    <div className="md:flex px-[30px] md:px-0 py-[44px]">
      {/* ============ For mobile view ========== */}
      <div className="md:text-start text-center lg:py-10 md:py-5 px-3 w-full md:w-5/12 md:hidden mt-[7px] md:mt-0">
        <div className="flex justify-center md:justify-start">
          <Heading text={"Review"} />
        </div>
        <h2 className="md:leading-8 text-lg md:text-[32px] font-semibold md:py-3 py-2 text-[#1F1F1F] leading-normal text-center">
          Here’s what to expect when you hire us as your Cleaning Services in
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
            className={`text-center py-4 lg:py-10 !h-auto !md:h-full `}
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
                <h6 className="font-semibold text-base mt-2">{author}</h6>
                <p className="text-[#4A4A4A] text-sm">{address}</p>
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
