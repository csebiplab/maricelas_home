"use client";

// import constants from "@/components/lib/constants";
import {
  Bars3Icon,
  ChevronDownIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
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
import React from "react";
import UpperNavbar from "./UpperNav";

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
          <Typography
            as={Link}
            href="/our-services"
            variant="small"
            color="blue-gray"
            className="font-medium text-lg"
          >
            <ListItem
              className="flex items-center gap-2 rounded-full py-1  pr-4 font-normal  text-sm lg:text-base 5xl:text-[17px]   text-black"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Our Services
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
          </Typography>
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

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row  border-0 outline-none">
      <Typography
        as={Link}
        href="/"
        variant="small"
        color="blue-gray"
        className="font-normal rounded-full text-sm lg:text-base 5xl:text-[17px]  text-black"
      >
        <ListItem className="flex items-center rounded-full px-1 lg:px-4 xl:px-5 2xl:px-6">
          Home
        </ListItem>
      </Typography>

      <Typography
        as={Link}
        href="/about-us"
        variant="small"
        color="blue-gray"
        className="font-normal rounded-full text-sm lg:text-base 5xl:text-[17px]  text-black"
      >
        <ListItem className="flex items-center rounded-full px-1 lg:px-4 xl:px-5 2xl:px-6">
          About Us
        </ListItem>
      </Typography>
      <div className="mt-[6px]">
        <OurServiceManu />
      </div>
      <Typography
        as={Link}
        href="/blogs"
        variant="small"
        color="blue-gray"
        className="font-normal rounded-full text-sm lg:text-base 5xl:text-[17px]  text-black"
      >
        <ListItem className="flex items-center rounded-full px-1 lg:px-4 xl:px-5 2xl:px-6">
          Blogs
        </ListItem>
      </Typography>

      <Typography
        as={Link}
        href="/contact-us"
        variant="small"
        color="blue-gray"
        className="font-normal rounded-full text-sm lg:text-base 5xl:text-[17px]   text-black"
      >
        <ListItem className="flex items-center rounded-full px-1 lg:px-4 xl:px-5 2xl:px-6">
          Contact Us
        </ListItem>
      </Typography>
    </List>
  );
}

export function NavbarHeader() {
  const pathname = usePathname();
  const [openNav, setOpenNav] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  if (pathname.startsWith("/admin")) return null;
  return (
    <>
      <header className="sticky top-0 z-50">
        <>
          <UpperNavbar />
        </>

        <div className="custom-container main__nav">
          <Navbar className="container rounded-none py-2 shadow-none max-w-full">
            <div className="flex items-center justify-between text-blue-gray-900">
              <Link href="/" className="mr-4 cursor-pointer">
                <Image
                  src="/assets/images/brand.png"
                  width={135}
                  height={67}
                  alt="brand"
                  className="w-auto h-[67px]"
                />
              </Link>
              <div className="hidden lg:block">
                <NavList />
              </div>
              <div className="flex items-center gap-x-4">
                <div>
                  <Image
                    src="/assets/images/header-logo.jpg"
                    width={50}
                    height={70}
                    className="w-14 h-14 2xl:w-[50px] 2xl:h-[50px]"
                  />
                </div>
                <Image
                  src="/assets/images/phone-call.png"
                  width={37}
                  height={37}
                  className="w-7 h-7 2xl:w-[37px] 2xl:h-[37px]"
                />
                <div>
                  <span className=" text-sm lg:text-base 5xl:text-[17px] font-normaltext-dark block">
                    Quick Contact
                  </span>
                  <a
                    href={`tel:(832) 820-4035`}
                    className="text-[15px] xl:text-base 3xl:text-lg 5xl:text-[20px] font-bold text-[#880769]"
                  >
                    (832) 820-4035
                  </a>
                </div>
              </div>

              <IconButton
                variant="text"
                color="blue-gray"
                className="lg:hidden"
                onClick={() => setOpenNav(!openNav)}
              >
                {openNav ? (
                  <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                ) : (
                  // <Bars3Icon className="h-6 w-6" strokeWidth={2} />
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
          </Navbar>
        </div>
      </header>
      <Drawer
        placement="right"
        open={openNav}
        onClose={() => setOpenNav(false)}
        className="p-4 overflow-y-auto pb-24 !z-[1000000000000000000]"
      >
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray">
            Cleaning Services
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
      {/* <BottomMenu /> */}
    </>
  );
}
