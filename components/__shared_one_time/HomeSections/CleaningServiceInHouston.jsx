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
      <div className="flex justify-center flex-wrap md:flex-nowrap w-11/12 gap-10 md:gap-16 md:px-10">
        <Image
          src={MaricelasWorker}
          alt="Maricela"
          width={420}
          height={280}
          loading="lazy"
          className=""
        />
        <div>
          {" "}
          <div className="">
            <h3 className="font-semibold">Cleaning Services In Houston</h3>

            <BorderBottom
              classProps={{ child: "w-24", parrent: "flex justify-start mt-4" }}
            />
          </div>
          <div className="mt-5">
            <div>
              {" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Doloremque enim blanditiis pariatur recusandae sunt aperiam
              voluptatum aut ducimus quos commodi?
            </div>
            <h3 className="font-semibold my-5">
              Why Choose Maricela's Cleaning Magnificence Services?
            </h3>
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
                <h6 className="font-semibold my-4">Maricela's Cleaning Magnificance</h6>
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
