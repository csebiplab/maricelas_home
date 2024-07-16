
"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/grid";

import GalImg1 from "../../../public/assets/gallery/gallery1.png";
import GalImg2 from "../../../public/assets/gallery/gallery2.png";
import GalImg3 from "../../../public/assets/gallery/gallery3.png";
import GalImg4 from "../../../public/assets/gallery/gallery4.png";
import GalImg5 from "../../../public/assets/gallery/gallery5.png";

import GalImg12 from "../../../public/assets/gallery/gallery9.png";
import GalImg13 from "../../../public/assets/gallery/gallery10.png";
import GalImg14 from "../../../public/assets/gallery/gallery11.png";
import GalImg15 from "../../../public/assets/gallery/gallery12.png";

import Heading from "@/components/__ui/Heading";

const galImgs = [GalImg1, GalImg2, GalImg3, GalImg4, GalImg5, GalImg3];

const galImgs2 = [GalImg12, GalImg13, GalImg14, GalImg15, GalImg12, GalImg13];

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
    <div className="bg-[#FFF9EE]">
      <div className="custom-container padding__top">
        <div className="">
          <div className=" flex flex-col justify-center items-center ">
            <Heading text={"Project Gallery"} />

            <div>
              <h3 className="text-[28px] md:text-[32px]  text-[#1F1F1F] 3xl:pb-[30px] pb-[25px] text-center font-bold px-3 md:px-0">
                Maricela's Cleaning Magnificence Gallery Of Past Projects
              </h3>
            </div>
          </div>
        </div>

        {isMobileView ? (
          <div>
            <div className="grid grid-cols-1 gap-2">
              {galImgs
                .slice(0, showAll ? galImgs.length : 3)
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
              allowTouchMove={false}
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
              allowTouchMove={false}
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
