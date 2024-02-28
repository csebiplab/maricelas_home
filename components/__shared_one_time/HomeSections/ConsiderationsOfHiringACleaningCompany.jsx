import BorderBottom from "@/components/__ui/BorderBottom";
import Image from "next/image";
import React from "react";

// Considerations of hiring company
const considerationsOfHiringCompany = [
  {
    id: 1,
    title: "Reputation and Reviews",
    desc: "Look for cleaning agencies with positive reviews and a good reputation in the community.",
  },
  {
    id: 2,
    title: "Services Offered",
    desc: "Ensure the company offers the specific magnificent cleaning services you need, whether it's residential, commercial, deep cleaning, etc.",
  },
  {
    id: 3,
    title: "Experience and Expertise",
    desc: "Choose a company with experienced and well-trained staff to ensure quality service.",
  },
  {
    id: 4,
    title: "Licensing and Insurance",
    desc: "Verify that the cleaning company in Houston is properly licensed and insured to protect yourself and your property.",
  },
  {
    id: 5,
    title: "Eco-Friendly Practices",
    desc: "Consider companies that use environmentally friendly cleaning products and methods if sustainability is important to you.",
  },
  {
    id: 6,
    title: "Customization Options",
    desc: "Seek out companies that offer customizable cleaning plans to tailor services to your specific needs.",
  },
  {
    id: 7,
    title: "Pricing and Transparency",
    desc: "Compare pricing structures and ensure the company is transparent about costs and any potential additional fees.",
  },
  {
    id: 8,
    title: "Availability and Flexibility",
    desc: "Choose a cleaning service that can accommodate your schedule and offers flexible appointment times.",
  },
  {
    id: 9,
    title: "Customer Service",
    desc: "Evaluate the company's customer service responsiveness and professionalism to ensure a smooth experience.",
  },
  {
    id: 10,
    title: "Guarantees and Satisfaction Policies",
    desc: "Look for companies that offer satisfaction guarantees or policies to address any issues that may arise during or after cleaning.",
  },
];

const ConsiderationsOfHiringACleaningCompany = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-11 gap-4">
        <div className="w-full md:col-span-5">
          <Image
            src="/cs6.avif"
            alt="Maricela"
            width={450}
            height={300}
            loading="lazy"
            className="h-full w-full"
          />
        </div>
        <div className="w-full md:col-span-6">
          <div className="w-full mb-4">
            <h3 className="font-semibold text-3xl">
              What To Consider First When You Want to Hire a Cleaning Company?
            </h3>

            <BorderBottom
              classProps={{
                child: "w-24",
                parrent: "flex justify-start mt-4",
              }}
            />
          </div>
          <div>
            <ol className="list-decimal list-inside marker:text-primary-50 marker:font-extrabold">
              {considerationsOfHiringCompany.map(({ id, title, desc }) => (
                <li key={id} className="my-3">
                  <span className="font-bold mr-2">{title} :</span>
                  <span className="font-medium">{desc}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsiderationsOfHiringACleaningCompany;
