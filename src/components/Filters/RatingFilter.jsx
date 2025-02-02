import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6"; // Import icons

const RatingFilter = ({ onFilterChange }) => {
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [isOpen, setIsOpen] = useState(false); // State to toggle the visibility of the filter

  const handleRatingChange = (value) => {
    const updatedRatings = selectedRatings.includes(value)
      ? selectedRatings.filter((item) => item !== value)
      : [...selectedRatings, value];

    setSelectedRatings(updatedRatings);
    onFilterChange({ ratings: updatedRatings }); // Pass the updated ratings
  };

  const toggleRatingVisibility = () => {
    setIsOpen((prevState) => !prevState); // Toggle visibility
  };

  return (
    <div className="mt-2 pb-4">
      {/* Toggle button */}
      <button
        className="w-full flex justify-between  px-6 items-center text-xl rounded-lg p-2 focus:outline-none"
        onClick={toggleRatingVisibility}
      >
        Rating
        {isOpen ? <FaAngleUp className="text-gray-500" /> : <FaAngleDown className="text-gray-500" />}
      </button>

      {/* Ratings as buttons in a row */}
      <div
        className={`transition-all duration-300 ease-out ${
          isOpen ? "mt-2 opacity-100 max-h-40" : "opacity-0 max-h-0"
        }`}
      >
        <div className="flex gap-4 px-8 p-2 flex-wrap">
          {Array.from({ length: 5 }, (_, index) => {
            const ratingValue = index + 1; // Rating values should start from 1
            const isSelected = selectedRatings.includes(ratingValue);

            return (
              <button
                key={ratingValue}
                onClick={() => handleRatingChange(ratingValue)}
                className={`px-4 py-2 border-2 rounded-md text-lg ${
                  isSelected
                    ? "bg-yellow-200 border-yellow-400 text-yellow-800"
                    : "bg-white border-yellow-400 text-yellow-600"
                }`}
              >
                {ratingValue}+
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RatingFilter;
