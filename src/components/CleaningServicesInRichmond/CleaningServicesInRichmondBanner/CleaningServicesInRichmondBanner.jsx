"use client";
import { Button } from "@material-tailwind/react";
import Image from "next/image";
import "./CleaningServicesInRichmondBanner.css";

const CleaningServicesInRichmondBanner = () => {
  return (
    <>
      <div className="hero-section full__section_l_p">
        <div className="md:flex items-center relative">
          <div className="w-full md:w-[50%]">
            <div className="py-14 md:py-0 px-4 md:pl-0">
              <h1 className="leading-normal text-[36px] md:text-[40px] lg:text-[43px] xl:text-[44px] 2xl:text-[46px] 3xl:text-[49px] 4xl:text-[52px] 5xl:text-[55px] font-bold text-left text-black">
                Cleaning Services <br />{" "}
                <span className="text-primary">in Richmond</span>
              </h1>
              <p className="text-lg font-normal mb-5 leading-6 mt-4 text-black">
                Maricela's Cleaning Magnificence offers homes and businesses
                top-notch, reliable, and professional cleaning services in
                Richmond.
              </p>
              <div className="mb-4 md:mb-0">
                <a
                  href={`tel:(832) 820-4035`}
                  className="text-sm font-bold text-white"
                >
                  <Button className="hero_btn text-black text-xs lg:text-base font-bold capitalize flex items-center gap-x-2">
                    <span className="text-black">Get an Estimate </span>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="9"
                        height="13"
                        viewBox="0 0 9 13"
                        fill="none"
                      >
                        <path
                          d="M1.78711 0L0 1.61048L5.42578 6.5L0 11.3895L1.78711 13L9 6.5L1.78711 0Z"
                          fill="black"
                        />
                      </svg>
                    </span>
                  </Button>
                </a>
              </div>
            </div>
          </div>
          <div className="hero-right relative hidden md:block">
            <Image
              width={928}
              height={782}
              src="/assets/cleaningServices/hero-section.jpg"
              alt="hero small image"
              className="hero-main-image mb-0"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CleaningServicesInRichmondBanner;
