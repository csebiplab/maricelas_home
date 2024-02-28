"use client";

import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import BorderBottom from "@/components/__ui/BorderBottom";

// Faq questions and answere array
const faqQuestinsNAns = [
  {
    id: 1,
    question: "What services do you offer?",
    answer:
      "We provide comprehensive cleaning services for both commercial and residential properties. Our services include general cleaning, deep cleaning, sanitization, carpet cleaning, window washing, and more.",
  },
  {
    id: 2,
    question: "Do you offer customizable cleaning plans?",
    answer:
      "Yes, we understand that every space has unique cleaning needs. We offer customizable cleaning plans tailored to meet the specific requirements of our clients.",
  },
  {
    id: 3,
    question: "Do you provide your cleaning equipment and supplies?",
    answer:
      "Yes, we bring our professional-grade equipment and supplies to ensure thorough and efficient cleaning. However, if you have specific preferences or products you'd like us to use, we're happy to accommodate.",
  },
  {
    id: 4,
    question: "How often can I schedule cleaning services?",
    answer:
      "You can schedule cleaning services as frequently as needed. Whether you require daily, weekly, bi-weekly, or monthly cleaning, we can create a schedule that fits your needs and budget.",
  },
  {
    id: 5,
    question:
      "What measures do you take to ensure security and confidentiality?",
    answer:
      "We prioritize the security and confidentiality of our client's properties and information. Our cleaners undergo thorough background checks, and we have strict protocols in place to safeguard your privacy.",
  },
  {
    id: 6,
    question: "How do I request a quote for cleaning services?",
    answer:
      "You can request a quote by contacting us directly through phone, email, or our website. We'll assess your cleaning needs and provide you with a customized quote tailored to your requirements.",
  },
  {
    id: 7,
    question: "What if I'm not satisfied with the cleaning service?",
    answer:
      "Customer satisfaction is our top priority. If you're not completely satisfied with our service, please let us know, and we'll promptly address any concerns or re-clean the areas in question at no extra cost.",
  },
];

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
        {faqQuestinsNAns.map(({ question, answer, id }, idx) => (
          <Accordion
            key={id}
            open={open === id}
            className="mb-2 rounded-lg border border-blue-gray-100 px-4"
          >
            <AccordionHeader onClick={() => handleOpen(id)}>
              <div
                className={`border-b-0 transition-colors ${
                  open === idx + 1
                    ? "text-primary-50 hover:!text-primary-700"
                    : ""
                }`}
              >
                <b>Q{id}</b> {question}
              </div>
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal">
              {answer}
            </AccordionBody>
          </Accordion>
        ))}
      </>

      <div>
        <p className="font-medium text-primary-900 text-xl">
          If you have any other questions or concerns not addressed here, please
          feel free to reach out to us, and we'll be happy to assist you!
        </p>
      </div>
    </div>
  );
}
