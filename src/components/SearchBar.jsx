import { useContext, useState } from "react";
import { cities } from "../content/departurecities";
import { PackageContext } from "../context/PackageContext";

const SearchBar = () => {
  const { setFilters, filterPackages } = useContext(PackageContext);

  // Local state to hold filter values temporarily
  const [localFilters, setLocalFilters] = useState({
    packageType: "umrah",
    duration: "all",
    departureLocation: "all",
  });

  // Handlers to update local state
  const handlePackageChange = (event) => {
    const packageType = event.target.value;
    setLocalFilters((prev) => ({
      ...prev,
      packageType,
      duration: "all", // Reset duration when package type changes
    }));
  };

  const handleDepartureChange = (event) => {
    setLocalFilters((prev) => ({
      ...prev,
      departureLocation: event.target.value,
    }));
  };

  const handleDurationChange = (event) => {
    setLocalFilters((prev) => ({
      ...prev,
      duration: event.target.value,
    }));
  };

  const handleSearch = () => {
    setFilters(localFilters);  // Apply filters only on Search
    filterPackages();
    document
      .getElementById("package-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  const getDurationOptions = () => [
    { value: "all", label: "All" },
    ...(localFilters.packageType === "hajj"
      ? [
          { value: "short", label: "Short Duration" },
          { value: "long", label: "Long Duration" },
        ]
      : localFilters.packageType === "umrah"
      ? [
          { value: "15", label: "15 Days" },
          { value: "21", label: "21 Days" },
          { value: "28", label: "28 Days" },
        ]
      : []),
  ];

  return (
    <div className="flex items-center relative justify-center flex-col max-w-4xl mx-auto w-full">
      <div className="bg-white h-full w-full mt-8 rounded-xl shadow-lg px-4 sm:px-8 py-6 pb-10 sm:py-4 flex flex-col sm:flex-row gap-x-10 md:pb-10 items-center space-y-2 sm:space-y-0 relative">
        
        {/* Departure */}
        <div className="flex flex-1 flex-col space-y-2 w-full sm:w-auto">
          <div className="flex items-center space-x-2">
            <img src="/icons/departure.png" alt="Departure Icon" className="w-5" />
            <span className="text-gray-700 font-poppins font-semibold">Departure</span>
          </div>
          <select
            className="outline-none w-full border border-gray-300 px-2 py-1 text-gray-500 bg-transparent rounded"
            onChange={handleDepartureChange}
            value={localFilters.departureLocation}
          >
            <option value="all">All</option>
            {cities.map((city, index) => (
              <option value={city} key={index}>
                {city}
              </option>
            ))}
          </select>
        </div>

        {/* Packages */}
        <div className="flex flex-1 flex-col space-y-2 w-full sm:w-auto">
          <div className="flex items-center space-x-2">
            <img src="/icons/packages.png" alt="Packages Icon" className="w-5" />
            <span className="text-gray-700 font-poppins font-semibold">Packages</span>
          </div>
          <select
            className="outline-none w-full border border-gray-300 px-2 py-1 text-gray-500 bg-transparent"
            onChange={handlePackageChange}
            value={localFilters.packageType}
          >
            <option value="umrah">Umrah</option>
            <option value="hajj">Hajj</option>
          </select>
        </div>

        {/* Duration */}
        <div className="flex flex-1 flex-col space-y-2 w-full sm:w-auto">
          <div className="flex items-center space-x-2">
            <img src="/icons/duration.png" alt="Duration Icon" className="w-5" />
            <span className="text-gray-700 font-poppins font-semibold">Duration</span>
          </div>
          <select
            className="outline-none w-full border border-gray-300 px-1 py-1 text-gray-500 bg-transparent text-sm"
            onChange={handleDurationChange}
            value={localFilters.duration}
          >
            {getDurationOptions().map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Search Button */}
      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-full px-4 sm:px-0">
        <button
          className="w-44 md:w-[200px] mx-auto bg-[#CE9137] text-white px-6 py-2 rounded-lg flex items-center justify-center space-x-2 font-semibold text-xl"
          onClick={handleSearch}
        >
          <img src="/newIcons/search.png" alt="Search Icon" className="w-5" />
          <span>Search</span>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
