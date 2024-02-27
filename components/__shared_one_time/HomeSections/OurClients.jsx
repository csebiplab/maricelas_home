"use client";

import GoogleLogo from "@/assets/google.avif";
import AngiLogo from "@/assets/angi.png";
import Hub from "@/assets/hub.webp";
import HomeAdviserLogo from "@/assets/homeAdvisor.webp";
import YelpLogo from "@/assets/yelp.png";
import BorderBottom from "@/components/__ui/BorderBottom";
import Link from "next/link";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

// Define an array of client objects
const clients = [
  {
    id: 1,
    logo: GoogleLogo,
    desc: "Top Customer Support and Project Management...",
  },
  {
    id: 4,
    logo: YelpLogo,
    desc: "Top Customer Support and Project Management...",
  },
  {
    id: 5,
    logo: Hub,
    desc: "Top Customer Support and Project Management...",
  },
  {
    id: 2,
    logo: AngiLogo,
    desc: "Top Customer Support and Project Management...",
  },
  {
    id: 3,
    logo: HomeAdviserLogo,
    desc: "Top Customer Support and Project Management...",
  },
];

const OurClients = () => {
  return (
    <div>
      <div>
        <div className="text-center">
          <h3 className="text-3xl font-semibold">
            <span>Commercial & Residential Cleaning Services</span>
            <br />
            <span>You Can Trust</span>
          </h3>
          <h6 className="mt-5 font-normal">
            Houston's Cleaning Company Of Choices -{" "}
            <Link
              href="/"
              className="underline hover:no-underline hover:text-secondary-600"
            >
              See Our Reviews
            </Link>
          </h6>
          <BorderBottom
            classProps={{ child: "w-24", parrent: "flex justify-center" }}
          />
        </div>
        <div className="mt-12 flex justify-center">
          <div className="flex items-center flex-wrap md:flex-nowrap gap-12">
            {clients.map((client) => (
              <div key={client.id}>
                <div>
                  <div>
                    <Image
                      src={client.logo}
                      alt="Client Logo"
                      width={100}
                      height={50}
                      className="bg-transparent"
                    />
                  </div>
                  <span className={`${client.id === 1 ? "" : "hidden"}`}>
                    Reviews{" "}
                    {Array.from({ length: 5 }).map((__, i) => (
                      <FaStar
                        key={i}
                        className="fill-secondary-700 inline-block mr-1 w-3 h-3"
                      />
                    ))}{" "}
                  </span>
                </div>
                <p className="mt-8">{`"${client.desc}"`}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurClients;
