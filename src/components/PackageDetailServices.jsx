import { capitalizeEachWord } from "../utils/capitalizeEachWord";

const PackageDetailServices = ({ services }) => {
  const serviceDetails = [
    { key: "duration", name: "Duration", icon: "/newIcons/services/duration.png" },
    { key: "departure", name: "Departure", icon: "/newIcons/services/departure.png" },
    { key: "category", name: "Mina Category", icon: "/newIcons/services/mina.png" },
    { key: "zone", name: "Miza Zone", icon: "/newIcons/services/mina.png" },
    { key: "ziyarat_included", name: "Ziyarats", icon: "/newIcons/services/ziyarat.png" },
    { key: "food_included", name: "Meals", icon: "/newIcons/services/meals.png" },
    { key: "accomodation_included", name: "Accommodation", icon: "/newIcons/services/accomdation.png" },
    { key: "qurbani_included", name: "Qurbani", icon: "/newIcons/services/qurbani.png" },
  ];

  return (
    <div className="max-w-6xl bg-white rounded-xl py-4 mx-auto mt-8 font-roboto">
      <h1 className="text-2xl font-bold px-4">Services</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {serviceDetails.map((service, index) => {
          const value = services[service.key];

          // Display 'Included'/'Not Included' for booleans, and direct value for others
          const displayValue =
            typeof value === "boolean"
              ? value
                ? "Included"
                : "Not Included"
              : value || "N/A"; // Default to "N/A" if no value

          return (
            <div key={index} className="flex items-center gap-x-4 p-4 rounded-lg">
              <img src={service.icon} alt={service.name} className="w-5" />
              <div>
                <h3 className="text-gray-400 text-sm">{service.name}</h3>
                <p className="font-semibold">{capitalizeEachWord(displayValue)}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PackageDetailServices;
