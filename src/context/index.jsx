import { useState, useEffect } from "react";
import axios from "axios";
import { PackageContext } from "./PackageContext";

export const PackageProvider = ({ children }) => {
  const [packages, setPackages] = useState([]);
  const [filteredPackages, setFilteredPackages] = useState([]);
  const [packageDetails, setPackageDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  const [filters, setFilters] = useState({
    departureLocation: "all",
    distanceFromHotel: { min: 100, max: 5000 },
    roomType: [],
    amenities: [],
    packageType: "all",
    duration: "all",
    priceOrder: "lowToHigh",
    airline: "all",
    province: "",
    district: "",
  });

  // Fetch all packages
  const fetchAllPackages = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://ghgohijazserverapi.gohijaz.com/api/users/packages/get/latest"
      ); // Replace with your API endpoint

      setPackages(response.data.data);
      setFilteredPackages(response.data.data);
    } catch (error) {
      console.error("Error fetching packages:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch package details
  const fetchPackageDetails = async (id) => {
    setLoading(true);
    try {
      const response = await axios.post(
        `https://ghgohijazserverapi.gohijaz.com/api/users/packages/get/package/details`,
        {
          packageId: id,
        }
      ); // Replace with your API endpoint
      setPackageDetails(response.data.data);
    } catch (error) {
      console.error("Error fetching package details:", error);
    } finally {
      setLoading(false);
    }
  };

  // Filter function for Hajj packages
  const filterHajjPackages = (packages, filters) => {
    let filtered = [...packages];
    // Filter by distance (Madinah and Makkah)
    if (
      filters.distanceFromHotel &&
      (filters.distanceFromHotel.min !== undefined ||
        filters.distanceFromHotel.max !== undefined)
    ) {
      filtered = filtered.filter((pkg) => {
        const madinahDistance = pkg.distance_from_madina_hotel || 0;
        const makkahDistance = pkg.distance_from_makkah_hotel || 0;
        const minDistance = filters.distanceFromHotel.min || 0;
        const maxDistance = filters.distanceFromHotel.max || Infinity;

        return (
          madinahDistance >= minDistance &&
          madinahDistance <= maxDistance &&
          makkahDistance >= minDistance &&
          makkahDistance <= maxDistance
        );
      });
    }

    // Filter by departure location
    if (filters.departureLocation && filters.departureLocation !== "all") {
      filtered = filtered.filter((pkg) => {
        const locationFromPkg = pkg.departure_from?.toLowerCase();
        const locationFromFlight =
          pkg.departure_flight?.departure_location?.toLowerCase();
        const filterLocation = filters.departureLocation.toLowerCase();
        return (
          locationFromPkg === filterLocation ||
          locationFromFlight === filterLocation
        );
      });
    }

    // Price Order (Low to High or High to Low)
    if (
      filters.priceOrder === "lowToHigh" ||
      filters.priceOrder === "highToLow"
    ) {
      filtered = filtered
        .map((pkg) => {
          const totalPrice = pkg.pricing.reduce((sum, priceObj) => {
            const prices = [
              priceObj?.first_price?.price || 0,
              priceObj?.second_price?.price || 0,
              priceObj?.third_price?.price || 0,
              priceObj?.fourth_price?.price || 0,
            ];
            return (
              sum + prices.reduce((priceSum, price) => priceSum + price, 0)
            );
          }, 0);

          return { ...pkg, totalPrice }; // Add totalPrice to each package
        })
        .sort((a, b) => {
          // Sort based on totalPrice
          if (filters.priceOrder === "lowToHigh") {
            return a.totalPrice - b.totalPrice; // Ascending order
          } else {
            return b.totalPrice - a.totalPrice; // Descending order
          }
        });
    }

    // Filter by airline
    if (filters.airline && filters.airline !== "all") {
      filtered = filtered.filter((pkg) => {
        const airlineFromFlight =
          pkg.departure_flight?.departure_airline_name?.toLowerCase();
        const filterAirline = filters.airline.toLowerCase();
        return airlineFromFlight === filterAirline;
      });
    }

    // Filter by duration (short or long)
    if (filters.duration && filters.duration !== "all") {
      filtered = filtered.filter((pkg) => {
        const isShortDuration = pkg?.duration?.toLowerCase().includes("short");
        const isLongDuration = pkg?.duration?.toLowerCase().includes("long");

        if (filters.duration === "short") {
          return isShortDuration;
        } else if (filters.duration === "long") {
          return isLongDuration;
        }
        return false;
      });
    }

    // Filter by province
    if (filters.province && filters.province.toLowerCase() !== "all") {
      filtered = filtered.filter((pkg) => {
        const provinceFromPkg = pkg.province?.toLowerCase().trim(); // Trim for extra spaces
        const filterProvince = filters.province.toLowerCase().trim();
        return provinceFromPkg === filterProvince;
      });
    }

    // Filter by district
    if (filters.district && filters.district !== "all") {
      filtered = filtered.filter((pkg) => {
        return pkg.district?.toLowerCase() === filters.district.toLowerCase();
      });
    }

    if (filters.amenities && filters.amenities.length > 0) {
      filtered = filtered.filter((pkg) => {
        return filters.amenities.some((amenity) => {
          if (amenity === "Ziyarat") {
            return pkg.ziayarat_included === true;
          } else if (amenity === "Transport") {
            return pkg.transport && pkg.transport !== "none";
          } else if (amenity === "Qurbani") {
            return pkg.qurbani_included === true;
          }
          return false;
        });
      });
    }
    console.log("Filtered packages in hajj after all filters:", filtered);

    return filtered;
  };

  // Filter function for Umrah packages
  const filterUmrahPackages = (packages, filters) => {
    let filtered = [...packages];

    // Filter by distance from hotel
    if (
      filters.distanceFromHotel &&
      (filters.distanceFromHotel.min !== undefined ||
        filters.distanceFromHotel.max !== undefined)
    ) {
      const minDistance = filters.distanceFromHotel.min || 0;
      const maxDistance = filters.distanceFromHotel.max || Infinity;

      filtered = filtered.filter((pkg) => {
        return pkg.accomodation_details.some((accomodation) => {
          const location = accomodation.hotel_details.location?.toLowerCase();
          const distance = accomodation.hotel_details.distance || 0;

          if (location === "makkah" || location === "madinah") {
            return distance >= minDistance && distance <= maxDistance;
          }
          return false;
        });
      });
    }

    // Filter by room type
    if (filters.roomType && filters.roomType.length > 0) {
      const cleanFilters = filters.roomType.map((filter) =>
        filter.trim().toLowerCase().replace(/\s+/g, "")
      );

      filtered = filtered.filter((pkg) =>
        pkg.pricing.some((priceObj) => {
          const roomType = priceObj.room_type
            ?.trim()
            .toLowerCase()
            .replace(/\s+/g, "");
          return cleanFilters.includes(roomType);
        })
      );
    }

    // Filter by departure location
    if (filters.departureLocation && filters.departureLocation !== "all") {
      filtered = filtered.filter((pkg) => {
        const locationFromPkg = pkg.departure_from?.toLowerCase();
        const locationFromFlight =
          pkg.departure_flight?.departure_location?.toLowerCase();
        const filterLocation = filters.departureLocation.toLowerCase();
        return (
          locationFromPkg === filterLocation ||
          locationFromFlight === filterLocation
        );
      });
    }

    // Price Order (Low to High or High to Low)
    if (
      filters.priceOrder === "lowToHigh" ||
      filters.priceOrder === "highToLow"
    ) {
      filtered = filtered
        .map((pkg) => {
          const totalPrice = pkg.pricing.reduce((sum, priceObj) => {
            const prices = [
              priceObj?.first_price?.price || 0,
              priceObj?.second_price?.price || 0,
              priceObj?.third_price?.price || 0,
              priceObj?.fourth_price?.price || 0,
            ];
            return (
              sum + prices.reduce((priceSum, price) => priceSum + price, 0)
            );
          }, 0);

          return { ...pkg, totalPrice }; // Add totalPrice to each package
        })
        .sort((a, b) => {
          if (filters.priceOrder === "lowToHigh") {
            return a.totalPrice - b.totalPrice;
          } else {
            return b.totalPrice - a.totalPrice;
          }
        });
    }

    // Filter by airline
    if (filters.airline && filters.airline !== "all") {
      filtered = filtered.filter((pkg) => {
        const airlineFromFlight =
          pkg.departure_flight?.departure_airline_name?.toLowerCase();
        const filterAirline = filters.airline.toLowerCase();
        return airlineFromFlight === filterAirline;
      });
    }

    // Filter by province
    if (filters.province && filters.province !== "all") {
      filtered = filtered.filter((pkg) => {
        return pkg.province?.toLowerCase() === filters.province.toLowerCase();
      });
    }

    // Filter by district
    if (filters.district && filters.district !== "all") {
      filtered = filtered.filter((pkg) => {
        return pkg.district?.toLowerCase() === filters.district.toLowerCase();
      });
    }

    // Filter by exact duration (number of days)
    if (filters.duration && filters.duration !== "all") {
      filtered = filtered.filter((pkg) => {
        const pkgDuration = parseInt(pkg?.duration?.split(" ")[0], 10);
        const filterDuration = parseInt(filters.duration, 10);
        return pkgDuration === filterDuration;
      });
    }

    if (filters.amenities && filters.amenities.length > 0) {
      filtered = filtered.filter((pkg) => {
        return filters.amenities.some((amenity) => {
          if (amenity === "Ziyarat") {
            return pkg.ziayarat_included === true;
          } else if (amenity === "Transport") {
            return pkg.transport && pkg.transport !== "none";
          } else if (amenity === "Qurbani") {
            return pkg.qurbani_included === true;
          }
          return false;
        });
      });
    }
    return filtered;
  };

  // Main filter function
  const filterPackages = () => {
    let filtered = [...packages];
    console.log(filters)
    // If no filters are applied, return the full dataset
    if (
      (!filters.packageType || filters.packageType === "all") &&
      (!filters.duration || filters.duration === "all") &&
      (!filters.departureLocation || filters.departureLocation === "all") &&
      (!filters.airline || filters.airline === "all") &&
      (!filters.province || filters.province === "") &&
      (!filters.district || filters.district === "") &&
      (!filters.roomType || filters.roomType.length === 0) &&
      (!filters.amenities || filters.amenities.length === 0) &&
      ((!filters.distanceFromHotel.min && !filters.distanceFromHotel.max) ||
        (filters.distanceFromHotel.min === 100 &&
          filters.distanceFromHotel.max === 5000)) &&
      (!filters.priceOrder || filters.priceOrder === "lowToHigh")
    ) {
      setFilteredPackages(filtered);
      return;
    }

    // Separate packages into Hajj and Umrah
    const umrahPackages = filtered.filter((pkg) =>
      pkg.package_header?.toLowerCase().includes("umrah")
    );
    const hajjPackages = filtered.filter((pkg) =>
      pkg.package_header?.toLowerCase().includes("hajj")
    );
    // Apply filters separately to both Hajj and Umrah packages
    const filteredUmrahPackages = filterUmrahPackages(umrahPackages, filters);
    const filteredHajjPackages = filterHajjPackages(hajjPackages, filters);

    // Combine both filtered packages
    filtered = [...filteredUmrahPackages, ...filteredHajjPackages];

    console.log("Final Filtered Packages:", filtered);
    setFilteredPackages(filtered);
  };

  const searchFilter = (appliedFilters) => {
    let filtered = [...packages];
    const filters = appliedFilters || {};  // Use passed filters or fallback
  
    console.log(filtered);
    console.log(filters);
  
    if (
      (!filters.departureLocation || filters.departureLocation === "all") &&
      (!filters.packageType || filters.packageType === "all") &&
      (!filters.duration || filters.duration === "all")
    ) {
      setFilteredPackages(filtered);
      return;
    }
  
    // Apply filters as before
    if (filters.departureLocation && filters.departureLocation !== "all") {
      filtered = filtered.filter((pkg) => {
        const locationFromPkg = pkg.departure_from?.toLowerCase();
        const locationFromFlight = pkg.departure_flight?.departure_location?.toLowerCase();
        const filterLocation = filters.departureLocation.toLowerCase();
        return (
          locationFromPkg === filterLocation ||
          locationFromFlight === filterLocation
        );
      });
    }
  
    if (filters.packageType && filters.packageType !== "all") {
      filtered = filtered.filter((pkg) => {
        const packageType = pkg?.package_header?.split(" ")[0]?.toLowerCase();
        return packageType === filters.packageType.toLowerCase();
      });
  
      if (
        filters.packageType.toLowerCase() === "hajj" &&
        filters.duration &&
        filters.duration !== "all"
      ) {
        filtered = filtered.filter(
          (pkg) =>
            pkg.duration.split(" ")[0].toLowerCase() ===
            filters.duration.toLowerCase()
        );
      }
  
      if (
        filters.packageType.toLowerCase() === "umrah" &&
        filters.duration &&
        filters.duration !== "all"
      ) {
        filtered = filtered.filter((pkg) => pkg.duration === filters.duration);
      }
    }
  
    console.log("After filtered", filtered);
    setFilteredPackages(filtered);
  };
  
  

  useEffect(() => {
    fetchAllPackages();
  }, []);

  return (
    <PackageContext.Provider
      value={{
        packages,
        filteredPackages,
        packageDetails,
        loading,
        fetchPackageDetails,
        filterPackages,
        filters,
        setFilters,
        searchFilter,
      }}
    >
      {children}
    </PackageContext.Provider>
  );
};
