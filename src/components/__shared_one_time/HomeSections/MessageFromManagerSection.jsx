import author from "@/public/assets/images/author.png";
import cleaner from "@/public/assets/images/cleaner.png";
import Image from "next/image";

const MessageFromManagerSection = () => {
  return (
    <div className="custom-container ">
      <div className="">
        <div className="grid lg:grid-cols-10 md:grid-cols-7 lg:relative 2xl:py-16 py-10 md:mx-0 mx-[30px]">
          {/* contact part */}
          <div className="w-[410px] h-[332px] lg:absolute md:col-span-3 md:order-2 flex justify-center items-center left-[24%] 4xl:top-[22%] 3xl:top-[18%] 2xl:top-[15%] xl:top-[20%] lg:top-[50%]  bg-white 2xl:my-16 my-8 border shadow-md rounded-md border-black z-50">
            <div className="">
              <div className="py-5 2xl:py-8 px-5 lg:px-10">
                <div>
                  <p className="text-sm md:text-lg font-semibold">Quality</p>
                  <div className="w-[351px] mt-4 bg-[#54042C] h-[18px] text-center text-xs lg:text-[10px] text-[#FBCC21] rounded-[50px]">
                    100%
                  </div>
                </div>
                <div className="my-[37px]">
                  <p className="text-sm md:text-lg font-semibold">
                    Residential
                  </p>
                  <div className="w-[351px] mt-4 bg-[#54042C] h-[18px] text-center text-xs lg:text-[10px] text-[#FBCC21] rounded-[50px]">
                    100%
                  </div>
                </div>
                <div>
                  <p className="text-sm md:text-lg font-semibold">Commercial</p>
                  <div className="w-[351px] mt-4 bg-[#54042C] h-[18px] text-center text-xs lg:text-[10px] text-[#FBCC21] rounded-[50px]">
                    100%
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* image part */}
          <div className="w-full -z-10  xl:col-span-4 lg:col-span-4 lg:order-1 lg:block hidden">
            <Image
              src={cleaner}
              alt="cleaner"
              width={450}
              height={300}
              loading="lazy"
              className="w-full h-full"
            />
          </div>

          {/* form part */}
          <div className=" lg:col-span-6 md:col-span-4 md:order-2 lg:py-30 md:flex items-center 5xl:ml-[285px] 4xl:ml-[200px] 3xl:ml-[150px] 2xl:ml-[100px] xl:ml-[80px] lg:ml-[40px] md:ml-[20px]">
            <div className="lg:col-span-3 items-center">
              <div className="flex justify-between lg:gap-4 gap-2">
                {/* ============ Vertical Text ========= */}
                <div class="flex items-center">
  <h2 class="md:h-[498px] h-[88px] text-xl text-black inline-block font-semibold bg-[#FBCD22] py-3 text-center rounded-tr-[10px] rounded-tl-[10px] vertical-text">
    Message From Manager
  </h2>
</div>

                <div>
                  <h2 className="lg:text-[32px] text-lg font-semibold lg:leading-8 md:mb-[5px] xs:mb-0 text-[#000]">
                    Your best option for Cleaning services
                  </h2>
                  <p className="text-xs lg:text-base mt-2 lg:mt-[15px] text-[#111]">
                    Dear valued customers,
                    <br />
                    As the General Manager of our cleaning services, I want to
                    ensure that you receive nothing but
                  </p>
                  <br />
                  <p>
                    the best experience when it comes to maintaining the
                    cleanliness and hygiene of your spaces. At our company, we
                    take great pride in our commitment to excellence and
                    customer satisfaction. With years of industry expertise and
                    a dedicated team of professionals, we guarantee top-notch
                    cleaning services tailored to meet your specific need.
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
                  <h5 className="text-center py-1 lg:text-base text-sm">
                    Maricela Maldonado
                  </h5>
                  <p className="text-center lg:text-base text-xs">
                    General Manager
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageFromManagerSection;
