"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/grid";

import GalImg1 from "../../../../public/assets/houseCleaningServices/gallery/pg1.png";
import GalImg2 from "../../../../public/assets/houseCleaningServices/gallery/pg2.png";
import GalImg3 from "../../../../public/assets/houseCleaningServices/gallery/pg3.png";
import GalImg4 from "../../../../public/assets/houseCleaningServices/gallery/pg4.png";
import GalImg5 from "../../../../public/assets/houseCleaningServices/gallery/pg5.png";
import GalImg6 from "../../../../public/assets/houseCleaningServices/gallery/pg6.png";
import GalImg7 from "../../../../public/assets/houseCleaningServices/gallery/pg7.png";
import GalImg8 from "../../../../public/assets/houseCleaningServices/gallery/pg8.png";
import GalImg9 from "../../../../public/assets/houseCleaningServices/gallery/pg9.png";
import GalImg10 from "../../../../public/assets/houseCleaningServices/gallery/pg10.png";
import GalImg11 from "../../../../public/assets/houseCleaningServices/gallery/pg11.png";
import GalImg12 from "../../../../public/assets/houseCleaningServices/gallery/pg12.png";
import GalImg13 from "../../../../public/assets/houseCleaningServices/gallery/pg13.png";
import GalImg14 from "../../../../public/assets/houseCleaningServices/gallery/pg14.png";

import Heading from "@/components/__ui/Heading";

const galImgs = [GalImg1, GalImg2, GalImg3, GalImg4, GalImg5, GalImg6, GalImg7];

const galImgs2 = [GalImg14, GalImg13, GalImg12, GalImg11, GalImg10, GalImg9, GalImg8];

const ProjectGallery = () => {
  const [isMobileView, setIsMobileView] = useState(false);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLoadMore = () => {
    setShowAll(true);
  };

  return (
    <div  className=''>
      <div className="custom-container  padding__top">
        <div className="">
          <div className=" flex flex-col justify-center items-center ">
            <Heading text={"Project Gallery"} />

            <div>
              <h2 className="text-[28px] md:text-[32px]  text-[#1F1F1F] 3xl:pb-[30px] pb-[25px] text-center font-bold ">
                Maricela's Cleaning Magnificence Gallery Of Past Projects
              </h2>
            </div>
          </div>
        </div>

        {isMobileView ? (
          <div>
            <div className="grid grid-cols-1 gap-2">
              {galImgs
                .slice(0, showAll ? galImgs.length : 4)
                .map((imgUrl, idx) => (
                  <div key={idx} className="m-2 px-6">
                    <Image
                      width={370}
                      height={250}
                      src={imgUrl}
                      alt="gallery"
                      className="object-contain w-full h-auto mx-auto"
                    />
                  </div>
                ))}
            </div>
            {!showAll && (
              <div className="flex justify-center text-center mt-4 px-10">
                <button
                  onClick={handleLoadMore}
                  className="w-[146px] h-auto flex items-center justify-center gap-2 text-lg font-bold px-4 py-2 bg-[#FBCC21] text-black rounded"
                >
                  Load More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="7"
                    height="11"
                    viewBox="0 0 7 11"
                    fill="none"
                  >
                    <path
                      d="M1.38997 0.348633L0 1.58746L4.22005 5.34863L0 9.1098L1.38997 10.3486L7 5.34863L1.38997 0.348633Z"
                      fill="black"
                    />
                  </svg>
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
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
              speed={4000}
              allowTouchMove={true}
              breakpoints={{
                768: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 10,
                },
              }}
            >
              {galImgs.map((imgUrl, idx) => (
                <SwiperSlide key={idx} className="m-2">
                  <Image
                    width={360}
                    height={280}
                    src={imgUrl}
                    alt="gallery"
                    className="object-contain w-full h-auto mx-auto"
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
              speed={4000}
              allowTouchMove={true}
              breakpoints={{
                768: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 10,
                },
              }}
            >
              {galImgs2.map((imgUrl, i) => (
                <SwiperSlide key={i} className="m-2">
                  <Image
                    width={360}
                    height={280}
                    src={imgUrl}
                    alt="gallery"
                    className="object-contain w-full h-auto mx-auto"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </>
        )}
      </div>
    </div>
  );
};

export default ProjectGallery;
