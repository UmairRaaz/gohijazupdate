import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { capitalizeEachWord } from "../utils/capitalizeEachWord";
import { PackageContext } from "../context/PackageContext";

import FlightDetails from "../components/PackageDetailComponents/FlightDetails";
import TransportFaculty from "../components/PackageDetailComponents/TransportFaculty";
import GuideServices from "../components/PackageDetailComponents/GuideServices";
import Pricing from "../components/PackageDetailComponents/Pricing";
import Accommodation from "../components/PackageDetailComponents/Accomdation";
import AgencyDetails from "../components/PackageDetailComponents/AboutAgency";
import PageLoader from "../components/PageLoader";
import NopackageAvailable from "../components/NopackageAvailable";
import UmmrahServices from "../components/PackageDetailComponents/UmmrahServices";
import HajjServices from "../components/PackageDetailComponents/HajjServices";
import UmrahPkgSpecification from "../components/PackageDetailComponents/UmrahPkgSpecification";
import HajjPackageSpecification from "../components/PackageDetailComponents/HajjPackageSpecification";
import Facility from "../components/PackageDetailComponents/facility";

const PackageDetailPageUpdated = () => {
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

  const isUmrah = packageDetails?.package_header
    ?.toLowerCase()
    .includes("umrah");

  console.log("package-details", packageDetails)
  return (
    <div className="my-20 md:px-4 px-0 min-h-screen">
      <div className="w-full flex flex-col md:flex-row md:max-w-7xl mx-auto min-h-[500px]">
        {/* Left Section */}
        <div className="w-full md:w-[70%] p-4">
          {/* Package Title and Description */}
          <h1 className="text-4xl font-bold">
            {capitalizeEachWord(packageDetails?.package_title)}
          </h1>
          <div className="flex flex-col md:flex-row mt-4">
            {/* Image and Agency Details */}
            <div className="w-full md:w-1/2">
              <div className="rounded-2xl px-0 md:px-2 h-80 flex items-center justify-center">
                <img
                  src={
                    packageDetails?.cover_image ||
                    "/images/packagecard/background.png"
                  }
                  className="w-full border border-gray-400 h-full object-fill rounded-3xl"
                  alt="banner"
                />
              </div>
              <AgencyDetails agency_details={{
                 additional_phone : packageDetails?.additional_phone || "", 
                 address : packageDetails?.address, 
                 email : packageDetails?.email || "", 
                 name : packageDetails?.agency_name, 
                 phone : packageDetails?.phone || "", 
                 profile_pic : packageDetails?.agency_profile, 
                 whatsapp_phone : packageDetails?.whatsapp_phone || "", 
              }} />
            </div>

            {/* Description and Services */}
            <div className="w-full mt-4 md:mt-0 md:w-1/2 md:px-2 text-xl">
              <h3>
                {capitalizeEachWord(packageDetails?.package_description) ||
                  "No description available."}
              </h3>
              {isUmrah ? (
                <UmmrahServices />
              ) : (
                <HajjServices
                  category={packageDetails?.category}
                  zone={packageDetails?.zone}
                  ziayarat_included={packageDetails?.ziayarat_included}
                />
              )}
              {isUmrah ? (
                <UmrahPkgSpecification packageDetails={packageDetails} />
              ) : (
                <HajjPackageSpecification packageDetails={packageDetails} />
              )}
            </div>
          </div>

          {/* Accommodation Section */}
          {isUmrah && (
            <Accommodation
              accomodation_details={packageDetails.accomodation_details}
            />
          )}

          {/* Flight Details (Umrah Only) */}
          {isUmrah && (
            <>
              <h1 className="text-3xl mt-10 md:mt-5 font-bold  md:px-0 my-4">
                Flight Details
              </h1>
              <div className="flex flex-col md:flex-row gap-y-4 md:gap-x-4">
                <FlightDetails
                  type="departure"
                  flight={packageDetails?.departure_flight}
                />
                <FlightDetails
                  type="arrival"
                  flight={packageDetails?.arrival_flight}
                />
              </div>
              <Facility facilities={packageDetails?.facilities} />
              {/* Guide Services */}
              <GuideServices
                TransportType={packageDetails?.transport_details}
                TransporteCities={packageDetails?.transport_services_for}
                Ziyarat={packageDetails?.ziyarat}
              />
            </>
          )}

          <div className={`my-2 mt-8 ${!isUmrah && "mt-10"}`}>
            <img src="/images/map.png" alt="map" />
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-[30%]">
          <Pricing
            packageUmrah={isUmrah}
            price={packageDetails?.pricing}
            contactDetails={{
              phone: packageDetails?.phone || "",
              email: packageDetails?.email || "",
              whatsapp: packageDetails?.whatsapp_phone || "",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PackageDetailPageUpdated;
