const FlightDetails = () => {
  const flightInfo = {
    departure: {
      city: "Islamabad",
      time: "10:00 AM",
      airline: "Emirates",
      class: "Business",
      planeNumber: "EK-202",
    },
    arrival: {
      city: "Jeddah",
      time: "2:00 PM",
    },
    duration: "4h 00m",
  };

  const returnFlightInfo = {
    departure: {
      city: "Jeddah",
      time: "5:00 PM",
      airline: "Emirates",
      class: "Business",
      planeNumber: "EK-203",
    },
    arrival: {
      city: "Islamabad",
      time: "9:00 PM",
    },
    duration: "4h 00m",
  };

  return (
    <div className="max-w-6xl mx-auto mt-8 bg-white p-4 rounded-lg font-roboto ">
      <h1 className="text-2xl font-bold px-4  mb-4">Flight Details</h1>
      <div className="grid grid-cols-1 gap-x-10 gap-y-4 md:grid-cols-2">
        {/* Departure Flight */}
        <FlightCard flight={flightInfo} />

        {/* Return Flight */}
        <FlightCard flight={returnFlightInfo} isReturn />
      </div>
    </div>
  );
};

const FlightCard = ({ flight, isReturn }) => {
  return (
    <div className="bg-white flex justify-center items-center  rounded-xl shadow-md p-4 md:flex md:items-center md:justify-between">
      {/* Departure Details */}
      <div className=" space-y-1">
        <h2 className="text-lg font-semibold text-nowrap text-gray-800">
          {!isReturn ? "Departure Flight" : "Return Flight"}
        </h2>
        <p className="text-sm text-gray-500">{flight.departure.city}</p>
        <p className="text-sm text-gray-500">{flight.departure.time}</p>
        <p className="text-sm text-gray-500">{flight.departure.airline}</p>
        <p className="text-sm text-gray-500">{flight.departure.class}</p>
        <p className="text-sm text-gray-500">
        {flight.departure.planeNumber}
        </p>
      </div>

      {/* Plane Icon and Duration */}
      <div className=" flex flex-col items-center my-4 md:my-0">
        <img src="/newIcons/services/flight.png" alt="Plane" className="" />
        <p className="text-sm text-gray-500 mt-2">{flight.duration}</p>
      </div>

      {/* Arrival Details */}
      <div className="text-right ml-4 mb-2">
        <p className=" font-semibold">{flight.arrival.city}</p>
        <p className="text-sm text-gray-500">{flight.arrival.time}</p>
      </div>
    </div>
  );
};

export default FlightDetails;
