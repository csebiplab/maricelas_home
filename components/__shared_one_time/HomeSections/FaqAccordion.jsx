"use client";

import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import BorderBottom from "@/components/__ui/BorderBottom";

export function FaqAccordion() {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="w-11/12 md:w-8/12 mx-auto">
      <div className="text-center">
        <h3 className="text-3xl font-semibold">
          FAQ for Residential and Commercial Cleaning Services in Houston
        </h3>
        <BorderBottom
          classProps={{ child: "w-24", parrent: "flex justify-center" }}
        />
        <h6 className="my-5 font-normal">
          Frequently Asked Questions (FAQ) for residential and commercial
          cleaning services
        </h6>
      </div>
      <>
        {Array.from({ length: 10 }).map((__, idx) => (
          <Accordion
            key={idx}
            open={open === idx + 1}
            className="mb-2 rounded-lg border border-blue-gray-100 px-4"
          >
            <AccordionHeader
              onClick={() => handleOpen(idx + 1)}
              className={`border-b-0 transition-colors ${
                open === idx + 1
                  ? "text-primary-50 hover:!text-primary-700"
                  : ""
              }`}
            >
              What is Material Tailwind?
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal">
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </AccordionBody>
          </Accordion>
        ))}
      </>

      {/* <Accordion
        open={open === 2}
        className="mb-2 rounded-lg border border-blue-gray-100 px-4"
      >
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className={`border-b-0 transition-colors ${
            open === 2 ? "text-blue-500 hover:!text-blue-700" : ""
          }`}
        >
          How to use Material Tailwind?
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 3}
        className="rounded-lg border border-blue-gray-100 px-4"
      >
        <AccordionHeader
          onClick={() => handleOpen(3)}
          className={`border-b-0 transition-colors ${
            open === 3 ? "text-blue-500 hover:!text-blue-700" : ""
          }`}
        >
          What can I do with Material Tailwind?
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion> */}
    </div>
  );
}
