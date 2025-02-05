import { useContext, useState } from "react";
import { PackageContext } from "../context/PackageContext";
import FilterComponent from "../components/Filters/FilterCompoent";
import SectionLoader from "./SectionLoader";
import NopackageAvailable from "../components/NopackageAvailable";
import NewHajjComponent from "../components/NewHajjComponent";
import NewUmrahComponent from "../components/NewUmrahComponent";
import NoRecordsFound from "../components/NoResultFound";

const SpecialPackages = () => {
  const { filteredPackages, loading, filterPackages, filters, setFilters } =
    useContext(PackageContext);
  const [showFilter, setShowFilter] = useState(false);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    filterPackages(newFilters);
  };

  const handleSortChange = (e) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      priceOrder: e.target.value,
    }));
  };

  return (
    <div
      id="special"
      className="w-full overflow-hidden bg-[#ffffff] md:max-w-[75rem] md:pt-20 2xl:max-w-[95rem] mx-auto py-12"
    >
      {/* Heading Section */}
      <div className="text-center mb-8 relative">
        <h2 className="text-3xl md:text-5xl w-full px-2 md:px-0 text-center mx-auto font-bold text-[#4A4A4A]">
          Special Umrah and Hajj Packages
        </h2>
        <p className="text-[#454545] w-full md:max-w-2xl mx-auto text-xl mt-4">
          These companies are approved by Ministry of Hajj Pakistan
        </p>
      </div>

      {/* Filter and Sort */}
      <div id="package-section" className="flex justify-between items-center px-6">
        {/* Filter Button */}
        <button
          onClick={() => setShowFilter((prev) => !prev)}
          className="flex items-center gap-2 px-4 py-2 bg-white text-[#4A4A4A] shadow-md rounded-full border border-gray-300 cursor-pointer hover:shadow-lg transition"
        >
          <img
            src={showFilter ? "/newIcons/filter-close.png" : "/newIcons/filter.png"}
            alt="filter-icon"
            className="w-5 h-5"
          />
          <span className="text-xl font-semibold">Filter</span>
        </button>

        {/* Sort By Dropdown */}
        <div className="flex items-center space-x-2">
          <label htmlFor="sort" className="text-gray-700">Sort By</label>
          <select
            id="sort"
            value={filters.priceOrder}
            onChange={handleSortChange}
            className="border bg-white border-gray-300 rounded-md p-2 focus:outline-none"
          >
            <option value="lowToHigh">Low to High</option>
            <option value="highToLow">High to Low</option>
          </select>
        </div>
      </div>

      {/* Package Components */}
      <div className="flex flex-col gap-x-4 md:flex-row justify-between mt-8">
        {showFilter && (
          <div className="md:w-[30%] w-full">
            <FilterComponent onFilterChange={handleFilterChange} />
          </div>
        )}

        <div className={`w-full mt-10 md:mt-0 ${showFilter ? "md:w-[90%]" : "md:w-[100%]"}`}>
          {/* Loading or Packages */}
          {loading ? (
            <SectionLoader />
          ) : (
            <div className="px-2">
              {filteredPackages?.length > 0 ? (
                filteredPackages.map((pkg, index) =>
                  pkg?.package_header.split(" ")[0]?.toLowerCase() === "umrah" ? (
                    <NewUmrahComponent pkg={pkg} key={index} />
                  ) : pkg?.package_header.split(" ")[0]?.toLowerCase() === "hajj" ? (
                    <NewHajjComponent pkg={pkg} key={index} />
                  ) : null
                )
              ) : (
                <NoRecordsFound />
              )}
            </div>
          )}
        </div>
      </div>

      {/* Show More Button */}
      {filteredPackages?.length > 0 && (
        <div className="flex justify-center mt-4">
          <button
            className="px-6 py-3 border border-[#DA9B3E] text-[#DA9B3E] text-xl rounded-lg shadow-md hover:bg-[#DA9B3E] hover:text-white transition-all duration-500"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default SpecialPackages;
