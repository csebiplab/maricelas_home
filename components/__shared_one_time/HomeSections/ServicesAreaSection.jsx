"use client";
import Heading from "@/ui/Heading";
import React, { useState } from "react";
// import HeadingIcon from "@/app/components/ui/HeadingIcon";
// import { headingIconText } from "@/app/utils/heading-text";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";


const ServicesAreaSection = () => {
  const maps = [
    {
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d369104.4793833133!2d-79.70773178910238!3d43.71826384376133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sbd!4v1711192683290!5m2!1sen!2sbd",
      location: "Toronto",
      id: 1
    },
    {
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d182566.4045222721!2d-79.8305378187556!3d44.35926624980187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882aa3371ad7206d%3A0x1d2e0f00a84b535a!2sBarrie%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sbd!4v1711192803692!5m2!1sen!2sbd",
      location: "Barrie",
      id: 2
    },
    {
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92145.91175852313!2d-79.66673983224095!3d43.80274774858379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b257a9ad0b911%3A0xecea3dfb3abd0ac2!2sWoodbridge%2C%20Vaughan%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sbd!4v1711192847430!5m2!1sen!2sbd",
      location: "Woodbridge",
      id: 3
    },
    {
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d183980.1257805948!2d-79.5931173754818!3d43.90369790797781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2a4936291733%3A0x5201760ad6b142ed!2sRichmond%20Hill%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sbd!4v1711192914194!5m2!1sen!2sbd",
      location: "Richmond ",
      id: 4
    },
    {
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d183980.1257805948!2d-79.5931173754818!3d43.90369790797781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2a4936291733%3A0x5201760ad6b142ed!2sRichmond%20Hill%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sbd!4v1711192914194!5m2!1sen!2sbd",
      location: "Richmond ",
      id: 5
    },
    {
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d183980.1257805948!2d-79.5931173754818!3d43.90369790797781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2a4936291733%3A0x5201760ad6b142ed!2sRichmond%20Hill%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sbd!4v1711192914194!5m2!1sen!2sbd",
      location: "Richmond ",
      id: 6
    },
  ];

  const [currentMap, setCurrentMap] = useState(0);

  const nextMap = () => {
    setCurrentMap((prev) => (prev === maps.length - 1 ? 0 : prev + 1));
  };

  const prevMap = () => {
    setCurrentMap((prev) => (prev === 0 ? maps.length - 1 : prev - 1));
  };


  return <div>
    <div>
      <div className=" custom-container ">
        <div className="">
          <div className=" 2xl:py-[55px] py-[30px] md:mx-0   mx-[30px] ">


            <div className="mx-auto   flex flex-col items-center justify-center">
              <Heading text={"Service Area"}></Heading>
              <div>
                <h4 className="lg:text-[36px] md:text-[20px]   text-[16px] lg:mb-12 mb-5 text-center ">
                  Maricela's Cleaning Magnificenc Service Area
                </h4>
              </div>
            </div>


            {/* //   ======================= map Card ==================// */}
            <div className="hidden sm:block">
              <div className="  grid 2xl:grid-cols-6 lg:grid-cols-3 sm:grid-cols-2 2xl:gap-[20px]  lg:gap-[15px] gap-[10px] ">
                {
                  maps.map((area => <>
                    <div className={`col-span-1 relative rounded-xl overflow-hidden ${area.id % 2 === 0 ? '' : '2xl:mt-8'}`}>
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
                        <p className="text-base py-4 px-10 bg-[#188B89] text-center lg:text-[18px] absolute bottom-0 left-0 right-0 text-white rounded-b-2xl ">
                          {area?.location}
                        </p>
                      </div>
                    </div>
                  </>))
                }



              </div>
              {/* next prev button design for lg screen */}

            </div>

            {/* when xs screen show this type of layout */}
            <div className="sm:hidden block">
              <div className="  flex justify-center items-center mt-4">
                <button onClick={prevMap} className=" hidden p-1 rounded-full border-2 border-[#049E43] hover:text-white hover:bg-[#049E43]  "><FaChevronLeft className='fill-[#049E43] hover:fill-white' /></button>

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
                      <p className="text-base py-2 px-10 bg-[#188B89] text-center md:text-[18px]   text-[16px] absolute bottom-0 left-0 right-0 text-white rounded-b-2xl ">
                        {maps[currentMap].location}
                      </p>
                    </div>
                  </div>
                </div>

                <button onClick={nextMap} className=" hidden hover:text-white bg-active hover:bg-[#049E43] border-2 p-1  rounded-full  border-[#049E43]  "><FaChevronRight className='fill-[#049E43] hover:fill-white' /></button>
              </div>
            </div>

            <div>
              <div className="flex gap-8 mt-10 items-center justify-center py-5">
                {/* ========= first line ======== */}
                <div className="w-[330px] h-0.5  bg-[#049E43] ">

                </div>

                <div className="flex gap-5">
                  {/* onClick={handlePrev} */}
                  <button onClick={prevMap} className="p-3 rounded-full border-2 border-[#049E43] hover:text-white hover:bg-[#049E43]  "><FaChevronLeft className='fill-[#049E43] hover:fill-white' /></button>
                  {/* onClick={handleNext} */}
                  <button onClick={nextMap} className=" hover:text-white bg-active hover:bg-[#049E43] border-2 p-3  rounded-full  border-[#049E43]  "><FaChevronRight className='fill-[#049E43] hover:fill-white' /></button>

                </div>
                {/* =============== second line ============= */}
                <div className="w-[330px] h-0.5 bg-[#049E43] ">

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
