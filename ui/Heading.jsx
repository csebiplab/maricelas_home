import React from "react";
import Image from "next/image";
import headingImg from "../public/assets/random/headingIcon.png";

const Heading = ({ text }) => {
  return (
    <div className="flex items-center pb-2">
      <Image src={headingImg} width={20} height={20} className="mr-3" />
      <p className="text-center text-base text-dark-200">{text}</p>
    </div>
  );
};

export default Heading;
