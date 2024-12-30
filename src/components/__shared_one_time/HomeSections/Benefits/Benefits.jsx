import React from "react";
import "./Benefits.css";
import HeadingIcon from '@/components/__ui/HeadingIcon';
import { headingIconText } from '@/utils/heading-text';

const ourRenovatorData1 = [
  {
    id: 1,
    title: "Skipping subfloor preparation:",
    desc: "A smooth, level subfloor is essential. Always clean, level, and dry the subfloor before starting. One of the most critical steps is ensuring your subfloor is clean, dry, and level. Failing to address imperfections or debris can",
  },
  {
    id: 2,
    title: "Ignoring acclimation:",
    desc: "Vinyl planks need time to acclimate to the room's temperature and humidity. Skipping this step can lead to warping and gaps. Allow the planks to sit in the room for at least 48 hours before installation.",
  },
  {
    id: 3,
    title: "Incorrect measuring and cutting:",
    desc: "measuring accurately is crucial to avoid waste and ensure a tight fit. Skipping this layer or using an unsuitable underlayment can lead to premature wear and diminished comfort.",
  },
  {
    id: 4,
    title: "Not staggering planks: ",
    desc: "Staggering planks create a natural look and strengthen the floor's structure. Aligning planks uniformly can weaken the installation and make it look artificial. Aim for at least a 6-inch stagger for visual appeal and stability. ",
  },
  {
    id: 5,
    title: "Using the wrong adhesive (if applicable):",
    desc: "For glue-down vinyl planks, using incompatible adhesive can cause planks to lift. Always use the adhesive recommended by the manufacturer to ensure a secure bond.",
  },
  {
    id: 6,
    title: "Using the wrong adhesive (if applicable):",
    desc: "For glue-down vinyl planks, using incompatible adhesive can cause planks to lift. Always use the adhesive recommended by the manufacturer to ensure a secure bond."
  },
];

const Benefits = () => {
  return (
    <div>
      <div data-aos="zoom-in" className="container padding__top">
        <div className="flex flex-col items-center justify-center">
        <HeadingIcon text={headingIconText.benefits__headingIconText}/>
          <h2 className="text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-black leading-tight 5xl:leading-normal mb-[10px] text-center md:text-left">
          Common Mistakes When Installing Vinyl Plank Flooring
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[18px] 2xl:gap-[21px] 3xl:gap-[24px] 4xl:gap-[27px] 5xl:gap-[30px] mt-[25px]">
          {ourRenovatorData1?.map((data) => {
            return (
              <div
                key={data.id}
                className="mistakes__cart__bg pt-[14px] pb-[21px] px-2"
              >
                <p className="text-lg 5xl:text-[20px] text-center font-bold text-black leading-normal">
                  {data.title}
                </p>
                <p className="text-base 5xl:text-lg font-normal text-black leading-[35px] text-center">
                  {data.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* second part  */}
        <div className="w-full flex flex-col md:flex-row justify-center mt-[18px] 2xl:mt-[21px] 3xl:mt-[24px] 4xl:mt-[27px] 5xl:mt-[30px] gap-[18px] 2xl:gap-[21px] 3xl:gap-[24px] 4xl:gap-[27px] 5xl:gap-[30px] mt-[25px]">
          <div className="w-full md:w-1/3 mistakes__cart__bg pt-[14px] pb-[21px] px-2">
            <p className="text-lg 5xl:text-[20px] text-center font-bold text-black leading-normal">
            Not following manufacturer's instructions:
            </p>
            <p className="text-base 5xl:text-lg font-normal text-black leading-[35px] text-center">
            Ignoring these instructions, such as the recommended adhesive type or installation method, can affect the warranty and performance of your flooring.
            </p>
          </div>
          <div className="w-full md:w-1/3 mistakes__cart__bg pt-[14px] pb-[21px] px-2">
            <p className="text-lg 5xl:text-[20px] text-center font-bold text-black leading-normal">
            Rushing the installation:
            </p>
            <p className="text-base 5xl:text-lg font-normal text-black leading-[35px] text-center">
            Taking time is essential for achieving a professional-looking result. Rushing through the installation can lead to misaligned planks, uneven seams, or poorly finished edges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
