import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

const FilterPrice = ({ filters, setFilters }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleVisibility = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleSortChange = (e) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      priceOrder: e.target.value,
    }));
  };

  return (
    <div className="mt-2">
      <div className="relative">
        {/* Button to toggle the dropdown */}
        <button
          className="w-full flex justify-between px-6 font-poppin items-center text-xl rounded-lg p-2 focus:outline-none"
          onClick={toggleVisibility}
        >
          Sort by Price
          {isOpen ? (
            <FaAngleUp className="text-gray-500" />
          ) : (
            <FaAngleDown className="text-gray-500" />
          )}
        </button>

        {/* Dropdown content */}
        <div
          className={`overflow-hidden rounded-lg mt-2 transition-all duration-300 ease-out px-6 ${
            isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <select
            id="sortOrder"
            value={filters.priceOrder}
            onChange={handleSortChange}
            className="block mb-4 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="lowToHigh">Low to High</option>
            <option value="highToLow">High to Low</option>
          </select>
        </div>
      </div>
      <div className="w-[90%] mx-auto h-[0.9px] bg-gray-300"></div>
    </div>
  );
};

export default FilterPrice;
