import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { capitalizeEachWord } from "../utils/capitalizeEachWord";
import { PackageContext } from "../context/PackageContext";

import PageLoader from "../components/PageLoader";
import NopackageAvailable from "../components/NopackageAvailable";
import Pricing from "../components/PackageDetailComponents/Pricing";
import { FaInfoCircle } from "react-icons/fa";
import PackageDetailServices from "../components/PackageDetailServices";
import QuickOverview from "../components/QuickOverview";
import FlightDetails from "../components/FlightDetails";

const UmrahPage = () => {
  const { id } = useParams();
  const { packageDetails, fetchPackageDetails, loading } =
    useContext(PackageContext);

  useEffect(() => {
    fetchPackageDetails(id);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen">
        <PageLoader />
      </div>
    );
  }

  if (!packageDetails) {
    return (
      <div className="my-20">
        <NopackageAvailable text="No package details found." />
      </div>
    );
  }

  console.log("package-details", packageDetails);
  return (
    <div className="py-20 bg-[#f9fafc] md:px-4 px-0 min-h-screen">
      <div className="w-full  flex flex-col md:flex-row md:max-w-7xl mx-auto ">
        {/* Left Section */}
        <div className="w-full md:w-[70%] p-4">
          <div className="flex flex-col md:flex-row mt-4">
            {/* Image and Agency Details */}
            <div className="w-full md:w-1/2">
              <div className="rounded-2xl px-0 md:px-2 flex items-center justify-center">
                <img
                  src={
                    packageDetails?.cover_image ||
                    "/images/packagecard/background.png"
                  }
                  className="w-full border border-gray-400 h-full object-fill rounded-3xl"
                  alt="banner"
                />
              </div>
            </div>
            {/* Description and Services */}
            <div className="w-full mt-4 md:mt-0 md:w-1/2 md:px-2 text-xl">
              <h1 className="text-4xl font-bold">
                {capitalizeEachWord(packageDetails?.package_title)}
              </h1>
              <h1 className="mt-2 text-lg md:text-lg font-bold">
                By:{" "}
                <span className="text-[#ED8D02]">
                  {capitalizeEachWord(
                    packageDetails.agency_name || "Unknown Agency"
                  )}
                </span>
              </h1>
              {/* Description */}
              <p className="mt-4 text-sm">
                {packageDetails?.package_description}
              </p>
            </div>
          </div>
        </div>

        {/* Right Section (Pricing) */}
        <div className="flex flex-col w-full md:w-[30%] p-4 mt-4 md:mt-0">
          <div className="">
            <Pricing
              duration={packageDetails?.duration}
              price={packageDetails?.pricing}
              contactDetails={{
                phone: packageDetails?.phone,
                address: packageDetails?.address,
                email: packageDetails?.email,
                whatsapp: packageDetails?.whatsapp_phone,
              }}
            />
          </div>
          <div className="flex mt-4 items-center bg-[#fefbe8] border border-[#FEF08A]  px-4 py-3 rounded-lg ">
            <img src="/newIcons/info.png" alt="icon" />
            <span className="text-xs text-[#854D0E] ml-4" >
              Sharing Rooms Accommodate 6 Persons With Bathroom Facilities
              Shared Between 8 Persons
            </span>
          </div>
        </div>
      </div>
      <QuickOverview/>
      <PackageDetailServices/>
      <FlightDetails/>
    </div>
  );
};

export default UmrahPage;
