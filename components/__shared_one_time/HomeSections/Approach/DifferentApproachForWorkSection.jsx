"use client";
import Heading from "@/components/__ui/Heading";
import app1 from "@/public/assets/images/app1.png";
import app2 from "@/public/assets/images/app2.png";
import app3 from "@/public/assets/images/app3.png";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/virtual";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import './Approach.css';


const breakpoints = {
  0: {
    slidesPerView: 1,
  },
  768: {
    slidesPerView: 2,
  },
  1024: {
    slidesPerView: 3,
  },

};


const slideData = [
  {
    imgSrc: app1,
    title: 'Customized Cleaning Plans',
    description: `At our commercial & residential cleaning service in Houston, TX, we believe in tailoring our approach to meet the unique needs of each client. We don't offer a one-size-fits-all solution; instead, we work closely with our customers to understand their specific requirements and preferences.`,
  },
  {
    imgSrc: app2,
    title: 'Advanced Cleaning Techniques',
    description: `We stay ahead of the curve by utilizing the latest cleaning technologies and techniques. From eco-friendly products to advanced equipment, we ensure that our cleaning methods are not only effective but also environmentally conscious. We stay ahead of the curve by utilizing.`,
  },
  {
    imgSrc: app3,
    title: 'Trained and Professional Staff',
    description: `Our team consists of highly trained and professional cleaners who are committed to delivering exceptional service. They undergo rigorous training and adhere to strict quality standards to ensure that every job is completed to perfection.`,
  }
  

];

const DifferentApproachForWorkSection = () => {
  return (
    <div className="">
      <div className="3xl:py-[120px] lg:py-[100px] py-[60px] md:flex gap-2">
        
          <div className="flex justify-center lg:justify-normal md:text-start text-center md:me-4 me-0 lg:col-span-3 w-full md:w-4/12">
            <div>
              <div className="flex justify-center lg:justify-normal">
                <Heading text={"Different Approach For Work"} />
              </div>
              <h2 className="text-sm md:text-base lg:text-2xl 2xl:text-3xl font-semibold text-[#1F1F1F] mt-[15px]">
                Our Approach To Cleaning Service Is Different
              </h2>
              <p className="text-xs lg:text-base mt-2 md:mt-4 mb-3 lg:mb-5 lg:leading-[32px]">
                Welcome to a cleaning service experience like no other. At
                Maricela's Cleaning Magnificence, our approach to cleaning
                transcends the ordinary.
              </p>
              <div className="hidden lg:flex lg:gap-5 md:gap-3 md:justify-start justify-center mt-2 md:mt-4">
                <button className="p-3 rounded-full border-2  hover:text-white hover:bg-[#880769]">
                  <FaChevronLeft fill="#880769" />
                </button>
                <button className=" hover:text-black hover:bg-white border-2 p-3 bg-[#880769] rounded-full">
                  <FaChevronRight fill="#ffffff" />
                </button>
              </div>
            </div>
          </div>

          {/* ====================== swiper slider ============== */}
          <Swiper
            modules={[Autoplay]}
            loop={true}
            autoplay={{
              delay: 3000,
              pauseOnMouseEnter: false,
              disableOnInteraction: false,
              stopOnLastSlide: false,
            }}
            speed={3000}
            allowTouchMove={false}
            breakpoints={breakpoints}
            spaceBetween={20}
          >
            {slideData.map((slideInfo, index) => (
          <SwiperSlide key={index} className={`px-[90px] md:px-0`}>
              
        
        <div className="w-full my-card bg-white h-auto md:h-[390px] border">
              <Image
                src={slideInfo?.imgSrc}
                width={215}
                height={203}
                alt=""
                className="w-full rounded-md"
              />
              <div className="text-center py-3 md:px-2 px-1">
                <h4 className="text-base py-1 md:py-2">
                 {slideInfo?.title}
                </h4>
                <p className="lg:text-sm text-xs md:px-1 text-[#252525] leading-[25px]">
                 {slideInfo?.description}
                </p>
              </div>
            </div>
          
             
              </SwiperSlide>
            ))}
          </Swiper>

          {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:col-span-3">
            <div className="w-full card-sd bg-white">
              <Image
                src={app1}
                width={215}
                height={203}
                alt=""
                className="w-full"
              />
              <div className="text-center py-3 md:px-2 px-1">
                <h4 className="lg:text-base md:text-sm  text-[12px] py-1 md:py-2">
                  Customized Cleaning Plans
                </h4>
                <p className="lg:text-sm md:text-xs text-[8px] md:px-1 text-[#252525]">
                  At our commercial & residential cleaning service in Houston,
                  TX, we believe in tailoring our approach to meet the unique
                  needs of each client. We don't offer a one-size-fits-all
                  solution; instead, we work closely with our customers to
                  understand their specific requirements and preferences.
                </p>
              </div>
            </div>
            <div className="w-full card-sd bg-white">
              <Image
                src={app2}
                width={215}
                height={203}
                alt=""
                className="w-full"
              />
              <div className="text-center py-3 md:px-2 px-1">
                <h4 className="lg:text-base md:text-sm py-1 md:py-2 text-[12px]">
                  Advanced Cleaning Techniques
                </h4>
                <p className="lg:text-sm md:text-xs text-[8px] md:px-1 text-[#252525]">
                  We stay ahead of the curve by utilizing the latest cleaning
                  technologies and techniques. From eco-friendly products to
                  advanced equipment, we ensure that our cleaning methods are
                  not only effective but also environmentally conscious. We stay
                  ahead of the curve by utilizing.
                </p>
              </div>
            </div>
            <div className="w-full card-sd bg-white">
              <Image
                src={app3}
                width={215}
                height={203}
                alt=""
                className="w-full"
              />
              <div className="text-center py-3 md:px-2 px-1">
                <h4 className="lg:text-base md:text-sm py-1 md:py-2 text-[12px]">
                  Trained and Professional Staff
                </h4>
                <p className="lg:text-sm md:text-xs text-[8px] md:px-1 text-[#252525]">
                  Our team consists of highly trained and professional cleaners
                  who are committed to delivering exceptional service. They
                  undergo rigorous training and adhere to strict quality
                  standards to ensure that every job is completed to perfection.
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    
  );
};

export default DifferentApproachForWorkSection;
