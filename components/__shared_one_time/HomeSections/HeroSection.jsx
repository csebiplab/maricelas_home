"use client";

import { Button } from "@material-tailwind/react";
import React from "react";

const HeroSection = () => {
  return (
    <div className="relative flex flex-col-reverse md:flex-row justify-center custom-container gap-x-16">
      <div className="flex flex-col justify-center px-4 xl:px-0 xl:pl-32 md:py-24 absolute top-1/4 md:static">
        <h1 className="font-bold text-3xl md:text-5xl mb-4 md:mb-6 leading-tight text-center md:text-left">
          Commercial & Residential
          <br />
          Cleaning Services
        </h1>
        <p className="text-dark-500 text-xl font-semibold leading-6 text-center md:text-left mb-6">
          Best cleaning services in Houston and Texas.
        </p>
        <div className="flex justify-center md:justify-start">
          <Button href="/contact-us" className="btn !text-sm rounded-none">
            Get an Estimate
          </Button>
        </div>
      </div>

      <div className="w-full xl:w-8/12">
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
