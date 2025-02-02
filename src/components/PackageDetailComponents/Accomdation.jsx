import Hotels from "./Hotels";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";

const Accommodation = ({ accomodation_details }) => {
  // Custom Arrows
  const CustomPrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute -left-2 z-10 p-2 text-gray-600 rounded-full"
      style={{ top: "50%", transform: "translateY(-50%)" }}
    >
      <FaChevronLeft size={25} />
    </button>
  );

  const CustomNextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute -right-2 z-10 text-gray-600 p-2 rounded-full"
      style={{ top: "50%", transform: "translateY(-50%)" }}
    >
      <FaChevronRight size={25} />
    </button>
  );

  console.log("accomodation_details", accomodation_details);

  // Check if accomodation_details is already an array
  const accommodationArray = Array.isArray(accomodation_details)
    ? accomodation_details
    : Object.values(accomodation_details);

  console.log("accommodationArray", accommodationArray);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Show 2 hotels at once
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 768, // For screens smaller than 768px
        settings: {
          slidesToShow: 1, // Show 1 hotel at a time
          slidesToScroll: 1,
        },
      },
    ],
    className: "slider-spacing", // Custom class to handle slide gaps
  };

  return (
    <div className="relative">
      <h1 className="text-3xl font-bold mt-8 md:mt-5">Accommodation Details</h1>

      {/* Render the Slider only if there are more than 2 hotels */}
      {accommodationArray.length > 2 ? (
        <Slider {...settings} className="gap-x-4">
          {accommodationArray.map((hotel, index) => (
            <Hotels
              key={index}
              hotelDetails={{
                checkInDate: hotel.check_in_date || "",
                checkOutDate: hotel.check_out_date || "",
                city: hotel.hotel_city || "",
                hotelDuration: hotel.hotel_duration || "",
                hotelName: hotel.hotel_name || "",
                distance: hotel?.hotel_details?.distance || "",
                facilities: hotel?.hotel_details?.facilities || [],
                hotelType: hotel?.hotel_details?.hotel_type || "",
                hotelImages: hotel?.hotel_details?.images || [],
                hotelLocation: hotel?.hotel_details?.location || "",
                title: hotel?.hotel_details?.title || "",
              }}
            />
          ))}
        </Slider>
      ) : (
        // Render hotels without slider when there are fewer than 3
       <div className="grid grid-cols-1 md:grid-cols-2">
        {
           accommodationArray.map((hotel, index) => (
            <Hotels
              key={index}
              hotelDetails={{
                checkInDate: hotel.check_in_date || "",
                checkOutDate: hotel.check_out_date || "",
                city: hotel.hotel_city || "",
                hotelDuration: hotel.hotel_duration || "",
                hotelName: hotel.hotel_name || "",
                distance: hotel?.hotel_details?.distance || "",
                facilities: hotel?.hotel_details?.facilities || [],
                hotelType: hotel?.hotel_details?.hotel_type || "",
                hotelImages: hotel?.hotel_details?.images || [],
                hotelLocation: hotel?.hotel_details?.location || "",
                title: hotel?.hotel_details?.title || "",
              }}
            />
          ))
        }
       </div>
      )}
    </div>
  );
};

export default Accommodation;
