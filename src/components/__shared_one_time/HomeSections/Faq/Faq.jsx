"use client";
import HeadingIcon from '@/components/__ui/HeadingIcon';
import { headingIconText } from '@/utils/heading-text';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import Image from "next/image";
import { useState } from "react";

const faqQuestionsNAns = [
  {
    id: 1,
    question: "What services does Maricela's Cleaning Magnificence provide?",
    answer:
      "We provide comprehensive cleaning services in Houston for both residential and commercial properties. Our services include general cleaning, deep cleaning, sanitization, carpet cleaning, window washing, and more.",
  },
  {
    id: 2,
    question: "Do you offer customizable cleaning plans?",
    answer:
      "Yes, we understand that every space has unique cleaning needs. We offer customizable cleaning plans tailored to the requirements of our clients.",
  },
  {
    id: 3,
    question: "Do you provide your cleaning equipment and supplies?",
    answer:
      "We bring our professional-grade equipment and supplies to ensure thorough and efficient cleaning. However, if you have specific preferences or products you'd like our service to use, we're pleased to accommodate.",
  },
  {
    id: 4,
    question: "How often can I schedule cleaning services?",
    answer:
      "You can schedule cleaning services in Houston as frequently as needed. Whether you require daily, weekly, biweekly, or monthly cleaning, we can create a schedule that fits your needs and budget.",
  },
  {
    id: 5,
    question:
      "Are your cleaners insured and trained?",
    answer:
      "We have thoroughly trained and fully insured our Maricela's Cleaning Magnificence cleaners. We ensure each team member is skilled in the latest cleaning techniques and follows strict safety protocols for your peace of mind.",
  },
  {
    id: 6,
    question: "How do I request a quote for cleaning services?",
    answer:
      "To request a quote, contact Maricela's Cleaning Magnificence directly via phone, email, or our website. We'll assess your cleaning needs and provide a customized quote tailored to your requirements.",
  },
  {
    id: 7,
    question: "What if I'm not satisfied with the cleaning service?",
    answer:
      "Customer satisfaction is our cleaner's top priority. If you're not completely satisfied with our service, please let us know, and we'll promptly address any concerns or re-clean the areas in question at no extra cost.",
  },
  {
    id: 8,
    question: "Do you provide eco-friendly cleaning options?",
    answer:
      "Yes, we offer eco-friendly cleaning solutions upon request. We use environmentally safe, non-toxic products to ensure a healthier space for you, your family, and the environment.",
  },
  {
    id: 9,
    question: "Do you offer same-day or emergency cleaning services?",
    answer:
      "We strive to accommodate urgent cleaning requests. Please call us directly, and we will do our best to provide same-day or emergency cleaning services in Houston based on availability.",
  },
  {
    id: 10,
    question: "How do I pay for my cleaning service?",
    answer:
      "Maricela's Cleaning Magnificence accepts various payment methods, including cash, credit/debit cards, and online payments. We receive payment after completing the cleaning service.",
  },
  {
    id: 11,
    question: "Do you offer discounts or recurring service packages?",
    answer:
      "We offer discounts for recurring cleaning services, such as weekly, biweekly, and monthly cleanings. Contact us to learn more about our service packages and special promotions.",
  },
  {
    id: 12,
    question: "How long does a typical cleaning service take?",
    answer:
      "The duration of a cleaning service depends on the size of the property and the type of service you require. A standard residential cleaning may take between 1 and 3 hours. We can give you a more accurate estimate when you book.",
  },
  {
    id: 13,
    question: "What should I do to prepare for a cleaning service?",
    answer:
      "There's no need to prepare much before we arrive. However, we recommend tidying up any personal items or valuables to ensure the cleaning team can focus on deep cleaning your home or office.",
  },
  {
    id: 14,
    question: "Do you offer specialized cleaning services for businesses?",
    answer:
      "Yes, we provide comprehensive janitorial and office cleaning services in Houston for businesses of all sizes. Whether you need daily, weekly, or customized commercial cleaning, we've got covered.",
  },
  {
    id: 15,
    question: "Can you clean after a renovation or construction project?",
    answer:
      "Yes, we design our post-construction cleaning service to eliminate dust, debris, and construction materials, leaving your space pristine and ready for use. After completing the renovation project we'll make every corner clean and safe.",
  },
  {
    id: 16,
    question: "Are your cleaning products safe for pets and children?",
    answer:
      "Yes, our cleaners prioritize the safety of your family and pets. Our cleaning products are non-toxic and safe for use around children and animals.",
  },
  {
    id: 17,
    question: "How do you ensure quality in your cleaning services?",
    answer:
      "We follow strict quality control measures, including detailed cleaning checklists and regular supervision. Customer feedback is highly valued, and we strive for excellence in every job. If there's ever an issue, we'll resolve it promptly to ensure your satisfaction.",
  },
];
const Faq = () => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div>
      <div>
        <div className="container 3xl:py-[120px] lg:py-[100px] py-[60px]">
          <div>
            <div className="flex justify-center items-center">
              <HeadingIcon text={headingIconText.faq__headingIconText} />
            </div>
            <h2 className='text-[32px] md:text-[33px] lg:text-[34px] xl:text-[36px] 2xl:text-[38px] 3xl:text-[39px] 4xl:text-[41px] 5xl:text-[42px] font-bold text-black leading-normal mb-[10px] text-center'>FAQ for Cleaning Services in Houston</h2>
            <div className="">
              <>
                {faqQuestionsNAns.map(({ question, answer, id }, idx) => (
                  <Accordion
                    key={id}
                    open={open === id}
                    className="mb-1  text-white bg-primary"
                  >
                    <AccordionHeader
                      onClick={() => handleOpen(id)}
                      className=" relative"
                    >
                      <div
                        className={`text-white  border-b-0 transition-colors px-4`}
                      >
                        <span className="text-white text-base 4xl:text-[17px] 5xl:text-lg font-bold leading-[122%]">
                          {question}
                        </span>
                      </div>
                      <div className="absolute right-3">
                        <Image
                          src="/assets/random/arrow.png"
                          width={9}
                          height={16}
                          alt="arrow"
                          className=""
                        />
                      </div>
                    </AccordionHeader>
                    <AccordionBody className="px-4 text-sm 5xl:text-base font-normal bg-white text-black">
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
  );
};

export default Faq;
