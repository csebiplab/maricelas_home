import achievement from "../../../../../public/assets/images/achievement.png";
import Image from "next/image";

const Achievement = () => {
  return (
    <>
      <div className="w-full  mx-auto">
        <div className="flex flex-col justify-center md:flex-row gap-5 md:gap-2">
          <div className="grid grid-cols-2 gap-2 ">
            <div className="bg-white flex flex-col items-center justify-center md:flex-0  my-class rounded-[8px] px-11 py-5 md:py-0 md:px-2 text-center">
              <h5 className="lg:text-[38px] text-lg font-semibold lg:leading-[47.25px] md:mb-[5px] xs:mb-0 ">
                98%
              </h5>
              <p className="lg:text-lg text-base font-semibold lg:leading-[22.5px]">
                Recommended
              </p>
            </div>
            <div className="bg-white flex flex-col items-center justify-center md:flex-0  my-class rounded-[8px] px-11 py-5 md:py-0 md:px-2  text-center">
              <h5 className="lg:text-[38px] font-bold text-lg lg:leading-[47.25px] xs:mb-0 md:mb-[5px]">
                4
              </h5>
              <p className="lg:text-lg text-base font-semibold lg:leading-[22.5px]">
                Years In Business
              </p>
            </div>
          </div>
          <div className="bg-white md:w-[604px] md:h-[147.98px]  my-class rounded-[8px] px-[22.5px] py-3 md:py-5">
            <h5 className="text-base lg:text-lg font-bold lg:leading-[27px] mb-[5px]">
              Achievements
            </h5>
            <Image
              src={achievement}
              width={559}
              height={82.98}
              alt="achivment"
              className=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Achievement;
