import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { PackageContext } from "../context/PackageContext";
import SectionLoader from "./SectionLoader";
import FilterComponent from "../components/Filters/FilterCompoent";
import { IoIosCloseCircleOutline } from "react-icons/io";
import NewUmrahComponent from "../components/NewUmrahComponent";

const Filter = () => {
  const [showFilter, setShowFilter] = useState(false);
  const { filteredPackages, loading, filterPackages } =
    useContext(PackageContext);

  const handleFilterChange = (updatedFilters) => {
    filterPackages(updatedFilters);
  };
  return (
    <div className="w-full md:max-w-6xl 2xl:max-w-[95rem] mt-8 mx-auto">
      {/* Heading and Description */}
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl w-full px-2 md:px-0 md:max-w-2xl mx-auto font-bold text-[#4A4A4A]">
          Special Umrah and Hajj Packages
        </h2>
        <p className="text-xl text-[#454545] font-nunito mt-2">
          Choose your package according to your needs, guaranteed cheap and
          complete
        </p>
      </div>

      {/* Filter Toggle Button */}
      <div className="flex justify-between items-center px-6 mt-6">
        <button
          onClick={() => setShowFilter((prev) => !prev)}
          className="flex items-center gap-2 px-4 py-2 bg-white text-[#4A4A4A] shadow-md rounded-full border border-gray-300 cursor-pointer hover:shadow-lg transition"
        >
          <span className="text-xl font-semibold">Filter</span>
          {!showFilter ? (
            <img
              src="/icons/filter.png"
              alt="filter-icon"
              className="w-5 h-5"
            />
          ) : (
            <IoIosCloseCircleOutline className="w-5 h-5 cursor-pointer" />
          )}
        </button>

        {/* View All Button */}
        <Link
          to={"/all-packages"}
          className="px-6 py-2 text-[#ED8D02] rounded-full text-xl font-bold transition"
        >
          View All
        </Link>
      </div>

      {/* Filters and Packages */}
      <div className="flex flex-col gap-x-4 md:flex-row justify-between mt-8">
        {showFilter && (
          <div className="md:w-1/4 w-full">
            <FilterComponent onFilterChange={handleFilterChange} />
          </div>
        )}
        <div className={`md:w-${showFilter ? "3/4" : "full"} w-full`}>
          {loading && <SectionLoader />}
          {!loading && filteredPackages.length > 0
            ? filteredPackages.map((pkg, index) => (
                <NewUmrahComponent pkg={pkg} key={index} />
              ))
            : !loading && <p>No packages available.</p>}
        </div>
      </div>
    </div>
  );
};

export default Filter;
