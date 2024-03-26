import React from "react";
import joinusImg from "../../../public/assets/random/withus 1.png"
import Image from "next/image";

const CleanWithUsSection = () => {
  return <div>
    <div className="bg-[#C477B126]">
      <div className="grid grid-cols-3 ">
        <div className=" col-span-1">
          <Image src={joinusImg} height={750} width={485} />
        </div>
        <div className=" flex justify-center items-center col-span-2 lg:ml-[55px] ml-[35px]">
          <div>
            <p>join us </p>
            <p className="lg:text-[32px] text-[20px] font-semibold lg:mb-[25px] mb-[15px]">Get Your Commercial & Residential Area Cleaned With Us</p>
            <p className="lg:text-[16px] text-[14px] lg:leading-[32px] leading-[20px] text-justify ">Transform your commercial and residential spaces into pristine havens with our professional cleaning services in Houston, TX. Our dedicated team utilizes state-of-the-art equipment and eco-friendly cleaning products to ensure a thorough and safe cleaning experience. Whether it's deep cleaning carpets, sanitizing surfaces, or tackling tough stains, we are committed to exceeding your expectations. Say goodbye to dirt, dust, and grime, and hello to a fresh, welcoming environment. Contact us today to schedule your cleaning appointment and let us bring cleanliness and comfort back to your space.</p>
          </div>
        </div>
      </div>
    </div>
  </div>;
};

export default CleanWithUsSection;
