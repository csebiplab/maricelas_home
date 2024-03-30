import clean1 from "@/public/assets/images/clean1.png";
import clean2 from "@/public/assets/images/clean2.png";
import clean3 from "@/public/assets/images/clean3.png";
import Heading from "@/ui/Heading";
import Image from "next/image";

const CleaningServicesSection = () => {
  return (
    <div className="custom-container">
      <div className="3xl:py-[120px] lg:py-[100px] py-[60px]">
        <div className="flex 3xl:gap-[65px] lg:gap-[35px] gap-2">
          <div>
            <div className="flex">
              <div>
                <Image
                  src={clean1}
                  width={378}
                  height={304.8}
                  alt="cleaning"
                  className="w-full"
                />

                <div className="lg:w-[183.329px] md:w-[80px] lg:h-[169.493px] md:h-[70px] bg-[#880769] mx-auto card-sd text-center flex flex-col justify-center items-center mt-2 lg:mt-4">
                  <h2 className="lg:text-[55px] text-lg font-semibold lg:leading-[47.25px] md:mb-[5px] xs:mb-0 text-[#fff]">
                    10+
                  </h2>
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
                  height={287.9}
                  alt="cleaning"
                  className=" card-sd mt-2 lg:mt-4 lg:-ms-16 -ms-10"
                />
              </div>
            </div>
          </div>

          <div className="md:text-start text-center md:w-1/2">
            <Heading text={"Cleaning Services"} />
            <h2 className="2xl:text-[32px] md:text-[20px] text-[18px] md:pb-0 pb-[20px] font-semibold text-[#1F1F1F]">
              Commercial & Residential Cleaning Services You Can Belief
            </h2>
            <p className="text-xs lg:text-base mt-2 lg:mt-[15px] text-[#111]">
              At Maricela's Cleaning Magnificence, we understand the importance
              of reliability and professionalism when it comes to maintaining
              cleanliness in both commercial and residential settings. Our
              trained staff is committed to upholding the highest standards of
              quality and integrity in every job we undertake. From routine
              cleanings to deep sanitization, we prioritize customer
              satisfaction and strive to exceed expectations with our meticulous
              attention to detail. With our trusted commercial and residential
              cleaning services in Houston, you can enjoy peace of mind knowing
              that your space is in capable hands. Whether it is a large-scale
              commercial project or a small-scale residential renovation, we are
              equipped to handle it all with the utmost efficiency and
              precision. We strive to maintain the highest standards of
              professionalism and expertise in all our endeavors, and we look
              forward to serving our clients in Houston, Texas, with excellence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CleaningServicesSection;
