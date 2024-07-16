"use client";
import Link from "next/link";
// import { usePathname } from "next/navigation";
import gokundo from "../../../../public/assets/footer/Gokundu-logo(white and green) 1.png";
import angi from "../../../../public/assets/footer/angi.png";
import bark from "../../../../public/assets/footer/bark.png";
import elite from "../../../../public/assets/footer/elite.png";
import facebook from "../../../../public/assets/footer/facebook.png";
import companyLogo from "../../../../public/assets/footer/logo.png";
import review from "../../../../public/assets/footer/reviews.png";
import screen from "../../../../public/assets/footer/screened.png";
import rated from "../../../../public/assets/footer/toprated.png";
import year from "../../../../public/assets/footer/year.png";
import icon10 from "../../../../public/assets/random/groupon.png";
import star from "../../../../public/assets/random/star.png";
import icon9 from "../../../../public/assets/random/t.png";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
// import bgImg from "../../../../../public/assets/footer/footerbg.png";
import Image from "next/image";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMapMarkedAlt,
} from "react-icons/fa";
import "./footer.css";

const footerIcon = [
  {
    img: screen,
  },
  {
    img: rated,
  },
  {
    img: elite,
  },
  {
    img: angi,
  },
  {
    img: review,
  },
  {
    img: year,
  },
  {
    img: bark,
  },
  {
    img: facebook,
  },
  {
    img: icon9,
  },
  {
    img: icon10,
  },
];

const Footer = () => {
  return (
    <footer className="">
      <div className=" footer__bg bg-blend-multiply px-[6px] lg:px-9  !text-white relative">
        {/* star img */}
        <div className="absolute top-10 4xl:ml-[100px] lg:block hidden ">
          <Image src={star} height={60} width={70} alt="star" />
        </div>

        {/* company logo */}
        <div className="absolute lg:-top-20 -top-10 left-1/2 lg:-ml-[90px] -ml-[50px] lg:w-auto lg:h-auto w-[100px] h-[100px]  ">
          <Image src={companyLogo} height={182} width={182} alt="company" />
        </div>

        <div className="container">
          <div className="z-100 2xl:pt-[180px] lg:pt-[160px] pt-[80px] 2xl:pb-[65px] pb-[50px] text-white ">
            <div className="">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-10">
                <div className=" lg:col-span-2 md:col-span-1 items-center">
                  {/* <div className="lg:h-[128px] xs:h-[76px] lg:w-[128px] xs:w-[76px]">
                    <Image src={LOGO} height={"128px"} width={"128px"} alt="" className="" />

                  </div> */}
                  <div>
                    <h4 className=" lg:text-[25px] text-[20px]">
                      We Are Maricela's Cleaning Magnificence
                    </h4>
                    <p className="text-white lg:pt-6 pt-2 mb-2 ml-2 text-sm">
                      We work with a passion of taking challenges and creating
                      new ones in advertising sector.
                    </p>
                  </div>

                  <div className="mt-4 lg:mt-[35px]">
                    {/* <h4 className="lg:text-xl text-base">Open Hours:</h4>
                    <p className="my-1 mt-2 lg:mt-5">
                      Mon - Fri: 07 am - 07 pm, <br /> Sunday: CLOSED
                    </p> */}

                    <div className=" sm:col-span-3  items-center">
                      <h3 className="font-semibold text-white lg:text-xl text-lg lg:mb-7 md:mb-5 mb-3">
                        Contact Us
                      </h3>
                      <ul className=" ">
                        <li>
                          <a
                            href="https://maps.app.goo.gl/rh3dXrHssMQMsNH27"
                            className="footer-link flex gap-4 items-center text-base text-white"
                            target="_blank"
                          >
                            <FaMapMarkedAlt className=" lg:h-7 lg:w-7  h-4 w-4" />{" "}
                            Houston,Texas
                          </a>
                        </li>
                        <li className="py-2 lg:py-4">
                          <a
                            href="tel:(832)8204035"
                            className="footer-link items-center text-base text-white"
                          >
                            <FaPhoneVolume className=" lg:h-7 lg:w-7 h-4 w-4" />{" "}
                            (832) 820-4035
                          </a>
                        </li>
                        <li>
                          <a
                            href="mailto:maricela.maldonado@maricelasmagnificence.com"
                            className="footer-link items-center text-white max-w-full"
                          >
                            <Image
                              src="/assets/icons/email.png"
                              width={21}
                              height={21}
                              className="w-[21 px] h-[21px]"
                              alt="mail"
                            />
                            {/* <span className="text-sm line-clamp-1"> */}
                            <span className="text-base">
                              maricela.maldonado@maricelasmagnificence.com
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>

                    {/* <>
                      <a
                        href="mailto:maricela.maldonado@maricelasmagnificence.com"
                        className="footer-link items-center text-white max-w-full"
                      >
                        <Image
                          src="/assets/icons/email.png"
                          width={21}
                          height={21}
                          className="w-[21 px] h-[21px]"
                          alt="mail"
                        />
                        <span className="text-sm">
                          maricela.maldonado@maricelasmagnificence.com
                        </span>
                      </a>
                    </> */}
                  </div>

                  <div className="flex gap-12 mt-8">
                    <a
                      href="https://www.facebook.com/MaricelasMagnificence"
                      target="_blank"
                    >
                      <FaFacebook className=" lg:w-[30px] lg:h-[28px] w-auto h-auto" />
                    </a>
                    <a
                      href="https://www.instagram.com/maricelasmagnificence?igsh=ZXdoY3lqa2MxeWd3"
                      target="_blank"
                    >
                      <FaInstagram className=" lg:w-[30px] lg:h-[28px] w-auto h-auto" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/maricela-maldonado-57a9a720a?trk=public_post_feed-actor-image"
                      target="_blank"
                    >
                      <FaLinkedin className=" lg:w-[30px] lg:h-[28px] w-auto h-auto" />
                    </a>
                  </div>
                </div>

                <div className=" lg:col-span-5 md:col-span-2 grid sm:grid-cols-7 grid-cols-1 lg:gap-10 gap-3">
                  {/* news line */}
                  <div className="sm:col-span-2  ">
                    <h3 className="font-semibold text-white  lg:text-xl  text-lg lg:mb-7 md:mb-5 mb-3 ">
                      {" "}
                      News{" "}
                    </h3>
                    <ul className=" ">
                      <li className=" ">
                        <Link
                          href="#"
                          className="footer-link text-base  items-center text-white"
                        >
                          <MdKeyboardDoubleArrowRight />
                          How it work
                        </Link>
                      </li>
                      <li className=" lg:py-8 xs:py-[12px] ">
                        <Link
                          href="#"
                          className="footer-link lg:text-base text-[8px]  items-center text-white"
                        >
                          <MdKeyboardDoubleArrowRight />
                          Gallery
                        </Link>
                      </li>
                      <li className=" ">
                        <Link
                          href="#"
                          className="footer-link lg:text-base text-[8px]  items-center text-white"
                        >
                          <MdKeyboardDoubleArrowRight />
                          Testimonils
                        </Link>
                      </li>
                      <li className="lg:py-8 xs:py-[12px] ">
                        <Link
                          href="#"
                          className="footer-link lg:text-base text-[8px]  items-center text-white "
                        >
                          <MdKeyboardDoubleArrowRight />
                          Career
                        </Link>
                      </li>
                      <li className=" ">
                        <Link
                          href="#"
                          className="footer-link lg:text-base text-[8px]  items-center text-white"
                        >
                          <MdKeyboardDoubleArrowRight />
                          Sitmap
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* services line */}
                  <div className=" sm:col-span-2  ">
                    <h3 className="font-semibold text-white lg:text-xl text-lg  lg:mb-7 md:mb-5 mb-3 ">
                      Ours Services
                    </h3>
                    <ul className="">
                      <li className=" ">
                        <Link
                          href="#"
                          className="footer-link text-base   items-center text-white"
                        >
                          <MdKeyboardDoubleArrowRight />
                          House Cleaning
                        </Link>
                      </li>
                      <li className="lg:py-8 xs:py-[12px]">
                        <Link
                          href="#"
                          className="footer-link lg:text-base text-[8px]  items-center text-white"
                        >
                          <MdKeyboardDoubleArrowRight />
                          Office Cleaning
                        </Link>
                      </li>
                      <li className=" ">
                        <Link
                          href="#"
                          className="footer-link lg:text-base text-[8px]  items-center text-white"
                        >
                          <MdKeyboardDoubleArrowRight />
                          Kitchen Cleaning
                        </Link>
                      </li>
                      <li className=" lg:py-8 xs:py-[12px]">
                        <Link
                          href="#"
                          className="footer-link lg:text-base text-[8px]  items-center  text-white"
                        >
                          <MdKeyboardDoubleArrowRight />
                          Water Tank Cleaning
                        </Link>
                      </li>
                      <li className=" ">
                        <Link
                          href="#"
                          className="footer-link lg:text-base text-[8px]  items-center text-white"
                        >
                          <MdKeyboardDoubleArrowRight />
                          Window Cleaning
                        </Link>
                      </li>
                      <li className=" ">
                        <Link
                          href="#"
                          className="footer-link lg:text-[16px] text-[8px]  items-center text-white"
                        >
                          <MdKeyboardDoubleArrowRight />
                          Plumbing Service
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* contact line  */}
                  <div className="sm:col-span-3  items-center">
                    {/* <h3 className="font-semibold text-white lg:text-xl text-lg lg:mb-7 md:mb-5 mb-3">
                      Contact Us
                    </h3>
                    <ul className=" ">
                      <li>
                        <a
                          href="/"
                          className="footer-link flex gap-4 items-center text-base text-white"
                        >
                          <FaMapMarkedAlt className=" lg:h-7 lg:w-7  h-4 w-4" />{" "}
                          Houston,Texas
                        </a>
                      </li>
                      <li className="py-2 lg:py-4">
                        <a
                          href="tel:(832)8204035"
                          className="footer-link items-center text-base text-white"
                        >
                          <FaPhoneVolume className=" lg:h-7 lg:w-7 h-4 w-4" />{" "}
                          (832) 820-4035
                        </a>
                      </li>
                      <li>
                        <a
                          href="mailto:maricela.maldonado@maricelasmagnificence.com"
                          className="footer-link items-center text-white max-w-full"
                        >
                          <Image
                            src="/assets/icons/email.png"
                            width={21}
                            height={21}
                            className="w-[21 px] h-[21px]"
                            alt="mail"
                          />
                          <span className="text-sm line-clamp-1">
                            maricela.maldonado@maricelasmagnificence.com
                          </span>
                        </a>
                      </li>
                      
                    </ul>
                     */}
                    <h4 className="lg:text-xl text-base">Open Hours:</h4>
                    <p className="my-1 mt-2 lg:mt-5">
                      Mon - Fri: 07 am - 07 pm, <br /> Sunday: CLOSED
                    </p>

                    <div>
                      <div className="">
                        <div className="grid grid-cols-5 justify-center items-center gap-2 lg:gap-3 2xl:gap-4 my-6 lg:mb-5">
                          {footerIcon.map((fIcon, i) => (
                            <div key={i} className="col-span-1">
                              <img
                                src={fIcon.img.src}
                                className="h-full w-[50px]"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* terms */}
              <div className="lg:hidden block py-8">
                <div className="flex justify-center items-center text-center">
                  <div className=" ">
                    <div>
                      <p>
                        {" "}
                        © All Copyright 2024 by Maricela's Cleaning Magnificence
                      </p>
                    </div>
                    <div className="flex gap-5 justify-center items-center text-center">
                      <p>Terms & Condition </p>
                      <p>Privacy Policy</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute right-10 bottom-10 mr-[15px] lg:block hidden">
          <Image src={star} height={60} width={70} alt="star" />
        </div>
      </div>

      {/* creater company credit */}
      <div className="footer-bottom-bg    ">
        <div className="container grid lg:grid-cols-8 gap-5 lg:py-6 xs:py-2   items-center  md:mx-auto text-center ">
          <div className="lg:col-span-3 flex items-center justify-center lg:justify-normal gap-2  ">
            <p className="lg:text-[16px] md:text-sm text-[8px]  ">
              {" "}
              <b className="text-white text-sm">
                WEBSITE DESIGN AND SEO BY :-
              </b>{" "}
            </p>
            <Image
              src={gokundo}
              alt="gokundo"
              width={150}
              height={30}
              className="ml-2 "
            />
          </div>
          <div className="lg:col-span-3 lg:block hidden">
            <p className="2xl:text-[16px] lg:text-[14px] text-[12px] text-white">
              © All Copyright 2024 by Maricela's Cleaning Magnificence
            </p>
          </div>
          <div className="lg:col-span-2 lg:block hidden">
            <ul className="lg:text-[16px] text-xs flex justify-evenly  ">
              <li className="text-white">Terms & Condition </li>
              <li className="text-white">Privacy Policy </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
