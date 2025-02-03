import { useNavigate } from "react-router-dom";
import { capitalizeEachWord } from "../utils/capitalizeEachWord";
import { formatPriceWithCommas } from "../utils/formatPrice";

const NewUmrahComponent = ({ pkg }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/umrah-package-detail/${pkg._id}`)}
      className="cursor-pointer  my-[48px] shadow-xl bg-white flex flex-col md:flex-row rounded-xl"
    >
      {/* Image Section */}
      <div className="w-full md:w-1/3 h-64 md:h-[22rem]">
        <img
          src={pkg?.cover_image || "/images/packagecard/background.png"}
          alt={pkg.name}
          className="rounded-md w-full h-full object-fill"
        />
      </div>

      {/* Content Section */}
      <div className="w-full md:w-2/3 p-4 flex flex-col justify-between">
        {/* Title and Price */}
        <div className="flex flex-col md:flex-row justify-between items-start  gap-4">
          <div className="max-w-full md:max-w-[30rem] break-words">
            <h1 className="text-2xl md:text-3xl font-bold">
              {capitalizeEachWord(pkg.package_title)}
            </h1>
            <h1 className="mt-2 text-lg font-bold">
              By:{" "}
              <span className="text-[#ED8D02]">
                {capitalizeEachWord(pkg.agency_name || "Unknown Agency")}
              </span>
            </h1>
          </div>

          <h1 className="text-gray-400 text-2xl md:text-3xl font-bold whitespace-nowrap">
            RS{" "}
            <span className="text-[#ED8D02] font-bold">
              {formatPriceWithCommas(
                pkg?.pricing?.[0]?.first_price?.price || 0
              )}{" "}
              PKR
            </span>
          </h1>
        </div>

        {/* Package Duration & Services */}
        <div className="flex flex-col md:gap-x-2 md:flex-row justify-center md:justify-between items-center mt-4 md:mt-0 ">
          <div className="w-full text-center md:w-[30%] md:text-left">
            <h3 className="text-xl md:text-xl text-nowrap font-bold">
              <span className="text-4xl inline-block">{21}</span> Days
            </h3>
            <p className="text-lg text-nowrap font-semibold text-black">
              Umrah Package
            </p>
          </div>

          {/* Services Section */}
          <div className="w-full md:w-auto mt-4 md:mr-3 md:mt-0 border border-gray-300 py-2 px-3 rounded-lg">
            <h3 className="text-lg md:text-xl text-center md:text-left font-bold mb-2">
              Services
            </h3>

            <div className="md:flex md:flex-row items-center md:items-stretch gap-4">
              {/* Mina Category & Zone */}

              {/* Other Services */}
              <div className="grid grid-cols-4 md:flex  md:justify-end w-full gap-x-4">
                {[
                  {
                    src: "/newIcons/hajj-icon/air-tickets.png",
                    label: "Air Ticket",
                  },
                  { src: "/newIcons/hajj-icon/visa.png", label: "Visa" },
                  { src: "/newIcons/hajj-icon/qurbani.png", label: "Qurbani" },
                  { src: "/newIcons/hajj-icon/meals.png", label: "Meals" },
                  {
                    src: "/newIcons/hajj-icon/transport.png",
                    label: "Transport",
                  },
                  { src: "/newIcons/hajj-icon/ziyarat.png", label: "Ziyarat" },
                  { src: "/newIcons/hajj-icon/hotels.png", label: "Hotel" },
                ].map((service, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-y-2 pt-3 md:items-center"
                  >
                    <div className="h-[80%]">
                      <img src={service.src} alt={service.label} className="" />
                    </div>
                    <h4 className="text-sm text-nowrap  text-[#AAAAAA]">
                      {service.label}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Hotels & View Details Button */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-6 md:mt-0">
          {/* Hotels */}
          <div className="flex gap-x-4 items-center">
            {[
              {
                src: "/newImage/makkah.png",
                label: "Hotel In Makkah",
                distance: 200,
              },
              {
                src: "/newImage/medinah.png",
                label: "Hotel In Madinah",
                distance: 200,
              },
            ].map((hotel, index) => (
              <div key={index} className="flex gap-x-4 items-center">
                <img src={hotel.src} width={50} alt={hotel.label} />
                <div>
                  <h1 className="text-[#AAAAAA] text-xs md:text-base">
                    {hotel.label}
                  </h1>
                  <p className="font-semibold text-xs">
                    ( {hotel.distance} Meters )
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* View Details Button */}
          <button className="bg-[#CE9137] w-full md:w-56 text-white rounded-lg px-6 py-3 text-lg font-semibold mt-4 md:mt-0">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewUmrahComponent;
