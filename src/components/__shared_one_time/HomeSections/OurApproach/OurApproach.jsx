import Image from "next/image";
import HeadingIcon from '@/components/__ui/HeadingIcon';
import { headingIconText } from '@/utils/heading-text';

const ourApproachData = [
  {
    id: 1,
    title: "Commitment to Excellence:",
    desc : "We strive for perfection in everything we do and are satisfied until our clients are thrilled with the results."
  },
  {
    id: 2,
    title: "Transparent Communication:",
    desc : "Our cleaners prioritize clear and transparent communication with our clients. We inform our clients at every stage, from initial consultations to ongoing updates, to consistently meet their expectations."
  },
  {
    id: 3,
    title: "Advanced Cleaning Techniques:",
    desc : "Our cleaning specialists use the latest technologies and techniques to stay ahead of the curve. From eco-friendly products to advanced equipment, we ensure our cleaning methods are effective and environmentally conscious."
  },
  {
    id: 4,
    title: "Personalized Cleaning Plans:",
    desc : "Every space is unique, so we tailor our services to meet your needs. Whether you need a one-time deep clean, routine maintenance, or specialized cleaning for a particular area, our solutions are customized to fit your preferences."
  },
  {
    id: 5,
    title: "Focus on Quality, Not Quantity:",
    desc : "Unlike traditional cleaning services, we prioritize quality over speed. Our team takes the time to ensure every detail is perfect, from spotless floors to sanitized surfaces, so your space not only looks clean but feels clean."
  },
  {
    id: 6,
    title: "Eco-Friendly and Safe Products:",
    desc : "We use non-toxic, eco-friendly cleaning products that are safe for your family, pets, and employees while delivering outstanding results."
  },
  {
    id: 7,
    title: "Attention to Detail:",
    desc : "Our cleaners are trained to notice what others might overlook. We ensure that every corner, crevice, and hard-to-reach spot is thoroughly cleaned, leaving your space impeccable."
  },
  {
    id: 8,
    title: "Respect for Your Space:",
    desc : "We treat your home or business with the utmost respect, maintaining a professional and courteous demeanor."
  },
];

const OurApproach = () => {
  return (
    <div className="">
      <div data-aos="zoom-in" className="custom-container padding__all">
        <div className="">
          <div className="flex flex-col justify-center items-center">
          <HeadingIcon text={headingIconText.ourApproach__headingIconText}/>
            <div className="">
              <h2 className="text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-black text-center leading-normal">
              Our Approach To Cleaning Service Is Different
              </h2>
              <p className="text-base 4xl:text-[17px] 5xl:text-lg font-normal leading-normal text-dark mt-[10px] text-center">Experience the difference of a cleaning service that's truly committed to your satisfaction. Choose Maricelas Cleaning Magnificence for a level of care and <br/> professionalism that stands out. Contact us today to see how our unique approach can transform your space!</p>
            </div>
            {/* cart part */}
            {/* large device  */}
            <div className="hidden lg:block">
            <div className="grid grid-cols-1 md:grid-cols-6 mt-[25px]">
              <div className="md:col-span-1">
                <Image
                  src="/assets/homePage/our-appraoch/our-approach1.png"
                  alt="our approach"
                  width={334}
                  height={907}
                  className="w-full h-full"
                />
              </div>
              <div className="md:col-span-4 py-[20px] lg:py-[22px] xl:py-[24px] 2xl:py-[26px] 3xl:py-[28px] 4xl:py-[30px] 5xl:py-[32px] px-[15px] md:px-[16px] lg:px-[17px] xl:px-[18px] 2xl:px-[19px] 3xl:px-[20px] 4xl:px-[21px] 5xl:px-[22px] bg-white">
                {ourApproachData?.map((data) => {
                  return (
                    <div
                      key={data?.id}
                      className={`py-1 ${data?.id === 8 ? "border-0" : "border-b border-black"}`}
                    >
                      <p className="text-[20px] 4xl:text-[21px] 5xl:text-[22px] font-bold text-black leading-[30px] 5xl:leading-[36px]">
                        {data?.title}
                      </p>
                      <p className="text-base 4xl:text-[17px] 5xl:text-lg font-normal text-black leading-[30px] 5xl:leading-[36px]">
                        {data?.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
              <div className="md:col-span-1">
              <Image
                  src="/assets/homePage/our-appraoch/our-approach2.png"
                  alt="our approach"
                  width={334}
                  height={907}
                  className="w-full h-full"
                />
              </div>
            </div>
            </div>

            {/* small device  */}
            <div className="block lg:hidden">
            <div className="mt-[25px]">

            <div className="py-[20px] lg:py-[22px] xl:py-[24px] 2xl:py-[26px] 3xl:py-[28px] 4xl:py-[30px] 5xl:py-[32px] px-[15px] md:px-[16px] lg:px-[17px] xl:px-[18px] 2xl:px-[19px] 3xl:px-[20px] 4xl:px-[21px] 5xl:px-[22px] bg-white">
                {ourApproachData?.map((data) => {
                  return (
                    <div
                      key={data?.id}
                      className={`py-1 ${data?.id === 8 ? "border-0" : "border-b border-black"}`}
                    >
                      <p className="text-[20px] 4xl:text-[21px] 5xl:text-[22px] font-bold text-black leading-[30px] 5xl:leading-[36px]">
                        {data?.title}
                      </p>
                      <p className="text-base 4xl:text-[17px] 5xl:text-lg font-normal text-black leading-[30px] 5xl:leading-[36px]">
                        {data?.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
              <div className="flex items-center gap-2 mt-[25px]">
              <Image
                  src="/assets/homePage/our-appraoch/our-approach1.png"
                  alt="our approach"
                  width={334}
                  height={907}
                  className="w-full h-full"
                />
                <Image
                  src="/assets/homePage/our-appraoch/our-approach2.png"
                  alt="our approach"
                  width={334}
                  height={907}
                  className="w-full h-full"
                />
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurApproach;
