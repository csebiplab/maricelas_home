"use client";
import React, { useState, useEffect } from "react";
import "./BottomHeader.css";
import Image from "next/image";
import { UtilsModule1, UtilsModule2 } from "@/utils/nav-menus";
import Link from "next/link";
import { Button } from "@material-tailwind/react";

const BottomHeader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="sticky top-0 z-50">
      {/* large device  */}
    <div className="hidden md:block">
      <nav className="pt-3 main__header">
      <div className="flex items-center justify-between">
        {/* left side  */}
        <div>
          <div className="full__section_l_p flex items-center gap-x-[15px]">
            <Image
              src="/assets/icons/nav1.png"
              width={16}
              height={17}
              alt="nav1"
              className="w-[16px] h-[17px]"
            />
            <p className="text-xs 3xl:text-sm  5xl:text-[16px] font-bold text-primary">
              Best Cleaning Company in Huston
            </p>
          </div>

          <div className="flex">
          <div className="w-full h-[6px] bg-primary my-3"/>
          <Image
              src="/assets/icons/nav3.png"
              width={37}
              height={37}
              alt="nav3"
              className="w-[37px] h-[37px]"
            />
          </div>

          <div>
            <ul className="full__section_l_p flex items-center gap-x-6 xl:gap-x-8 2xl:gap-x-[75px]">
              {UtilsModule1.navMenus1.map(({ mainMenu, url }, index) => (
                <li key={index}>
                  <Link href={url} className={`text-sm 5xl:text-[17px] text-black font-bold`}>
                    {mainMenu}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* middle side  */}
        <div>
          <Image
            src="/assets/images/brand.png"
            width={217}
            height={105}
            alt="brand"
            className="w-[110px] lg:w-[120px] xl:w-[140px] 2xl:w-[160px] 3xl:w-[180px] 4xl:w-[200px] 5xl:w-[217px] h-auto 5xl:h-[105px]"
          />
        </div>

        {/* right side  */}
        <div>
          <div>
            <div className="full__section_r_p flex items-center justify-end gap-2">
              <Image
                src="/assets/images/phone-call.png"
                width={24}
                height={24}
                alt="Phone"
                className="w-[24px] h-[24px]"
              />
              <div className="">
                <a
                  href="tel:8328204035"
                  className="text-primary font-bold xs:text-base sm:text-xl md:text-2xl 2xl:text-3xl"
                >
                  (832) 8204035
                </a>
              </div>
            </div>

            <div className="flex">
          <Image
              src="/assets/icons/nav2.png"
              width={37}
              height={37}
              alt="nav2"
              className="w-[37px] h-[37px]"
            />
            <div className="w-full h-[6px] bg-primary my-3"/>
          </div>

            <ul className="full__section_r_p flex items-center gap-x-6 xl:gap-x-8 2xl:gap-x-[75px]">
              {UtilsModule2.navMenus2.map(({ mainMenu, url }, index) => (
                <li key={index}>
                  <Link href={url} className={`text-sm 5xl:text-[17px] font-bold text-black`}>
                    {mainMenu}
                  </Link>
                </li>
              ))}
              <Button className="text-black nav_btn flex items-center gap-x-1">
                <span className="text-black text-[10px] xl:text-xs 3xl:text-sm 5xl:text-base font-bold pr-2">
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
            </ul>
          </div>
        </div>

      </div>
    </nav>
    </div>

       {/* small device  */}
       <div className="w-full bg-white flex justify-between items-center px-3 sm:px-6 pt-3 pb-4">
        <div className="block md:hidden">
          <Button className="text-black nav__btn flex items-center gap-x-2">
            <span className="text-black text-[10px] sm:text-base font-bold">
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
        </div>

        <div className="block md:hidden">
          <Button className="text-white phone__icon flex items-center gap-x-2">
            <Image
              src="/assets/icons/phone__icon.png"
              alt="phone icon"
              width={20}
              height={20}
            />
            <span className="text-white text-[10px] sm:text-base font-bold">
              Click to Call
            </span>
          </Button>
        </div>

        <div className="block md:hidden">
          <Image
            src="/assets/icons/menu.png"
            width={22}
            height={22}
            alt="Menu"
            className="w-[22px] h-[22px]"
          />
        </div>
      </div>

      <div className="block md:hidden">
        <div
          className={`w-full flex justify-center items-center pb-3 bg-white ${
            isVisible ? "" : "hidden"
          }`}
        >
          <Image
            src="/assets/images/brand.png"
            width={135}
            height={67}
            alt="brand"
            className="w-[135px] h-[67px]"
          />
        </div>
      </div>

      {/* small device end  */}
    </div>
    
  );
};

export default BottomHeader;
