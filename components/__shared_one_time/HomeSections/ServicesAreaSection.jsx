"use client";
import Heading from "@/ui/Heading";
import { useState } from "react";
// import HeadingIcon from "@/app/components/ui/HeadingIcon";
// import { headingIconText } from "@/app/utils/heading-text";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import Image from "next/image";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/virtual";
import { SwiperNavButtons } from "../../__shared_one_time/HomeSections/ReviewSwipper/ReviewSlider/SwiperSliderButton";

// i need to work no services section using swiper................................................................................................................................................................................................................................................................................................................................................................................

const ServicesAreaSection = () => {
  const maps = [
    {
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105616.14243920908!2d-118.21421188801828!3d34.18458537159454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c2dc38330b51%3A0x52b41161ad18f4a!2sPasadena%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1711883258041!5m2!1sen!2sbd",
      location: "Pasadena",
      id: 1
    },
    {
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110382.52849587286!2d-95.60011001737466!3d30.167022177844384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86473147c603385b%3A0xf1a4808e67c3df5d!2sThe%20Woodlands%2C%20TX%2C%20USA!5e0!3m2!1sen!2sbd!4v1711883313053!5m2!1sen!2sbd",
      location: "The Woodlands",
      id: 2
    },
    {
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d222140.2634423594!2d-95.49933366309385!3d29.547194515403586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86405890a6fe33a9%3A0xcabb7507f4a5ccee!2sPearland%2C%20TX%2C%20USA!5e0!3m2!1sen!2sbd!4v1711883395532!5m2!1sen!2sbd",
      location: "Pearland",
      id: 3
    },

    {
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d221701.96435837896!2d-95.11757207013959!3d29.746015955925888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x863f5e6cced440eb%3A0xe34e3fbdb4961080!2sBaytown%2C%20TX%2C%20USA!5e0!3m2!1sen!2sbd!4v1711883506297!5m2!1sen!2sbd",
      location: "Baytown ",
      id: 4
    },
    {
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d222136.41936009756!2d-95.70143476271718!3d29.548943556517443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640e1ec4548c89d%3A0xb8c5da032c46!2sMissouri%20City%2C%20TX%2C%20USA!5e0!3m2!1sen!2sbd!4v1711883646468!5m2!1sen!2sbd",
      location: "Missouri City  ",
      id: 5
    },
    {
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d222140.2634423594!2d-95.49933366309384!3d29.547194515403586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86405890a6fe33a9%3A0xcabb7507f4a5ccee!2sPearland%2C%20TX%2C%20USA!5e0!3m2!1sen!2sbd!4v1711883718612!5m2!1sen!2sbd",
      location: "Pearland",
      id: 6
    },
  ];


  // this state and code for only small screen
  const [currentMap, setCurrentMap] = useState(0);

  const nextMap = () => {
    setCurrentMap((prev) => (prev === maps.length - 1 ? 0 : prev + 1));
  };

  const prevMap = () => {
    setCurrentMap((prev) => (prev === 0 ? maps.length - 1 : prev - 1));
  };
  // this state and code for only small screen

  return <div>
    <div>
      <div className=" custom-container ">
        <div className="">
          <div className=" 2xl:py-[55px] py-[30px] md:mx-0   mx-[30px] ">

            {/* heading section */}
            <div className="mx-auto   flex flex-col items-center justify-center">
              <Heading text={"Service Area"}></Heading>
              <div>
                <h4 className="lg:text-[36px] md:text-[20px]   text-[16px] lg:mb-12 mb-5 text-center ">
                  Maricela's Cleaning Magnificenc Service Area
                </h4>
              </div>
            </div>


            {/* //   ======================= map Card ==================// */}
            <div className="block">
              <Swiper
              slidesPerView={3}
              modules={[Navigation]}
              className="  grid 2xl:grid-cols-6 lg:grid-cols-3 sm:grid-cols-2 2xl:gap-[20px]  lg:gap-[15px] gap-[10px] ">
                {
                  maps.map((area => <>
                    <SwiperSlide className={`col-span-1 relative rounded-xl overflow-hidden ${area.id % 2 === 0 ? '' : '2xl:mt-8'}`}>
                      <div className="shadow-md p-0 relative">

                        <iframe
                          src={area?.src}
                          height="325"
                          style={{ border: 0, width: "100%" }}
                          allowFullScreen={false}
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          className="rounded-xl"
                        ></iframe>
                        {/* <div className="absolute rounded-xl inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                          <button className="bg-white py-2 px-4 rounded-lg shadow-md text-gray-800 hover:bg-gray-200 transition duration-300">
                            Visit Map
                          </button>
                        </div> */}
                        <p className="text-base py-4 px-10 bg-[#880769] text-center lg:text-[18px] absolute bottom-0 left-0 right-0 text-white rounded-b-2xl ">
                          {area?.location}
                        </p>
                      </div>
                    </SwiperSlide>
                  </>))
                }
              </Swiper>
            </div>



            {/* when xs screen show this type of layout */}
            {/* sm:hidden block */}
            <div className="hidden ">
              <div className="  flex justify-center items-center mt-4">
                <button onClick={prevMap} className=" hidden p-1 rounded-full border-2 border-[#049E43] hover:text-white hover:bg-[#049E43]  "><FaChevronLeft className='fill-[#880769] hover:fill-white' /></button>

                <div className="px-[45px]">
                  <div className="col-span-1 relative rounded-xl overflow-hidden">
                    <div className="shadow-md p-0 relative">
                      <iframe
                        src={maps[currentMap].src}
                        height="225"
                        style={{ border: 0, width: "100%" }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-xl"
                      ></iframe>
                      <div className="absolute rounded-xl inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                        <button className="bg-white py-2 px-4 rounded-lg shadow-md text-gray-800 hover:bg-gray-200 transition duration-300">
                          Visit Map
                        </button>
                      </div>
                      <p className="text-base py-2 px-10 bg-[#880769] text-center md:text-[18px]   text-[16px] absolute bottom-0 left-0 right-0 text-white rounded-b-2xl ">
                        {maps[currentMap].location}
                      </p>
                    </div>
                  </div>
                </div>

                <button onClick={nextMap} className=" hidden hover:text-white bg-active hover:bg-[#880769] border-2 p-1  rounded-full  border-[#880769]  "><FaChevronRight className='fill-[#880769] hover:fill-white' /></button>
              </div>
            </div>

            {/* next prev button */}
            <div className="hidden ">
              <div className="flex gap-8 mt-10 items-center justify-center py-5">
                {/* ========= first line ======== */}
                <div className="w-[330px] h-0.5  bg-[#880769] ">
                </div>

                <div className="flex gap-5">
                  {/* onClick={handlePrev} */}
                  <button onClick={prevMap} className="p-3 rounded-full border-2 border-[#880769] hover:text-white hover:bg-[#880769]  "><FaChevronLeft className='fill-[#880769] hover:fill-white' /></button>
                  {/* onClick={handleNext} */}
                  <button onClick={nextMap} className=" hover:text-white bg-active hover:bg-[#880769] border-2 p-3  rounded-full  border-[#880769]  "><FaChevronRight className='fill-[#880769] hover:fill-white' /></button>

                </div>
                {/* =============== second line ============= */}
                <div className="w-[330px] h-0.5 bg-[#880769] ">

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>;
};

export default ServicesAreaSection;
