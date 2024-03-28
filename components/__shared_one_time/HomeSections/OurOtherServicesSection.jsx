"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import Brick from "../../../public/assets/services/Brick.png";
import Brown from "../../../public/assets/services/Brown.png";
import Kitchen from "../../../public/assets/services/Kitchen.png";
import Painting from "../../../public/assets/services/Painting.png";
import Plastering from "../../../public/assets/services/Plastering.png";
import Plumbing from "../../../public/assets/services/Plumbing.png";
import Power from "../../../public/assets/services/Power.png";
import Sheetrock from "../../../public/assets/services/Sheetrock.png";
import bathroom from "../../../public/assets/services/bithrom.png";
// import Pointing2 from '../../../public/assets/services/painting.png'
import Roofing from "../../../public/assets/services/roofing.png";
import Water from "../../../public/assets/services/water.png";
import Heading from "@/ui/Heading";

const OurOtherServicesSection = () => {
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

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <div className=" bg-[#C477B126]">
        <div className="container lg:py-28 py-14">
          <div className="grid grid-cols-1  lg:grid-cols-2 lg:gap-40 gap-4  p-5 items-end text-sm ">
            <div className="  ">
              <div className=" flex items-center py-5">
                <Heading text={"Other Services"}></Heading>
              </div>
              <h2 className=" lg:text-[32px] text-[20px]">
                Our Other <br /> Cleaning Services <br /> in Houston
              </h2>
            </div>

            <div className=" ">
              <h6 className="xl:text-[16px] text-[14px]">
                Commercial Cleaning
              </h6>
              <p className="  py-5 items-center lg:text-[12px] text-[10px] leading-10">
                Experience pristine cleanliness with our professional commercial
                cleaning services in Houston, TX. Our expert team employs
                industry-leading techniques and eco-friendly products to ensure
                every surface shines and every corner is spotless.
              </p>
            </div>
          </div>

          {/* taggle button */}
          <div className="flex justify-center items-center py-2 mb-12 mx-2 ">
            {/* <Switcher11></Switcher11> */}
            <label className="themeSwitcherTwo shadow-card relative inline-flex cursor-pointer select-none items-center justify-center rounded-3xl bg-white border border-[#C477B1]">
              <input
                type="checkbox"
                className="sr-only"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <span
                className={`flex items-center border  space-x-[6px] lg:px-32 px-14 rounded-3xl lg:py-4  py-2  lg:text-[20px] text-sm font-medium ${
                  !isChecked ? "text-white bg-[#C477B1] " : "text-body-color"
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
                className={`flex items-center space-x-[6px] lg:px-32 px-14 rounded-3xl lg:py-4 py-2 lg:text-[20px] text-sm font-medium ${
                  isChecked ? " text-white bg-[#C477B1] " : "text-body-color"
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
              <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-5 gap-y-8">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="col-span-1 border-2 rounded border-[#C477B1]"
                  >
                    <div className="mx-auto rounded-lg shadow-lg bg-white relative">
                      <div className=" py-7 ">
                        <p className="mt-4 py-5  mx-auto text-center lg:text-[20px]  text-xs">
                          {service.title}{" "}
                        </p>
                      </div>
                      <div className="absolute  top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <img
                          className=" lg:w-20 lg:h-20 w-14 h-14 bg-white rounded-full border-black"
                          src={service.img.src}
                          alt="Profile"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {isChecked && (
              <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-5 gap-y-8">
                {services2.map((service, index) => (
                  <div
                    key={index}
                    className="col-span-1 border-2 rounded border-black"
                  >
                    <div className="mx-auto rounded-lg shadow-lg bg-white relative">
                      <div className=" py-7 ">
                        <p className="mt-4 py-5 mx-auto text-center lg:text-[20px]  text-xs">
                          {service.title}{" "}
                        </p>
                      </div>
                      <div className="absolute  top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <img
                          className="lg:w-20 lg:h-20 w-14 h-14 bg-white rounded-full  border-black"
                          src={service.img.src}
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
