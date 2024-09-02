
"use client";


import HeadingIcon from "@/components/__ui/HeadingIcon";
import "./WhyWeSpecial.css";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/virtual";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { headingIconText } from "@/utils/heading-text";
import { SwiperNavButtons } from "../ReviewSwipper/ReviewSlider/SwiperSliderButton";


const breakpoints = {
  0: {
    slidesPerView: 1,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 30,
  },
};

const slideData = [
  {
    title: "Health and Safety",
    description: `We prioritize the well-being of our clients by using only chemical-free and non-toxic cleaning products. This ensures a clean environment without compromising health.`,
  },
  {
    title: "Exceptional Quality",
    description: `Our team is dedicated to delivering meticulous cleaning services with attention to detail. We strive for excellence in every aspect of our work, from routine cleaning to specialized.`,
  },
  {
    title: "Customized Service",
    description: `We tailor our cleaning services to meet the specific needs and preferences of our clients, ensuring personalized care and satisfaction.`,
  },
  {
    title: "Environmental Responsibility",
    description: `We are committed to sustainability. By choosing eco-friendly practices and products, we minimize our impact on the environment while maintaining effective`,
  },
  {
    title: "Trusted and Reliable",
    description: `Clients in Richmond trust us for our reliability and consistency. We arrive on time, work efficiently, and ensure thorough cleaning results that meet or exceed expectations.`,
  },
  {
    title: "Customer Satisfaction",
    description: `Your happiness is our priority. We strive to build long-term relationships with our clients by providing exceptional service and exceeding their cleaning expectations.`,
  },
  {
    title: "Professionalism",
    description: `Our team is experienced, trained, and professional in every interaction. We uphold high standards of conduct and respect for your home or business.`,
  }
  
];

const WhyWeSpecial = () => {
  return (
    <div className="bg_vinylPool">
      <div className="container padding__top">
      <div className="">
        <div className="text-center pb-6">
          <div className="flex justify-center gap-[54px]">
            <HeadingIcon text={headingIconText.whyWeSpecial__headingIconText}/>
          </div>
          <h2 className="text-black text-[32px] md:text-[33px] xl:text-[34px] 2xl:text-[36px] 3xl:text-[38px]4xl:text-[40px] 5xl:text-[42px] font-bold text-center">
          What Makes Our Company Special
          </h2>
        </div>

        {/* ==================== swiper slider ================ */}
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
          spaceBetween={12}
        >
          {slideData.map((slideInfo, index) => (
            <SwiperSlide key={index} className={`px-[30px] md:px-0 !h-auto !md:h-full`}>
              <div className="w-full !h-full  card-sd bg-primary">
                <div className="text-center py-3 md:px-2 px-1">
                  <p className="text-[25px] font-bold py-1 md:py-2 text-center text-balck">
                    {slideInfo?.title}
                  </p>
                  <p className="text-lg font-normal md:px-1 text-center text-black">
                    {slideInfo?.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <SwiperNavButtons/>
        </Swiper>
      </div>
    </div>
    </div>
    
  );
};

export default WhyWeSpecial;