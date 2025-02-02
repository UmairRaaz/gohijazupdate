const UmmrahServices = () => {
  return (
    <div className="services border mt-4 border-gray-400 rounded-xl px-2 py-1">
      <h3 className="text-lg mb-1 font-semibold">Services</h3>
      <div className="grid grid-cols-4 gap-4">
        {[
          {
            src: "/icons/air-ticket.png",
            alt: "air-ticket",
            label: "Air Ticket",
          },
          { src: "/icons/visa.png", alt: "visa", label: "Visa" },
          {
            src: "/icons/transport.png",
            alt: "transport",
            label: "Transport",
          },
          { src: "/icons/hotel.png", alt: "hotel", label: "Hotel" },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-between items-center text-center"
          >
            <img
              src={item.src}
              alt={item.alt}
              className="object-contain w-10 h-10"
            />
            <p className="text-sm mt-2 text-gray-600">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UmmrahServices;
