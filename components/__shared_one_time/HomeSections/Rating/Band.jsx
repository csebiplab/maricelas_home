import band1 from "@/public/assets/images/band1.png";
import band2 from "@/public/assets/images/band2.png";
import band3 from "@/public/assets/images/band3.png";
import band4 from "@/public/assets/images/band4.png";
import band5 from "@/public/assets/images/band5.png";
import band6 from "@/public/assets/images/band6.png";


import Image from "next/image";

const Brand = () => {
  return (
   <div className="md:mt-[20px] mt-2">
     <div className="pt-4 grid grid-cols-2 md:grid-cols-6 lg:gap-3 gap-2">
      <div className="lg:px-2 md:px-1 lg:py-[14px] md:py-[5px]  text-center">
        <Image
          src={band1}
          width={150}
          height={95}
          alt="google"
          className="lg:mb-[10px] md:mb-[1px] mt-2 md:mt-4 mx-auto"
        />
        <p className="text-center text-xs lg:text-sm md:leading-relaxed lg:leading-[21.1px] md:mt-0 lg:mt-4 md:mb-1">
        Maricela Maldonado responds to texts.
        </p>
      </div>
      <div className="lg:px-2 md:px-1 lg:py-[14px] md:py-[5px]  text-center">
        <Image
          src={band2}
          width={95}
          height={95}
          alt=""
          className="lg:mb-[10px] md:mb-[1px] md:mt-3 mx-auto"
        />
        <p className="text-center md:mt-2 lg:mt-4 text-xs  lg:text-sm leading-[21.1px]">
        The cleanest house I have ever seen.
        </p>
      </div>
      <div className="lg:px-2 md:px-1 lg:py-[14px] md:py-[5px] text-center">
        <Image
          src={band3}
          width={95}
          height={95}
          alt=""
          className="lg:mb-[10px] md:mt-3 md:mb-[5px] mx-auto"
        />
        <p className="text-center text-xs lg:text-sm leading-[21.1px] md:mt-3 mt-2">
        We hired Maricelas CleaningÂ  Magnificence
        </p>
      </div>
      <div className="lg:px-2 md:px-1 lg:py-[14px] md:py-[5px] md:text-start text-center">
        <Image
          src={band4}
          width={95}
          height={95}
          alt=""
          className="lg:mb-[10px] md:mb-[2px] mx-auto md:mt-3 mt-2"
        />
        <p className="text-center lg:mt-2 text-xs lg:text-sm leading-relaxed lg:leading-[21.1px] overflow-hidden">
        We never used a cleaning service
        </p>
      </div>
      <div className="lg:px-2 md:px-1 lg:py-[14px] md:py[5px] text-center">
        <Image
          src={band5}
          width={95}
          height={95}
          alt=""
          className="lg:mb-[10px] md:mb-[2px] mx-auto md:mt-3 mt-2"
        />
        <p className="text-center md:mt-3 mt-2 text-xs lg:text-sm leading-[21.1px]">
        What a pleasure it was working with Maricelaâ s
        </p>
      </div>
      <div className="lg:px-2 md:px-1 lg:py-[14px] md:py-[5px] text-center">
        <Image
          src={band6}
          width={130}
          height={90}
          alt=""
          className="lg:mb-[10px] md:mb-[2px] mx-auto md:mt-3 mt-2"
        />
        <p className="text-center md:mt-5 mt-2 text-xs lg:text-sm leading-[21.1px]">
        What a pleasure it was working with Maricelaâ s
        </p>
      </div>
      
    </div>
   </div>
  );
};

export default Brand;