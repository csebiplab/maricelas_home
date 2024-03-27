"use client";

import React from "react";
import { useSwiper } from "swiper/react";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div>
      {/* <button onClick={() => swiper.slidePrev()}>Prev</button>
      <button onClick={() => swiper.slideNext()}>Next</button> */}
      <>
        <div className="flex lg:gap-8 md:gap-3 items-center justify-center lg:py-6 md:py-3">
          {/* ========= first line ======== */}
          <div className="lg:w-[330px] md:w-[220px] h-0.5 bg-black hidden md:block"></div>
          <div className="flex lg:gap-5 md:gap-3">
            <button
              onClick={() => swiper.slidePrev()}
              className="p-3 rounded-full border-2 hover:text-white hover:bg-black"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={() => swiper.slideNext()}
              className="text-white hover:text-black hover:bg-white border-2 p-3 bg-black rounded-full"
            >
              <FaChevronRight />
            </button>
          </div>
          {/* =============== second line ============= */}
          <div className="lg:w-[330px] md:w-[220px] h-0.5 bg-black hidden md:block"></div>
        </div>
      </>
    </div>
  );
};
