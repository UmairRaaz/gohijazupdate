import { FaStar } from "react-icons/fa";

const HotelComponent = ({ hotel }) => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar
        key={index}
        className={`text-yellow-500 ${
          index < rating ? "fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  const locationImage =
    hotel.location === "Makkah"
      ? "/images/packagecard/makkah.png"
      : "/images/packagecard/medinah.png"; 

  return (
    <div className="flex flex-col mb-8 border-b border-gray-400 md:flex-row bg-white overflow-hidden ">
      {/* Left Section: Hotel Image and Details */}
      <div className="flex flex-col md:flex-row w-full md:w-[80%] gap-6 md:p-4">
        {/* Hotel Image */}
        <div className="w-full md:w-3/4">
          <img
            src={hotel.imageUrl}
            alt={`${hotel.nameofhotel}`}
            className="object-cover w-full h-full rounded-md"
          />
        </div>

        {/* Hotel Details */}
        <div className="flex flex-col  w-full md:w-3/4">
          {/* Hotel Name */}
          <h3 className="text-md md:text-2xl  font-bold text-[#4A4A4A] flex items-center">
            🏨 {hotel.nameofhotel}
          </h3>

          {/* Rating */}
          <div className="flex items-center ">
            <span className="text-gray-600 text-md mt-1 md:mt-0 md:text-2xl mr-2">
              <span className="text-[#ED8D02] font-bold mr-1">
                {hotel.rating}.0
              </span>
              Rating:
            </span>
            <div className="flex">{renderStars(hotel.rating)}</div>
          </div>

          {/* Features */}
          <div className="flex flex-col text-md md:text-2xl gap-2 mt-2 md:mt-8  text-gray-600">
            {/* Distance */}
            <div className="flex items-center">
              <img
                src="/icons/hotels/location.png"
                alt="Location"
                className="mr-2"
              />
              <span className="text-[#ED8D02] font-bold">
                {hotel.distance.split(" ")[0]}
              </span>
              <span className="ml-1">
                {hotel.distance.split(" ").slice(1).join(" ")}
              </span>
            </div>

            {/* Suite Type */}
            <div className="flex items-center">
              <img
                src="/icons/hotels/bedroom.png"
                alt="Bedroom"
                className="mr-2"
              />
              {hotel.suiteType}
            </div>

            {/* Breakfast */}
            <div className="flex items-center">
              <img
                src="/icons/hotels/breakfast.png"
                alt="Breakfast"
                className="mr-2"
              />
              {hotel.breakfastIncluded ? "Breakfast Included" : "No Breakfast"}
            </div>
          </div>
        </div>
      </div>

      {/* Right Section: Map and Location Image */}
      <div className="flex flex-col items-center justify-center w-full md:w-[20%] p-4 ">
        {/* Map Link */}
        <div className="flex items-center gap-2 mb-4">
          <img src="/icons/hotels/Map.png" alt="Map Icon" />
          <a
            href={hotel.mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ED8D02] text-sm font-semibold "
          >
            Show on map
          </a>
        </div>

        {/* Location Image */}
        <img
          src={locationImage}
          alt={`${hotel.location} image`}
          className="w-36 rounded-md"
        />
      </div>
    </div>
  );
};

export default HotelComponent;
