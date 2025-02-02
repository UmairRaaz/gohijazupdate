import React, { useState, useEffect } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import provincesAndCities from "../../content/provincesAndCities";

const CityAndProvince = ({ filters, setFilters }) => {
  const [selectedProvince, setSelectedProvince] = useState(
    filters.province || ""
  );
  const [selectedDistrict, setSelectedDistrict] = useState(
    filters.district || ""
  );
  const [isProvinceOpen, setIsProvinceOpen] = useState(true);
  const [isDistrictOpen, setIsDistrictOpen] = useState(true);

  // Sync local state with filters when filters are updated
  useEffect(() => {
    setSelectedProvince(filters.province || "");
    setSelectedDistrict(filters.district || "");
  }, [filters.province, filters.district]);

  const handleProvinceChange = (e) => {
    const province = e.target.value;
    setSelectedProvince(province);
    setSelectedDistrict("");
    setFilters((prevFilters) => ({
      ...prevFilters,
      province,
      district: "",
    }));
  };

  const handleDistrictChange = (e) => {
    const district = e.target.value;
    setSelectedDistrict(district);
    setFilters((prevFilters) => ({
      ...prevFilters,
      district,
    }));
  };

  const toggleProvince = () => {
    setIsProvinceOpen((prevState) => !prevState);
  };

  const toggleDistrict = () => {
    setIsDistrictOpen((prevState) => !prevState);
  };

  return (
    <div>
      <div className="p-4">
        {/* Province Selection */}
        <div className="mb-4">
          <button
            className="w-full flex justify-between px-2 font-poppin items-center text-xl rounded-lg p-2 focus:outline-none"
            onClick={toggleProvince}
          >
            Select Province
            {isProvinceOpen ? (
              <FaAngleUp className="text-gray-500" />
            ) : (
              <FaAngleDown className="text-gray-500" />
            )}
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-out ${
              isProvinceOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <select
              id="province"
              value={selectedProvince}
              onChange={handleProvinceChange}
              className="w-full p-2 border rounded-md outline-none"
            >
              <option value="">-- Select Province --</option>
              {Object.keys(provincesAndCities.Pakistan).map((province) => (
                <option key={province} value={province}>
                  {province}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* District Selection */}
        {selectedProvince && (
          <div className="">
            <button
              className="w-full flex justify-between px-2 font-poppin items-center text-xl rounded-lg p-2 focus:outline-none"
              onClick={toggleDistrict}
            >
              Select District
              {isDistrictOpen ? (
                <FaAngleUp className="text-gray-500" />
              ) : (
                <FaAngleDown className="text-gray-500" />
              )}
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-out ${
                isDistrictOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <select
                id="district"
                value={selectedDistrict}
                onChange={handleDistrictChange}
                className="w-full p-2 border rounded-md outline-none"
              >
                <option value="">-- Select District --</option>
                {provincesAndCities.Pakistan[selectedProvince].map(
                  (district) => (
                    <option key={district} value={district}>
                      {district}
                    </option>
                  )
                )}
              </select>
            </div>
          </div>
        )}
      </div>
      <div className="w-[90%] mx-auto h-[0.9px] bg-gray-300"></div>
    </div>
  );
};

export default CityAndProvince;
