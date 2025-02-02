import { useContext, useEffect, useState } from "react";
import PriceRange from "../PriceRange/PriceRange";
import DepartureLocation from "./DepartureLocation";
import RoomType from "./RoomType";
import FilterPrice from "./FilterPrice";
import FilterAirlines from "./FilterAirlines";
import { PackageContext } from "../../context/PackageContext";
import CityAndProvince from "./CityAndProvince";

const FilterComponent = () => {
  const { filters, setFilters, filterPackages } = useContext(PackageContext);
  const [distance, setDistance] = useState(filters.distanceFromHotel);

  const handleRangeChange = (value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      distanceFromHotel: { min: value.min, max: value.max },
    }));
  };

  const clearFilters = () => {
    setFilters({
      departureLocation: "all",
      distanceFromHotel: { min: 100, max: 5000 },
      roomType: [],
      packageType: "all",
      duration: "all",
      priceOrder: "lowToHigh",
      airline: "",
      province: "",
      district: "",
    });

    setDistance({ min: 100, max: 5000 });
  };

  useEffect(() => {
    filterPackages();
  }, [filters]);

  return (
    <>
      <div>
        <div className="flex justify-end mt-4">
          <button
            className="border border-red-500 mb-2 text-xs mr-4 text-red-500 px-2 py-1 rounded hover:bg-red-600 hover:text-white"
            onClick={clearFilters}
          >
            Clear
          </button>
        </div>
      </div>
      <div className="bg-white border px-4 py-2 md:px-0 rounded-lg shadow-md max-w-lg mx-auto">
        <PriceRange
          min={100}
          max={5000}
          onChange={handleRangeChange}
          initialValues={distance}
        />
        <DepartureLocation filters={filters} setFilters={setFilters} />
        {/* <FilterPrice filters={filters} setFilters={setFilters} /> */}
        <FilterAirlines filters={filters} setFilters={setFilters} />
        <CityAndProvince filters={filters} setFilters={setFilters} />
        <RoomType filters={filters} setFilters={setFilters} />
      </div>
    </>
  );
};

export default FilterComponent;
