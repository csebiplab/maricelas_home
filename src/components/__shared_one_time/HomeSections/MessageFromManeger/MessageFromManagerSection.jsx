import author from "../../../../../public/assets/images/author.png";
import cleaner from "../../../../../public/assets/images/cleaner.png";
import Image from "next/image";
import "./MessageFromManeger.css";

const MessageFromManagerSection = () => {
  return (
    <div className="custom-container px-5 lg:px-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[49px] my-[55px] lg:my-[120px]">
        <div className="relative">
          <div className="w-full lg:w-[410px] h-auto md:h-[332px] lg:absolute right-0 top-[18%] bg-white lg:my-16 my-shadow z-20">
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
              width={722}
              height={300}
              loading="lazy"
              className="lg:w-[420px] xl:w-[480px] 2xl:w-[530px] 3xl:w-[580px] 4xl:w-[630px] 5xl:w-[722px] h-[616px] hidden lg:block"
            />
          </div>
        </div>
        <div className=" pr-3 md:pr-5 lg:pr-10 xl:pr-20 2xl:pr-28 3xl:pr-40 4xl:pr-52 5xl:pr-[285px]">
          <div className="">
            <div className="flex flex-col lg:flex-row w-full lg:relative mt-5 lg:my-0">
              <div className="w-full lg:w-[498px] flex justify-center items-center bg-warning-50 text-black lg:rotate-[270deg] lg:absolute -left-[210px] top-[200px] p-6 rounded-tr-[10px] rounded-tl-[10px]">
                <div className="">
                  <h5 className="text-base lg:text-2xl lg:leading-[160%]">
                    Message From Manager
                  </h5>
                </div>
              </div>
              <div className="lg:ml-24">
                <div>
                  <div className="grid lg:grid-cols-11">
                    <div className="lg:col-span-7 hidden lg:block">
                      <h2 className="text-center md:text-left text-[20px] md:text-2xl 3xl:text-[28px] 5xl:text-[32px] font-bold text-black  xs:mb-0">
                        Your best option <br className="hidden 5xl:block" /> for
                        Cleaning <br className="hidden 5xl:block" /> services
                      </h2>
                      <p className="text-base lg:leading-[200%] mt-3 lg:mt-[39px] text-dark-200">
                        Dear valued customers,
                        <br />
                        As the General Manager of our cleaning services, I want
                        to ensure that you receive
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
                          {/* For small screen starts */}
                          <div className="block lg:hidden">
                            <h2 className="text-lg lg:text-2xl 2xl:text-[32px] mt-2 font-semibold text-[#1F1F1F]">
                              Your best option for Cleaning services
                            </h2>
                            <p className="text-base lg:leading-[200%] mb-1 mt-2">
                              Dear valued customers, As the General Manager of
                              our cleaning services, I want to ensure that you
                              receive nothing but the best experience when it
                              comes to maintaining the cleanliness and hygiene
                              of your spaces. At our company, we take great
                              pride in our commitment to excellence and customer
                              satisfaction. With years of industry expertise and
                              a dedicated team of professionals, we guarantee
                              top-notch cleaning services tailored to meet your
                              specific need.
                            </p>
                            <div className="flex gap-x-3 items-center mt-3">
                              <div className="unknown__style" />
                              <div className="text-xs">
                                <author className="font-medium text-xs">
                                  Maricela Maldonado
                                </author>
                                <span className="block mt-2 text-xs">
                                  General Manager
                                </span>
                              </div>
                            </div>
                          </div>
                          {/* For small screen ends */}
                        </div>
                        <div className="hidden lg:block ml-4 mt-2">
                          <div className="flex gap-x-1 items-center">
                            <div className="unknown__style !h-[100px]" />
                            <div className="">
                              <author className="font-bold py-1 text-[13px]">
                                Maricela Maldonado
                              </author>
                              <span className="block mt-2 lg:text-sm text-xs">
                                General Manager
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-base lg:leading-[38px] hidden lg:block">
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
