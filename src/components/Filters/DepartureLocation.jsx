import { useEffect, useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6"; // Import angle icons
import { cities } from "../../content/departurecities";

const DepartureLocation = ({ filters, setFilters }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedLocation, setSelectedLocation] = useState(
    filters.departureLocation
  );
  const toggleFreebiesVisibility = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleLocationChange = (event) => {
    const value = event.target.value;
    setSelectedLocation(value);
    console.log(value)
    setFilters({...filters, departureLocation: value})
  };
  useEffect(() => {
    setSelectedLocation(filters.departureLocation)
   
  }, [filters])
  return (
    <div className="mt-2">
      <div className="relative">
        {/* Button to toggle the dropdown */}
        <button
          className="w-full flex justify-between px-6 font-poppin items-center text-xl rounded-lg p-2 focus:outline-none"
          onClick={toggleFreebiesVisibility}
        >
          Departure Location
          {isOpen ? (
            <FaAngleUp className="text-gray-500" />
          ) : (
            <FaAngleDown className="text-gray-500" />
          )}
        </button>

        {/* Dropdown for selecting location */}
        <div
          className={`overflow-hidden rounded-lg mt-2 transition-all duration-300 ease-out px-6 ${
            isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mt-2 mb-6">
            <select
              className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none appearance-none bg-white text-gray-700"
              value={selectedLocation}
              onChange={handleLocationChange}
              style={{
                backgroundImage: `url("/icons/droparrow.png")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "calc(100% - 10px) center",
                backgroundSize: "16px",
              }}
            >
              <option value="" disabled>
                Select a Location
              </option>
              <option value="all">All</option>
              {cities.map((city, index) => (
                <option value={city} key={index}>
                  {city}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="w-[90%] mx-auto h-[0.9px] bg-gray-300"></div>
    </div>
  );
};

export default DepartureLocation;
