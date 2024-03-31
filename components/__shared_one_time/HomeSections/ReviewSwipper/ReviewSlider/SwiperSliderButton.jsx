"use client";

import { useSwiper } from "swiper/react";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div>
      {/* <button onClick={() => swiper.slidePrev()}>Prev</button>
      <button onClick={() => swiper.slideNext()}>Next</button> */}
      <>
        <div className="flex lg:gap-8 gap-3 items-center justify-center lg:py-6 py-3">
          {/* ========= first line ======== */}
          <div className="lg:w-[330px] w-[220px] h-0.5 bg-[#880769]">

          </div>
          <div className="flex lg:gap-5 gap-3">
            <button
              onClick={() => swiper.slidePrev()}
              className="p-3 rounded-full border-2 border-[#880769] hover:text-white hover:bg-[#880769]"
            >
              <FaChevronLeft className="fill-[#880769] hover:fill-white"/>
            </button>
            <button
              onClick={() => swiper.slideNext()}
              className="hover:text-white bg-active hover:bg-[#880769] border-2 p-3  rounded-full  border-[#880769]"
            >
              <FaChevronRight className='fill-[#880769] hover:fill-white'/>
            </button>
          </div>
          {/* =============== second line ============= */}
          <div className="lg:w-[330px] w-[220px] h-0.5 bg-[#880769]"></div>
        </div>
      </>
    </div>
  );
};
