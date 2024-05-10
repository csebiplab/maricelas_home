// import HeadingIcon from "@/app/components/ui/HeadingIcon";
// import { headingIconText } from "@/app/utils/heading-text";
"use client";
import Heading from "@/components/__ui/Heading";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import Image from "next/image";
import { useState } from "react";
import faqImg from "../../../public/assets/random/faq.png";
const faqQuestionsNAns = [
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
const FaqSection = () => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div>
      <div className="bg-[#C477B126]">
        <div className=" container  3xl:py-[120px] lg:py-[100px] py-[60px]">
          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 ">
            <div className="flex items-center lg:justify-normal justify-center ">
              <Image
                alt="faq"
                src={faqImg}
                className=""
                width={575}
                height={402}
              />
            </div>

            <div>
              <div>
                <div className="flex flex-col">
                  <Heading text={"Frequently Asked Questions (FAQ)"} />

                  <div>
                    <p className="text-lg lg:text-2xl 2xl:text-[32px]  text-[#1F1F1F] mt-3 md:mt-[15px] lg:mb-8 mb-5 font-semibold">
                      FAQ for Residential and Commercial Cleaning Services in
                      Houston
                    </p>
                  </div>
                </div>
              </div>
              <div className="">
                {/* {faqQuestionsNAns.map((ques, idx) => (
                  <div key={idx}>
                    <details className="group [&_summary::-webkit-details-marker]:hidden">
                      <summary className="flex cursor-pointer items-center justify-between gap-1.5 bg-[#880769] p-4 border-2">
                        <h6 className="text-white text-xs md:text-lg ">
                          {ques.question}
                        </h6>

                        <div className="white-icon">
                          <IoCaretDown className="fill-white" />
                        </div>
                      </summary>

                      <p className=" pt-3 px-4 leading-relaxed border-2 bg-white text-[10px] md:text-base">
                        {ques.answer}
                      </p>
                    </details>
                  </div>
                ))} */}

                <>
                  {faqQuestionsNAns.map(({ question, answer, id }, idx) => (
                    <Accordion
                      key={id}
                      open={open === id}
                      className="mb-2  text-white bg-primary  px-4"
                    >
                      <AccordionHeader
                        onClick={() => handleOpen(id)}
                        className=" relative"
                      >
                        <div
                          className={`text-white  border-b-0 transition-colors`}
                        >
                          <span className="text-white text-base md:text-lg leading-[122%]">
                            <b className="text-white">Q{id}</b> {question}
                          </span>
                        </div>
                        <div className="absolute right-0">
                          <Image
                            src="/assets/random/arrow.png"
                            width={9}
                            height={16}
                            alt="arrow"
                            className=""
                          />
                        </div>
                      </AccordionHeader>
                      <AccordionBody className="pt-0 p-1 text-base font-normal bg-white">
                        {answer}
                      </AccordionBody>
                    </Accordion>
                  ))}
                </>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
