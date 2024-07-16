
"use client";


import HeadingIcon from "@/components/__ui/HeadingIcon";
import "./OurApproach.css";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/virtual";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { headingIconText } from "@/utils/heading-text";
import { SwiperNavButtons } from "@/components/CleaningServicesInRichmond/ReviewSwipper/ReviewSlider/SwiperSliderButton";


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
    title: "Personalized Service",
    description: `We begin by understanding your pool's unique characteristics and your specific requirements. This allows us to tailor our cleaning and maintenance approach to best suit your needs.`,
  },
  {
    title: "Advanced Techniques",
    description: `We employ cutting-edge cleaning techniques and use eco-friendly products to ensure thorough cleaning without compromising on environmental responsibility.`,
  },
  {
    title: "Customized Cleaning Plan",
    description: `Based on the assessment, we develop a personalized cleaning plan that outlines the frequency of visits and the scope of services required to keep your pool pristine.`,
  },
  {
    title: "Thorough Cleaning Protocol",
    description: `Our team utilizes advanced cleaning techniques and high-quality equipment to ensure thorough cleaning of the pool surface, tiles, and waterline.`,
  },
  {
    title: "Equipment Inspection",
    description: `Beyond cleaning, we conduct regular inspections of pool equipment such as pumps, filters, and heaters. This proactive approach helps prevent potential issues`,
  },
  {
    title: "Environmentally Friendly",
    description: `We prioritize sustainability by using eco-friendly cleaning products and minimizing chemical usage wherever possible, promoting a safer environment for your family and pets.`,
  },
  {
    title: "Clear Communication",
    description: `Throughout our service, we maintain transparent communication. We provide updates on the cleaning progress, alert you to any maintenance recommendations`,
  },
  {
    title: "Commitment to Excellence",
    description: `Our dedication to exceptional service extends beyond cleanliness. We strive to create a positive experience with every visit, ensuring your complete satisfaction.`,
  },
  {
    title: "Customer Satisfaction",
    description: `Your satisfaction is our priority. We strive to exceed your expectations with every visit, ensuring your pool remains a source of enjoyment and relaxation throughout the year.`,
  }
];

const OurApproach = () => {
  return (
    <div className="bg_vinylPool">
      <div className="container padding__top">
      <div className="">
        <div className="text-center pb-6">
          <div className="flex justify-center gap-[54px]">
            <HeadingIcon text={headingIconText.ourApproach__headingIconText}/>
          </div>
          <h3 className="text-black text-[32px] md:text-[33px] xl:text-[34px] 2xl:text-[36px] 3xl:text-[38px]4xl:text-[40px] 5xl:text-[42px] font-bold text-center">
          Our Approach to Cleaning Is Different
          </h3>
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
                  <h4 className="text-[25px] font-bold py-1 md:py-2 text-center text-balck">
                    {slideInfo?.title}
                  </h4>
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

export default OurApproach;