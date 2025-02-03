import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div onClick={onClick} className={`arrow ${className}`}>
      <FaArrowLeft class="arrows" style={{ color: "white" }} />
    </div>
  );
};

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div onClick={onClick} className={`arrow ${className}`}>
      <FaArrowRight class="arrows" style={{ color: "white" }} />
    </div>
  );
}
const packages = [
  {
    id: 1,
    image: "/newImage/agency/pkgOne.png",
    title: "Premium Hajj Package",
    details: "15 Days | 5-Star Accommodation",
    features: ["VIP Transportation", "Premium Hotels", "24/7 Support"],
    price: "PKR 2,519,720",
  },
  {
    id: 2,
    image: "/newImage/agency/pkgTwo.png",
    title: "Standard Umrah Package",
    details: "10 Days | 4-Star Accommodation",
    features: ["Private Transport", "Luxury Hotels", "24/7 Support"],
    price: "PKR 1,519,720",
  },
  {
    id: 3,
    image: "/newImage/agency/pkgThree.png",
    title: "Economy Hajj Package",
    details: "20 Days | 3-Star Accommodation",
    features: ["Group Transport", "Standard Hotels", "Support"],
    price: "PKR 1,019,720",
  },
  {
    id: 4,
    image: "/newImage/agency/pkgFour.png",
    title: "Deluxe Umrah Package",
    details: "12 Days | 5-Star Accommodation",
    features: ["VIP Transport", "Deluxe Hotels", "24/7 Support"],
    price: "PKR 2,019,720",
  },
  {
    id: 5,
    image: "/newImage/agency/pkgOne.png",
    title: "Family Hajj Package",
    details: "18 Days | 5-Star Accommodation",
    features: ["Private Family Transport", "Family Hotels", "24/7 Support"],
    price: "PKR 2,819,720",
  },
  {
    id: 6,
    image: "/newImage/agency/pkgTwo.png",
    title: "Budget Umrah Package",
    details: "7 Days | 3-Star Accommodation",
    features: ["Shared Transport", "Budget Hotels", "Support"],
    price: "PKR 819,720",
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  className: "slides",
  prevArrow: <SamplePrevArrow />,
  nextArrow: <SampleNextArrow />,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024, // For medium screens (md)
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 768, // For small screens (sm)
      settings: {
        slidesToShow: 1,
      },
    },
  ],
  customPaging: (i) => (
    <div className="custom-dot"></div> // Add a custom dot class
  ),
  dotsClass: "slick-dots custom-dots", // Apply custom class to dots wrapper
};

const AgencyDetail = () => {
  return (
    <div className="bg-[#f9fafc] font-roboto min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Agency Description */}
        <div className="text-center mt-20 mb-8">
          <h1 className="md:text-4xl text-4xl font-bold text-black mb-4">
            Mulla International Hajj & Umrah Services
          </h1>
          <p className="w-full md:max-w-4xl text-center mx-auto text-md text-gray-600">
            Al Hameed Air Services Pvt.Ltd Is Dedicated To Providing Exceptional
            Hajj And Umrah Services, Operating From Waddan Shopping Mall 2 New
            Add Malakand Chowk Mardan. Our Specialized Team Crafts Detailed
            Packages That Address Both Private And Public Aspects To Meet Our
            Clients' Needs. Working Closely With Governmental Entities, We
            Ensure Pilgrims Enjoy Comfortable Accommodations And Convenient
            Transportation Within Saudi Arabia For An Unforgettable Spiritual
            Journey.
          </p>
        </div>
        {/* Agency Header */}
        <div className=" w-full h-64 md:h-96 mb-8">
          <img
            src="/newImage/agency/agencyheader.png"
            alt="Agency Header"
            className="w-full h-full  object-cover rounded-lg"
          />
        </div>

        {/* Packages Slider */}
        <div className="max-w-6xl mx-auto">
          <h1 className="md:text-4xl text-center my-10 text-4xl font-bold text-black mb-4">
            Hajj & Umrah Packages
          </h1>
          <div className="slider-two ">
            <Slider {...sliderSettings}>
              {packages.map((pkg) => (
                <div key={pkg.id} className="p-2">
                  <div className="bg-white border rounded-lg overflow-hidden shadow-md">
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-gray-800 mb-2">
                        {pkg.title}
                      </h3>
                      <p className="text-gray-600 text-sm">{pkg.details}</p>
                      <ul className="text-gray-600 text-sm mt-2 space-y-1">
                        {pkg.features.map((feature, idx) => (
                          <li key={idx} className="flex gap-x-3 items-center">
                            <span>
                              <img src="/newIcons/tick.png" alt="icon" />
                            </span>{" "}
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <p className="text-xl font-bold text-[#CE9137] mt-3">
                        Starting From {pkg.price}
                      </p>
                      <button className="mt-3 px-4 py-2 bg-[#CE9137] text-white w-full transition duration-300">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        <div className="my-10 mt-20">
          <h1 className="md:text-4xl text-center text-4xl font-bold text-black mb-4">
            Support Contact
          </h1>
          <div className="max-w-xs mx-auto flex items-center justify-around space-x-4">
            {[
              "/newIcons/agency/web.png",
              "/newIcons/agency/phone.png",
              "/newIcons/agency/whatsapp.png",
              "/newIcons/agency/email.png",
            ].map((icon, index) => (
              <div
                key={index}
                className="bg-[#f4f0e7] rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300"
              >
                <img src={icon} alt="icon" className="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgencyDetail;
