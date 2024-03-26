import React from "react";
import Image from 'next/image';
import contactImg from '../../../public/assets/random/contactus.png'
import { FaMapLocationDot } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa6";


const GiveUsFeedbackSection = () => {
  return <div>
    <div>
      <div className="">
        <div className="grid lg:grid-cols-10 md:grid-cols-7 custom-container  lg:relative  ">

          {/* contact part */}
          <div className=" lg:absolute md:col-span-3 md:order-1 flex justify-center Fitems-center  lg:left-[16%] xl:left-[20%] 2xl:left-[40%] 4xl:left-[40%] 2xl:top-[20%] lg:top-[20%]  bg-[#880769] 2xl:my-16 my-8  2xl:py-8 py-5 border shadow-md rounded-md border-black z-50  ">
            <div className=''>
              <div className=' 2xl:py-8 py-5 lg:px-10 px-5  '>
                <h2 className=" 2xl:text-[36px] text-[20px] text-white md:text-start text-center  ">
                  Contact Us
                </h2>
                <div className=' flex gap-2 md:items-center text-center 2xl:text-[18px] text-[14px] lg:py-8 py-5 md:justify-start justify-center '>
                  <FaMapLocationDot className=' 2xl:w-5 lg:h-5 w-auto h-auto fill-white' />
                  <p className='text-white'> 13809 Hollow Canyon Lane Rosharon, TX 77583 </p>
                </div>
                <div className='my-2 flex gap-2 items-center md:justify-start justify-center 2xl:text-[18px] text-[14px]  '>
                  <FaPhoneVolume className=' 2xl:w-5 lg:h-5 w-auto h-auto fill-white' />
                  <p className='text-white'>(832)8204035</p>
                </div>
                <div className=' flex gap-2 my-auto items-center 2xl:text-[18px] text-[14px] 2xl:py-8 py-5 md:justify-start justify-center '>
                  <IoIosMail className=' 2xl:w-5 2xl:h-5 w-auto h-auto fill-white' />
                  <p className='text-white'>maricela.maldonado@maricelasmagnificence.com</p>
                </div>
                <div className=' flex gap-8  text-white md:justify-start justify-center'>
                  <FaFacebook className=' 2xl:w-6 2xl:h-6 w-auto h-auto fill-white' />
                  <FaXTwitter className=' 2xl:w-6  2xl:h-6 w-auto h-auto fill-white ' />
                  <FaInstagram className='2xl:w-6 2xl:h-6 w-auto h-auto fill-white' />
                  <FaLinkedin className='2xl:w-6 2xl:h-6 w-auto h-auto fill-white' />
                </div>

              </div>
            </div>
          </div>

          {/* form part */}
          <div className='xl:col-span-6  lg:col-span-6 md:col-span-4 md:order-1  lg:py-30 md:flex items-center   '>
            <div className="rounded-lg  lg:col-span-3 items-center">
              <h2 className='lg:mb-8 mb-5 text-[#880769]'> Give Us Feedback </h2>
              <form action="#" className=" ">

                <div >

                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:mb-8 mb-4">
                    <div> <h5 className='mb-2 text-[#880769]'>Your name *</h5>
                      <label className="sr-only" htmlFor="email">name</label>
                      <input
                        className="w-full rounded-lg bg-[#C477B126] shadow-sm shadow-black p-3 lg:pr-16 pr-3 text-sm" // Added pr-12 class for padding-right
                        placeholder="Robot Fox"
                        type="email"
                        id="email"
                      />
                    </div>

                    <div>
                      <h5 className='mb-2 text-[#880769]'>Email *</h5>
                      <label className="sr-only" htmlFor="phone">Email</label>
                      <input
                        className="w-full rounded-lg bg-[#C477B126]  shadow-sm shadow-black p-3 lg:pr-16 pr-3  text-sm"
                        placeholder="info.example@gmail.com"
                        type="tel"
                        id="phone"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:mb-8 mb-4  ">
                  <div>
                    <h5 className='mb-2 text-[#880769]'>Subjects *</h5>
                    <label className="sr-only" htmlFor="email">Email</label>
                    <input
                      className="w-full rounded-lg bg-[#C477B126] shadow-sm shadow-black p-3 lg:pr-16 pr-3  text-sm"
                      placeholder="Subjects "
                      type="email"
                      id="email"
                    />
                  </div>

                  <div>
                    <h5 className='mb-2 text-[#880769]'>Your Phone *</h5>
                    <label className="sr-only" htmlFor="phone">Phone</label>
                    <input
                      className="w-full rounded-lg bg-[#C477B126] shadow-sm shadow-black p-3 lg:pr-16 pr-3  text-sm"
                      placeholder="+8801700000000"
                      type="tel"
                      id="phone"
                    />
                  </div>
                </div>

                <div >
                  <label className="sr-only" htmlFor="message">Message</label>
                  <h5 className='mb-2 text-[#880769]'>Message *</h5>
                  <textarea
                    className="w-full rounded-lg bg-[#C477B126] shadow-sm shadow-black p-4 lg:pr-16 pr-3  text-sm"
                    placeholder="Write Message"
                    rows="6"
                    id="message"
                  ></textarea>
                </div>

                <div className=' flex md:block xs:justify-center xs:items-center xs:mx-auto'>
                  <button
                    type="submit"
                    className="  rounded-md bg-[#FBCC21E4] px-10 py-4 md:px-20  font-semibold   items-center flex lg:mt-13 mt-8 "
                  >
                    Submit <FaLocationArrow className=' ml-2  ' />
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* image part */}
          <div className="w-full -z-10  xl:col-span-4 lg:col-span-4 lg:order-2 lg:block hidden">
            <Image
              src={contactImg}
              alt="Trusted general contractor"
              width={450}
              height={300}
              loading="lazy"
              className="w-full h-full"
            />

          </div>

        </div>
      </div>
    </div>
  </div>;
};

export default GiveUsFeedbackSection;
