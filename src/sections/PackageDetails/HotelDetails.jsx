import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import HotelComponent from "../../components/HotelComponent";

const HotelDetails = () => {
  const hotelOne = {
    nameofhotel: "Al Safwa Tower Hotel Makkah",
    rating: 4,
    distance: "100m From Masjid e Haram",
    suiteType: "Executive Suite",
    breakfastIncluded: true,
    location: "Makkah", // Options: 'Makkah' or 'Madina'
    mapLink: "#",
    imageUrl: "/images/Hotels/makkahhotel.png",
  };
  const hotelTwo = {
    nameofhotel: "Dar Al Hira  Hotel Madinah    ",
    rating: 4,
    distance: "250m From Masjid e Nabavi",
    suiteType: "Deluxe Riyal Room",
    breakfastIncluded: true,
    location: "Madinah", // Options: 'Makkah' or 'Madina'
    mapLink: "#",
    imageUrl: "/images/Hotels/madinahotel.png",
  };
  return (
    <div className="max-w-6xl mx-auto px-2 md:px-0">
      <div className="flex flex-col md:flex-row justify-between my-8">
        <h1 className="text-[#4A4A4A] font-bold text-xl">Hotel Details</h1>
        <div className="text-[#ED8D02] font-poppins text-xl md:text-2xl mr-10">
          Price:{" "}
          <span className="text-[#B3B3B3] font-poppins line-through">
            Rs 500,000
          </span>{" "}
          <span className="text-[#ED8D02] font-bold">Rs 50,000</span>
        </div>
      </div>
      <div className="border shadow-lg rounded-xl px-8 py-4">
        <HotelComponent hotel={hotelOne} />
        <HotelComponent hotel={hotelTwo} />
        <div className="flex flex-col md:flex-row gap-4 p-4">
          {/* Call Now Button */}
          <button className="flex items-center justify-center gap-4 px-4 py-2 bg-[#0C0B0B] text-white rounded-lg shadow-md h-14 text-xl w-full transition">
            <FaPhoneAlt />
            <span>Call Now</span>
          </button>

          {/* WhatsApp Button */}
          <button className="flex items-center justify-center h-14 text-xl gap-4 px-4 py-2 bg-[#0B840B] text-white rounded-lg shadow-md w-full transition">
            <FaWhatsapp />
            <span>WhatsApp</span>
          </button>

          {/* Email Button */}
          <button className="flex items-center justify-center h-14 text-xl gap-4 px-4 py-2 bg-[#ED8D02] text-white rounded-lg shadow-md w-full transition">
            <FaEnvelope />
            <span>Email</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotelDetails;
