"use client";

import Heading from "@/components/__ui/Heading";
import Image from "next/image";
import batch from "../../../../public/assets/benefits/batch.png";
import jharu from "../../../../public/assets/benefits/jharu.png";
import leaf from "../../../../public/assets/benefits/leaf.png";
import like from "../../../../public/assets/benefits/like.png";
import lisen from "../../../../public/assets/benefits/lisen.png";

import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/virtual";

import "./ReasonWhyHireUs.css";

const breakpoints = {
  0: {
    slidesPerView: 1,
    spaceBetween: 30,
  },
  560: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
  1024: {
    slidesPerView: 4,
    spaceBetween: 20,
  },
  1440: {
    slidesPerView: 5,
    spaceBetween: 20,
  },
};

const reasons = [
  {
    title: "Reputation and Reviews",
    img: like,
    details:
      "Look for cleaning agencies with positive reviews and a good reputation in the community.",
  },
  {
    title: "Services Offered",
    img: jharu,
    details:
      "Ensure the company offers the specific magnificent cleaning services you need.",
  },
  {
    title: "Experience and Expertise",
    img: batch,
    details:
      "Choose a company with experienced and well-trained staff to ensure quality service.",
  },
  {
    title: "Licensing and Insurance",
    img: lisen,
    details:
      "Verify that the cleaning company in Houston is properly licensed and insured to protect your property.",
  },
  {
    title: "Eco-Friendly Practices",
    img: leaf,
    details:
      "Consider companies that use environmentally friendly cleaning products and methods.",
  },
];

const ReasonWhyHireUsSection = () => {
  return (
    <div className="bg__hire container">
      <div className="py-20 lg:py-[120px] px-[35px] md:px-0">
        <div className="flex flex-col justify-center items-center">
          <Heading text="Reason why hire us" />

          <div>
            <h2 className="text-lg lg:text-2xl 2xl:text-[32px]  text-[#1F1F1F] md:mb-14 xs:mb-10 mb-8 text-center">
              What To Consider First When You Want to Hire a Cleaning Company?
            </h2>
          </div>
        </div>
        {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 4xl:grid-cols-5 gap-3"> */}
        <Swiper
          modules={[Navigation, Autoplay]}
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
          {reasons?.map(({ title, img, details }, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-full md:w-[260px] md:h-auto">
                <div className="bg__color py-6 flex flex-col items-center justify-center">
                  <div className="flex justify-center">
                    <div className="bg-primary w-[73px] h-[73px] rounded-full flex justify-center items-center">
                      <Image
                        src={img}
                        alt="Icon"
                        width={40}
                        height={40}
                        className="w-10 h-10"
                      />
                    </div>
                  </div>
                  <h5 className="mt-3 mb-1 !text-base font-bold text-center">
                    {title}
                  </h5>
                  <p className="px-2 text-sm text-center">{details}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* </div> */}
      </div>
    </div>
  );
};

export default ReasonWhyHireUsSection;
