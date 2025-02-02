const QuickOverview = () => {
    const overviewItems = [
      { name: "Duration", value: "21 Days", icon: "/newIcons/services/duration.png" },
      { name: "Available Slots", value: "24 Seats Left", icon: "/newIcons/services/slots.png" },
      { name: "Departure", value: "15th July 2025", icon: "/newIcons/services/departure.png" },
      { name: "Departure City", value: "Islamabad", icon: "/newIcons/services/city.png" },
      { name: "Arrival Time", value: "8:00 PM", icon: "/newIcons/services/arrival.png" }
    ];
  
    return (
      <div className="max-w-6xl bg-white rounded-xl py-4 mx-auto mt-8 font-roboto">
        <h1 className="text-2xl font-bold px-4">Quick Overview</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-4">
          {overviewItems.map((item, index) => (
            <div key={index} className="flex items-start gap-x-2 p-4 rounded-lg ">
              <img src={item.icon} alt={item.name} className="w-4 mt-1" />
              <div>
                <h3 className="text-gray-400 text-sm">{item.name}</h3>
                <p className="">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default QuickOverview;
  