import BorderBottom from "@/components/__ui/BorderBottom";
import Image from "next/image";
import MaricelasWorker from "@/assets/maricelas_worker.png";
import { CiSquareRemove } from "react-icons/ci";
import { LuCheckSquare } from "react-icons/lu";

const userCleaningExperiences = [
  {
    id: 1,
    text: "Management Problems",
  },
  {
    id: 2,
    text: "Unclear Price Changes",
  },
  {
    id: 3,
    text: "All Materials Hassles On You",
  },
  {
    id: 4,
    text: "Minimul Or No Design",
  },
  {
    id: 5,
    text: "Unprofessional Labour",
  },
];

const CleaningServiceInHouston = () => {
  return (
    <div className="flex justify-center">
      <div className="flex justify-center flex-wrap md:flex-nowrap w-full gap-6">
        <Image
          src={MaricelasWorker}
          alt="Maricela"
          width={450}
          height={300}
          loading="lazy"
          className=""
          style={{height: "450px"}}
        />
        <div className="">
          <div className="w-full">
            <h3 className="font-semibold text-3xl">
              Welcome to Our Commercial & Residential Cleaning Services in
              Houston
            </h3>

            <BorderBottom
              classProps={{ child: "w-24", parrent: "flex justify-start mt-4" }}
            />
          </div>
          <div className="mt-5">
            <div>
              {" "}
              Welcome to Maricela's Cleaning Magnificence, a company of
              commercial & residential cleaning services in Houston. Our current
              focus is on catering to both commercial and residential clients in
              Houston, Texas. We aim to provide our clients with comprehensive
              and high-quality services that meet their specific needs and
              requirements. Our team is composed of skilled professionals with
              extensive experience in the industry, and we are committed to
              delivering exceptional results that exceed our client’s
              expectations.
            </div>
            <h4 className="font-semibold my-5">
              Why Choose Maricela's Cleaning Magnificence Services?
            </h4>
            <div className="flex justify-between flex-wrap md:flex-nowrap">
              <div>
                <h6 className="font-semibold my-4">User Cleaning Experience</h6>
                <ul>
                  {userCleaningExperiences?.map((item) => (
                    <li
                      key={item.id}
                      className="flex items-center gap-y-3 font-medium"
                    >
                      <CiSquareRemove className="mr-2 font-medium" />{" "}
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h6 className="font-semibold my-4">
                  Maricela's Cleaning Magnificance
                </h6>
                <ul>
                  {userCleaningExperiences?.map((item) => (
                    <li
                      key={item.id}
                      className="flex items-center gap-y-3 font-medium"
                    >
                      <LuCheckSquare className="mr-2 font-medium border" />{" "}
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CleaningServiceInHouston;
