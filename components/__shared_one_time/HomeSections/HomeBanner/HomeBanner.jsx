// import "./HomeBanner.css";

// const HomeBanner = () => {
//   return (
//     <div className="container home-banner py-20 min-h-screen flex justify-center items-center bg-blend-multiply bg-dark-50">
//       <div className="text-center banner-content">
//         <div>
//           <h1 className="text-white title text-3xl xl:text-4xl 2xl:text-[42px] 4xl:text-[45px] leading-10">
//             Commercial & Residential Cleaning Services in Houston
//           </h1>
//           <p className="mt-8 leading-10 text-white text-base font-normal lg:px-20 text-center">
//             Best commercial & residential cleaning services in Houston, we pride
//             ourselves on delivering meticulous cleanliness and unparalleled
//             customer satisfaction.
//           </p>
//           <div className="flex justify-center">
//             <button className="flex items-center rounded-md z-40 btn__shadow bg-warning py-4 px-8 mt-8">
//               <span className="text-dark text-base font-bold mr-3">
//                 Get an Estimate
//               </span>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="9"
//                 height="13"
//                 viewBox="0 0 9 13"
//                 fill="none"
//               >
//                 <path
//                   d="M1.78711 0L0 1.61048L5.42578 6.5L0 11.3895L1.78711 13L9 6.5L1.78711 0Z"
//                   fill="black"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomeBanner;

"use client"
import Image from "next/image";
import "./HomeBanner.css";
import { Button } from "@material-tailwind/react";

const HomeBanner = () => {
  return (
    <div>
      {/* large device  */}

      <div className="hidden md:block ">
        <div className="full__section_l_p banner__section">
          <div className="banner-content grid grid-cols-1 md:grid-cols-8 items-center gap-10 py-[20px] md:py-[50px] lg:py-[80px] xl:py-[110px] 2xl:pt-[130px] 3xl:pt-[150px] 4xl:pt-[165px] 5xl:py-[180px]">
            <div className="md:col-span-4 flex items-center">
              <div className="">
                <p className="text-4xl lg:text-[40px] xl:text-[44px] 2xl:text-[48px] 3xl:text-[52px] 4xl:text-[56px] 5xl:text-[55px] text-black font-medium text-center md:text-left leading-tight">
                  Commercial & <br /> Residential Cleaning <br />{" "}
                  <span className="text-primary">Services in Houston</span>
                </p>
                <p className="text-lg lg:text-[20px] font-normal text-center md:text-left leading-[30px] lg:leading-[40px] pt-2">
                  Best commercial & residential cleaning services in Houston, we
                  pride ourselves on delivering meticulous cleanliness and
                  unparalleled customer satisfaction.
                </p>
                <div className="flex justify-center md:justify-start py-6">
                  <button
                    type="submit"
                    className="flex items-center w-[200px] lg:w-[274px] homeBtn px-6 lg:px-10 py-4 font-semibold "
                  >
                    <span className="mr-2 text-black">Get an Estimate </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="9"
                      height="13"
                      viewBox="0 0 9 13"
                      fill="none"
                    >
                      <path
                        d="M1.78711 0L0 1.61048L5.42578 6.5L0 11.3895L1.78711 13L9 6.5L1.78711 0Z"
                        fill="black"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div />
          </div>
        </div>
      </div>

      {/* small device  */}

      {/* <div className="block md:hidden">
        <div className="py-12 px-8">
          <p className="text-4xl lg:text-[40px] xl:text-[44px] 2xl:text-[48px] 3xl:text-[52px] 4xl:text-[56px] 5xl:text-[60px] text-primary font-medium text-center md:text-left leading-normal">
            General Contractors <br /> in Toronto Ontario
          </p>
          <p className="text-lg lg:text-[20px] font-medium text-center md:text-left leading-[30px] lg:leading-[50px]">
            The general contractors in Toronto of National Remodelling & General
            Contracting Inc. offer top-notch #1 remodeling and construction
            services.
          </p>
          <div className="flex justify-center md:justify-start pt-6">
            <button
              type="submit"
              className="w-[200px] lg:w-[274px] rounded-md bg-primary px-6 lg:px-10 py-4 font-semibold flex justify-center items-center"
            >
              <span className="mr-2 text-white">Get Estimated</span>
            </button>
          </div>
        </div>
        <div>
          <Image
            src="/assets/images/Header.png"
            alt="banner image"
            width={100}
            height={100}
            className="w-full h-full"
          />
        </div>
      </div> */}

      {/* small device  */}
      <div className="block md:hidden">
        <div className="small__banner__section w-auto h-[820px]">
          <div className="small__banner__section__content">
          <h3 className="pt-[20px] pl-[30px] text-[30px] text-black font-bold">
            Commercial & <br />
            Residential Cleaning <br /> <span className="text-primary">Services in Houston</span>
          </h3>
          <p className="px-[30px] pt-[8px] text-lg text-black font-normal">Best commercial & residential cleaning services in Houston, we pride ourselves on delivering meticulous cleanliness and unparalleled customer satisfaction.</p>
          <div className="pl-[30px] pt-[20px]">
          <Button className="text-black banner__btn flex items-center gap-x-2">
            <span className="text-black text-base font-bold">
              Get an Estimate
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="14"
              viewBox="0 0 10 14"
              fill="none"
            >
              <path
                d="M2.07589 0.0371094L0.298388 1.65039L5.695 6.54844L0.298388 11.4465L2.07589 13.0598L9.25 6.54844L2.07589 0.0371094Z"
                fill="black"
              />
            </svg>
          </Button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
