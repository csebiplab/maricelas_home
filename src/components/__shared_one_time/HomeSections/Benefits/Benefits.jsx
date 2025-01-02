import React from "react";
import "./Benefits.css";
import HeadingIcon from '@/components/__ui/HeadingIcon';
import { headingIconText } from '@/utils/heading-text';

const ourRenovatorData1 = [
  {
    id: 1,
    title: "Reliable and Trustworthy",
    desc: "Our team consists of thoroughly vetted professionals committed to delivering high-quality service with integrity. You can trust us to care for your home or business",
  },
  {
    id: 2,
    title: "Customized Cleaning Plans",
    desc: "Our cleaning professionals understand that every space is unique. We tailor our cleaning plans to your needs, we don't overlook any detail.",
  },
  {
    id: 3,
    title: "Time and stress saver",
    desc: "Hiring us allows you to focus on what matters most while we take care of the cleaning. Save time and energy by leaving the dirty work to us.",
  },
  {
    id: 4,
    title: "Flexible Scheduling",
    desc: "Whether you need weekly, biweekly, monthly, or one-time services, we offer flexible scheduling to fit your busy lifestyle.",
  },
  {
    id: 5,
    title: "Experienced Professionals",
    desc: "Our cleaning experts bring years of experience and skill, ensuring top-notch results every time.",
  },
  {
    id: 6,
    title: "Consistent Quality",
    desc: "Our expert cleaners deliver reliable, high-quality cleaning services every visit. You can enjoy a consistently clean and refreshed space."
  },
];

const Benefits = () => {
  return (
    <div className="bg-white py-[25px] xl:py-[30px] 5xl:py-[35px]">
      <div data-aos="zoom-in" className="container ">
        <div className="flex flex-col items-center justify-center">
        <HeadingIcon text={headingIconText.benefits__headingIconText}/>
          <h2 className="text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-black leading-tight 5xl:leading-normal mb-[10px] text-center">
          Benefits of Working With Our Cleaning Services in Houston
          </h2>
          <p className="text-base 4xl:text-[17px] 5xl:text-lg font-normal text-dark leading-[30px] 5xl:leading-[36px] text-center">Choosing Maricela's Cleaning Magnificence comes with several key advantages</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[18px] 2xl:gap-[21px] 3xl:gap-[24px] 4xl:gap-[27px] 5xl:gap-[30px] mt-[25px]">
          {ourRenovatorData1?.map((data) => {
            return (
              <div
                key={data.id}
                className="group benefits__cart__bg hover:bg-primary pt-[14px] pb-[21px] px-2"
              >
                <p className="text-[20px] xl:text-[21px] 2xl:text-[22px] 3xl:text-[23px] 4xl:text-[24px] 5xl:tex5-[25px] text-center font-bold text-black group-hover:text-white leading-normal">
                  {data.title}
                </p>
                <p className="text-base 4xl:text-[17px] 5xl:text-lg font-normal text-black group-hover:text-white leading-[35px] text-center">
                  {data.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* second part  */}
        <div className="w-full flex flex-col md:flex-row justify-center mt-[18px] 2xl:mt-[21px] 3xl:mt-[24px] 4xl:mt-[27px] 5xl:mt-[30px] gap-[18px] 2xl:gap-[21px] 3xl:gap-[24px] 4xl:gap-[27px] 5xl:gap-[30px] mt-[25px]">
          <div className="w-full md:w-1/3 group benefits__cart__bg hover:bg-primary pt-[14px] pb-[21px] px-2">
            <p className="text-[20px] xl:text-[21px] 2xl:text-[22px] 3xl:text-[23px] 4xl:text-[24px] 5xl:tex5-[25px] text-center font-bold text-black group-hover:text-white leading-normal">
            Healthier Environment
            </p>
            <p className="text-base 4xl:text-[17px] 5xl:text-lg font-normal text-black group-hover:text-white leading-[35px] text-center">
            A clean space always promotes a healthier lifestyle. Our deep cleaning services in Houston reduce dust, allergens, and germs, making your home or office safer for everyone.
            </p>
          </div>
          <div className="w-full md:w-1/3 group benefits__cart__bg hover:bg-primary pt-[14px] pb-[21px] px-2">
            <p className="text-[20px] xl:text-[21px] 2xl:text-[22px] 3xl:text-[23px] 4xl:text-[24px] 5xl:tex5-[25px] text-center font-bold text-black group-hover:text-white leading-normal">
            Satisfaction Guaranteed
            </p>
            <p className="text-base 4xl:text-[17px] 5xl:text-lg font-normal text-black group-hover:text-white leading-[35px] text-center">
            Your happiness is our priority. If you're ever unsatisfied with our work, we'll make it right—because we're not happy until you are.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
