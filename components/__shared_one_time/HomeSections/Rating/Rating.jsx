
import rating from "@/public/assets/icons/rating.png";
import Image from "next/image";

const Rating = () => {
  let stars = 5;
  const ratingStar = Array.from({ length: 5 }, (star, i) => {

    return (
      <span key={i}>
        {stars >= i + 1 && (
          <Image
          src={rating}
          width={20}
          height={19}
          alt=""
          className="md:w-[20px] md:h-[19px] w-[9.84px] h-[9.34px]"
        />
        )} 
      </span>
    );
  });
  return <div className="flex gap-1 justify-center md:mt-1">{ratingStar}</div>;
};

export default Rating;
