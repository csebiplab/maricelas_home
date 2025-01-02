import HeadingIcon from "@/components/__ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";
import React from "react";

const GetAreaCleanedWithUs = () => {
  return (
    <div className="full__section_r_p pl-3 md:pl-0 padding__all bg-dark-200">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-[20px] lg:gap-[22px] xl:gap-[24px] 2xl:gap-[26px] 3xl:gap-[28px] 4xl:gap-[30px] 5xl:gap-[32px]">
        <div className="md:col-span-2">
          <Image
            src="/assets/homePage/get-area.png"
            alt="get area cleaned with us"
            width={615}
            height={542}
            className="w-full"
          />
        </div>
        <div className="md:col-span-3">
          <div className="flex justify-center md:justify-start items-center">
            <HeadingIcon
              text={headingIconText.getAreaCleaned__headingIconText}
            />
          </div>
          <h2 className="text-[32px] md:text-[33px] lg:text-[34px] xl:text-[36px] 2xl:text-[38px] 3xl:text-[39px] 4xl:text-[41px] 5xl:text-[42px] font-bold text-black leading-normal mb-[10px]">
            Get Your Commercial & Residential Area Cleaned With Us
          </h2>
          <p className="text-base 4xl:text-[17px] 5xl:text-lg font-normal text-dark leading-[30px] 3xl:leading-[32px] 4xl:leading-[34px] 5xl:leading-[36px]">
            Transform your commercial and residential spaces into pristine
            havens with our professional cleaning services in Houston, TX. Our
            dedicated cleaning team utilizes state-of-the-art equipment and
            eco-friendly products to ensure a thorough and safe cleaning
            experience. Whether deep cleaning carpets, sanitizing surfaces, or
            tackling tough stains, we are committed to exceeding your
            expectations. Say goodbye to dirt, dust, and grime, and hello to a
            fresh, welcoming environment. Trust Maricela's Cleaning Magnificence
            to handle all your cleaning needs with precision and care. Our
            experienced team is dedicated to delivering exceptional results,
            whether it's a one-time deep clean, regular maintenance, or
            specialized services like move-in/move-out cleaning or
            post-construction cleanup. We pride ourselves on our attention to
            detail, flexible scheduling, and affordable rates, making us the
            ideal choice for residential and commercial clients. Let us take the
            hassle out of cleaning so you can enjoy a fresh, organized, and
            welcoming environment. Experience the difference of working with
            trusted professionals who prioritize your satisfaction. Contact us
            today to schedule your cleaning appointment, and let us bring
            cleanliness and comfort back to your space.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetAreaCleanedWithUs;
