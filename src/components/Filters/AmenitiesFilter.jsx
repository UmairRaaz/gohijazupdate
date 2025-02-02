import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

const AmenitiesFilter = ({ onFilterChange }) => {
  const [amenities, setAmenities] = useState([]); // State to track selected amenities
  const [isOpen, setIsOpen] = useState(false); // State to toggle the dropdown visibility

  const handleAmenitiesChange = (e) => {
    const value = e.target.value;

    // Update selected amenities
    const updatedAmenities = amenities.includes(value)
      ? amenities.filter((item) => item !== value)
      : [...amenities, value];

    setAmenities(updatedAmenities);

    // Notify parent component of the changes
    onFilterChange({ type: "amenities", value: updatedAmenities });
  };

  const toggleAmenitiesVisibility = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="mt-2">
      <div className="relative">
        {/* Toggle button */}
        <button
          className="w-full flex justify-between  px-6 items-center text-xl rounded-lg p-2 focus:outline-none"
          onClick={toggleAmenitiesVisibility}
        >
          Amenities
          {isOpen ? <FaAngleUp className="text-gray-500" /> : <FaAngleDown className="text-gray-500" />}
        </button>

        {/* Dropdown list */}
        <div
          className={`overflow-y-auto mt-2 transition-all duration-300 ease-out ${
            isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
          }`}
          style={{ scrollbarWidth: "thin", scrollbarColor: "#888 #e0e0e0" }}
        >
          <div className="flex flex-col px-6 gap-2 p-2">
            {["Ziyarat Tour", "Dedicated Guide", "Group Tour", "Transport", "Accessibility"].map((amenity) => (
              <label key={amenity} className="flex items-center">
                <input
                  type="checkbox"
                  value={amenity}
                  checked={amenities.includes(amenity)}
                  onChange={handleAmenitiesChange}
                  className="mr-2 border-gray-400 rounded-xl w-4 h-4"
                />
                {amenity}
              </label>
            ))}
          </div>
        </div>
      </div>
      <div className="w-[90%] mx-auto h-[1px] bg-gray-200"></div>
    </div>
  );
};

export default AmenitiesFilter;
