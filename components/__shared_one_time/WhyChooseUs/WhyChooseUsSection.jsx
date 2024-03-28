import Heading from "@/ui/Heading";
import Image from "next/image";
import rImg from "../../../public/assets/exPool/r.png";
import xImg from "../../../public/assets/exPool/x.png";
import whychoose from "../../../public/assets/random/whychoose.png";
import "./ourexpert.css";


const WhyChooseUsSection = () => {

  const usualPool = [
    {
      title: "Management problem",
    },
    {
      title: "All materials hassle on you",
    },
    {
      title: "Unprofessional labour",
    },
    {
      title: "Poor customer service",
    },
    {
      title: "Poor quality of service",
    },
    {
      title: "Unclear price changes",
    },
    {
      title: "Minimal or no design",
    },
    {
      title: "Poor communication",
    },
    {
      title: "Lack of professionalism",
    },
    {
      title: "Lack of Concentrate",
    },
  ];

  const easyPool = [
    {
      title: "Start to finish customer support",
    },
    {
      title: "Materials ordered and delivered",
    },
    {
      title: "Professional trusted cleaners",
    },
    {
      title: "Trained and Trustworthy Staff",
    },
    {
      title: "Upfront transparent proposal",
    },
    {
      title: "Experienced design help",
    },
    {
      title: "Customized Cleaning Plans",
    },
    {
      title: "Consistent Quality Assurance",
    },

  ];


  return <div>
    <div className="bg-[#C477B126]">
      <div className=" custom-container  grid grid-cols-4 ">
        <div className=" col-span-1 order-2 mx-[20px] ">
          <Image src={whychoose} width={360} height={660} className="  bottom-0" />
        </div>
        <div className=" order-1 2xl:ml-[285px] col-span-3 2xl:py-15 py-10 shadow-sm md:mx-0 mx-[35px] ">
          <div className="mx-auto   flex flex-col ">
            <div>
              <Heading text={'Why Choose Us'} />
            </div>

            <div>
              <p className="2xl:text-[32px] md:text-[20px] text-[18px] md:pb-0 pb-[20px] font-semibold ">
                Why Choose Maricela's Cleaning Magnificence Cleaning Services?
              </p>
            </div>

            <div>
              <p className=" md:block hidden 2xl:text-[16px] text-[14px] 3xl:py-[16px] py-[10px] ">
                Maricela's Cleaning Magnificence stands out as a premier choice for commercial & residential cleaning services in Houston due to our unwavering commitment to excellence and customer satisfaction.f
              </p>
            </div>
          </div>

          <div className=" grid md:grid-cols-2 2xl:gap-[15px] md:gap-[10px] ">
            <div className="bg-white border shadow rounded-lg">
              <h2 className="title-bg text-center 2xl:py-[8px] py-[5px] text-white 2xl:text-[16px] text-[14px]  rounded-t-lg">
                Usual Cleaner Experience
              </h2>
              <div className="  grid grid-cols-2 3xl:py-[16px] py-[10px]  3xl:px-[25px] px-[20px] 2xl:text-[14px] lg:text-[12px] text-[8px]   ">
                {usualPool.map((usual, idx) => (
                  <div key={idx} className="flex  gap-4 items-center 3xl:mb-[40px]   leading-none  ">
                    <img
                      src={xImg.src}
                      className="2xl:h-[14px] 2xl:w-[14px] h-[8px] w-[8px] "
                    ></img>
                    <p>{usual.title}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border shadow rounded-lg ">
              <h2 className="title-bg text-center 2xl:py-[8px] py-[5px] text-white 2xl:text-[16px] text-[14px] rounded-t-lg">
                Usual Cleaner Experience
              </h2>
              <div className="  grid grid-cols-2 3xl:py-[16px] py-[10px] 3xl:px-[25px] px-[20px] 2xl:text-[14px] lg:text-[12px] text-[8px] ">
                {easyPool.map((usual, idx) => (
                  <div key={idx} className="flex  gap-4 items-center 3xl:mb-[40px]  leading-none ">
                    <img
                      src={rImg.src}
                      className="2xl:h-[14px] 2xl:w-[14px] h-[8px] w-[8px] "
                    ></img>
                    <p className="">{usual.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>;
};

export default WhyChooseUsSection;
