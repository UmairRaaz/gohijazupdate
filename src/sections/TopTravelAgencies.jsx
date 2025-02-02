import React from 'react';
import Slider from 'react-slick';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Import icons
import TopTravelAgenciesCard from '../components/TopTravelAgenciesCard';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

// Dummy Data for Travel Agencies
const agencies = [
  { id: 1, image: '/newImage/blogImageOne.png', name: 'Al Baraka Tours', city: 'Dubai, UAE' },
  { id: 2, image: '/newImage/blogImageOne.png', name: 'Al Baraka Tours', city: 'Dubai, UAE' },
  { id: 3, image: '/newImage/blogImageOne.png', name: 'Al Baraka Tours', city: 'Dubai, UAE' },
  { id: 4, image: '/newImage/blogImageOne.png', name: 'Al Baraka Tours', city: 'Dubai, UAE' },
  { id: 5, image: '/newImage/blogImageOne.png', name: 'Al Baraka Tours', city: 'Dubai, UAE' },
];

// Custom Arrow Components
const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return(
    <div onClick={onClick} className={`arrow ${className}`} >
      <AiOutlineArrowLeft class="arrows" style={{color:"white"}}/>
    </div>
  )
  }

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return(
    <div onClick={onClick} className={`arrow ${className}`} >
      <AiOutlineArrowRight class="arrows" style={{color:"white"}}/>
    </div>
  )
}

const TopTravelAgencies = () => {
  // Slick Slider Settings
  const settings = {
    dots: false, // Remove dots
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 cards on medium screens
    slidesToScroll: 1,
    className:"slides",

    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1024, // Below 1024px screen width
        settings: {
          slidesToShow: 3, // Show 3 cards on tablets
        },
      },
      {
        breakpoint: 768, // Below 768px screen width
        settings: {
          slidesToShow: 1, // Show 1 card on mobile
        },
      },
    ],
  };

  return (
    <div className="w-full md:max-w-6xl mx-auto py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
        Top Travel Agencies
      </h2>
      <div className='slider-one'>
      <Slider {...settings} className="agency-slider">
        {agencies.map((agency) => (
          <div key={agency.id} className="px-2">
            <TopTravelAgenciesCard
              image={agency.image}
              name={agency.name}
              city={agency.city}
            />
          </div>
        ))}
      </Slider>
      </div>
    </div>
  );
};

export default TopTravelAgencies;
