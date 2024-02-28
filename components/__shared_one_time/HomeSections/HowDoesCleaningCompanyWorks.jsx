import BorderBottom from "@/components/__ui/BorderBottom";
import React from "react";

const howCleaningsWorks = [
  {
    id: 1,
    title: "Initial Consultation",
    desc: "Clients reach out to us either through phone, email, or our website to inquire about our services.",
  },
  {
    id: 2,
    title: "Scheduling",
    desc: "Once the client approves the proposal, we work with them to schedule the cleaning appointment at a time that is convenient for them.",
  },
  {
    id: 3,
    title: "Preparation",
    desc: "Before the scheduled cleaning date, our team prepares all the necessary equipment, supplies, and tools needed for the job.",
  },
  {
    id: 4,
    title: "Execution",
    desc: "On the day of the cleaning appointment, our trained and experienced cleaning professionals arrive at the client's location promptly.",
  },
  {
    id: 5,
    title: "Quality Assurance",
    desc: "Throughout the cleaning process, we maintain a high standard of quality and attention to detail.",
  },
  {
    id: 6,
    title: "Client Feedback",
    desc: "After completing the cleaning service, we welcome feedback from our clients. We encourage them to share their thoughts and any areas where they feel we could improve.",
  },
];
const ourApproachPoints = [
  {
    id: 1,
    title: "Customized Cleaning Plans",
    desc: "At our commercial & residential cleaning service in Houston, TX, we believe in tailoring our approach to meet the unique needs of each client. We don't offer a one-size-fits-all solution; instead, we work closely with our customers to understand their specific requirements and preferences.",
  },
  {
    id: 2,
    title: "Advanced Cleaning Techniques",
    desc: "We stay ahead of the curve by utilizing the latest cleaning technologies and techniques. From eco-friendly products to advanced equipment, we ensure that our cleaning methods are not only effective but also environmentally conscious.",
  },
  {
    id: 3,
    title: "Trained and Professional Staff",
    desc: "Our team consists of highly trained and professional cleaners who are committed to delivering exceptional service. They undergo rigorous training and adhere to strict quality standards to ensure that every job is completed to perfection.",
  },
  {
    id: 4,
    title: "Transparent Communication",
    desc: "We prioritize clear and transparent communication with our clients. From initial consultations to ongoing updates, we keep our clients informed every step of the way, ensuring that their expectations are always met.",
  },
  {
    id: 5,
    title: "Flexible Scheduling",
    desc: "Recognizing that our clients have busy lives, we offer flexible scheduling options to accommodate their needs. Whether it's a one-time deep clean or regularly scheduled maintenance, we work around our client's schedules to provide convenience and peace of mind.",
  },
  {
    id: 6,
    title: "Commitment to Excellence",
    desc: "We strive for perfection in everything we do, and we're not satisfied until our clients are thrilled with the results.",
  },
];

const HowDoesCleaningCompanyWorks = () => {
  return (
    <>
      <div
        className="bg-cover bg-right bg-fixed"
        style={{
          backgroundImage: `linear-gradient(to left, #F5F8FA 50%, transparent 60%), url(/cs3.jpg)`,
        }}
      >
        <div className="container grid grid-cols-1 md:grid-cols-2 py-2">
          <div />
          <div className="">
            <div className="w-full mb-4">
              <h3 className="font-semibold text-3xl">
                How Does Our Cleaning Company Work?
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
                {howCleaningsWorks.map(({ id, title, desc }) => (
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
      <div
        className="bg-cover bg-left bg-fixed"
        style={{
          backgroundImage: `linear-gradient(to right, #F5F8FA 50%, transparent 60%), url(/cs4.jpg)`,
        }}
      >
        <div className="container grid grid-cols-1 md:grid-cols-2 py-2">
          <div className="">
            <div className="w-full mb-4">
              <h3 className="font-semibold text-3xl">
                Our Approach To Cleaning Service Is Different
              </h3>

              <BorderBottom
                classProps={{
                  child: "w-24",
                  parrent: "flex justify-start mt-4",
                }}
              />
            </div>
            <div>
              <ul className="list-disc list-inside marker:text-primary-50 marker:font-extrabold">
                {ourApproachPoints.map(({ id, title, desc }) => (
                  <li key={id} className="my-3">
                    <span className="font-bold mr-2">{title} :</span>
                    <span className="font-medium">{desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div />
        </div>
      </div>
    </>
  );
};

export default HowDoesCleaningCompanyWorks;
