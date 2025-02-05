import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

const AmenitiesFilter = ({ filters, setFilters  }) => {
  const [amenities, setAmenities] = useState(filters.amenities || []);
  const [isOpen, setIsOpen] = useState(true);

  const handleAmenitiesChange = (e) => {
    const value = e.target.value;

    const updatedAmenities = amenities.includes(value)
      ? amenities.filter((item) => item !== value)
      : [...amenities, value];

    setAmenities(updatedAmenities);
    setFilters((prev) => ({ ...prev, amenities: updatedAmenities })); // Maintain other filters
  };

  const toggleAmenitiesVisibility = () => {
    setIsOpen((prev) => !prev);
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
          className={`overflow-y-auto  transition-all duration-300 ease-out ${
            isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
          }`}
          style={{ scrollbarWidth: "thin", scrollbarColor: "#888 #e0e0e0" }}
        >
          <div className="flex flex-col px-6 gap-2 p-2">
            {["Ziyarat",  "Transport", "Qurbani"].map((amenity) => (
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
      
    </div>
  );
};

export default AmenitiesFilter;
