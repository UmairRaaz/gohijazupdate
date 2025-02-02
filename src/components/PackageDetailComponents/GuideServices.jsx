import { capitalizeEachWord } from "../../utils/capitalizeEachWord";

const GuideServices = ({ TransportType, TransporteCities, Ziyarat }) => {
  const guideServices = [
    {
      heading: "Transport Type",
      service: TransportType || "No service available",
    },
    {
      heading: "Transporte cities",
      service: TransporteCities || "No service available",
    },
    {
      heading: "Ziyarat",
      service: Ziyarat || "No service available",
    },
  ];

  return (
    <div className="grid grid-cols-2 mt-4 md:grid-cols-3 md:place-items-start gap-x-10">
      {guideServices.map((item, index) => (
        <div key={index} className="flex flex-col mb-4 md:mb-0">
          {/* Heading */}
          <h2 className="text-xl mb-1 md:mb-2 font-semibold">
            {capitalizeEachWord(item.heading)}
          </h2>

          {/* Service */}
          <div>
            <span>{capitalizeEachWord(item.service)}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GuideServices;
