"use client";

import "./HireUs.css";
import Image from "next/image";
import HeadingIcon from '@/components/__ui/HeadingIcon';
import { headingIconText } from '@/utils/heading-text';

const benefitsData = [
  {
    id: 1,
    img: "/assets/primeBasementHomePage/benefits/benefits1.png",
    title: "Increased Home Value",
    desc: "Whether you're adding a rental suite, home theater, or extra living space, our transformations provide a great return on investment.",
  },
  {
    id: 2,
    img: "/assets/primeBasementHomePage/benefits/benefits2.png",
    title: "Customized Designs",
    desc: "We don't believe in one size fits all. Our expert design team works with you to create a basement that fits your style, needs, and lifestyle, from layout to finishing touches.",
  },
  {
    id: 3,
    img: "/assets/primeBasementHomePage/benefits/benefits3.png",
    title: "High-Quality Craftsmanship",
    desc: "With years of experience in the industry, our contractors take pride in delivering superior craftsmanship. From sturdy framing to flawless finishes, we use only the best materials and techniques.",
  },
  {
    id: 4,
    img: "/assets/primeBasementHomePage/benefits/benefits4.png",
    title: "Timely completion",
    desc: "Our team is committed to completing your project on schedule without compromising quality, allowing you to enjoy your new space as soon as possible.",
  },
  {
    id: 5,
    img: "/assets/primeBasementHomePage/benefits/benefits5.png",
    title: "Expert Project Management",
    desc: "Our experienced project managers handle every detail of your basement renovation, ensuring smooth communication, coordination, and timely delivery.",
  },
  {
    id: 6,
    img: "/assets/primeBasementHomePage/benefits/benefits6.png",
    title: "Energy Efficiency",
    desc: "We help optimize your basement's energy efficiency by suggesting eco-friendly solutions, such as better insulation, energy-efficient lighting, and climate control systems, keeping your space comfortable year-round.",
  },
  {
    id: 7,
    img: "/assets/primeBasementHomePage/benefits/benefits7.png",
    title: "Seamless Integration with Your Home",
    desc: "Your basement will feel like an integral part of your home, not an afterthought. We ensure the renovation complements your existing home's design, layout, and flow.",
  },
  {
    id: 8,
    img: "/assets/primeBasementHomePage/benefits/benefits8.png",
    title: "Safety and Code Compliance",
    desc: "We adhere to all local building codes and regulations, ensuring that your renovation meets safety standards. You can rest assured that all electrical, plumbing, and structural work is done to code.",
  },
  {
    id: 9,
    img: "/assets/primeBasementHomePage/benefits/benefits9.png",
    title: "No Hidden Costs",
    desc: "From the initial estimate to the final invoice, we ensure you are fully informed of all costs, helping you avoid unexpected expenses.",
  },
];

const HireUs = () => {
  return (
    <div className=" ">
      <div
        data-aos="zoom-in"
        className="container padding__top"
      >
        <div className="!overflow-hidden">
          <div className="flex flex-col items-center">
            <div className="flex justify-center lg:justify-normal items-center">
            <HeadingIcon text={headingIconText.hireUs__headingIconText}/>
            </div>
            <h2 className="text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-black text-center leading-normal">
              Benefits of Your Basement Renovation With Us
            </h2>
          </div>
          {/* first div  */}
          <div className="grid grid-cols-1 md:grid-cols-3 mt-[25px]">
            {benefitsData?.map((data) => {
              return (
                <div
                  key={data.id}
                  className="cart__bg__benefits px-[18px] pt-[16px] pb-[22px]"
                >
                  <Image
                    src={data.img}
                    alt="benefits image"
                    width={62}
                    height={62}
                    className="w-[62px] h-[62px]"
                  />
                  <p className="text-[20px] font-bold text-left text-black leading-normal mt-[10px]">
                    {data.title}
                  </p>
                  <p className="text-lg font-normal text-black text-left leading-normal mt-[5px]">
                    {data.desc}
                  </p>
                </div>
              );
            })}
          </div>
          {/* second div  */}
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="md:col-span-1 cart__bg__benefits px-[18px] pt-[16px] pb-[22px]">
              <Image
                src="/assets/primeBasementHomePage/benefits/benefits10.png"
                alt="benefits image"
                width={62}
                height={62}
                className="w-[62px] h-[62px]"
              />
              <p className="text-[20px] font-bold text-left text-black leading-normal mt-[10px]">
                Stress-Free Experience
              </p>
              <p className="text-lg font-normal text-black text-left leading-normal mt-[5px]">
                Our team takes care of everything, minimizing disruption to your
                daily life. We aim to make the renovation process as smooth and
                hassle-free as possible, from start to finish.
              </p>
            </div>
            <div className="md:col-span-2 cart__bg__benefits px-[18px] pt-[16px] pb-[22px]">
              <Image
                src="/assets/primeBasementHomePage/benefits/benefits11.png"
                alt="benefits image"
                width={62}
                height={62}
                className="w-[62px] h-[62px]"
              />
              <p className="text-[20px] font-bold text-left text-black leading-normal mt-[10px]">
                Get Your Free Basement Renovation Consultation
              </p>
              <p className="text-lg font-normal text-black text-left leading-normal mt-[5px]">
                "Ready to transform your basement? Book a free consultation with
                Toronto's trusted renovation experts at Prime Basement
                Renovations. Let's bring your vision to life!"
              </p>
              <div className="mt-[25px]">
                <button className="flex items-center gap-[10px] py-[15px] px-[12px] text-base font-bold text-white leading-normal rounded-[8px] bg-primary-700">
                  Get a Consultant{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="12"
                    viewBox="0 0 22 12"
                    fill="none"
                  >
                    <path
                      d="M1 5.25C0.585786 5.25 0.25 5.58579 0.25 6C0.25 6.41421 0.585786 6.75 1 6.75V5.25ZM21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989593 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM1 6.75H21V5.25H1V6.75Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HireUs;
