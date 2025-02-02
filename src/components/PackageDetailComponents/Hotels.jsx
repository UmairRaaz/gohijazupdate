import { useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { capitalizeEachWord } from "../../utils/capitalizeEachWord";

const Hotels = ({ hotelDetails }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const {
    checkInDate,
    checkOutDate,
    city,
    hotelDuration,
    hotelName,
    distance,
    facilities = [],
    hotelType,
    hotelImages,
    hotelLocation,
    title,
  } = hotelDetails;
  console.log("facilities", facilities)
  const images =
    hotelImages?.length > 0
      ? hotelImages
      : [
          "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
        ];

  const toggleImage = (direction) => {
    if (direction === "next") {
      setCurrentImage((prev) => (prev + 1) % images.length);
    } else {
      setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  const formatValue = (value) => {
    if (value === null || value === undefined || value === "") {
      return "N/A";
    }
    if (typeof value === "string") {
      return capitalizeEachWord(value);
    }
    if (typeof value === "number") {
      return value.toString(); // Convert numbers to strings
    }
    return JSON.stringify(value); // For other types like objects or arrays
  };

  return (
    <div className="px-2">
      <h1 className="text-3xl font-bold px-4 md:px-0 my-4">
        Hotel In {formatValue(hotelLocation)}
      </h1>
      <div className="p-6 text-[#4A4A4A] border rounded-xl border-gray-400">
        {/* Hotel Details Box */}
        <div className="pb-4">
          {/* <h2 className="text-2xl font-semibold mb-4">
            🏨 {formatValue(title)}
          </h2> */}
          <h2 className="text-2xl font-semibold mb-4">
            🏨 {formatValue(hotelName)}
          </h2>
          <div className="space-y-2 text-[#454545]">
            {/* <div className="flex justify-between">
              <span className="font-semibold">Hotel Name:</span>
              <span>{formatValue(hotelName)}</span>
            </div> */}
            <div className="flex justify-between">
              <span className="font-semibold">Hotel City:</span>
              <span>{formatValue(city)}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Distance:</span>
              <span>{formatValue(distance)}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Hotel Type:</span>
              <span>{formatValue(hotelType)}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Check-in Date:</span>
              <span>{formatValue(checkInDate)}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Check-out Date:</span>
              <span>{formatValue(checkOutDate)}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Duration:</span>
              <span>{formatValue(hotelDuration)} Days</span>
            </div>
          </div>
        </div>

        {/* Services Included */}
        <div className="border-t py-4 border-gray-400">
          <h2 className="text-2xl font-semibold mb-1">Services</h2>
          <div className="space-y-1 grid grid-cols-2">
            {facilities.length > 0 ? (
              facilities.map((service, index) => (
                <div key={index} className="flex items-start">
                  <img
                    src="/icons/checked.png"
                    alt="Check"
                    className="w-6 h-6 mr-2"
                  />
                  <span>{formatValue(service)}</span>
                </div>
              ))
            ) : (
              <span className="col-span-2 text-gray-600">N/A</span>
            )}
          </div>
        </div>

        {/* Image Section with Toggle */}
        <div className="border-t py-4 border-gray-400">
          <div className="relative">
            <div className="w-56 h-40 mx-auto overflow-hidden">
              {images.length > 0 ? (
                <img
                  src={images[currentImage]}
                  alt="Hotel"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-600 text-xl">
                  No images available
                </div>
              )}
            </div>
          </div>
          {images.length > 0 && (
            <div className="flex items-center mt-4 justify-center space-x-4">
              <button
                onClick={() => toggleImage("prev")}
                className="text-black text-3xl bg-gray-200 p-3 rounded-full shadow-md hover:bg-gray-400 transition duration-200 ease-in-out"
              >
                <FaArrowLeftLong size={20} />
              </button>
              <span className="text-lg">
                {currentImage + 1}/{images.length}
              </span>
              <button
                onClick={() => toggleImage("next")}
                className="text-black text-3xl bg-gray-200 p-3 rounded-full shadow-md hover:bg-gray-400 transition duration-200 ease-in-out"
              >
                <FaArrowRightLong size={20} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hotels;
