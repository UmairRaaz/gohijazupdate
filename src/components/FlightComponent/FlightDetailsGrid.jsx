// FlightDetailsGrid.js
const FlightDetailsGrid = ({ type, baggage, flightNo, departure, arrival }) => {
    return (
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 py-4">
        <div>
          <span className="text-gray-600 font-semibold">Type:</span>
          <p>{type}</p>
        </div>
        <div>
          <span className="text-gray-600 font-semibold">Baggage:</span>
          <p>{baggage}</p>
        </div>
        <div>
          <span className="text-gray-600 font-semibold">Flight No:</span>
          <p>{flightNo}</p>
        </div>
        <div>
          <span className="text-gray-600 font-semibold">Departure:</span>
          <p>{departure}</p>
        </div>
        <div>
          <span className="text-gray-600 font-semibold">Arrival:</span>
          <p>{arrival}</p>
        </div>
      </div>
    );
  };
  
  export default FlightDetailsGrid;
  