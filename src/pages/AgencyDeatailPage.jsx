import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PageLoader from "../components/PageLoader";
import NoRecordsFound from "../components/NoResultFound";
import axios from "axios";

// Custom Arrow Components
const SamplePrevArrow = ({ onClick }) => (
  <div onClick={onClick} className="arrow">
    <FaArrowLeft className="arrows" style={{ color: "white" }} />
  </div>
);

const SampleNextArrow = ({ onClick }) => (
  <div onClick={onClick} className="arrow">
    <FaArrowRight className="arrows" style={{ color: "white" }} />
  </div>
);

// Slider Settings
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  className: "slides",
  prevArrow: <SamplePrevArrow />,
  nextArrow: <SampleNextArrow />,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024, // For medium screens
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768, // For small screens
      settings: {
        slidesToShow: 1,
      },
      arrows: true, // Enable arrows on mobile
      dots: true, // Enable dots on mobile
    },
  ],
  customPaging: () => <div className="custom-dot"></div>,
  dotsClass: "slick-dots custom-dots",
};

const APIURI = "https://ghgohijazserverapi.gohijaz.com";

const AgencyDetail = () => {
  const { id } = useParams();
  const [agencyData, setAgencyData] = useState(null);
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Fetching Agency Details
  useEffect(() => {
    const fetchAgencyDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.post(
          `${APIURI}/api/users/agencies/get/details`,
          {
            agencyId: id,
          }
        );

        if (response.data && response.data.data) {
          setAgencyData(response.data.data);
          setPackages(response.data.data.packages);
          setNotFound(false);
        } else {
          setNotFound(true);
        }
      } catch (error) {
        console.error("Error fetching agency details:", error);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };

    fetchAgencyDetails();
  }, [id]);

  if (loading) return <PageLoader />;
  if (notFound)
    return (
      <div className="mt-20">
        <NoRecordsFound />
      </div>
    );
  console.log(agencyData);
  return (
    <div className="bg-[#f9fafc] font-roboto min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mt-20 mb-8">
          <h1 className="md:text-4xl text-4xl font-bold text-black mb-4">
            {agencyData?.name}
          </h1>
          <p className="w-full md:max-w-4xl mx-auto text-md text-gray-600">
            {agencyData?.descritpion}
          </p>
        </div>

        <div className="w-full h-64 md:h-96 mb-8">
          <img
            src="/newImage/agency/agencyheader.png"
            alt="Agency Header"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <div className="max-w-6xl mx-auto">
          <h1 className="md:text-4xl text-center my-10 text-4xl font-bold text-black">
            Hajj & Umrah Packages
          </h1>

          {packages.length > 0 ? (
            packages.length > 4 ||
            (packages.length > 1 && windowWidth < 768) ? (
              <Slider {...sliderSettings} className="slider-two">
                {packages.map((pkg) => (
                  <div key={pkg.id} className="p-2">
                    <PackageCard pkg={pkg} />
                  </div>
                ))}
              </Slider>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
                {packages.map((pkg) => (
                  <PackageCard key={pkg.id} pkg={pkg} />
                ))}
              </div>
            )
          ) : (
            <h1 className="text-2xl font-bold text-center text-red-600 py-4 px-6 rounded-md">
              No Packages Available
            </h1>
          )}
        </div>

        <div className="my-10 mt-20">
          <h1 className="md:text-4xl text-center text-4xl font-bold text-black mb-4">
            Support Contact
          </h1>
          <div className="max-w-xs mx-auto  flex items-center justify-around space-x-4">
            {[
              {
                icon: "/newIcons/agency/web.png",
                link: "", // Replace with the actual website
                target: "_blank",
              },
              {
                icon: "/newIcons/agency/phone.png",
                link: `tel:${agencyData.phone}`, // Replace with the actual phone number
              },
              {
                icon: "/newIcons/agency/whatsapp.png",
                link: `https://wa.me/${agencyData.whatsapp_phone}`, // WhatsApp chat link
                target: "_blank",
              },
              {
                icon: "/newIcons/agency/email.png",
                link: `https://mail.google.com/mail/?view=cm&fs=1&to=${agencyData.email}`, // Compose email in Gmail
                target: "_blank",
              },
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                target={item.target || "_self"}
                rel="noopener noreferrer"
                className="bg-[#f4f0e7] rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <img src={item.icon} alt="icon" className="" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Package Card Component
const PackageCard = ({ pkg }) => {
  const navigate = useNavigate(); // Hook should be at the top
  const isUmrah = pkg?.package_header?.includes("umrah")
    ? "/umrah-package-detail"
    : "/hajj-package-detail";
  return (
    <div className="bg-white border flex flex-col justify-between rounded-lg overflow-hidden shadow-md">
      <img
        src={pkg?.cover_image || "/images/packagecard/background.png"}
        alt={pkg.title}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 mb-2">
          {pkg?.package_title}
        </h3>
        <p className="text-gray-600 text-sm">{pkg?.duration}</p>
        <ul className="text-gray-600 text-sm mt-2 space-y-1">
          {[
            { label: "Ziyarat", value: pkg?.ziyarat },
            { label: "Gifts Included", value: pkg?.gifts_included },
            { label: "Azizia Included", value: pkg?.azizia_included },
            {
              label: "Transport",
              value: pkg?.transport !== "none" && pkg?.transport,
            },
            {
              label: "Accommodation",
              value:
                Array.isArray(pkg?.accommodation) &&
                pkg.accommodation.length > 0,
            },
          ].map(
            (feature, idx) =>
              feature.value && (
                <li key={idx} className="flex gap-x-3 items-center">
                  <img src="/newIcons/tick.png" alt="tick icon" className="" />
                  {feature.label}
                </li>
              )
          )}
        </ul>
        <p className="text-xl font-bold text-[#CE9137] mt-3">
          Starting From {pkg?.pricing[0]?.first_price?.price}{" "}
          {pkg?.pricing[0]?.first_price?.currency}
        </p>
        <button
          onClick={() => navigate(`${isUmrah}/${pkg?._id}`)} // Ensure the route is correct
          className="mt-3 px-4 py-2 bg-[#CE9137] text-white w-full transition duration-300"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default AgencyDetail;
