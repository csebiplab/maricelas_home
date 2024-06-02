"use client";
import { UtilsModule } from "@/utils/nav-menus";
import { contacts, site_info } from "@/utils/siteInfo";
import {
  Button,
  Drawer,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaPhone } from "react-icons/fa";
import { FcCalculator } from "react-icons/fc";
import "./Header.css";
import UpperNavbar from "./UpperNav";

const menu = [
  {
    name: "Commercial Cleaning",
    url: "/commercial-cleaning",
  },
  {
    name: "Residential Cleaning",
    url: "/residential-cleaning",
  },
  {
    name: "Deep Clean",
    url: "/deep-clean",
  },
  {
    name: "How It Works",
    url: "/how-it-works",
  },
  {
    name: "Gallery",
    url: "/gallery",
  },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

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
    <header className="sticky top-0 z-50">
      <>
        <UpperNavbar />
      </>

      <nav className="container py-[5px] main__header">
        <div className="flex items-center justify-between">
          <div className="hidden md:block w-[135px] h-[67px]">
            <Image
              src="/assets/images/brand.png"
              width={135}
              height={67}
              alt="brand"
              className="w-full h-full"
            />
          </div>
          <div className="hidden lg:block">
            <ul className="flex items-center gap-x-8 xl:gap-x-10 2xl:gap-x-[75px]">
              {UtilsModule.navMenus.map(({ mainMenu, url }, index) => (
                <li key={index}>
                  <Link href={url} className={`text-[17px] text-dark`}>
                    {mainMenu}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-x-6 md:gap-x-7 lg:gap-x-8">
            <div className="hidden md:block">
              <div className="flex items-center gap-2">
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
            </div>
          </div>
        </div>
      </nav>

      {/* small device  */}
      <div className="w-full bg-white flex justify-between items-center px-3 sm:px-6 pb-4">
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

      <Drawer open={open} onClose={closeDrawer} className="p-4">
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray">
            {site_info.name}
          </Typography>
          <IconButton
            variant="text"
            color="blue-gray"
            onClick={closeDrawer}
            aria-label="icon-button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <nav className="gap-2 flex flex-col">
          {menu.map((item, key) => (
            <Link
              href={item.url}
              className="flex items-center gap-2 py-2 px-3 group"
              onClick={closeDrawer}
              key={key}
            >
              <span className="text-xl font-semibold text-primary">
                {item.name}
              </span>
            </Link>
          ))}
        </nav>
        <nav className="gap-2 flex flex-col">
          <a
            href="tel:+1 (647) 539-6755"
            className="flex items-center gap-2 py-2 px-3 group"
            onClick={closeDrawer}
          >
            <span className="h-9 w-9 rounded-full justify-center items-center bg-dark-50/10 flex  group-hover:bg-dark">
              <FaPhone className="inline-block h-4 w-4 fill-dark group-hover:fill-white" />
            </span>
            <span className="text-xl font-semibold text-primary">
              {contacts.phone}
            </span>
          </a>
          <Button className="btn !text-sm rounded-none flex items-center gap-x-2">
            <FcCalculator className="w-4 h-4" />
            <span className="text-white capitalize">Get an Estimate</span>
          </Button>
        </nav>
      </Drawer>
    </header>
  );
};

export default Header;
