import author from "@/public/assets/images/author.png";
import cleaner from "@/public/assets/images/cleaner.png";
import Image from "next/image";
const MessageFromManagerSection = () => {
  return (
    <div className="custom-container">
      <div className="flex justify-between">
        <div className="md:w-1/2">
        <Image
                src={cleaner}
                width={722}
                height={616}
                alt="cleaner"
                className="w-full"
                
              />
        </div>

        {/* ============== text section ============= */}
        <div className="md:w-1/2">
          <div className="flex justify-between">
          <div>
          <h2 className="lg:text-[32px] text-lg font-semibold lg:leading-[45px] md:mb-[5px] xs:mb-0 text-[#000]">Your best option for Cleaning services</h2>
          <p>Dear valued customers,<br/>As the General Manager of our cleaning services, I want to ensure that you receive nothing but</p><br/>
          <p>
          the best experience when it comes to maintaining the cleanliness and hygiene of your spaces. At our company, we take great pride in our commitment to excellence and customer satisfaction.
With years of industry expertise and a dedicated team of professionals, we guarantee top-notch cleaning services tailored to meet your specific need.
          </p>
          </div>
          {/* ============ Author ========= */}
          <div>
          <Image
                src={author}
                width={157}
                height={157}
                alt="author"
                className="lg:mb-4 mb-2"
                
              />
              <h5 className="text-center py-1 lg:text-base text-sm">Maricela Maldonado</h5>
              <p className="text-center lg:text-base text-xs">General Manager</p>
          </div>
          
          </div>
        </div>
      </div>

    </div>
  );
};

export default MessageFromManagerSection;
