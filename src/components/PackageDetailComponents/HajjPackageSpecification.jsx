import { capitalizeEachWord } from "../../utils/capitalizeEachWord";

const HajjPackageSpecification = ({ packageDetails }) => {
  const specifications = [
    { label: "Duration", value: capitalizeEachWord(packageDetails?.duration) || "N/A" },
    {
      label: "Departure From",
      value: capitalizeEachWord(packageDetails?.departure_from)|| "N/A",
    },
    {
      label: "Makkah Hotel Distance",
      value: packageDetails?.distance_from_makkah_hotel || "N/A",
    },
    {
      label: "Madina Hotel Distance",
      value: packageDetails?.distance_from_madina_hotel || "N/A",
    },
    {
      label: "Food Included",
      value: capitalizeEachWord(packageDetails?.food_included) || "N/A",
    },
    {
      label: "Mashier Transport",
      value: capitalizeEachWord(packageDetails?.mina_transport) || "N/A",
    },
    {
      label: "Building-Haram Transport",
      value: capitalizeEachWord(packageDetails?.transport) || "N/A",
    },
    {
      label: "Ziyarat Included", 
      value: packageDetails?.ziayarat_included ? "Yes" : "No" 
    },
    {
      label: "Gifts Included", 
      value:  packageDetails?.gifts_included ? "Yes" : "No" 
    },
    {
      label: "Azizia Included", 
      value: packageDetails?.azizia_included ? "Yes" : "No" 
    },
    {
      label: "Markazia Included",
      value: packageDetails?.markazia_included ? "Yes" : "No" 
    },
  ];

  return (
    <div className="p-4 border mt-4 border-gray-400 rounded-xl space-y-2">
      {specifications.map((spec, index) => (
        <div key={index} className="flex text-sm justify-between">
          <span className="font-poppins text-gray-500">{spec.label}:</span>
          <span>{spec.value}</span>
        </div>
      ))}
    </div>
  );
};

export default HajjPackageSpecification;
