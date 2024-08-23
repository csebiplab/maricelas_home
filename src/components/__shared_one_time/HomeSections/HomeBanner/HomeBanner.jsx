import "./HomeBanner.css";

const HomeBanner = () => {
  return (
    <div className="banner__section mb-[550px] md:mb-0">
      <div className="container banner__content grid grid-cols-1 md:grid-cols-8 items-center gap-10 py-[20px] md:py-[50px] lg:py-[80px] xl:py-[110px] 2xl:pt-[130px] 3xl:pt-[150px] 4xl:pt-[165px] 5xl:py-[180px]">
        <div className="md:col-span-4 flex items-center">
          <div className="text-start">
            <h1 className="text-4xl 2xl:text-[40px] 3xl:text-[44px] 4xl:text-5xl 5xl:text-[52px] text-black font-medium leading-tight">
              Residential &<br />
              Commercial Cleaning <br />
              <span className="text-primary">Services in Houston</span>
            </h1>
            <p className="text-lg lg:text-[20px] font-normal leading-[30px] lg:leading-[40px] pt-3">
              We provide professional{" "}
              <span className="text-primary font-bold">Residential </span>
              and <span className="text-primary font-bold">
                Commercial
              </span>{" "}
              cleaning services in Houston, delivering pristine spaces for
              clients, and ensuring spotless results every time.
            </p>
            <div className="flex justify-center md:justify-start py-6 z-50">
              <a
                href="tel:8328204035"
                className="no-underline flex justify-center items-center w-[200px] lg:w-[274px] homeBtn px-6 lg:px-10 py-4 font-semibold"
              >
                <span className="mr-2 text-black text-lg font-bold">
                  Get an Estimate
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="9"
                  height="13"
                  viewBox="0 0 9 13"
                  fill="none"
                >
                  <path
                    d="M1.78711 0L0 1.61048L5.42578 6.5L0 11.3895L1.78711 13L9 6.5L1.78711 0Z"
                    fill="black"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
