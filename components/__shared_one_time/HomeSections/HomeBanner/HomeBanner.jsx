import "./HomeBanner.css";

const HomeBanner = () => {
  return (
    <div className="container home-banner py-20 min-h-screen flex justify-center items-center bg-blend-multiply bg-dark-50">
      <div className="text-center banner-content">
        <div>
          <h1 className="text-white title text-3xl xl:text-4xl 2xl:text-[42px] 4xl:text-[45px]">
            Commercial & Residential Cleaning Services in Houston
          </h1>
          <p className="mt-8 leading-10 text-white text-[20px] font-normal lg:px-20">
            Best commercial & residential cleaning services in Houston, we pride
            ourselves on delivering meticulous cleanliness and unparalleled
            customer satisfaction.
          </p>
          <div className="flex justify-center">
            <button className="flex items-center rounded-md z-40 btn__shadow !cursor-pointer bg-warning py-4 px-8 mt-8">
              <span className="text-dark text-[18px] font-bold mr-3">
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
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
