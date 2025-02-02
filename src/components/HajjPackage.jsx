import { MdNightlightRound } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const HajjPackage = ({ pkg }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/package-detail/${pkg._id}`)}
      className="cursor-pointer"
    >
      <div className="border border-gray-400 pb-4 md:pb-0 flex flex-col md:flex-row font-poppins text-white rounded-lg">
        {/* Left: Image */}
        <div className="w-full md:w-1/2 overflow-hidden  relative p-2">
          <img
            src="/images/hajj.png" // Replace with actual image URL
            alt="Hajj Package"
            className="object-cover w-full  h-full rounded-lg"
          />
          <div className="absolute flex gap-2 items-center border border-[#1C2124] top-4 left-4 be p-2 text-black   rounded-full">
            {/* <img src="/icons/night.png" alt="icon" /> */}
            {/* <MdNightlightRound className="text-[#1C2124]" /> */}
            <span className="text-sm text-[#1C2124]">{pkg?.duration} </span>{" "}
            {/* Icon can be added */}
          </div>
        </div>

        {/* Right: Package Details */}
        <div className="w-full md:w-2/3 md:py-6 px-2 flex  justify-around items-start flex-col gap-y-2">
          <h3 className="text-3xl text-left uppercase text-[#ED8D02] font-bold mb-1">
            {pkg?.package_title}
          </h3>
          <p className="text-xl mb-1">
            <span className=" text-gray-700">
              Starting Price: {pkg?.startingPrice}
            </span>
          </p>
          <div className="flex items-center">
            <span className="ml-2 text-gray-700 font-bold">
              <span className="text-[#ED8D02] ">4.0 </span>Rating
            </span>
            <span className="text-yellow-500 ml-1">★★★★☆</span>
          </div>
          {/* Services and Information */}
          <div className="border-t border-gray-600 pt-1 pr-2 mt-2">
            <p className="text-xs text-gray-700">
              ️✈️ Flight | Hotel | 🚍 Transport | 🛄 Services
            </p>
          </div>

          {/* View Details Button */}
          <button className="mt-6 w-44 mx-auto md:mx-auto py-2  px-4 bg-[#ED8D02] text-black rounded-full hover:bg-[#D77A02] transition duration-300">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default HajjPackage;
