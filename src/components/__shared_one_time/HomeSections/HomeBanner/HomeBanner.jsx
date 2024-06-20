"use client";

import "./HomeBanner.css";
import { Button } from "@material-tailwind/react";

const HomeBanner = () => {
  return (
    <div>
      {/* large device  */}

      <div className="hidden md:block">
        <div className="full__section_l_p banner__section">
          <div className="banner__content grid grid-cols-1 md:grid-cols-8 items-center gap-10 py-[20px] md:py-[50px] lg:py-[80px] xl:py-[110px] 2xl:pt-[130px] 3xl:pt-[150px] 4xl:pt-[165px] 5xl:py-[180px]">
            <div className="md:col-span-4 flex items-center">
              <div className="">
                <h1 className="!text-4xl !lg:text-[40px] !xl:text-[44px] !2xl:text-[48px] !3xl:text-[52px] !4xl:text-[56px] !5xl:text-[55px] text-black font-medium text-center md:text-left leading-tight">
                  Residential &
                  <br />
                  Commercial Cleaning Services
                  <br />
                  {/* Commercial & <br /> Residential Cleaning <br />{" "} */}
                  <span className="text-primary">in Houston</span>
                </h1>
                <p className="text-lg lg:text-[20px] font-normal text-center md:text-left leading-[30px] lg:leading-[40px] pt-2">
                  {/* Best <span className="!text-primary">Commercial</span> &{" "}
                  <span className="!text-primary">Residential</span> cleaning
                  services in Houston, we pride ourselves on delivering
                  meticulous cleanliness and unparalleled customer satisfaction. */}
                  We provide professional{" "}
                  <span className="!text-primary font-bold">Residential </span>
                  and{" "}
                  <span className="!text-primary font-bold">
                    Commercial
                  </span>{" "}
                  cleaning services in Houston, delivering pristine spaces for
                  clients, and ensuring spotless results every time.
                </p>
                <div className="flex justify-center md:justify-start py-6 z-50">
                  <a
                    href="tel:8328204035"
                    className="!no-underline flex justify-center items-center w-[200px] lg:w-[274px] homeBtn px-6 lg:px-10 py-4 font-semibold "
                  >
                    <span className="mr-2 text-black text-lg font-bold">
                      Get an Estimate{" "}
                    </span>
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
                  </a>
                </div>
              </div>
            </div>

            <div />
          </div>
        </div>
      </div>

      {/* small device  */}
      <div className="block md:hidden">
        <div className="small__banner__section w-auto h-[820px]">
          <div className="small__banner__section__content">
            <h2 className="pt-[20px] pl-[30px] !text-[30px] text-black font-bold">
              Residential & <br />
              Commercial Cleaning <br />{" "}
              <span className="text-primary">Services in Houston</span>
            </h2>
            <p className="px-[30px] pt-[8px] text-lg text-black font-normal">
              Best <span className="!text-primary">Residential</span> &{" "}
              <span className="!text-primary">Commercial</span> cleaning
              services in Houston, we pride ourselves on delivering meticulous
              cleanliness and unparalleled customer satisfaction.
            </p>
            <div className="pl-[30px] pt-[20px]">
              <a href="tel:8328204035" className="!no-underline">
                <Button className="text-black banner__btn flex items-center gap-x-2">
                  <span className="text-black text-xs font-bold">
                    Get an Estimate
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="14"
                    viewBox="0 0 10 14"
                    fill="none"
                  >
                    <path
                      d="M2.07589 0.0371094L0.298388 1.65039L5.695 6.54844L0.298388 11.4465L2.07589 13.0598L9.25 6.54844L2.07589 0.0371094Z"
                      fill="black"
                    />
                  </svg>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
