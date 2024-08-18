"use client";

import {
  ChevronDownIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Button,
  Collapse,
  Drawer,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Navbar,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from 'react';
import UpperNavbar from "./UpperNav";
import "./NavHeader.css";



// our services nav menu
const our_service_menu_items = {
  interior: [
    {
      title: "Cleaning Services in Richmond",
      route: "/cleaning-services-in-richmond",
    },
    {
      title: "House Cleaning Services in Katy TX",
      route: "/house-cleaning-services-in-katy-tx",
    },
  ],
  
};

function OurServiceManu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = (data = []) => {
    return data?.map(({ route, title }, key) => (
      <Link href={route} key={key}>
        <MenuItem className="rounded-md">
          <Typography color="blue-gray">{title}</Typography>
        </MenuItem>
      </Link>
    ));
  };

  return (
    <>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
        className="bg-gray-100"
      >
        <MenuHandler>
          <div className="font-medium text-lg">
            <ListItem
              className="flex justify-center items-center gap-2 rounded-full py-1  pr-4 font-bold  text-lg    text-black"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Services
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </div>
        </MenuHandler>
        <MenuList className="hidden max-w-[100vw] w-screen lg:block border-0 outline-0 bg-gray-100">
          <div className="container grid grid-cols-3 gap-y-2">
            <div>
              <h3 className="mb-1 text-primary font-semibold">Interior</h3>
              <ul>{renderItems(our_service_menu_items.interior)}</ul>
            </div>
          </div>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>
          <h4 className="text-primary mb-1 font-semibold">Interior</h4>
          <ul>{renderItems(our_service_menu_items.interior)}</ul>
          <hr className="my-1" />
        </Collapse>
      </div>
    </>
  );
}

// our services nav list end

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row items-center border-0 outline-none">
      <Typography
        as={Link}
        href="/"
        variant="small"
        color="blue-gray"
        className="font-medium rounded-full text-sm lg:text-[14px] xl:text-base 2xl:text-lg text-black"
      >
        <ListItem className="flex items-center text-lg text-dark-100 font-bold px-1 lg:px-4 xl:px-5 2xl:px-6">
          Home
        </ListItem>
      </Typography>
      <Typography
        as={Link}
        href="/about-us"
        variant="small"
        color="blue-gray"
        className="font-medium rounded-full text-sm lg:text-[14px] xl:text-base 2xl:text-lg text-black"
      >
        <ListItem className="flex items-center text-lg text-dark-100 font-bold px-1 lg:px-4 xl:px-5 2xl:px-6">
          About Us
        </ListItem>
      </Typography>

      <div className="mt-[6px]">
        <OurServiceManu />
      </div>

      <Typography
        as={Link}
        href="/blog"
        variant="small"
        color="blue-gray"
        className="font-medium rounded-full text-sm md:text-[14px] xl:text-base 2xl:text-lg text-black"
      >
        <ListItem className="flex items-center text-lg text-dark-100 font-bold px-1 lg:px-4 xl:px-5 2xl:px-6">
          Blog
        </ListItem>
      </Typography>
      

      <Typography
        as={Link}
        href="/contact-us"
        variant="small"
        color="blue-gray"
        className="font-medium rounded-full text-sm md:text-[14px] xl:text-base 2xl:text-lg text-black"
      >
        <ListItem className="flex items-center text-lg text-dark-100 font-bold px-1 lg:px-4 xl:px-5 2xl:px-6">
          Contact Us
        </ListItem>
      </Typography>
    </List>
  );
}

export function NavHeader() {
  const pathname = usePathname();
  const [openNav, setOpenNav] = React.useState(false);
  const [hideOnScroll, setHideOnScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHideOnScroll(true);
      } else {
        setHideOnScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  if (pathname.startsWith("/admin")) return null;
  return (
    <>
        <UpperNavbar/>
      <header className="sticky top-0 z-[500000]">
        <div className="custom-container main__header">
          <Navbar className="container rounded-none py-2 shadow-none max-w-full">
            <div className="flex items-center justify-between text-blue-gray-900">
              <Link href="/">
              <Image
              src="/assets/images/maricelas.png"
              width={217}
              height={103}
              alt="brand"
              className="w-full h-full lg:w-[217px] hidden md:block"
            />
              </Link>
              <div className="hidden lg:block">
                <NavList />
              </div>

              <div className="flex ">
                <div className="hidden md:flex items-center gap-x-6 md:gap-x-7 lg:gap-x-8">
            <div className="">
              <div className="flex items-center gap-2">
                <Image
                  src="/assets/images/phone-call.png"
                  width={24}
                  height={24}
                  alt="Phone"
                  className="w-[24px] h-[24px]"
                />
                <div className="">
                  <span className="text-base block">Quick Contact</span>
                  <a
                    href="tel:(832) 820-4035"
                    className="text-primary font-bold xs:text-base sm:text-xl md:text-2xl 2xl:text-3xl"
                  >
                    (832) 820-4035
                  </a>
                </div>
              </div>
            </div>
           
            <div>
              <Image
                src="/assets/images/header-logo.jpg"
                width={65}
                height={80}
                alt="brand"
                className="h-[80px] w-[65px]"
              />
            </div>
          </div>
              </div>
            </div>
          </Navbar>
        </div>

      {/* small device  */}
      {/* <div className="w-full bg-white flex justify-between items-center px-3 sm:px-6">
        <div className="block md:hidden">
          <a href="tel:(832) 820-4035" className="!no-underline">
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
          </a>
        </div>

        <div className="block md:hidden">
          <a href="tel:(832) 820-4035" className="!no-underline">
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
          </a>
        </div>

        <div className="block md:hidden">
        <IconButton
                  variant="text"
                  color="blue-gray"
                  className="lg:hidden"
                  onClick={() => setOpenNav(!openNav)}
                >
                  {openNav ? (
                    <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                  ) : (
                    <Image
            src="/assets/icons/menu.png"
            width={22}
            height={22}
            alt="Menu"
            className="w-[22px] h-[22px]"
          />
                  )}
                </IconButton>
          
        </div>
      </div>

      <div className="block md:hidden pt-1 bg-white">
        <div
          className="w-full flex justify-between items-center pb-3 px-3" >
          <Image
            src="/assets/images/maricelas.png"
            width={170}
            height={80}
            alt="brand"
            className="h-[80px] w-[170px]"
          />
          <Image
                src="/assets/images/header-logo.jpg"
                width={65}
                height={80}
                alt="brand"
                className="h-[80px] w-[65px]"
              />
        </div>
      </div> */}




<div className="w-full bg-white flex justify-between items-center px-3 sm:px-6">
        <div className="block md:hidden">
          <a href="tel:(832) 820-4035" className="!no-underline">
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
          </a>
        </div>

        <div className="block md:hidden">
          <a href="tel:(832) 820-4035" className="!no-underline">
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
          </a>
        </div>

        <div className="block md:hidden">
          <IconButton
            variant="text"
            color="blue-gray"
            className="lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Image
                src="/assets/icons/menu.png"
                width={22}
                height={22}
                alt="Menu"
                className="w-[22px] h-[22px]"
              />
            )}
          </IconButton>
        </div>
      </div>

      <div
        id="hideOnScroll"
        className={`block md:hidden pt-1 bg-white ${hideOnScroll ? 'hidden' : ''}`}
      >
        <div className="w-full flex justify-between items-center pb-3 px-3">
          <Image
            src="/assets/images/maricelas.png"
            width={170}
            height={80}
            alt="brand"
            className="h-[80px] w-[170px]"
          />
          <Image
            src="/assets/images/header-logo.jpg"
            width={65}
            height={80}
            alt="brand"
            className="h-[80px] w-[65px]"
          />
        </div>
      </div>

      {/* small device end  */}
      </header>


       
      <Drawer
        placement="right"
        open={openNav}
        onClose={() => setOpenNav(false)}
        className="p-4 overflow-y-auto pb-24 !z-[1000000000000000000]"
      >
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray">
            Maricela's
          </Typography>
          <IconButton
            variant="text"
            color="blue-gray"
            onClick={() => setOpenNav(false)}
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
        <NavList />
      </Drawer>
    </>
  );
}
