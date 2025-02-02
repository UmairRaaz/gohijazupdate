const PackageDetailServices = () => {
    const services = [
      { name: "Duration", value: "30 Days", icon: "/newIcons/services/duration.png" },
      { name: "Departure", value: "Islamabad", icon: "/newIcons/services/departure.png" },
      { name: "Mina Category", value: "D", icon: "/newIcons/services/mina.png" },
      { name: "Miza Zone", value: "5", icon: "/newIcons/services/mina.png" },
      { name: "Ziyarats", value: "Included", icon: "/newIcons/services/ziyarat.png" },
      { name: "Meals", value: "Included", icon: "/newIcons/services/meals.png" },
      { name: "Accommodation", value: "Included", icon: "/newIcons/services/accomdation.png" },
      { name: "Qurbani", value: "Included", icon: "/newIcons/services/qurbani.png" }
    ];
  
    return (
      <div className="max-w-6xl bg-white rounded-xl py-4 mx-auto mt-8 font-roboto">
        <h1 className="text-2xl font-bold px-4">Services</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <div key={index} className="flex items-center gap-x-4 p-4  rounded-lg ">
              <img src={service.icon} alt={service.name} className="w-5" />
              <div>
                <h3 className="text-gray-400 text-sm">{service.name}</h3>
                <p className="font-semibold">{service.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default PackageDetailServices;
  