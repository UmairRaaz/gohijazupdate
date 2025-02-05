import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { capitalizeEachWord } from "../utils/capitalizeEachWord";
import { PackageContext } from "../context/PackageContext";

import PageLoader from "../components/PageLoader";
import NopackageAvailable from "../components/NopackageAvailable";
import Pricing from "../components/PackageDetailComponents/Pricing";
import PackageDetailServices from "../components/PackageDetailServices";

const HajjPage = () => {
  const { id } = useParams();
  const { packageDetails, fetchPackageDetails, loading } =
    useContext(PackageContext);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  useEffect(() => {
    fetchPackageDetails(id);
  }, [id]);

  const openModal = (imageSrc) => {
    setModalImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

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
  console.log(packageDetails.duration);
  console.log(packageDetails.departure_from);
  console.log(packageDetails.zone);
  console.log(packageDetails.category);
  console.log(packageDetails.ziayarat_included);
  console.log(packageDetails.food_included);
  console.log(packageDetails.accomodation_details);
  console.log(packageDetails.qurbani_included);
  return (
    <div className="py-20 px-2 bg-[#f9fafc] md:px-4 min-h-screen">
      <div className="w-full flex flex-col md:flex-row md:max-w-7xl mx-auto">
        {/* Left Section */}
        <div className="w-full md:w-[70%] p-4">
          <div className="flex flex-col md:flex-row mt-4">
            {/* Image */}
            <div className="w-full md:w-1/2">
              <div
                className="rounded-2xl cursor-pointer"
                onClick={() =>
                  openModal(
                    packageDetails?.cover_image ||
                      "/images/packagecard/background.png"
                  )
                }
              >
                <img
                  src={
                    packageDetails?.cover_image ||
                    "/images/packagecard/background.png"
                  }
                  className="w-full border border-gray-400 h-full object-cover rounded-3xl"
                  alt="banner"
                />
              </div>
            </div>

            {/* Description */}
            <div className="w-full mt-4 md:mt-0 md:w-1/2 md:px-2 text-xl">
              <h1 className="text-4xl font-bold">
                {capitalizeEachWord(packageDetails?.package_title)}
              </h1>
              <h1 className="mt-2 text-lg font-bold">
                By:{" "}
                <span className="text-[#ED8D02]">
                  {capitalizeEachWord(
                    packageDetails.agency_name || "Unknown Agency"
                  )}
                </span>
              </h1>
              <p className="mt-4 text-sm">
                {packageDetails?.package_description}
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-[30%] p-4 mt-4 md:mt-0">
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
      </div>

      <PackageDetailServices
        services={{
          category: packageDetails.category,
          zone: packageDetails.zone,
          departure: packageDetails.departure_from,
          duration: packageDetails.duration,
          food_included: !!packageDetails.food_included, 
          accomodation_included:
            Array.isArray(packageDetails.accomodation_details) &&
            packageDetails.accomodation_details.length > 0,
          ziyarat_included: packageDetails.ziayarat_included || false, 
          qurbani_included: packageDetails.qurbani_included || false, 
        }}
      />

      {/* Full-Screen Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <img
            src={modalImage}
            alt="Full View"
            className="max-w-full max-h-full object-contain"
          />
          <button
            className="absolute top-4 right-4 text-white text-3xl font-bold"
            onClick={closeModal}
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
};

export default HajjPage;
