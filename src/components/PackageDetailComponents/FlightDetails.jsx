import { capitalizeEachWord } from "../../utils/capitalizeEachWord";

const FlightDetails = ({ type, flight }) => {
  const isDeparture = type === "departure";
  const formatValue = (value) => {
    return value && value !== "_" ? value : "N/A";
  };

  return (
    <div className="p-6 border w-full border-gray-400 rounded-xl">
      {/* Heading */}
      <div className="flex justify-between gap-x-10 text-[#4A4A4A]  pb-4">
        <div className="flex flex-col">
          <span className="font-semibold text-xl mb-2">
            {isDeparture ? "Departure Details" : "Arrival Details"}
          </span>
          <h1 className="uppercase text-xl font-bold">
            {formatValue(isDeparture ? capitalizeEachWord(flight.departure_airline_name) : capitalizeEachWord(flight.arrival_airline_name))}
          </h1>
        </div>
        <div className="">
          <span className="leading-[1.4] text-lg md:text-xl text-nowrap">
            {formatValue(isDeparture ? flight.departure_flight_date : flight.arrival_flight_date)}
          </span>
        </div>
      </div>

      {/* Flight Cities and Time with Plane Icon */}
      <div className="flex border-t py-2 border-gray-400 justify-between items-center text-[#4A4A4A]">
        <div className="flex flex-col">
          <span className="font-semibold">
            {formatValue(isDeparture ? capitalizeEachWord(flight.departure_location) : capitalizeEachWord(flight.arrival_location))}
          </span>
          <span className="block">
            {formatValue(isDeparture ? flight.departure_time : flight.arrival_time)}
          </span>
        </div>
        <div className="text-center">
          <img
            src="/icons/flightdetails.png"
            alt="Plane"
            className="mx-auto mb-2"
          />
        </div>
        <div className="flex flex-col">
          <span className="font-semibold">
            {formatValue(isDeparture ? capitalizeEachWord(flight.departure_to_location) : capitalizeEachWord(flight.take_off_location))}
          </span>
          <span className="">
            {formatValue(isDeparture ? flight.departure_to_time : flight.take_off_time)}
          </span>
        </div>
      </div>

      {/* Additional Flight Details */}
      <div className="flex flex-col text-[#4A4A4A] border-t border-gray-400 justify-between pt-4">
        <div className="flex justify-between items-center space-x-4">
          <span className="font-semibold">Flight Class</span>
          <span>
            {formatValue(isDeparture ? capitalizeEachWord(flight.departure_flight_class) : capitalizeEachWord(flight.arrival_flight_class))}
          </span>
        </div>
        <div className="flex justify-between items-center space-x-4">
          <span className="font-semibold">Flight Number</span>
          <span>
            {formatValue(isDeparture ? flight.departure_flight_number : flight.arrival_flight_number)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default FlightDetails;
