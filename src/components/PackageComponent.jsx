import { IoStarSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const PackageComponent = ({ pkg }) => {
  const rating = pkg.rating || 4.0; // Default to 4.0 if no rating is provided
  const filledStars = Math.floor(rating); // Number of filled stars
  const emptyStars = 5 - filledStars; // Remaining stars to make total 5
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/package-detail/${pkg._id}`)}
      key={pkg._id}
      className="bg-white border border-gray-400 cursor-pointer w-full h-full rounded-lg shadow-lg"
    >
      <div className="relative">
        {/* Background Image */}
        <img
          src={"/images/packagecard/background.png"}
          alt={pkg.name || "Package"}
          className="rounded-t-md w-full h-60 object-cover"
        />

        {/* Ribbon Positioned at the Top */}
        <div className="absolute top-4 -left-[10px] z-10">
          <img
            src="/images/packagecard/ribbon.png"
            alt="Ribbon"
            className="w-48"
          />
          <div className="absolute top-1/2 left-16 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-20">
            <h1 className="text-xl font-bold uppercase">
              <span className="text-4xl">{pkg?.duration}</span> Days
            </h1>
            <p className="text-lg uppercase whitespace-nowrap ml-12">
              Umrah Package
            </p>
          </div>
        </div>
      </div>

      {/* Package Details Section */}
      <div className="px-6 py-2 pb-4 rounded-b-lg  text-gray-700">
        {/* Rating */}
        <div className="flex justify-center items-center mb-4">
          <span className="text-xl font-semibold text-yellow-500">
            {rating}.0 <span className=" text-gray-700">Rating</span>
          </span>
          <span className="ml-2 text-sm flex">
            {/* Filled Stars */}
            {Array.from({ length: filledStars }).map((_, index) => (
              <IoStarSharp key={index} className="text-yellow-500" />
            ))}
            {/* Empty Stars */}
            {Array.from({ length: emptyStars }).map((_, index) => (
              <IoStarSharp
                key={index + filledStars}
                className="text-gray-300"
              />
            ))}
          </span>
        </div>

        {/* Two Columns Layout */}
        <div className="flex flex-wrap gap-6">
          <div className="flex-1">
            <img
              src="/images/packagecard/makkah.png"
              className="w-16 h-16 object-contain mx-auto"
              alt="Makkah"
            />
            <h1 className="text-md leading-tight text-nowrap mt-1">
              {pkg?.last_hotel_details?.title || "Makkah Hotel"}
            </h1>
            <p className="text-center text-xs">
              <span className="text-[#ED8D02] text-xs">
              {pkg?.last_hotel_details?.distance || "Unknown distance"}
              </span>{" "}
              To Masjid Al Haram
            </p>
          </div>

          {/* Border Div */}
          <div className="border-l border-gray-500 w-[1px]"></div>

          <div className="flex-1">
            <img
              src="/images/packagecard/medinah.png"
              className="w-16 h-16 object-contain mx-auto"
              alt="Medinah"
            />
            <h1 className="text-md leading-tight text-nowrap mt-1">
              {pkg?.first_hotel_details?.title || "Medinah Hotel"}
            </h1>
            <p className="text-center text-xs">
              <span className="text-[#ED8D02] text-xs">
                {pkg?.first_hotel_details?.distance || "Unknown distance"}
              </span>{" "}
              To Masjid Nabawi
            </p>
          </div>
        </div>

        <button className="mt-4 w-full px-4 py-2 bg-[#ED8D02] text-white rounded-md hover:bg-[#db7b00] transition text-xl">
          View Details
        </button>

        {/* Price and Duration */}
        <div className="flex items-center justify-evenly gap-2 mt-2">
          <span className="text-lg font-semibold">
            Starting Price: Rs {pkg?.startingPrice || "Not available"}
          </span>
          {/* Uncomment if you want to show nights */}
          {/* <span className="text-lg">
            | {pkg?.nights || "N/A"} <span className="font-light">Nights</span>
          </span> */}
        </div>
      </div>
    </div>
  );
};

export default PackageComponent;
