"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/grid";

import GalImg1 from "../../../public/assets/gellary/img1.png";
import GalImg2 from "../../../public/assets/gellary/img2.png";
import GalImg3 from "../../../public/assets/gellary/img3.png";
import GalImg4 from "../../../public/assets/gellary/img4.png";
import GalImg5 from "../../../public/assets/gellary/img5.png";

import GalImg11 from "../../../public/assets/gellary/img11.png";
import GalImg12 from "../../../public/assets/gellary/img12.png";
import GalImg13 from "../../../public/assets/gellary/img13.png";
import GalImg14 from "../../../public/assets/gellary/img14.png";
import GalImg15 from "../../../public/assets/gellary/img15.png";
import GalImg16 from "../../../public/assets/gellary/img16.png";

import Heading from "@/components/__ui/Heading";

const ProjectGallerySection = () => {
  const galImgs = [GalImg1, GalImg2, GalImg3, GalImg4, GalImg5, GalImg1];

  const galImgs2 = [GalImg11, GalImg12, GalImg13, GalImg14, GalImg15, GalImg16];

  return (
    <div>
      <div className="">
        <div className="custom-container 3xl:py-[85px] py-[50px]">
          <div className="">
            <div className=" flex flex-col justify-center items-center ">
              <Heading text={"Project Gallery"} />

              <div>
                <h2 className="text-lg lg:text-2xl 2xl:text-[32px]  text-[#1F1F1F] 3xl:pb-[30px] pb-[25px] text-center font-semibold ">
                  Maricela's Cleaning Magnificence Gallery Of Past Projects
                </h2>
              </div>
            </div>
          </div>

          <Swiper
            className="sample-slider w-full"
            modules={[Autoplay]}
            loop={true}
            autoplay={{
              delay: 0,
              pauseOnMouseEnter: false,
              disableOnInteraction: false,
              reverseDirection: true,
              stopOnLastSlide: false,
            }}
            // slidesPerView={5}
            speed={4000}
            allowTouchMove={false}
            breakpoints={{
              0: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              750: {
                slidesPerView: 5,
                spaceBetween: 10,
              },
            }}

            // ,
            //   360: {
            //     slidesPerView: 4,
            //     spaceBetween: 20,
            //   },
            //   750: {
            //     slidesPerView: 4,
            //     spaceBetween: 40,
            //   },
            //   950: {
            //     slidesPerView: 4,
            //     spaceBetween: 50,
            //   },
          >
            {galImgs.map((imgUrl, idx) => (
              <SwiperSlide key={idx} className="m-2">
                <Image
                  className="object-contain w-auto h-auto mx-auto"
                  src={imgUrl}
                  alt="gallery"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            className="sample-slider w-full"
            modules={[Autoplay]}
            loop={true}
            autoplay={{
              delay: 0,
              pauseOnMouseEnter: false,
              disableOnInteraction: false,
              stopOnLastSlide: false,
              reverseDirection: false,
            }}
            // slidesPerView={5}
            speed={4000}
            allowTouchMove={false}
            breakpoints={{
              0: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              750: {
                slidesPerView: 5,
                spaceBetween: 10,
              },
            }}
            // ,
            //   360: {
            //     slidesPerView: 4,
            //     spaceBetween: 20,
            //   },
            //   750: {
            //     slidesPerView: 4,
            //     spaceBetween: 40,
            //   },
            //   950: {
            //     slidesPerView: 4,
            //     spaceBetween: 50,
            //   },
          >
            {galImgs2.map((imgUrl, i) => (
              <SwiperSlide key={i} className="m-2 ">
                <Image
                  className="object-contain w-auto h-auto mx-auto "
                  src={imgUrl}
                  alt="gallery"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ProjectGallerySection;
