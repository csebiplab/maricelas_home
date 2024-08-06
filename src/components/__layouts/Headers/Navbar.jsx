"use client";

import { ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/outline";
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

// "use client";

// import {
//   Button,
//   Drawer,
//   IconButton,
//   Typography,
// } from "@material-tailwind/react";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useState, useEffect } from "react";
// import { FaPhone } from "react-icons/fa";
// import { FcCalculator } from "react-icons/fc";
// import "./Navbar.css";
// import UpperNavbar from "./UpperNav";
// import { UtilsModule } from "@/utils/nav-menus";
// import { contacts, site_info } from "@/utils/siteInfo";

// const menu = [
//   {
//     name: "Commercial Cleaning",
//     url: "/commercial-cleaning",
//   },
//   {
//     name: "Residential Cleaning",
//     url: "/residential-cleaning",
//   },
//   {
//     name: "Deep Clean",
//     url: "/deep-clean",
//   },
//   {
//     name: "How It Works",
//     url: "/how-it-works",
//   },
//   {
//     name: "Gallery",
//     url: "/gallery",
//   },
// ];

// const Header = () => {
//   const [open, setOpen] = useState(false);
//   const [isVisible, setIsVisible] = useState(true);
//   const openDrawer = () => setOpen(true);
//   const closeDrawer = () => setOpen(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 0) {
//         setIsVisible(false);
//       } else {
//         setIsVisible(true);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <header className="sticky top-0 z-50">
//       <>
//         <UpperNavbar />
//       </>

//       <nav className="container pt-[5px] main__nav">
//         <div className="flex items-center justify-between">
//           <Link href="/" className="hidden md:block w-[232px]">
//             <Image
//               src="/assets/images/maricelas.png"
//               width={232}
//               height={105}
//               alt="brand"
//               className="w-full h-full lg:w-[232px]"
//             />
//           </Link>
//           <div className="hidden lg:block">
//             <ul className="flex items-center gap-x-8 xl:gap-x-10 2xl:gap-x-[75px]">
//               {UtilsModule.navMenus.map(({ mainMenu, url }, index) => (
//                 <li key={index}>
//                   <Link href={url} className={`text-[17px] text-dark`}>
//                     {mainMenu}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div className="hidden md:flex items-center gap-x-6 md:gap-x-7 lg:gap-x-8">
//             <div className="">
//               <div className="flex items-center gap-2">
//                 <Image
//                   src="/assets/images/phone-call.png"
//                   width={24}
//                   height={24}
//                   alt="Phone"
//                   className="w-[24px] h-[24px]"
//                 />
//                 <div className="">
//                   <span className="text-base block">Quick Contact</span>
//                   <a
//                     href="tel:8328204035"
//                     className="text-primary font-bold xs:text-base sm:text-xl md:text-2xl 2xl:text-3xl"
//                   >
//                     (832) 820-4035
//                   </a>
//                 </div>
//               </div>
//             </div>
//             <div>
//               <Image
//                 src="/assets/images/header-logo.jpg"
//                 width={65}
//                 height={80}
//                 alt="brand"
//                 className="h-[80px] w-[65px]"
//               />
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* small device  */}
//       <div className="w-full bg-white flex justify-between items-center px-3 sm:px-6">
//         <div className="block md:hidden">
//           <a href="tel:8328204035" className="!no-underline">
//             <Button className="text-black nav__btn flex items-center gap-x-2">
//               <span className="text-black text-[10px] sm:text-base font-bold">
//                 Get an Estimate
//               </span>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="10"
//                 height="14"
//                 viewBox="0 0 10 14"
//                 fill="none"
//               >
//                 <path
//                   d="M2.07589 0.0371094L0.298388 1.65039L5.695 6.54844L0.298388 11.4465L2.07589 13.0598L9.25 6.54844L2.07589 0.0371094Z"
//                   fill="black"
//                 />
//               </svg>
//             </Button>
//           </a>
//         </div>

//         <div className="block md:hidden">
//           <a href="tel:8328204035" className="!no-underline">
//             <Button className="text-white phone__icon flex items-center gap-x-2">
//               <Image
//                 src="/assets/icons/phone__icon.png"
//                 alt="phone icon"
//                 width={20}
//                 height={20}
//               />
//               <span className="text-white text-[10px] sm:text-base font-bold">
//                 Click to Call
//               </span>
//             </Button>
//           </a>
//         </div>

//         <div className="block md:hidden">
//           <Image
//             src="/assets/icons/menu.png"
//             width={22}
//             height={22}
//             alt="Menu"
//             className="w-[22px] h-[22px]"
//           />
//         </div>
//       </div>

//       <div className="block md:hidden pt-1 bg-white">
//         <div
//           className={`w-full flex justify-between items-center pb-3 px-3 ${
//             isVisible ? "" : "hidden"
//           }`}
//         >
//           <Image
//             src="/assets/images/maricelas.png"
//             width={170}
//             height={80}
//             alt="brand"
//             className="h-[80px] w-[170px]"
//           />
//           <Image
//             src="/assets/images/header-logo.jpg"
//             width={65}
//             height={80}
//             alt="brand"
//             className="h-[80px] w-[65px]"
//           />
//         </div>
//       </div>

//       {/* small device end  */}

//       <Drawer open={open} onClose={closeDrawer} className="p-4">
//         <div className="mb-6 flex items-center justify-between">
//           <Typography variant="h5" color="blue-gray">
//             {site_info.name}
//           </Typography>
//           <IconButton
//             variant="text"
//             color="blue-gray"
//             onClick={closeDrawer}
//             aria-label="icon-button"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={2}
//               stroke="currentColor"
//               className="h-5 w-5"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           </IconButton>
//         </div>
//         <nav className="gap-2 flex flex-col">
//           {menu.map((item, key) => (
//             <Link
//               href={item.url}
//               className="flex items-center gap-2 py-2 px-3 group"
//               onClick={closeDrawer}
//               key={key}
//             >
//               <span className="text-xl font-semibold text-primary">
//                 {item.name}
//               </span>
//             </Link>
//           ))}
//         </nav>
//         <nav className="gap-2 flex flex-col">
//           <a
//             href="tel:+1 (647) 539-6755"
//             className="flex items-center gap-2 py-2 px-3 group"
//             onClick={closeDrawer}
//           >
//             <span className="h-9 w-9 rounded-full justify-center items-center bg-dark-50/10 flex  group-hover:bg-dark">
//               <FaPhone className="inline-block h-4 w-4 fill-dark group-hover:fill-white" />
//             </span>
//             <span className="text-xl font-semibold text-primary">
//               {contacts.phone}
//             </span>
//           </a>
//           <Button className="btn !text-sm rounded-none flex items-center gap-x-2">
//             <FcCalculator className="w-4 h-4" />
//             <span className="text-white capitalize">Get an Estimate</span>
//           </Button>
//         </nav>
//       </Drawer>
//     </header>
//   );
// };

// export default Header;
