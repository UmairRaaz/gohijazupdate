import { useNavigate } from "react-router-dom";
import { capitalizeEachWord } from "../utils/capitalizeEachWord";
import { formatPriceWithCommas } from "../utils/formatPrice";

const NewHajjComponent = ({ pkg }) => {
  const navigate = useNavigate();
  return (
    <div className=" my-[48px] bg-white mt-4 flex flex-col md:flex-row  rounded-xl shadow-xl ">
      {/* Image Section */}
      <div className="w-full md:w-1/3 h-64 md:h-[24rem] flex items-center justify-center">
        <img
          src={pkg?.cover_image || "/images/packagecard/background.png"}
          alt={pkg.name}
          className="rounded-md w-full h-full object-fill "
        />
      </div>

      {/* Content Section */}
      <div className="w-full md:w-2/3 p-4 flex flex-col justify-between">
        {/* Title and Price */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-start gap-4">
          <div className="max-w-full md:max-w-[30rem]  break-words">
            <h1 className="text-2xl  md:text-3xl font-bold">
              {capitalizeEachWord(pkg.package_title)}
            </h1>
            <h1 className="mt-2 text-lg font-bold">
              By:{" "}
              <span className="text-[#ED8D02] ">
                {capitalizeEachWord(pkg.agency_name || "Unknown Agency")}
              </span>
            </h1>
          </div>

          <h1 className="text-gray-400 text-2xl  md:text-3xl font-bold whitespace-nowrap">
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
              Hajj Package
            </h3>
            <p className="text-lg font-semibold text-black">
              {pkg?.duration.toLowerCase().includes("short")
                ? "Short Duration"
                : "Long Duration"}
            </p>
          </div>

          {/* Services Section */}
          <div className="md:min-w-20  w-auto mt-4 md:mr-3 md:mt-0 border border-gray-300 py-2 px-3 rounded-lg">
            <h3 className="text-lg md:text-xl text-center md:text-left font-bold">
              Services
            </h3>

            <div className="flex  flex-col md:justify-between md:flex-row items-center md:items-center gap-4">
              {/* Mina Category & Zone */}
              <div className="flex w-full md:w-auto justify-center md:justify-start gap-x-3 border-b md:border-b-0 md:border-r border-gray-300 pb-3 md:pb-0">
                <div className="flex flex-col items-center ">
                  <h1 className="text-3xl font-semibold mb-1">{pkg?.category}</h1>
                  <h4 className="text-sm text-center text-[#AAAAAA]">
                    Mina Category
                  </h4>
                </div>
                <div className="flex flex-col  items-center pr-4">
                  <h1 className="text-3xl font-semibold mb-1">{pkg?.zone}</h1>
                  <h4 className="text-sm text-center text-[#AAAAAA]">
                    Mina Zone
                  </h4>
                </div>
              </div>

              {/* Other Services */}
              <div className="grid grid-cols-4 md:flex md:justify-normal gap-x-4">
                {[
                  { src: "/newIcons/hajj-icon/qurbani.png", label: "Qurbani" },
                  { src: "/newIcons/hajj-icon/meals.png", label: "Meals" },
                  {
                    src: "/newIcons/hajj-icon/transport.png",
                    label: "Transport",
                  },
                  { src: "/newIcons/hajj-icon/ziyarat.png", label: "Ziyarat" },
                ].map((service, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center pt-3 "
                  >
                    <div className="flex-grow flex items-center justify-center">
                      <img src={service.src} alt={service.label} className="mb-2" />
                    </div>
                    <h4 className="text-sm text-[#AAAAAA]">{service.label}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Hotels & View Details Button */}
        <div className="flex flex-col md:flex-row justify-end items-center mt-6 md:mt-0">
          {/* Hotels */}
          {/* <div className="flex gap-x-4 items-center">
            {[
              { src: "/newImage/makkah.png", label: "Hotel In Makkah" },
              { src: "/newImage/medinah.png", label: "Hotel In Madinah" },
            ].map((hotel, index) => (
              <div key={index} className="flex gap-x-4 items-center">
                <img src={hotel.src} width={50} alt={hotel.label} />
                <h1 className="text-[#AAAAAA] text-sm md:text-base">
                  {hotel.label}
                </h1>
              </div>
            ))}
          </div> */}

          {/* View Details Button */}
          <button
            onClick={() => navigate(`/hajj-package-detail/${pkg._id}`)}
            className="bg-[#CE9137] w-full md:w-56 text-white rounded-lg px-6 py-3 text-lg font-semibold mt-4 md:mt-0"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewHajjComponent;
