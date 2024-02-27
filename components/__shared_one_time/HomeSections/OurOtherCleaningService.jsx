import BorderBottom from "@/components/__ui/BorderBottom";
import Image from "next/image";
import React from "react";

const commercialCleaningList = [
  {
    id: 1,
    list: "Professional cleaning and janitorial services",
  },
  {
    id: 2,
    list: "Construction and remodeling cleanups",
  },
  {
    id: 3,
    list: "Offices cleaning",
  },
  {
    id: 4,
    list: "Restaurants cleaning",
  },
  {
    id: 5,
    list: "Showrooms cleaning",
  },
  {
    id: 6,
    list: "Medical offices cleaning ",
  },
  {
    id: 7,
    list: "Classrooms cleaning ",
  },
  {
    id: 8,
    list: "Vacation rentals cleaning ",
  },
  {
    id: 9,
    list: "Hospitals/Clinics cleaning",
  },
  {
    id: 10,
    list: "Financial institutions cleaning",
  },
];
const residentialCleaningList = [
  {
    id: 1,
    list: "Professional deep cleaning",
  },
  {
    id: 2,
    list: "Maid services",
  },
  {
    id: 3,
    list: "Apartment cleaning",
  },
  {
    id: 4,
    list: "Condos cleaning",
  },
  {
    id: 5,
    list: "Family homes cleaning",
  },
  {
    id: 6,
    list: "Moving in/out of cleaning",
  },
  {
    id: 7,
    list: "Spring cleaning",
  },
  {
    id: 8,
    list: "After parties/events cleaning",
  },
];

const OurOtherCleaningService = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-10 gap-4">
        <div className="w-full md:col-span-6">
          <div className="w-full mb-4">
            <h3 className="font-semibold text-3xl">
              Our Other Cleaning Services in Houston
            </h3>

            <BorderBottom
              classProps={{
                child: "w-24",
                parrent: "flex justify-start mt-4",
              }}
            />
          </div>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/2">
              <h6>Commercial Cleaning</h6>
              <p>
                Experience pristine cleanliness with our professional commercial
                cleaning services in Houston, TX. Our expert team employs
                industry-leading techniques and eco-friendly products to ensure
                every surface shines and every corner is spotless.
              </p>
              <div className="my-4">
                <ul className="list-disc list-inside marker:text-primary-50 marker:font-extrabold">
                  {commercialCleaningList.map(({ id, list }) => (
                    <li key={id} className="font-medium my-2">
                      {list}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="h-auto w-1 bg-primary-950 hidden md:block" />
            <div className="w-full md:w-1/2">
              <h6>Residential Cleaning</h6>
              <p>
                Our residential cleaning service provides thorough and
                professional cleaning solutions tailored to meet the unique
                needs of homeowners. From vacuuming and dusting to sanitizing
                surfaces and scrubbing bathrooms, we ensure every corner of your
                home sparkles with cleanliness.
              </p>
              <div className="my-4">
                <ul className="list-disc list-inside marker:text-primary-50 marker:font-extrabold">
                  {residentialCleaningList.map(({ id, list }) => (
                    <li key={id} className="font-medium my-2">
                      {list}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:col-span-4">
          <Image
            src="/cs5.jpg"
            alt="Maricela"
            width={450}
            height={300}
            loading="lazy"
            className="h-full w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default OurOtherCleaningService;
