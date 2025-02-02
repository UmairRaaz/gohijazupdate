

const FlightPath = ({ departureLocation, arrivalLocation, planePosition }) => {
  return (
    <div className="flex items-center justify-between w-full py-4">
      <div className="flex items-center gap-4 w-full relative">
        {/* Left: Departure Location */}
        <div className="flex flex-col items-center w-1/3">
          <span className="text-gray-600 font-semibold">{departureLocation}</span>
          <p className="text-sm text-gray-500">Departure</p>
        </div>

        {/* Path with Plane Icon */}
        <div className="flex items-center justify-center relative w-full">
          <img
            src="/icons/path.png"
            alt="path"
            className="absolute w-full z-10 top-1/2 transform -translate-y-1/2"
          />
          <img
            src="/icons/plane.png"
            alt="plane"
            className={`absolute ${planePosition} top-1/2 transform -translate-y-1/2 z-40 w-14 h-14`}
          />
        </div>

        {/* Right: Arrival Location */}
        <div className="flex flex-col items-center w-1/3">
          <span className="text-gray-600 font-semibold">{arrivalLocation}</span>
          <p className="text-sm text-gray-500">Arrival</p>
        </div>
      </div>
    </div>
  );
};

export default FlightPath;
