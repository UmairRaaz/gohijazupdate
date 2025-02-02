import { useContext } from "react";
import HajjPackage from "../components/HajjPackage";
import PackageComponent from "../components/PackageComponent";
import { PackageContext } from "../context/PackageContext";
import SectionLoader from "../sections/SectionLoader";
import NopackageAvailable from "../components/NopackageAvailable";
import NewHajjComponent from "../components/NewHajjComponent";
import NewUmrahComponent from "../components/NewUmrahComponent";

const AllPackages = () => {
  const { packages, loading } = useContext(PackageContext);

  // Filter Umrah and Hajj packages
  const hajjPackages = packages.filter((pkg) => {
    if (!pkg.package_header) return false;
    const firstWord = pkg.package_header.split(" ")[0]?.toLowerCase().trim();
    return firstWord === "hajj";
  });

  const umrahPackages = packages.filter((pkg) => {
    if (!pkg.package_header) return false;
    const firstWord = pkg.package_header.split(" ")[0]?.toLowerCase().trim();
    return firstWord === "umrah";
  });

  if (loading) {
    return <SectionLoader />;
  }

  return (
    <div className="max-w-6xl mt-20 mx-auto p-6">
      {/* First Section: Umrah and Hajj Packages */}
      <div className="text-center mb-12">
        <h2 className="text-4xl text-[#454545] font-bold font-poppins">
          Our Best Umrah and Hajj Packages 2025
        </h2>
        <p className="text-xl text-[#454545] font-nunito mt-2">
          Choose your package according to your needs, guaranteed cheap and complete
        </p>
      </div>

      {/* Umrah Packages */}
      <div className="mb-16">
        <h3 className="text-3xl text-center font-bold text-[#4A4A4A] mb-6">
          Special Umrah Packages 2025
        </h3>
        {umrahPackages.length === 0 ? (
          <NopackageAvailable text="No Umrah packages are available" />
        ) : (
          <div className="grid grid-cols-1  gap-8 px-4 md:px-12">
            {umrahPackages.map((pkg, index) => (
              <NewUmrahComponent pkg={pkg} key={index} />
            ))}
          </div>
        )}
      </div>

      {/* Hajj Packages */}
      <div>
        <h3 className="text-3xl text-center font-bold text-[#4A4A4A] mb-6">
          Special Hajj Packages 2025
        </h3>
        {hajjPackages.length === 0 ? (
          <NopackageAvailable text="No Hajj packages are available" />
        ) : (
          <div className="grid grid-cols-1 gap-4 gap-y-8 px-4 md:px-12">
            {hajjPackages.map((pkg, index) => (
              <NewHajjComponent pkg={pkg} key={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllPackages;
