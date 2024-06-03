"use client";

import Heading from "@/components/__ui/Heading";
import { useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import Brick from "../../../public/assets/services/Brick.png";
import Brown from "../../../public/assets/services/Brown.png";
import Kitchen from "../../../public/assets/services/Kitchen.png";
import Painting from "../../../public/assets/services/Painting.png";
import Plastering from "../../../public/assets/services/Plastering.png";
import Plumbing from "../../../public/assets/services/Plumbing.png";
import Power from "../../../public/assets/services/Power.png";
import Sheetrock from "../../../public/assets/services/Sheetrock.png";
import bathroom from "../../../public/assets/services/bithrom.png";
import Roofing from "../../../public/assets/services/roofing.png";
import Water from "../../../public/assets/services/water.png";
import Image from "next/image";

import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/virtual";

const breakpoints = {
  0: {
    slidesPerView: 1,
    spaceBetween: 30,
  },
  640: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  767: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
  1024: {
    slidesPerView: 4,
    spaceBetween: 20,
  },
  1280: {
    slidesPerView: 5,
    spaceBetween: 20,
  },
  1440: {
    slidesPerView: 6,
    spaceBetween: 20,
  },
};

const services = [
  {
    title: "Professional cleaning & janitorial services",
    img: bathroom,
  },
  {
    title: "Construction and remodeling Clean-ups",
    img: Sheetrock,
  },
  {
    title: "Offices cleaning",
    img: Plastering,
  },
  {
    title: "Restaurants cleaning",
    img: Plumbing,
  },
  {
    title: "Showrooms cleaning",
    img: Kitchen,
  },
  {
    title: " Medical offices cleaning",
    img: Painting,
  },
];
const services2 = [
  {
    title: "Roofing",
    img: Roofing,
  },
  {
    title: "Pointing",
    img: Painting,
  },
  {
    title: "Water Proofing",
    img: Water,
  },
  {
    title: "Brown Stone Repair",
    img: Brown,
  },
  {
    title: "Brick Works",
    img: Brick,
  },
  {
    title: " Power Wash",
    img: Power,
  },
];

const OurOtherServicesSection = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="!overflow-hidden">
      <div className="">
        <div className="container lg:py-20 py-14">
          <div className="grid grid-cols-1  lg:grid-cols-2 lg:gap-40 gap-4  p-5 items-end text-sm ">
            <div className="  ">
              <div className="flex justify-center lg:justify-normal items-center">
                <Heading text={"Other Services"} />
              </div>
              <h2 className="hidden lg:block text-[28px] md:text-[32px] font-bold text-[#1F1F1F] mt-[15px]">
                Our Other <br className=" hidden lg:block" /> Cleaning Services{" "}
                <br className=" hidden lg:block" /> in Houston
              </h2>
              <h2 className="block lg:hidden text-[28px] md:text-[32px] font-bold text-center">
                Our Other Cleaning Services in Houston
              </h2>
            </div>

            <div className="hidden lg:block">
              <h6 className="text-base font-bold">
                Commercial Cleaning
              </h6>
              <p className=" mt-[15px] items-center text-sm font-normal leading-[20px]">
                Experience pristine cleanliness with our professional commercial
                cleaning services in Houston, TX. Our expert team employs
                industry-leading techniques and eco-friendly products to ensure
                every surface shines and every corner is spotless.
              </p>
              <div className=" flex md:block ">
                <button
                  type="submit"
                  className="  rounded-md bg-[#FBCC21E4] px-8 py-2  font-semibold   items-center flex mt-4 "
                >
                  Book Now <MdArrowForwardIos className=" ml-2  " />
                </button>
              </div>
            </div>
          </div>

          {/* taggle button */}
          <div className="flex justify-center items-center py-5 mb-12 mx-2 ">
            <label className="themeSwitcherTwo shadow-card relative inline-flex cursor-pointer select-none items-center justify-center rounded-3xl bg-white border border-primary-50">
              <input
                type="checkbox"
                className="sr-only"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <span
                className={`flex items-center border pr-5  lg:px-32 rounded-3xl lg:py-4 py-2 text-base font-bold ${
                  !isChecked ? "text-white bg-primary-50 " : "text-body-color"
                }`}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  className="mr-[6px] fill-current"
                >
                  <g clipPath="url(#clip0_3122_652)"></g>
                  <defs>
                    <clipPath id="clip0_3122_652">
                      <rect width="16" height="16" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
                Commercial Cleaning
              </span>
              <span
                className={`flex items-center pr-5 lg:px-32 rounded-3xl lg:py-4 py-2 text-base font-bold ${
                  isChecked ? "text-white bg-[#C477B1] " : "text-body-color"
                }`}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  className="mr-[6px] fill-current"
                ></svg>
                Residential Cleaning
              </span>
            </label>
          </div>

          <div className="lg:my-10 my-5">
            {!isChecked && (
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
                className="!px-5 md:px-0 !overflow-visible"
              >
                {services.map((service, index) => (
                  <SwiperSlide
                    key={index}
                    className="bg-white border-4 rounded border-primary-50 !h-auto !md:h-full px-2 py-6 md:py-0"
                  >
                    <div className="mx-auto relative px-2">
                      <div className="">
                        <p className="mt-4 py-5 mx-auto text-center font-bold text-base">
                          {service.title}{" "}
                        </p>
                      </div>
                      <div className="absolute -top-10 md:-top-6 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <Image
                          src={service.img}
                          height={70}
                          width={70}
                          className="w-14 h-14 lg:w-16 lg:h-16 rounded-full border-primary-50"
                          alt="Profile"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}

            {isChecked && (
              <div className="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-1   gap-5 gap-y-8">
                {services2.map((service, index) => (
                  <div
                    key={index}
                    className="col-span-1 border-4 rounded border-primary-50 bg-white"
                  >
                    <div className="mx-auto rounded-lg relative">
                      <div className=" py-7 ">
                        <p className="mt-4 py-5 mx-auto text-center font-bold text-base">
                          {service.title}{" "}
                        </p>
                      </div>
                      <div className="absolute  top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <Image
                          src={service.img}
                          height={80}
                          width={80}
                          className="lg:w-20 lg:h-20 w-14 h-14 bg-white rounded-full  border-primary-50"
                          alt="Profile"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurOtherServicesSection;
