import { useContext } from "react";
import PackageComponent from "../components/PackageComponent";
import { PackageContext } from "../context/PackageContext";
import NopackageAvailable from "../components/NopackageAvailable";
import NewUmrahComponent from "../components/NewUmrahComponent";

const AllUmrahPackages = () => {
  const { packages } = useContext(PackageContext);

  // Filter only Umrah packages
  const umrahPackages = packages.filter((pkg) => {
    if (!pkg.package_header) return false;
    const firstWord = pkg.package_header.split(" ")[0]?.toLowerCase().trim();
    return firstWord === "umrah";
  });

  // Handle case when no Umrah packages are found
  if (!umrahPackages || umrahPackages.length === 0) {
    return (
      <div className="mt-20">
        <NopackageAvailable text="No Umrah packages are available" />
      </div>
    );
  }

  return (
    <div className="max-w-6xl mt-20 mx-auto p-6">
      {/* Heading Section */}
      <div className="text-center mb-12">
        <h2 className="text-5xl w-full md:max-w-2xl mx-auto font-bold text-[#4A4A4A]">
          Special Umrah Packages 2025
        </h2>
        <p className="text-xl text-[#454545] font-nunito mt-4">
        These companies are approved by Ministry of Hajj Pakistan
        </p>
      </div>

      {/* Package Cards */}
      <div className="grid grid-cols-1 mt-14  gap-8 px-4 md:px-12">
        {umrahPackages.map((pkg, index) => (
          <NewUmrahComponent pkg={pkg} key={index} />
        ))}
      </div>
    </div>
  );
};

export default AllUmrahPackages;
