const Transport = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Section Heading */}
      <div className="text-center mb-6">
        <h2 className="text-3xl text-[#454545] font-bold font-poppins">🚍 Transport Facility</h2>
        <p className="text-xl text-[#454545] font-nunito mt-2">
          From arrival to Ziyarats, enjoy reliable and private transportation
        </p>
      </div>

      {/* Transport Details Section */}
      <div className="flex flex-col md:flex-row bg-black text-white rounded-xl p-6">
        {/* Right: Bus Image */}
        <div className="md:w-1/2 flex items-center justify-center rounded-xl overflow-hidden">
          <img
            src="/images/bus.png" // Replace with the actual image URL
            alt="Transport Bus"
            className="w-96"
          />
        </div>
        {/* Left: Transport Points */}
        <div className="md:w-1/2 bg-[#ED8D02] text-white rounded-xl flex items-center justify-center">
          <ul className="md:space-y-4 list-disc md:text-xl px-10 py-4">
            <li>
              <strong>Airport:</strong> Private AC Bus (Jeddah to Makkah)
            </li>
            <li>
              <strong>Intercity:</strong> Makkah to Madinah via AC Bus
            </li>
            <li>
              <strong>Ziarats:</strong> Guided tours in air-conditioned buses
            </li>
            <li>
              <strong>Hotel Pick & Drop:</strong> Private AC Bus
            </li>
          </ul>
        </div>
      </div>

      <div className="my-20">
        <img src="/images/map.png" alt="map" />
      </div>
    </div>
  );
};

export default Transport;
