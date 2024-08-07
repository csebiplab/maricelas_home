import Heading from "@/components/__ui/Heading";
import person1 from "../../../../public/assets/images/person1.png";
import person2 from "../../../../public/assets/images/person2.png";
import person3 from "../../../../public/assets/images/person3.png";
import Image from "next/image";

const AboutUsSection = () => {
  return (
    <div className="container">
      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-2 md:gap-3 3xl:gap-[56px] lg:gap-[30px] 3xl:py-[120px] lg:py-[100px] py-[60px]">
        {/* ============= Images Section Start ========== */}
        <div className="flex gap-2 lg:gap-[14px] w-full md:w-1/2">
          {/* ============ Images one ========= */}
          <div className="hidden lg:block">
            <Image
              src={person1}
              width={320}
              height={372}
              alt="person1"
              className="!max-w-[320px] !max-h-[372px]"
            />
          </div>

          {/* ================ Images Two ============ */}
          <div className="w-full h-full !lg:w-[320px] !lg:h-[222px]">
            <Image
              src={person2}
              width={320}
              height={135.85}
              alt="person2"
              className="w-full lg:w-[320px] lg:h-[135px] hidden lg:block"
            />
            <Image
              src={person3}
              width={320}
              height={222}
              alt="person3"
              className="h-full  w-[500px] lg:w-[320px] lg:h-[222px] mt-2 lg:mt-[14px] mx-auto md:mx-0"
            />
          </div>
        </div>
        {/* ============== Images Section End =========== */}

        {/* ============= Text Section ============== */}
        <div className="text-center xl:text-start lg:w-1/2 mt-5 lg:mt-0 w-full md:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <Heading text={"About Us"} />
          </div>
          <h2 className="text-[28px] md:text-[32px] font-bold text-[#1F1F1F] mt-[15px]">
            About Our Cleaning Services in Houston
          </h2>
          <p className="text-base font-normal mt-[15px]  lg:leading-[32px]">
            Welcome to Maricela's Cleaning Magnificence, a commercial &
            residential cleaning company in Houston, Texas. With years of
            experience, our main focus is providing the best cleaning services
            in Houston, Texas for commercial and residential clients. We aim to
            provide our clients with comprehensive, high-quality services that
            meet their needs and requirements. Our team is composed of skilled
            professionals with extensive experience in the industry, and we are
            committed to delivering exceptional results that exceed our client's
            expectations. Being the best company for residential & commercial
            cleaning services in Houston, we pride ourselves on delivering
            meticulous cleanliness and unparalleled customer satisfaction.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
