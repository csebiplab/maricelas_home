"use client";
import { contacts, site_info } from "@/utils/siteInfo";
import {
  Button,
  Drawer,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import Link from "next/link";
import { useState } from "react";
import { FaCanadianMapleLeaf, FaPhone } from "react-icons/fa";
import MaricelasHomeLogo from "@/assets/MaricelasMagnificence_logo1.png";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";

const menu = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Concrete delivery",
    url: "/concrete-delivery",
  },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <>
      <header className="custom-container">
        <nav className="w-11/12 md:w-10/12 mx-auto py-3 flex justify-center md:justify-between items-center">
          <h6 className=" text-dark text-sm font-medium text-center md:text-left flex items-center gap-x-1 uppercase">
            <span className="">
              <FaCanadianMapleLeaf className="w-5 h-5" />
            </span>
            Commercial & Residential Cleaning Services in Houston
          </h6>
          <div className="md:flex md:flex-row justify-end items-center hidden">
            <Link
              href={"/blog"}
              className="text-dark text-sm font-normal mx-3 hover:underline"
            >
              Blogs
            </Link>
            <Link
              href={"/testimonials"}
              className="text-dark text-sm font-normal mx-3 hover:underline"
            >
              Testimonials
            </Link>
            <Link
              href={"/contact-us"}
              className="text-dark text-sm font-normal mx-3 hover:underline"
            >
              Contact Us
            </Link>
          </div>
        </nav>
      </header>
      <header
        className={`sticky top-0 bg-white z-[1000] shadow shadow-dark-50/10 custom-container px-5 md:px-24 mx-auto gap-2 py-2 flex items-center justify-between`}
      >
        <Link href="/">
          <Image
            src={MaricelasHomeLogo}
            alt="Lavish Lux Brand Image"
            width={130}
            height={24.5}
            priority={true}
            className={`h-20 w-44 select-none hover:no-underlines`}
          />
        </Link>
        <Link
          href="tel:+"
          className="flex items-center justify-center gap-2 py-2 px-3 group  lg:hidden"
        >
          <span className="h-9 w-9 rounded-full justify-center items-center bg-dark-50/10 flex group-hover:bg-dark">
            <FaPhone className="inline-block h-4 w-4 fill-dark group-hover:fill-white" />
          </span>
          <span className="text-sm font-bold text-primary">
            {contacts.phone}
          </span>
        </Link>
        <nav className="flex-grow hidden lg:block ml-5">
          {menu.map((item, key) => (
            <Link
              href={item.url}
              key={key}
              className="text-lg text-dark hover:text-primary py-2 px-3 duration-200"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <nav className="gap-2 items-center hidden lg:flex">
          <a
            href="tel:+1 (647) 539-6755"
            className="flex items-center justify-center gap-2 py-2 px-3 group"
          >
            <span className="h-9 w-9 rounded-full justify-center items-center bg-dark-50/10 flex group-hover:bg-dark">
              <FaPhone className="inline-block h-4 w-4 fill-dark group-hover:fill-white" />
            </span>
            <span className="text-sm font-bold text-primary">
              {contacts.phone}
            </span>
          </a>
          <Button href="/contact-us" className="btn !text-sm rounded-none">
            Get an Estimate
          </Button>
        </nav>
        <IconButton
          aria-label="icon-button"
          variant="text"
          className="block p-4 !text-white rounded-none  lg:hidden"
          onClick={openDrawer}
        >
          <GiHamburgerMenu className="w-6 h-6" />
        </IconButton>
      </header>
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
          <Button href="/contact-us" className="btn !text-sm rounded-none">
            Get an Estimate
          </Button>
        </nav>
      </Drawer>
    </>
  );
};

export default Header;
