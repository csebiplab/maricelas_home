import React from "react";
import joinusImg from "../../../public/assets/random/withus 1.png"
import Image from "next/image";
import Heading from "@/ui/Heading";

const CleanWithUsSection = () => {
  return <div>
    <div className="bg-[#C477B126]">
      <div className=" container grid sm:grid-cols-3 grid-cols-1 md:py-0 py-10 ">
        <div className=" col-span-1 sm:block flex sm:justify-normal justify-center sm:-pb-[0px] pb-[10px]">
          <Image src={joinusImg} height={750} width={485} />
        </div>
        <div className=" flex justify-center items-center col-span-2 lg:ml-[55px] ml-[35px]">
          <div>
            <div>
              <Heading text={"With Us"}></Heading>
            </div>
            <p className="lg:text-[32px] text-[20px] font-semibold lg:mb-[25px] mb-[15px]">Get Your Commercial & Residential Area Cleaned With Us</p>
            <p className="lg:text-[16px] md:text-[14px] text-[12px] lg:leading-[32px] leading-[20px] text-justify ">Transform your commercial and residential spaces into pristine havens with our professional cleaning services in Houston, TX. Our dedicated team utilizes state-of-the-art equipment and eco-friendly cleaning products to ensure a thorough and safe cleaning experience. Whether it's deep cleaning carpets, sanitizing surfaces, or tackling tough stains, we are committed to exceeding your expectations. Say goodbye to dirt, dust, and grime, and hello to a fresh, welcoming environment. Contact us today to schedule your cleaning appointment and let us bring cleanliness and comfort back to your space.</p>
          </div>
        </div>
      </div>
    </div>
  </div>;
};

export default CleanWithUsSection;
