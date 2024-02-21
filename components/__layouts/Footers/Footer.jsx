import Image from "next/image";
import Link from "next/link";
import brandImg from "@/assets/MaricelasMagnificence_logo1.png";
import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaRegCopyright,
} from "react-icons/fa";
import BorderBottom from "@/components/__ui/BorderBottom";

const Footer = () => {
  return (
    <footer className={`primaryBgColor mt-16 container-custom`}>
      <div className="container mx-auto px-5 py-8 md:px-16">
        <div className="flex md:block justify-center">
          <div className="flex flex-col md:flex-row justify-center md:justify-between gap-y-4 md:gap-0">
            <div className="">
              <Link href={"/"}>
                <Image
                  src={brandImg}
                  alt="Maricela's Home"
                  width={130}
                  height={24.5}
                  priority={true}
                  // style={{
                  //   width: "auto",
                  //   height: "auto",
                  // }}
                  className="h-auto w-44 select-none"
                />
              </Link>
            </div>
            <div>
              <p className="font-bold mb-3">Company</p>
              <div className="flex flex-col gap-y-2">
                <Link href="/" className="hover:underline">
                  How it works
                </Link>
                <Link href="/" className="hover:underline">
                  Gallery
                </Link>
                <Link href="/" className="hover:underline">
                  Testimonials
                </Link>
                <Link href="/" className="hover:underline">
                  Careers
                </Link>
                <Link href="/" className="hover:underline">
                  Sitemap
                </Link>
              </div>
            </div>
            <div>
              <p className="font-bold mb-3">Services</p>
              <div className="flex flex-col gap-y-2">
                <Link href="/" className="hover:underline">
                  Manicure
                </Link>
                <Link href="/" className="hover:underline">
                  Pedicure
                </Link>
                <Link href="/" className="hover:underline">
                  Waxing
                </Link>
                <Link href="/" className="hover:underline">
                  Artificial Nails
                </Link>
                <Link href="/" className="hover:underline">
                  Design
                </Link>
                <Link href="/" className="hover:underline">
                  Additional Services <br /> and Kid (under 10)
                </Link>
              </div>
            </div>
            <div className="">
              <p className="font-bold mb-3">Follow Us</p>
              <div className="flex justify-start md:justify-end gap-x-4">
                <Link href="/" className="cursor-pointer">
                  <FaFacebook className=" w-8 h-8 text-black" />
                </Link>
                <Link href="/" className="cursor-pointer">
                  <FaGoogle className=" w-8 h-8 text-black" />
                </Link>
                <Link href="/" className="cursor-pointer">
                  <FaInstagram className=" w-8 h-8 text-black" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <BorderBottom
          classProps={{ child: "w-full", parrent: "flex justify-center" }}
        />
        <div className="flex justify-between">
          <p className="flex gap-x-2 items-center">
            <FaRegCopyright className="text-gray-500" />
            <span className="text-gray-600">
              Copyright {new Date().getFullYear()} | All rights Reserved
            </span>
          </p>
          <Link href="/" className="text-gray-500 font-semibold">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
