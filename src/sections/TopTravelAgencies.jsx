import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import axios from "axios"; // Make sure axios is imported
import TopTravelAgenciesCard from "../components/TopTravelAgenciesCard";

const TopTravelAgencies = () => {
  const [tourOperators, setTourOperators] = useState([]);
  const [filteredTourOperators, setFilteredTourOperators] = useState([]);
  const [loading, setLoading] = useState(true);
  const APIURI = "https://ghgohijazserverapi.gohijaz.com";
  // Fetch Tour Operators from API
  const fetchTourOperators = async () => {
    try {
      const response = await axios.get(`${APIURI}/api/users/agencies/get`);
      const operators = response.data.data;

      // Sort by bookings and totalPackages (descending)
      const sortedOperators = operators
        .sort(
          (a, b) =>
            b.totalBookings + b.totalPackages - (a.totalBookings + a.totalPackages)
        )
        .slice(0, 5); // Select top 5

      setTourOperators(operators);
      setFilteredTourOperators(sortedOperators); // Set filtered tour operators
    } catch (error) {
      console.error("Error fetching tour operators:", error);
    } finally {
      setLoading(false); // Stop loader
    }
  };

  useEffect(() => {
    fetchTourOperators();
  }, []);

  // Custom Arrow Components for Slider
  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div onClick={onClick} className={`arrow ${className}`}>
        <AiOutlineArrowLeft className="arrows" style={{ color: "white" }} />
      </div>
    );
  };

  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div onClick={onClick} className={`arrow ${className}`}>
        <AiOutlineArrowRight className="arrows" style={{ color: "white" }} />
      </div>
    );
  };

  // Slick Slider Settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    className: "slides",
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full md:max-w-6xl mx-auto py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
        Top Travel Agencies
      </h2>
      <div className="slider-one">
        <Slider {...settings} className="agency-slider">
          {!loading &&
            filteredTourOperators.map((agency) => (
              <div key={agency.id} className="px-2">
                <TopTravelAgenciesCard
                  id={agency?._id}
                  image={agency?.profile_pic || "/newImage/blogImageOne.png"}
                  name={agency?.name}
                  city={agency?.address}
                />
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default TopTravelAgencies;
