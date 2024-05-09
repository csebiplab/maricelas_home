import Heading from "@/components/__ui/Heading";
import Image from "next/image";
// import whychoose from "../../../public/assets/random/whychoose.png";
import "./ourexpert.css";

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

const benefits = [
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

const WhyChooseUsSection = () => {
  return (
    <div className="container">
      {/* <div className="grid grid-cols-1 lg:grid-cols-5 2xl:grid-cols-4"> */}
      {/* <div className="lg:col-span-2 2xl:col-span-1 order-2 lg:block hidden ml-[48px]">
          <Image
            src={whychoose}
            width={360}
            height={658}
            className="w-[360px] h-[100dvh] 2xl:h-[658px]"
          />
        </div> */}

      {/* <div className="order-1 col-span-3 shadow-sm py-12"> */}
      <div className="mx-auto flex flex-col sm:text-left text-center">
        <div className="flex justify-center md:justify-normal items-center">
          <Heading text={"Why Choose Us"} />
        </div>

        <h2 className="text-lg md:text-2xl lg:text-3xl 2xl:text-[32px]  text-dark-200 mt-[7px] md:mt-[15px]  mb-[14px] md:mb-5 font-semibold">
          Why Choose Maricela's Cleaning Magnificence Cleaning Services?
        </h2>

        <p className="text-sm md:text-base text-dark-50 lg:leading-[200%] mb-5 md:mb-[25px]">
          Maricela's Cleaning Magnificence stands out as a premier choice for
          commercial & residential cleaning services in Houston due to our
          unwavering commitment to excellence and customer satisfaction.
        </p>
      </div>

      {/* 2 card */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-4">
        <div className="bg-white border shadow rounded-lg">
          <h2 className="title-bg text-center 2xl:py-[8px] py-[5px] text-white 2xl:text-[16px] text-sm  rounded-t-lg">
            Usual Cleaner Experience
          </h2>
          <div className="grid grid-cols-2 py-4 px-5 3xl:px-[25px] text-[8px] lg:text-xs 2xl:text-sm">
            {usualPool.map((usual, idx) => (
              <div
                key={idx}
                className="flex gap-x-3 items-center mb-6 md:mb-9 leading-none  "
              >
                {/* <img
                  src={xImg.src}
                  className="lg:h-[14px] lg:w-[14px] h-[9px] w-[9px] "
                /> */}

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <path
                    d="M6 0C9.318 0 12 2.682 12 6C12 9.318 9.318 12 6 12C2.682 12 0 9.318 0 6C0 2.682 2.682 0 6 0ZM8.154 3L6 5.154L3.846 3L3 3.846L5.154 6L3 8.154L3.846 9L6 6.846L8.154 9L9 8.154L6.846 6L9 3.846L8.154 3Z"
                    fill="#DC0000"
                  />
                </svg>
                <p>{usual.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border shadow rounded-lg ">
          <h2 className="title-bg text-center 2xl:py-[8px] py-[5px] text-white 2xl:text-[16px] text-sm rounded-t-lg">
            Maricela's Cleaning Magnificence
          </h2>
          <div className="grid grid-cols-2 py-4 px-5 3xl:px-[25px] text-[8px] lg:text-xs 2xl:text-sm">
            {benefits.map((usual, idx) => (
              <div
                key={idx}
                className="flex gap-x-3 items-center mb-6 md:mb-9 leading-none "
              >
                {/* <img
                  src={rImg.src}
                  className="lg:h-[14px] lg:w-[14px] h-[9px] w-[9px] "
                /> */}

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <path
                    d="M12 5.99713L10.6691 4.40325L10.8545 2.29336L8.88546 1.82322L7.85455 0L6 0.837076L4.14545 0L3.11455 1.82322L1.14545 2.28763L1.33091 4.39752L0 5.99713L1.33091 7.59102L1.14545 9.70664L3.11455 10.1768L4.14545 12L6 11.1572L7.85455 11.9943L8.88546 10.171L10.8545 9.70091L10.6691 7.59102L12 5.99713ZM4.90909 8.86383L2.72727 6.57047L3.49636 5.76206L4.90909 7.24128L8.50364 3.46297L9.27273 4.27711L4.90909 8.86383Z"
                    fill="#049E43"
                  />
                </svg>
                <p className="">{usual.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* </div> */}
      {/* </div> */}
    </div>
  );
};

export default WhyChooseUsSection;
