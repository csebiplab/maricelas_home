import Heading from "@/components/__ui/Heading";
import clean1 from "../../../../public/assets/images/clean1.png";
import clean2 from "../../../../public/assets/images/clean2.png";
import clean3 from "../../../../public/assets/images/clean3.png";
import Image from "next/image";
import Link from "next/link";

const CleaningServicesSection = () => {
  return (
    // <div className="py-[60px] lg:py-[80px] 3xl:py-[120px] flex justify-center mx-auto w-full border border-red-500">
    <div className="my-[60px] md:my-[120px] flex flex-col lg:flex-row justify-center gap-4 md:gap-2 3xl:gap-16 px-3 md:px-0">
      {/* ------------BIG SCREEN------------ */}
      <div className="hidden lg:block">
        <div className="flex">
          <div>
            <Image
              src={clean1}
              width={378}
              height={304.8}
              alt="cleaning"
              className="!w-full max-h-[305px]"
            />

            <div className="lg:w-[183.329px] md:w-[80px] lg:h-[169.493px] md:h-[70px] bg-[#880769] mx-auto card-sd text-center flex flex-col justify-center items-center mt-2 lg:mt-4">
              <p className="lg:text-[55px] text-lg font-semibold lg:leading-[47.25px] md:mb-[5px] xs:mb-0 text-[#fff]">
                5+
              </p>
              <p className="lg:text-lg text-base font-semibold lg:leading-[22.5px] mt-1 text-[#fff]">
                Successful Years
              </p>
            </div>
          </div>

          <div>
            <Image
              src={clean2}
              width={226.63}
              height={228.112}
              alt="cleaning"
              className="rounded-[15px] ms-2 lg:ms-[15px]"
            />

            <Image
              src={clean3}
              width={366.54}
              height={295}
              alt="cleaning"
              className="card-sd mt-2 lg:mt-4 lg:-ms-16 -ms-10"
            />
          </div>
        </div>
      </div>

      {/* ------------MID N SMALL SCREEN------------ */}
      <div className="block lg:hidden">
        <div className="flex flex-col justify-center items-center">
          <div>
            <Image
              src={clean1}
              width={400}
              height={298}
              alt="cleaning"
              className="!w-[400px]"
            />
          </div>

          <div className=" w-full lg:!w-[400px] bg-primary mx-auto card-sd text-center flex flex-col justify-center items-center my-4 py-4">
            <p className="lg:text-[55px] text-lg font-semibold lg:leading-[47.25px] md:mb-[5px] xs:mb-0 text-white">
              5+
            </p>
            <p className="lg:text-lg text-base font-semibold lg:leading-[22.5px] mt-1 text-white">
              Successful Years
            </p>
          </div>

          <div className="">
            <Image
              src={clean3}
              width={400}
              height={298}
              alt="cleaning"
              className="card-sd !w-[400px] !h-[298px]"
            />
          </div>
        </div>
      </div>

      <div className="lg:text-start text-center lg:w-1/2">
        <div className="flex justify-center lg:justify-normal mt-3 lg:mt-0">
          <Heading text={"Cleaning Services"} />
        </div>
        <h2 className="text-[28px] md:text-[32px] font-bold text-dark-200 md:pb-0 pb-[14px]">
          Commercial & Residential Cleaning Services You Can Belief
        </h2>
        <p className="text-base font-normal lg:leading-[170%] mt-2  text-dark-50 ">
          At Maricela's Cleaning Magnificence, we understand the importance of
          reliability and professionalism when it comes to maintaining 
          <Link className="text-primary hover:underline" rel="nofollow" target="_blank" href="https://en.wikipedia.org/wiki/Cleanliness"> cleanliness</Link> in both commercial and residential settings. Our trained
          staff is committed to upholding the highest standards of quality and
          integrity in every job we undertake. From routine cleanings to deep
          sanitization, we prioritize customer satisfaction and strive to exceed
          expectations with our meticulous attention to detail. With our trusted
          commercial and residential cleaning services in Houston, you can enjoy
          peace of mind knowing that your space is in capable hands. Whether it
          is a large-scale commercial project or a small-scale residential
          renovation, we are equipped to handle it all with the utmost
          efficiency and precision. We strive to maintain the highest standards
          of professionalism and expertise in all our endeavors, and we look
          forward to serving our clients in Houston, Texas, with excellence.
        </p>
      </div>
    </div>
  );
};

export default CleaningServicesSection;
