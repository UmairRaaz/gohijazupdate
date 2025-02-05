import { useState } from "react";

const SearchFilter = ({isListView, setisListView, search, setSearch }) => {

  const [city, setCity] = useState("all");
  const [packageType, setPackageType] = useState("all");
  const [sortBy, setSortBy] = useState("default");
  
console.log(isListView)
  return (
    <div className="w-full p-4 rounded-lg ">
      <div className="flex flex-col justify-between md:flex-row items-center gap-3">
        {/* Search Bar */}
        <div className="flex items-center bg-white px-2 w-full">
          <img src="/newIcons/filter-search.png" alt="icon" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for Hajj & Umrah service providers..."
            className="pl-3 pr-4 py-2 w-full focus:outline-none"
          />
        </div>

        <div className="flex gap-2 items-center h-10 w-full md:w-auto">
          <div
            onClick={() => setisListView((prev) => !prev)}
            className="bg-white cursor-pointer p-2 rounded-lg border flex items-center justify-center w-full h-full"
          >
            <img src="/newIcons/grid.png" alt="icon" className="md:w-14" />
          </div>
          <div
            onClick={() => setisListView((prev) => !prev)}
            className="bg-white cursor-pointer p-2 rounded-lg border flex items-center justify-center w-full h-full"
          >
            <img src="/newIcons/list.png" alt="icon" className="md:w-14" />
          </div>
        </div>

        {/* City Filter */}
        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full md:w-auto px-4 py-2 border focus:outline-none "
        >
          <option value="all">All Cities</option>
          <option value="makkah">Makkah</option>
          <option value="madinah">Madinah</option>
          <option value="jeddah">Jeddah</option>
        </select>

        {/* Package Type */}
        <select
          value={packageType}
          onChange={(e) => setPackageType(e.target.value)}
          className="w-full md:w-auto px-4 py-2 border rounded-lg"
        >
          <option value="all">Package Type</option>
          <option value="economy">Economy</option>
          <option value="standard">Standard</option>
          <option value="luxury">Luxury</option>
        </select>

        {/* Sort By */}
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="w-full md:w-auto px-4 py-2 border rounded-lg "
        >
          <option value="default">Sort By</option>
          <option value="price_low_high">Price: Low to High</option>
          <option value="price_high_low">Price: High to Low</option>
          <option value="rating">Best Rated</option>
        </select>
      </div>
    </div>
  );
};

export default SearchFilter;
