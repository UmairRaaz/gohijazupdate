import Slider from "react-slick";
import { FaStar } from "react-icons/fa"; // Optional icon for rating
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const AirwaysAccommodation = () => {
  const brandImages = [
    { id: 1, src: "/images/airways/image(1).jpg", alt: "Brand 1" },
    { id: 2, src: "/images/airways/image(2).png", alt: "Brand 2" },
    { id: 3, src: "/images/airways/image(3).png", alt: "Brand 3" },
    { id: 4, src: "/images/airways/image(4).png", alt: "Brand 4" },
  ];
  const settings = {
    infinite: true,
    speed: 5000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    arrows: false,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024, // For tablet screens
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600, // For mobile screens
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <div className="py-12 px-6 md:px-4 overflow-hidden">
      <div className="md:max-w-6xl mx-auto flex flex-col lg:flex-row md:items-center gap-4">
        {/* Left Section */}
        <div className="md:mr-8 font-kufam mb-8 lg:mb-0 ">
          <h2 className="text-3xl  font-semibold text-[#4A4A4A]">
            Airways <br /> Accommodation
          </h2>
          <p className="text-sm text-[#454545] mt-2">
            We cooperate with several airlines for <br />
            Umrah and Hajj.
          </p>
          <div className="items-center inline-flex bg-black text-white rounded-full py-1 justify-center px-4  mt-4">
            <FaStar className="mr-1 mb-1 text-yellow-500"  />
            <span>5.0 Rating</span>
          </div>
        </div>

        {/* Right Section (Image Slider) */}
        <div className=" w-full">
          <Slider {...settings}>
            {brandImages.map((brand) => (
              <div key={brand.id} className="px-4">
                <img
                  src={brand.src}
                  alt={brand.alt}
                  className="w-32 h-32 object-contain"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default AirwaysAccommodation;
