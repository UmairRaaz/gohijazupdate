import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6"; // Import angle icons

const NumberOfTravelers = () => {
  const [isOpen, setIsOpen] = useState(false); // Toggle dropdown visibility
  const [numberOfPeople, setNumberOfPeople] = useState(""); // Selected number of people
  const [travelerTypes, setTravelerTypes] = useState({
    adults: false,
    children: false,
    infants: false,
  }); // Checkbox states

  // Toggle dropdown visibility
  const toggleFreebiesVisibility = () => {
    setIsOpen((prevState) => !prevState);
  };

  // Handle dropdown change
  const handleNumberChange = (event) => {
    setNumberOfPeople(event.target.value);
  };

  // Handle checkbox change
  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    setTravelerTypes((prevState) => ({
      ...prevState,
      [value]: checked,
    }));
  };

  return (
    <div className="mt-2">
      <div className="relative">
        {/* Button to toggle the dropdown */}
        <button
          className="w-full flex justify-between px-6 font-poppin items-center text-xl rounded-lg p-2 focus:outline-none"
          onClick={toggleFreebiesVisibility}
        >
          Number Of Travelers
          {isOpen ? <FaAngleUp className="text-gray-500" /> : <FaAngleDown className="text-gray-500" />} 
        </button>

        {/* Dropdown for selecting number of travelers */}
        <div
          className={`overflow-hidden rounded-lg mt-2 transition-all duration-300 ease-out px-6 ${
            isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mt-2">
            <select
              className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none appearance-none bg-white text-gray-700"
              value={numberOfPeople}
              onChange={handleNumberChange}
              style={{
                backgroundImage: `url("/icons/droparrow.png")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "calc(100% - 10px) center",
                backgroundSize: "16px",
              }}
            >
              <option value="" disabled>
                Number Of People
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>

          {/* Checkboxes for traveler types */}
          <div className="flex flex-col  gap-2 p-2">
            {Object.keys(travelerTypes).map((type) => (
              <label className="flex items-center" key={type}>
                <input
                  type="checkbox"
                  value={type}
                  checked={travelerTypes[type]}
                  onChange={handleCheckboxChange}
                  className="mr-2 border-gray-400 rounded-xl w-4 h-4"
                />
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </label>
            ))}
          </div>
        </div>
      </div>
      <div className="w-[90%] mx-auto h-[1px] bg-gray-200"></div>
    </div>
  );
};

export default NumberOfTravelers;
