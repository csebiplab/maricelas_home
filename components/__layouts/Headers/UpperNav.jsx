import Image from "next/image";

const UpperNavbar = () => {
  return (
    <nav className="container py-[7px] bg-primary hidden md:block">
      <div className="flex justify-between">
        <div className="flex items-center gap-x-[15px]">
          <Image
            src="/assets/icons/map.png"
            width={16}
            height={17}
            alt="map"
            className="w-[16px] h-[17px]"
          />
          <p className="text-[10px]  xl:text-[16px] font-bold text-white">
            Best Cleaning Company in Huston
          </p>
        </div>

        <div className="flex items-center gap-x-2 xl:gap-x-4 5xl:gap-x-5">
          <div className="flex items-center gap-x-[15px]">
            <Image
              src="/assets/icons/location.png"
              width={16}
              height={17}
              alt="map"
              className="w-[16px] h-[17px]"
            />
            <span className="text-[10px] xl:text-base text-white">
              13809 Hollow Canyon Lane Rosharon, TX 77583
            </span>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1"
              height="14"
              viewBox="0 0 1 14"
              fill="none"
            >
              <line
                x1="0.5"
                y1="13.0386"
                x2="0.5"
                y2="0.000169754"
                stroke="white"
              />
            </svg>
          </div>
          <div className="flex items-center gap-x-[15px]">
            <Image
              src="/assets/icons/watch.png"
              width={16}
              height={17}
              alt="map"
              className="w-[16px] h-[17px]"
            />
            <span className="text-[10px] xl:text-base text-white">
              Mon - Fri: 09:00 am - 10:00 pm
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default UpperNavbar;
