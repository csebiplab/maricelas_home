import Image from "next/image";
import HeadingIcon from "@/components/__ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import "./HowMuchDoesCost.css";

const howMuchDoesCostData = [
  {
    id: 1,
    title: "Standard Cleaning",
    description: [
      {
        desc: (
          <>
            <strong>Average Cost:</strong> $100-$200 per visit (for homes up to
            2,000 sq. ft.).
          </>
        ),
      },
      {
        desc: (
          <>
            <strong>Includes:</strong> Dusting, sweeping, mopping, vacuuming,
            and surface cleaning.
          </>
        ),
      },
    ],
  },
  {
    id: 2,
    title: "Deep Cleaning",
    description: [
      {
        desc: (
          <>
            <strong>Average Cost:</strong> $200-$400 per visit.
          </>
        ),
      },
      {
        desc: (
          <>
            <strong>Includes:</strong> Thorough cleaning of baseboards, inside
            appliances, under furniture, and detailed sanitization.
          </>
        ),
      },
    ],
  },
  {
    id: 3,
    title: "Move-In/Move-Out Cleaning",
    description: [
      {
        desc: (
          <>
            <strong>Average Cost:</strong> $250-$500 per visit.
          </>
        ),
      },
      {
        desc: (
          <>
            <strong>Includes:</strong> Cleaning empty spaces, inside cabinets,
            appliances, and overall preparation for new occupants.
          </>
        ),
      },
    ],
  },
  {
    id: 4,
    title: "Specialized Services (Add-ons)",
    description: [
      {
        desc: (
          <>
            <span>
              <strong>Carpet Cleaning:</strong> $50-$150 per room.
            </span>
            <span>
              <strong>Window Cleaning:</strong> $5-$15 per window.{" "}
            </span>
          </>
        ),
      },
      {
        desc: (
          <>
            <strong>Appliance Cleaning: </strong> $25-$50 per appliance.
          </>
        ),
      },
    ],
  },
];
const CommercialCleaningCostsData = [
  {
    id: 1,
    title: "Office Cleaning (Routine)",
    description: [
      {
        desc: (
          <>
            <strong>Average Cost:</strong> $50-$150 per hour or $0.10-$0.50 per square foot.
          </>
        ),
      },
      {
        desc: (
          <>
            <strong>Includes:</strong> Cleaning desks, floors, trash removal, and restroom sanitization.
          </>
        ),
      },
    ],
  },
  {
    id: 2,
    title: "Deep Cleaning for Commercial Spaces",
    description: [
      {
        desc: (
          <>
            <strong>Average Cost:</strong> $0.20-$0.60 per square foot.
          </>
        ),
      },
      {
        desc: (
          <>
            <strong>Includes:</strong> Detailed floor cleaning, sanitizing workstations, and high-touch surface disinfection.
          </>
        ),
      },
    ],
  },
  {
    id: 3,
    title: "Specialized Commercial Services",
    description: [
      {
        desc: (
          <>
            <strong>Floor Stripping and Waxing:</strong> $0.25-$1.00 per square foot.
          </>
        ),
      },
      {
        desc: (
          <>
            <strong>Post-Construction Cleaning:</strong> $0.30-$0.75 per square foot.
          </>
        ),
      },
    ],
  }
];
const FactorsThatInfluenceCostsData = [
  {
    id: 1,
    title: "Size of the Space",
    description: [
      {
        desc: (
          <>
            Larger homes or offices require more time and resources, increasing price.
          </>
        ),
      }
    ],
  },
  {
    id: 2,
    title: "Frequency of Service",
    description: [
      {
        desc: (
          <>
            <strong>Weekly/Bi-Weekly Services:</strong> Typically discounted compared to one-time cleanings.
          </>
        ),
      },
      {
        desc: (
          <>
            <strong>One-Time Cleaning:</strong> Higher due to the effort involved in initial cleanups.
          </>
        ),
      },
    ],
  },
  {
    id: 3,
    title: "Condition of the Space",
    description: [
      {
        desc: (
          <>
            Heavily soiled or neglected areas may require more intensive cleaning, affecting costs.
          </>
        ),
      }
    ],
  },
  {
    id: 4,
    title: "Custom Requests",
    description: [
      {
        desc: (
          <>
            Specific tasks, such as upholstery cleaning or pressure washing, may have additional charges.
          </>
        ),
      },
    ],
  },
];

const HowMuchDoesCost = () => {
  return (
    <div className="bg-primary py-[20px] xl:py-[25px] 5xl:py-[30px]">
      <div data-aos="zoom-in" className="container">
        <div className="">
          <div className="flex flex-col justify-center items-center">
            <HeadingIcon
              text={headingIconText.howMuchDoesCost__headingIconText}
            />
            <div className="">
              <h2 className="text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-white text-center leading-normal">
                How Much Does Residential & Commercial Cleaning Service Cost?
              </h2>
              <p className="text-base 4xl:text-[17px] 5xl:text-lg font-normal leading-normal text-white mt-[10px] text-center">
                The cost of commercial and residential cleaning services varies
                depending on various factors. Below is a breakdown of typical
                costs to help you estimate:
              </p>
            </div>
            {/* first cart */}
            <div className="grid grid-cols-1 md:grid-cols-4 mt-[25px]">
              <div className="md:col-span-1 border border-dark-100 bg-white">
                <p className="text-[20px] 4xl:text-[21px] 5xl:text-[25px] text-black font-bold leading-normal pt-[16px] 2xl:pt-[18px] 3xl:pt-[20px] 4xl:pt-[22px] 5xl:pt-[24px] pl-[14px] xl:pl-[16px] 5xl:pl-[18px]">Residential Cleaning Costs</p>
              </div>
              <div className="md:col-span-3">
                {howMuchDoesCostData?.map((data) => {
                  return (
                    <div key={data?.id} className={`py-[10px] 5xl:py-[12px] px-[8px] 5xl:px-[10px] border border-dark-100 ${data?.id === 1 || data?.id === 3 ? "bg-white" : "bg-dark-200"}`}>
                      <p className="text-base 4xl:text-[17px] 5xl:text-lg font-bold text-black leading-[30px] 5xl:leading-[35px]">{data?.title}</p>
                      {data?.description?.map((data, index) => {
                        return (
                          <ul key={index + 10}>
                            <li className="text-base 4xl:text-[17px] 5xl:text-lg font-normal text-black leading-[30px] 5xl:leading-[35px]">{data?.desc}</li>
                          </ul>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </div>
            {/* second cart  */}
            <div className="grid grid-cols-1 md:grid-cols-4 mt-[15px]">
              <div className="md:col-span-1 border border-dark-100 bg-white">
                <p className="text-[20px] 4xl:text-[21px] 5xl:text-[25px] text-black font-bold leading-normal pt-[16px] 2xl:pt-[18px] 3xl:pt-[20px] 4xl:pt-[22px] 5xl:pt-[24px] pl-[14px] xl:pl-[16px] 5xl:pl-[18px]">Residential Cleaning Costs</p>
              </div>
              <div className="md:col-span-3">
                {CommercialCleaningCostsData?.map((data) => {
                  return (
                    <div key={data?.id} className={`py-[10px] 5xl:py-[12px] px-[8px] 5xl:px-[10px] border border-dark-100 ${data?.id === 1 || data?.id === 3 ? "bg-white" : "bg-dark-200"}`}>
                      <p className="text-base 4xl:text-[17px] 5xl:text-lg font-bold text-black leading-[30px] 5xl:leading-[35px]">{data?.title}</p>
                      {data?.description?.map((data, index) => {
                        return (
                          <ul key={index + 10}>
                            <li className="text-base 4xl:text-[17px] 5xl:text-lg font-normal text-black leading-[30px] 5xl:leading-[35px]">{data?.desc}</li>
                          </ul>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </div>
            {/* third cart  */}
            <div className="grid grid-cols-1 md:grid-cols-4 mt-[15px]">
              <div className="md:col-span-1 border border-dark-100 bg-white">
                <p className="text-[20px] 4xl:text-[21px] 5xl:text-[25px] text-black font-bold leading-normal pt-[16px] 2xl:pt-[18px] 3xl:pt-[20px] 4xl:pt-[22px] 5xl:pt-[24px] pl-[14px] xl:pl-[16px] 5xl:pl-[18px]">Residential Cleaning Costs</p>
              </div>
              <div className="md:col-span-3">
                {FactorsThatInfluenceCostsData?.map((data) => {
                  return (
                    <div key={data?.id} className={`py-[10px] 5xl:py-[12px] px-[8px] 5xl:px-[10px] border border-dark-100 ${data?.id === 1 || data?.id === 3 ? "bg-white" : "bg-dark-200"}`}>
                      <p className="text-base 4xl:text-[17px] 5xl:text-lg font-bold text-black leading-[30px] 5xl:leading-[35px]">{data?.title}</p>
                      {data?.description?.map((data, index) => {
                        return (
                          <ul key={index + 10}>
                            <li className="text-base 4xl:text-[17px] 5xl:text-lg font-normal text-black leading-[30px] 5xl:leading-[35px]">{data?.desc}</li>
                          </ul>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowMuchDoesCost;
