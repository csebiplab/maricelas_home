import author from "@/public/assets/images/author.png";
import cleaner from "@/public/assets/images/cleaner.png";
import Image from "next/image";
import "./MessageFromManeger.css";

const MessageFromManagerSection = () => {
  return (
    <div className="custom-container px-5 lg:px-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[49px] my-[120px]">
        <div className="relative">
          <div className="w-full lg:w-[410px] h-[332px] lg:absolute right-0 top-[18%] bg-white lg:my-16 shadow-md rounded-md  z-50">
            <div className="">
              <div className="py-5 2xl:py-8 px-5 lg:px-10">
                <div>
                  <p className="text-sm md:text-lg font-semibold">Quality</p>
                  <div className="w-full lg:w-[351px] mt-4 bg-[#54042C] h-[18px] text-center text-xs lg:text-[10px] text-[#FBCC21] rounded-[50px]">
                    100%
                  </div>
                </div>
                <div className="my-[37px]">
                  <p className="text-sm md:text-lg font-semibold">
                    Residential
                  </p>
                  <div className="w-full lg:w-[351px] mt-4 bg-[#54042C] h-[18px] text-center text-xs lg:text-[10px] text-[#FBCC21] rounded-[50px]">
                    100%
                  </div>
                </div>
                <div>
                  <p className="text-sm md:text-lg font-semibold">Commercial</p>
                  <div className="w-full lg:w-[351px] mt-4 bg-[#54042C] h-[18px] text-center text-xs lg:text-[10px] text-[#FBCC21] rounded-[50px]">
                    100%
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <Image
              src={cleaner}
              alt="cleaner"
              width={450}
              height={300}
              loading="lazy"
              className="w-[722px] h-[616px] hidden lg:block"
            />
          </div>
        </div>
        <div className=" pr-3 md:pr-5 lg:pr-10 xl:pr-20 2xl:pr-28 3xl:pr-40 4xl:pr-52 5xl:pr-[285px]">
          <div className="">
            <div className="flex flex-col lg:flex-row w-full lg:relative mt-5 lg:my-0">
              <div className="w-full lg:w-[498px] flex justify-center items-center bg-warning-50 text-black lg:rotate-[270deg] lg:absolute -left-[210px] top-[200px] p-6 rounded-tr-[10px] rounded-tl-[10px]">
                <div className="">
                  <h5 className="message">Message From Manager</h5>
                </div>
              </div>
              <div className="lg:ml-24">
                <div>
                  <div className="grid lg:grid-cols-11">
                    <div className="lg:col-span-7 hidden lg:block">
                      <h2 className="lg:text-[32px] text-lg font-semibold lg:leading-8 md:mb-[5px] xs:mb-0 text-[#000]">
                        Your best option for Cleaning services
                      </h2>
                      <p className="text-xs lg:text-base mt-2 lg:mt-[15px] text-dark-200 leading-[250%]">
                        Dear valued customers,
                        <br />
                        <br />
                        As the General Manager of our cleaning
                        <br />
                        <br />
                        services, I want to ensure that you receive
                        <br />
                        <br />
                        nothing but
                      </p>
                    </div>

                    <div className="w-full lg:col-span-4 flex justify-center mt-5 lg:mt-0">
                      <div className="w-full">
                        <div>
                          <div className="w-full flex justify-center">
                            <div className="w-[157px] h-[157px]">
                              <Image
                                src={author}
                                width={157}
                                height={157}
                                alt="author"
                                className="lg:mb-4 mb-2 w-full h-full"
                              />
                            </div>
                          </div>
                          <div className="block lg:hidden">
                            <h6 className="text-lg text-center my-5">
                              Your best option for Cleaning services
                            </h6>
                            <p className="text-sm leading-[200%] mb-5">
                              Dear valued customers, As the General Manager of
                              our cleaning services, I want to ensure that you
                              receive nothing but
                              <br />
                              <br />
                              the best experience when it comes to maintaining
                              the cleanliness and hygiene of your spaces. At our
                              company, we take great pride in our commitment to
                              excellence and customer satisfaction. With years
                              of industry expertise and a dedicated team of
                              professionals, we guarantee top-notch cleaning
                              services tailored to meet your specific need.
                            </p>
                            <div className="flex gap-x-3 items-center">
                              <div className="unknown__style" />
                              <div className="text-sm">
                                <author className="font-bold">
                                  Maricela Maldonado
                                </author>
                                <span className="block mt-2">
                                  General Manager
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hidden lg:block ml-4">
                          <h5 className="py-1 lg:text-base text-sm">
                            Maricela Maldonado
                          </h5>
                          <p className="lg:text-base text-xs">
                            General Manager
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="leading-[250%] mt-4 hidden lg:block">
                    the best experience when it comes to maintaining the
                    cleanliness and hygiene of your spaces. At our company, we
                    take great pride in our commitment to excellence and
                    customer satisfaction. With years of industry expertise and
                    a dedicated team of professionals, we guarantee top-notch
                    cleaning services tailored to meet your specific need.
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