import Heading from "@/components/__ui/Heading";
import Image from "next/image";
import sectionImg from "../../../public/assets/random/bestservices.png";

const BestServicesSection = () => {
  return (
    <div className=" bg-[#C477B126] py-1 md:px-0 px-[30px]">
      <div className="container  grid md:grid-cols-2 grid-cols-1 gap-8 lg:my-[50px] py-8 border border-red-500">
        <div className=" md:order-1 order-2">
          <div className=" flex flex-col md:justify-normal justify-center md:items-start items-center">
            <Heading text={"Best Services"} />

            <div>
              <p className="lg:text-[32px] text-[18px] 3xl:pb-[30px] pb-[14px] text-center md:text-start font-semibold ">
                Best Commercial & Residential Cleaning Services in Houstona
              </p>
            </div>
          </div>
          <div>
            <p className="md:text-start text-center xl:text-[16px] lg:text-[14px] text-[10px] ">
              When it comes to finding the best cleaning services in Houston,
              quality and reliability are paramount. Look no further than our
              dedicated team of professionals who are committed to delivering
              exceptional cleaning solutions tailored to meet your specific
              needs. Whether it's maintaining the cleanliness of your office
              space or ensuring your home sparkles, we prioritize customer
              satisfaction above all else. Choosing Maricela's Cleaning
              Magnificence means entrusting your property to a team that values
              integrity and attention to detail. We understand the importance of
              a clean and healthy environment, which is why we strive for
              perfection in every job we undertake. Let us handle the dirty work
              while you focus on what matters most – enjoying a spotless space
              you can be proud of.
            </p>
          </div>
        </div>
        <div className="md:order-2 order-1 flex justify-center items-center">
          <Image src={sectionImg} width={615} height={465} />
        </div>
      </div>
    </div>
  );
};

export default BestServicesSection;
