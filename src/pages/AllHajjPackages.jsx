import { useContext } from "react";
import HajjPackage from "../components/HajjPackage";
import { PackageContext } from "../context/PackageContext";
import NopackageAvailable from "../components/NopackageAvailable";
import SectionLoader from "../sections/SectionLoader";
import NewHajjComponent from "../components/NewHajjComponent";

const AllHajjPackages = () => {
  const { packages, loading } = useContext(PackageContext);

  // Filter only Hajj packages (Ensure we are filtering the right ones)
  const hajjPackages = packages.filter((pkg) => {
    if (!pkg.package_header) return false;
    const firstWord = pkg.package_header.split(" ")[0]?.toLowerCase().trim();
    return firstWord === "hajj";
  });

  // Conditional rendering based on the existence of Hajj packages
  if (!hajjPackages || hajjPackages.length === 0) {
    return (
      <div className="mt-20">
        <NopackageAvailable text="No Hajj packages are available" />
      </div>
    );
  }

  return (
    <div className="max-w-6xl mt-20 mx-auto p-6">
      <div className="text-center mb-12">
        <h2 className="text-5xl w-full md:max-w-2xl mx-auto font-bold text-[#4A4A4A]">
          Special Hajj Packages 2025
        </h2>
        <p className="text-xl text-[#454545] font-nunito mt-4">
        These companies are approved by Ministry of Hajj Pakistan
        </p>

        {loading ? (
          <SectionLoader />
        ) : (
          <div className="grid grid-cols-1 mt-14 gap-4 gap-y-8 px-4 md:px-12">
            {hajjPackages.map((pkg, index) => (
              <NewHajjComponent pkg={pkg} key={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllHajjPackages;
