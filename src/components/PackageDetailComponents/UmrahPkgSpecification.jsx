import { capitalizeEachWord } from "../../utils/capitalizeEachWord";

const UmrahPkgSpecification = ({ packageDetails }) => {
  console.log(packageDetails?.accomodation_details[0].hotel_city)
  return (
    <div className="p-4 border text-sm font-poppins mt-4 border-gray-400 rounded-xl space-y-2">
      <div className="flex justify-between">
        <span className="font-semibold text-gray-600">Duration:</span>
        <span>
          {packageDetails?.duration ? `${packageDetails.duration} days` : "N/A"}
        </span>
      </div>
      <div className="flex justify-between">
        <span className="font-semibold text-gray-600">Departure Date:</span>
        <span>
          {packageDetails?.departure_flight?.departure_flight_date || "N/A"}
        </span>
      </div>
      <div className="flex justify-between">
        <span className="font-semibold text-gray-600">Return Date:</span>
        <span>
          {packageDetails?.arrival_flight?.arrival_flight_date || "N/A"}
        </span>
      </div>
      <div className="flex justify-between">
        <span className="font-semibold text-gray-600">First City:</span>
        <span>
          {/* {capitalizeEachWord(packageDetails?.accomodation_details?.first_city?.first_hotel_city) ||
            "N/A"} */}
          {capitalizeEachWord(packageDetails?.accomodation_details[0].hotel_city) ||
            "N/A"}
        </span>
      </div>
      <div className="flex justify-between">
        <span className="font-semibold text-gray-600">Ziyarat:</span>
        <span>
          {packageDetails?.ziyarat && packageDetails.ziyarat.length > 0
            ? capitalizeEachWord(packageDetails.ziyarat)
            : "N/A"}
        </span>
      </div>
    </div>
  );
};

export default UmrahPkgSpecification;
