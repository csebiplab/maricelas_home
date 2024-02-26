"use client";

import { Button } from "@material-tailwind/react";
import { FcCalculator } from "react-icons/fc";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden flex flex-col-reverse md:flex-row justify-center custom-container gap-x-16 mb-16">
      <div className="flex flex-col justify-center px-4 xl:px-0 xl:pl-32 md:py-24 absolute top-10 md:top-1/4 md:static">
        <h1 className="font-bold text-2xl md:text-3xl xl:text-4xl mb-4 md:mb-6 leading-tight text-center md:text-left">
          Commercial & Residential
          <br />
          Cleaning Services
        </h1>
        <p className="text-dark-500 text-xl font-semibold leading-6 text-center md:text-left mb-6">
          Offering top-notch commercial & residential cleaning services in
          Houston, we pride ourselves on delivering meticulous cleanliness and
          unparalleled customer satisfaction.
        </p>
        <div className="flex justify-center md:justify-start">
          <Button className="btn !text-sm rounded-none flex items-center gap-x-2">
            <FcCalculator className="w-4 h-4" />
            <span className="text-white capitalize">Get an Estimate</span>
          </Button>
        </div>
      </div>

      <div className="min-w-max h-auto bg-black/85 opacity-30 md:bg-none md:opacity-100">
        <img
          priority="true"
          src="https://maricelascleaningmagnificence.com/wp-content/uploads/2020/10/cleaning_11.jpg"
          className="object-cover object-center w-full h-full"
          alt="Maricelas Home Maid Banner"
        />
      </div>
    </div>
  );
};

export default HeroSection;
