"use client";

import BorderBottom from "@/components/__ui/BorderBottom";
import Link from "next/link";
import React from "react";

const OurClients = () => {
  return (
    <div>
      <div>
        <div className="text-center">
          <h2>
            <span>Commercial & Residential Cleaning Services</span>
            <br />
            <span>You Can Trust</span>
          </h2>
          <h6 className="my-5 font-normal">
            Houston's Cleaning Company Of Choices -{" "}
            <Link
              href="/"
              className="underline hover:no-underline hover:text-secondary-600"
            >
              See Our Reviews
            </Link>
          </h6>
          <BorderBottom classProps={"flex justify-center"} />
        </div>
      </div>
    </div>
  );
};

export default OurClients;
