
import HeadingIcon from "@/components/__ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";
import Link from "next/link";

import "./EnjoyableFreshly.css"

const EnjoyableFreshly = () => {
  return (
    <div className=" ">
      <div className="padding__top full__section_l_p pr-3 md:pr-0">
        <div className="grid md:grid-cols-6 grid-cols-1 gap-7">
          <div className="order-2 md:col-span-3 flex justify-end items-center md:items-start">
            <div className="">
              <Image
                src="/assets/cleaningServices/Enjoyable Freshly.png"
                width={923}
                height={614}
                alt="Trusted Cleaning image"
                className=""
              />
            </div>
          </div>

          <div className="order-1 md:col-span-3 flex flex-col justify-center items-center md:items-start pt-6 md:pt-0">
            <div className="flex md:justify-normal justify-center md:items-start items-center mb-4">
              <HeadingIcon text={headingIconText.enjoyableFreshly__headingIconText}/>
            </div>
            <h3 className="text-black text-[32px] md:text-[33px] xl:text-[34px] 2xl:text-[36px] 3xl:text-[38px]4xl:text-[40px] 5xl:text-[42px] font-bold text-center md:text-left">
            Enjoyable Freshly Cleaned Home
            </h3>

            <p className="text-[#111] text-lg font-normal mt-4 text-center md:text-left">
            Step into a realm of tranquility and cleanliness with Maricela's Cleaning Magnificence, where we redefine the essence of a freshly cleaned home. Imagine opening the door to a space that not only looks pristine but feels revitalizing—a sanctuary where every corner gleams with immaculate cleanliness. At our cleaning company, we are committed to transforming your home into an oasis of comfort and joy. Our expert team meticulously tends to every detail, ensuring that surfaces are not just clean, but sparkling. With our cleaning company, enjoy the peace of mind that comes from knowing your home is in expert hands. Let us create an enjoyable, freshly cleaned home for you to savor and relax in. Contact us today to schedule your cleaning service and discover the true joy of a meticulously cleaned home.

            </p>
            <Link href="tel:(832) 820-4035">
            <button className="flex items-center gap-3 my-[18px] btn_bg text-lg font-bold text-black py-2 px-6 ">Get an Estimate <svg xmlns="http://www.w3.org/2000/svg" width="9" height="13" viewBox="0 0 9 13" fill="none">
            <path d="M1.78711 0L0 1.61048L5.42578 6.5L0 11.3895L1.78711 13L9 6.5L1.78711 0Z" fill="black"/>
            </svg></button>
            </Link>
            <h5 className="text-[30px] font-bold text-black"> <span>or Call Us:</span>  <Link href="tel:(832) 820-4035"><span className="text-[#880769]"> (832) 820-4035 </span> </Link> </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnjoyableFreshly;