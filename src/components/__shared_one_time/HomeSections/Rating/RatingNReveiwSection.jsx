"use client";
import vector from "../../../../../public/assets/icons/vector.png";
import BrandSwiper from "./BrandSwiper";
import Achievement from "./Achievement";
import Rating from "./Rating";
import "./Rating.css";
import RatingProgressBar from "./RatingProgressBar";

const RatingNReviewSection = () => {
  return (
    <div className="pt-10 bg-dark-200">
      <div className="container">
        <div className=" bg-white rating-box">
          <div className="p-6 rounded-[8px]">
            <p className="text-[12px] md:text-lg lg:text-2xl lg:leading-[36px] mb-3">
              Ratings
            </p>
            <div className="md:flex justify-between gap-5">
              {/* =========== Desktop View ============ */}
              <div className="md:w-[260px] md:block hidden">
                <div>
                  <div className="w-[60px] h-[60px] mx-auto text-[#FAA500] text-lg font-bold text-center leading-[60px] border-[2px] border-[#DBDBDB] rounded-full">
                    4.9
                  </div>
                  <Rating />
                  <p className="text-base font-bold leading-[21px] text-[#1B1B1B] mt-1 text-center">
                    61 Verified Reviews*
                  </p>
                </div>
              </div>
              <div className="relative md:block hidden">
                <span className="absolute top-[17px] h-[72px] w-[2px] bg-[#DBDBDB] mr-3"></span>
              </div>
              <div className="w-[390px] md:block hidden">
                <RatingProgressBar />
              </div>
              <div className="relative md:block hidden">
                <span className="absolute top-[17px] h-[72px] w-[2px] bg-[#DBDBDB]"></span>
              </div>
              <div className="w-[260px] md:block hidden">
                <div>
                  <div className="flex">
                    <p className="text-[#000] lg:text-lg text-base font-bold lg:mb-5 md:mb-2">
                      Highly rated for
                    </p>
                    <img src={vector.src} className="w-[22px] h-[24px] ms-3" />
                  </div>
                  <div className="flex justify-center">
                    <p className="me-4 border-2 bg-[#EAEAEA] font-semibold text-[#000] text-base px-2">
                      Quality
                    </p>
                    <p className="border-2 bg-[#EAEAEA] font-semibold text-[#000] text-base px-2">
                      Value
                    </p>
                  </div>
                  <p className="border-2 bg-[#EAEAEA] text-[#000] font-semibold px-2 text-center mt-2 w-full md:w-9/12 lg:w-8/12 mx-auto text-base">
                    Customer Service
                  </p>
                </div>
              </div>
              {/* Desktop End */}
              {/* Small devices start */}
              <div className="md:w-[260px] block md:hidden mb-3">
                <div className="flex items-center gap-[10px]">
                  <Rating />
                  <div className="text-[11px] text-[#FAA500]  font-bold">
                    4.9
                  </div>
                  <span className="h-[11px] w-[2px] bg-[#DBDBDB]"></span>
                  <p className="text-[11px] font-extra text-[#1B1B1B]">
                    61 Verified Reviews*
                  </p>
                </div>
              </div>
              <div className="block md:hidden">
                <RatingProgressBar />
              </div>
              <p className="block md:hidden text-[7px] font-medium leading-[12px] text-[#666666] mt-[15px]">
                *Reviews imported from Google have not been individually
                verified by HomeAdvisor.
              </p>
              <div className="block md:hidden">
                <div>
                  <div className="flex items-center">
                    <p className="text-[#000] text-[12px] md:text-base font-bold lg:mb-5 md:mb-2">
                      Highly rated for
                    </p>
                    <img src={vector.src} className="w-[10px] h-[11px] ms-3" />
                  </div>
                  <div className="flex my-[15px] gap-[8px]">
                    <div className="w-[68px] h-[24px] border-2 bg-[#EAEAEA] py-[5px] px-[19px]">
                      <p className="font-semibold text-[#000] text-[8px]  leading-[12px] text-center">
                        Quality
                      </p>
                    </div>
                    <div className="w-[56px] h-[24px] border-2 bg-[#EAEAEA] py-[5px] px-[19px]">
                      <p className="font-semibold text-[#000] text-[8px]  leading-[12px] text-center">
                        Value
                      </p>
                    </div>
                  </div>
                  <div className="w-[132px] h-[24px] border-2 bg-[#EAEAEA] ">
                    <p className="text-[#000] font-semibold text-[8px] py-[5px]  lg:px-[32px] text-center leading-[12px]">
                      {" "}
                      Customer Service
                    </p>
                  </div>
                </div>
              </div>

              {/* Small devices End */}
            </div>
            <p className="md:block hidden text-[12px] font-medium leading-[16px] text-[#666666] mt-[15px]">
              *Reviews imported from Google have not been individually verified
              by HomeAdvisor.
            </p>
          </div>
        </div>
        <div className="mt-5 md:mt-6">
          <Achievement />
        </div>
      </div>
      {/* <div className="hidden lg:block w-full">
        <Brand />
      </div> */}
      <div className="mt-12">
        <BrandSwiper />
      </div>
    </div>
  );
};

export default RatingNReviewSection;
