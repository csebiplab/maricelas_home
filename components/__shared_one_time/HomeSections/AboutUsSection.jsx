import person1 from "@/public/assets/images/person1.png";
import person2 from "@/public/assets/images/person2.png";
import person3 from "@/public/assets/images/person3.png";
import Image from "next/image";
const AboutUsSection = () => {
  return <div>
    

    <div className="flex justify-between gap-2 md:gap-3 lg:gap-[56px]">
      {/* ============= Images Section Start ========== */}
      <div className="flex gap-2 lg:gap-[14px]">
        {/* ============ Images one ========= */}
        
        <div>
        <Image
                src={person1}
                width={320}
                height={372}
                alt="person1"
                className="w-full"
              />
        </div>
        
              
        {/* ================ Images Two ============ */}
        <div>
        <Image
                src={person2}
                width={320}
                height={135.85}
                alt="person2"
                className="w-full"
              />
              <Image
                src={person3}
                width={320}
                height={222.16}
                alt="person3"
                className="w-full mt-2 lg:mt-[13px]"
              />
        </div>
      </div>
      {/* ============== Images Section End =========== */}

     {/* ============= Text Section ============== */}
    <div className="md:text-start text-center md:w-1/2">
        
        <h2 className="2xl:text-[32px] md:text-[20px] text-[18px] md:pb-0 pb-[20px] font-semibold text-[#1F1F1F]">Welcome to Our Commercial & Residential Cleaning Services in Houston</h2>
        <p className="text-xs lg:text-base mt-2 lg:mt-[15px] lg:leading-[32px]">Welcome to Maricela's Cleaning Magnificence, a company of commercial & residential cleaning services in Houston. Our current focus is on catering to both commercial and residential clients in Houston, Texas. We aim to provide our clients with comprehensive and high-quality services that meet their specific needs and requirements. Our team is composed of skilled professionals with extensive experience in the industry, and we are committed to delivering exceptional results that exceed our client’s expectations.</p>
      </div>
      
    </div>
 
  </div>;
};

export default AboutUsSection;
