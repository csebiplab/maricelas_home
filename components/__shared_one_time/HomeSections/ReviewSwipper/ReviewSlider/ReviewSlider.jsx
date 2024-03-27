"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "swiper/css";
import "swiper/css/virtual";
import { SwiperNavButtons } from "./SwiperSliderButton";

import "./ReviewSlider.css";

const reviews=[
  {
reviewText:'They Are Professional and do great job cleaning the house!!! I Locked myself out of my house the other day and they were the only ones with a key. They were kind enough to drive over to unlock their door. That speaks volumes!!! They really care about their clients.',
author:'Lisa Silva',
address:'North York'
},
{
  reviewText:'They Are Professional and do great job cleaning the house!!! I Locked myself out of my house the other day and they were the only ones with a key. They were kind enough to drive over to unlock their door. That speaks volumes!!! They really care about their clients.',
  author:'Lisa Silva',
  address:'North York'
  },
  {
    reviewText:'They Are Professional and do great job cleaning the house!!! I Locked myself out of my house the other day and they were the only ones with a key. They were kind enough to drive over to unlock their door. That speaks volumes!!! They really care about their clients.',
    author:'Lisa Silva',
    address:'North York'
    },
    {
      reviewText:'They Are Professional and do great job cleaning the house!!! I Locked myself out of my house the other day and they were the only ones with a key. They were kind enough to drive over to unlock their door. That speaks volumes!!! They really care about their clients.',
      author:'Lisa Silva',
      address:'North York'
      },
      {
        reviewText:'They Are Professional and do great job cleaning the house!!! I Locked myself out of my house the other day and they were the only ones with a key. They were kind enough to drive over to unlock their door. That speaks volumes!!! They really care about their clients.',
        author:'Lisa Silva',
        address:'North York'
        },
        {
          reviewText:'They Are Professional and do great job cleaning the house!!! I Locked myself out of my house the other day and they were the only ones with a key. They were kind enough to drive over to unlock their door. That speaks volumes!!! They really care about their clients.',
          author:'Lisa Silva',
          address:'North York'
          },
]

const ReviewSlider = () => {

  return (
    <div className="container flex">
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        modules={[Navigation]}
      >
        {reviews.map(({address,author,reviewText}, i) => (
          <SwiperSlide
            key={i}
            className="w-[400px] h-[400px] p-10 bg-gray-100 text-black border border-red-400"
          >
            <div>
              <p>{reviewText}</p>
              <p>{author}</p>
              <p>{address}</p>
            </div>
          </SwiperSlide>
        ))}
        <SwiperNavButtons />
      </Swiper>
      <div>
      <h3>Text</h3>
    </div>
    </div>
  );
};

export default ReviewSlider;
