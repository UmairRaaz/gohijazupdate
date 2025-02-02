import { useState } from "react";
import SearchFilter from "../components/SearchFilter";
import { useNavigate } from "react-router-dom";

const TourOperators = () => {
  const [isListView, setisListView] = useState(false);
  const navigate = useNavigate()
  const tourOperators = Array.from({ length: 30 }, (_, index) => ({
    id: index + 1,
    name: `Al Baraka Tour`,
    city: "Dubai, UAE",
    image: "/newImage/blogImageOne.png",
  }));
  console.log(tourOperators);
  return (
    <div className="bg-[#f9fafc] font-roboto min-h-screen">
      <div className="max-w-6xl  mx-auto mt-20 py-10 px-4">
        {/* Heading and Description */}
        <div className="text-center mb-8">
          <h1 className="md:text-5xl text-4xl font-bold text-black mb-4">
            Our Tour Operators
          </h1>
          <p className="w-full md:max-w-3xl mx-auto text-lg sm:text-xl text-gray-600">
            Explore Trusted Tour Operators Offerning Tailored Hajj And Umrah
            Packages
          </p>
        </div>
        <SearchFilter isListView={isListView} setisListView={setisListView} />
        {isListView ? (
          <div
          className="flex flex-col  gap-x-4 gap-y-8">
            {tourOperators.map((tourguide, index) => (
              <div
                key={index}
                onClick={navigate(`/tour-operator/${tourguide.id}`)}
                className="bg-white border p-4 items-center gap-x-4 flex flex-col md:flex-row shadow-lg rounded-lg overflow-hidden text-center"
              >
                {/* Agency Image */}
                <img
                  src={tourguide.image}
                  alt={tourguide.name}
                  className="md:w-[15%] object-cover rounded-md"
                />

                {/* Agency Name */}
                <div className="md:flex-1 md:text-left">
                  <h3 className="text-xl font-bold text-gray-800 mt-4">
                    {tourguide.name}
                  </h3>

                  {/* City */}
                  <p className="text-[#6B7280] text-sm mt-1">
                    {tourguide.city}
                  </p>
                </div>

                {/* View Profile Button */}
                <div className="px-8">
                  <button
                    className="mt-3 px-4 py-2 w-full bg-[#CE9137] text-white  transition duration-300"
                    onClick={() => navigate(`/tour-operator/${tourguide.id}`)}
                  >
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 mt-8 sm:grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8">
            {tourOperators.map((tourguide, index) => (
              <div
                key={index}
                
                className="bg-white border border-[#AAAAAA] rounded-lg overflow-hidden pb-4 text-center"
              >
                {/* Agency Image */}
                <img
                  src={tourguide.image}
                  alt={tourguide.name}
                  className="w-full h-52 object-cover rounded-md"
                />

                {/* Agency Name */}
                <h3 className="text-xl font-bold text-gray-800 mt-4">
                  {tourguide.name}
                </h3>

                {/* City */}
                <p className="text-[#6B7280] text-sm mt-1">{tourguide.city}</p>

                {/* View Profile Button */}
                <div className="px-8">
                  <button
                    className="mt-3 px-4 py-2 w-full bg-[#CE9137] text-white  transition duration-300"
                    onClick={() => navigate(`/tour-operator/${tourguide.id}`)}
                  >
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="flex mt-10 justify-center ">
          <button
            // onClick={handleShowMorePackages}
            className="px-6 py-3 border border-[#DA9B3E] text-[#DA9B3E] text-xl rounded-lg shadow-md hover:bg-[#DA9B3E] hover:text-white transition-all duration-500"
          >
            Show More
          </button>
        </div>
      </div>
    </div>
  );
};

export default TourOperators;
