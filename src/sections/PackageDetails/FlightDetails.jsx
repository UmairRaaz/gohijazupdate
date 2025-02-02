import FlightDetailsGrid from "../../components/FlightComponent/FlightDetailsGrid";
import FlightPath from "../../components/FlightComponent/FlightPath";
import SectionHeader from "../../components/FlightComponent/SectionHeader";

const FlightDetails = () => {
  return (
    <div className="max-w-6xl font-poppins mx-auto p-6 bg-white shadow-lg rounded-lg">
      {/* Aeroplane Image */}
      <div className="flex justify-center mb-6">
        <img
          src="/images/Hotels/plane.png"
          alt="Aeroplane"
          className="object-contain"
        />
      </div>

      {/* Departure Section */}
      <SectionHeader title="Departure" />
      <FlightDetailsGrid
        type="Economy"
        baggage="20kg"
        flightNo="XY123"
        departure="10:00 AM"
        arrival="1:00 PM"
      />
      <div className="py-2 font-semibold text-gray-700 text-lg">
        BlueSky Airlines
      </div>

      {/* Plane Path */}
      <FlightPath
        departureLocation="ISB"
        arrivalLocation="JED"
        planePosition="-left-4"
      />

      {/* Return Section */}
      <SectionHeader title="Return" />
      <FlightDetailsGrid
        type="Economy"
        baggage="20kg"
        flightNo="XY124"
        departure="3:00 PM"
        arrival="6:00 PM"
      />
      <div className="py-2 font-semibold text-gray-700 text-lg">
        BlueSky Airlines
      </div>

      {/* Return Plane Path */}
      <FlightPath
        departureLocation="ISB"
        arrivalLocation="JED"
        planePosition="-right-4"
      />
    </div>
  );
};

export default FlightDetails;
