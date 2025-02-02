import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6"; // Import angle icons

const FreebiesFilter = ({ onFilterChange }) => {
  const [freebies, setFreebies] = useState([]);
  const [isOpen, setIsOpen] = useState(false); // State to toggle the checkbox list visibility

  const handleFreebiesChange = (e) => {
    const value = e.target.value;
    setFreebies((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
    onFilterChange({ freebies });
  };

  const toggleFreebiesVisibility = () => {
    setIsOpen((prevState) => !prevState); // Toggle visibility
  };

  return (
    <div className="">
      <div className="relative">
        {/* Button to toggle the dropdown */}
        <button
          className="w-full flex justify-between font-poppins px-6 items-center text-xl rounded-lg p-2 focus:outline-none"
          onClick={toggleFreebiesVisibility}
        >
          Freebies
          {isOpen ? <FaAngleUp /> : <FaAngleDown />} {/* Toggle between up and down */}
        </button>

        {/* Scrollable checkboxes section */}
        <div
          className={`overflow-y-auto border-b border-gray-400 pb-4 mt-2 transition-all duration-300 ease-out ${isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}
          style={{ scrollbarWidth: 'thin', scrollbarColor: '#888 #e0e0e0' }} // Style for custom scrollbar
        >
          <div className="flex flex-col px-6 gap-2 p-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                value="Free Parking"
                checked={freebies.includes("Free Parking")}
                onChange={handleFreebiesChange}
                className="mr-2 border-gray-400 rounded-xl w-4 h-4"
              />
              Free Parking
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                value="Free Breakfast"
                checked={freebies.includes("Free Breakfast")}
                onChange={handleFreebiesChange}
                className="mr-2 border-gray-400 rounded-xl w-4 h-4"
              />
              Free Breakfast
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                value="Free Internet"
                checked={freebies.includes("Free Internet")}
                onChange={handleFreebiesChange}
                className="mr-2 border-gray-400 rounded-xl w-4 h-4"
              />
              Free Internet
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                value="Free Cancellation"
                checked={freebies.includes("Free Cancellation")}
                onChange={handleFreebiesChange}
                className="mr-2 border-gray-400 rounded-xl w-4 h-4"
              />
              Free Cancellation
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreebiesFilter;
