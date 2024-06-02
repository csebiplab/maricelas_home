import Heading from "@/components/__ui/Heading";
import Image from "next/image";
import "./CleanWithUsSection.css";

const CleanWithUsSection = () => {
  return (
    <div>
      <div>
        <div className="container grid grid-cols-1 md:grid-cols-3 md:py-0 py-10 ">
          {/* ============= Large Screen ================= */}
          <div className="hidden md:block">
            <div className="col-span-1 sm:block flex sm:justify-normal justify-center ">
              <Image
                src="/assets/images/with__us.png"
                height={756}
                width={485}
                alt="join us"
              />
            </div>
          </div>

          {/* ============== Small Screen ============= */}

          <div className="block md:hidden">
            <div className="col-span-1 sm:block flex sm:justify-normal justify-center ">
              <Image
                src="/assets/images/with__us.png"
                height={480}
                width={370}
                alt="women"
                className="w-full md:!w-[370px] !h-[475px] mb-5"
              />
            </div>
          </div>

          <div className=" flex justify-center items-center col-span-2 lg:ml-[55px]">
            <div>
              <div>
                <Heading text={"With Us"}></Heading>
              </div>
              <h2 className="text-lg lg:text-2xl 2xl:text-[32px]  text-[#1F1F1F] mt-3 md:mt-[15px] font-semibold lg:mb-[25px] mb-[15px]">
                Get Your Commercial & Residential Area Cleaned With Us
              </h2>
              <p className="md:text-start text-base lg:leading-[32px] text-justify ">
                Transform your commercial and residential spaces into pristine
                havens with our professional cleaning services in Houston, TX.
                Our dedicated team utilizes state-of-the-art equipment and
                eco-friendly cleaning products to ensure a thorough and safe
                cleaning experience. Whether it's deep cleaning carpets,
                sanitizing surfaces, or tackling tough stains, we are committed
                to exceeding your expectations. Say goodbye to dirt, dust, and
                grime, and hello to a fresh, welcoming environment. Contact us
                today to schedule your cleaning appointment and let us bring
                cleanliness and comfort back to your space.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CleanWithUsSection;
