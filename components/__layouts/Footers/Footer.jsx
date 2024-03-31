"use client";
import Link from "next/link";
// import { usePathname } from "next/navigation";
import gokundo from "@/public/assets/footer/Gokundu-logo(white and green) 1.png";
import gaf from "@/public/assets/footer/gaf.png";
import google from "@/public/assets/footer/google.png";
import home from "@/public/assets/footer/home.png";
import three from "@/public/assets/footer/three.png";
import star from "../../../public/assets/random/star.png"
import companyLogo from "../../../public/assets/footer/logo.png"
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
// import bgImg from "../../../../../public/assets/footer/footerbg.png";
import Image from "next/image";

import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./footer.css";

const Footer = () => {
  const footerIcon = [
    {
      img: google,
    },
    {
      img: three,
    },
    {
      img: home,
    },
    {
      img: gaf,
    },
  ];

  return (
    <footer className="">
      <div className=" footer__bg bg-blend-multiply  lg:px-[35px] xs:px-[20px] !text-white relative">
        {/* star img */}
        <div className=" absolute top-10 4xl:ml-[100px] 2xl:block hidden ">
          <Image src={star} height={100} width={100} />
        </div>

        {/* company logo */}
        <div className=" absolute lg:-top-20 -top-10 left-1/2 lg:-ml-[90px] -ml-[50px] lg:w-auto lg:h-auto w-[100px] h-[100px]  ">
          <Image src={companyLogo} height={182} width={182}  />
        </div>

        <div className="container  ">
          <div className="z-100 2xl:pt-[160px]  lg:pt-[120px] pt-[80px] 2xl:pb-[65px] pb-[50px] text-white ">
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
                    <p className="text-white lg:pt-6 pt-2 mb-2 ml-2 lg:text-[13px] text-[10px] ">
                      We work with a passion of taking challenges and creating
                      new ones in advertising sector.
                    </p>
                  </div>

                  <div className="lg:mt-[35px]">
                    <h4 className=" lg:text-[25px] text-[20px]">Open Hours:</h4>
                    <p>
                      Mon – Sat: 8 am – 5 pm, <br />
                      Sunday: CLOSED
                    </p>
                  </div>

                  <div className=" flex gap-8 mt-8">
                    <FaFacebook className=" lg:w-[30px] lg:h-[28px] w-auto h-auto" />
                    <FaXTwitter className=" lg:w-[30px]  lg:h-280px] w-auto h-auto" />
                    <FaInstagram className=" lg:w-[30px] lg:h-[28px] w-auto h-auto" />
                    <FaLinkedin className=" lg:w-[30px] lg:h-[28px] w-auto h-auto" />
                  </div>
                </div>

                <div className=" lg:col-span-5 md:col-span-2 grid sm:grid-cols-7 grid-cols-1 lg:gap-10 gap-3">
                  {/* news line */}
                  <div className="sm:col-span-2  ">
                    <h3 className="font-semibold text-white  lg:text-[20px]  xs:text-[15px] lg:mb-10 md:mb-5 mb-3 ">
                      {" "}
                      News{" "}
                    </h3>
                    <ul className=" ">
                      <li className=" ">
                        <Link
                          href="#"
                          className="footer-link lg:text-[16px]  xs:text-[8px] items-center text-white"
                        >
                          <MdKeyboardDoubleArrowRight />
                          How it work
                        </Link>
                      </li>
                      <li className=" lg:py-8 xs:py-[12px] ">
                        <Link
                          href="#"
                          className="footer-link lg:text-[16px]  xs:text-[8px]  items-center text-white"
                        >
                          <MdKeyboardDoubleArrowRight />
                          Gallery
                        </Link>
                      </li>
                      <li className=" ">
                        <Link
                          href="#"
                          className="footer-link lg:text-[16px] xs:text-[8px]  items-center text-white"
                        >
                          <MdKeyboardDoubleArrowRight />
                          Testimonils
                        </Link>
                      </li>
                      <li className="lg:py-8 xs:py-[12px] ">
                        <Link
                          href="#"
                          className="footer-link lg:text-[16px]  xs:text-[8px]  items-center text-white "
                        >
                          <MdKeyboardDoubleArrowRight />
                          Career
                        </Link>
                      </li>
                      <li className=" ">
                        <Link
                          href="#"
                          className="footer-link lg:text-[16px]  xs:text-[8px]  items-center text-white"
                        >
                          <MdKeyboardDoubleArrowRight />
                          Sitmap
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* services line */}
                  <div className=" sm:col-span-2  ">
                    <h3 className="font-semibold text-white lg:text-[20px] xs:text-[15px]  lg:mb-10 md:mb-5 mb-3 ">
                      Ours Services
                    </h3>
                    <ul className="">
                      <li className=" ">
                        <Link
                          href="#"
                          className="footer-link lg:text-[16px]  xs:text-[8px]  items-center text-white"
                        >
                          <MdKeyboardDoubleArrowRight />
                          House Cleaning
                        </Link>
                      </li>
                      <li className="  lg:py-8 xs:py-[12px]">
                        <Link
                          href="#"
                          className="footer-link lg:text-[16px] xs:text-[8px]  items-center text-white"
                        >
                          <MdKeyboardDoubleArrowRight />
                          Office Cleaning
                        </Link>
                      </li>
                      <li className=" ">
                        <Link
                          href="#"
                          className="footer-link lg:text-[16px]  xs:text-[8px]  items-center text-white"
                        >
                          <MdKeyboardDoubleArrowRight />
                          Kitchen Cleaning
                        </Link>
                      </li>
                      <li className=" lg:py-8 xs:py-[12px]">
                        <Link
                          href="#"
                          className="footer-link lg:text-[16px]  xs:text-[8px]  items-center  text-white"
                        >
                          <MdKeyboardDoubleArrowRight />
                          Water Tank Cleaning
                        </Link>
                      </li>
                      <li className=" ">
                        <Link
                          href="#"
                          className="footer-link lg:text-[16px]  xs:text-[8px]  items-center text-white"
                        >
                          <MdKeyboardDoubleArrowRight />
                          Window Cleaning
                        </Link>
                      </li>
                      <li className=" ">
                        <Link
                          href="#"
                          className="footer-link lg:text-[16px]  xs:text-[8px]  items-center text-white"
                        >
                          <MdKeyboardDoubleArrowRight />
                          Plumbing Service
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* contact line  */}
                  <div className=" sm:col-span-3  items-center">
                    <h3 className="font-semibold text-white   lg:text-[20px] xs:text-[15px] lg:mb-10 md:mb-5 mb-3">
                      Contact Us
                    </h3>
                    <ul className=" ">
                      <li>
                        <a
                          href="/"
                          className="footer-link flex gap-4 items-center text-[8px] lg:text-[16px] text-white"
                        >
                          <FaMapMarkedAlt className=" lg:h-7 lg:w-7  h-4 w-4" />{" "}
                          13809 Hollow Canyon Lane Rosharon, TX 77583
                        </a>
                      </li>
                      <li className="py-2 lg:py-4">
                        <a
                          href="tel:+1 (646) 683-4612"
                          className="footer-link items-center text-[8px] lg:text-[16px] text-white"
                        >
                          <FaPhoneVolume className=" lg:h-7 lg:w-7 h-4 w-4" />{" "}
                          (832) 8204035
                        </a>
                      </li>
                      <li>
                        <a
                          href="mailto:rhconusa@gmail.com"
                          className="footer-link items-center text-white"
                        >
                          <Image
                            src="/assets/icons/email.png"
                            width={21}
                            height={21}
                            className="w-[21 px] h-[21px]"
                          />
                          <span className="hidden 3xl:block text-base text-wrap">
                            maricela.maldonado@maricelasmagnificence.com
                          </span>
                          <span className="block 3xl:hidden text-[8px] sm:text-xs">
                            maricela.maldonado@
                            <br />
                            maricelasmagnificence.com
                          </span>
                        </a>
                      </li>
                      <div>
                        <div className=" hidden md:block ">
                          <div className="grid  md:grid-cols-3 lg:gap-8 gap-5 lg:my-12">
                            {footerIcon.map((fIcon, i) => (
                              <div key={i} className=" col-span-1">
                                <img
                                  src={fIcon.img.src}
                                  className="lg:h-auto lg:w-auto "
                                ></img>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </ul>
                  </div>
                </div>

                {/* This section show when screen sm or xs */}
                <div className=" block md:hidden items-center">
                  <div>
                    <div className=" gap-5  xs:flex xs:justify-between xs:items-center xs:mb-8 ">
                      {footerIcon.map((fIcon, i) => (
                        <div key={i} className=" ">
                          <img
                            src={fIcon.img.src}
                            className=" lg:h-auto lg:w-auto "
                          ></img>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>



              </div>

              {/* terms */}
              <div className="lg:hidden block py-8" >
                <div className="flex justify-center items-center text-center">
                  <div className=" ">
                    <div>
                      <p> © All Copyright 2024 by Maricela's Cleaning Magnificence</p>
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

        <div className=" absolute right-10 bottom-10 mr-[185px] 2xl:block hidden">
          <Image src={star} height={100} width={100} />
        </div>
      </div>


      {/* creater company credit */}
      <div className=" footer-bottom-bg    ">
        <div className="container grid lg:grid-cols-8 gap-5 lg:py-6 xs:py-2   items-center  md:mx-auto text-center ">
          <div className=" lg:col-span-3 flex items-center justify-center lg:justify-normal gap-2  ">
            <p className=" lg:text-[16px] md:text-sm text-[8px]  ">
              {" "}
              <b className="text-white">WEBSITE DESIGN AND SEO BY :-</b>{" "}
            </p>
            <Image
              src={gokundo}
              alt="gokundo"
              width={150}
              height={30}
              className=" ml-2 "
            />
          </div>
          <div className=" lg:col-span-3 lg:block hidden ">
            <p className=" 2xl:text-[16px] lg:text-[14px] text-[12px]  text-white">
              © All Copyright 2024 by Maricela's Cleaning Magnificence
            </p>
          </div>
          <div className=" lg:col-span-2  lg:block hidden">
            <ul className=" lg:text-[16px] text-xs  flex justify-evenly  ">
              <li className="text-white  "> Terms & Condition </li>
              <li className="text-white  "> Privacy Policy </li>
            </ul>
          </div>
        </div>
      </div>


    </footer>
  );
};

export default Footer;
