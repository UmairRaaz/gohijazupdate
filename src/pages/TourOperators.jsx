import { useEffect, useState } from "react";
import SearchFilter from "../components/SearchFilter";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PageLoader from "../components/PageLoader";

const APIURI = "https://ghgohijazserverapi.gohijaz.com";

const TourOperators = () => {
  const [isListView, setisListView] = useState(false);
  const [tourOperators, settourOperators] = useState([]);
  const [filteredTourOperators, setFilteredTourOperators] = useState([]);
  const [loading, setLoading] = useState(true); // Loader State
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("all");
  const [packageType, setPackageType] = useState("all");
  const [sortBy, setSortBy] = useState("default");
  const navigate = useNavigate();

  const fetchTourOperators = async () => {
    try {
      const response = await axios.get(`${APIURI}/api/users/agencies/get`);
      settourOperators(response.data.data);
      setFilteredTourOperators(response.data.data); // Initialize filteredTourOperators
    } catch (error) {
      console.error("Error fetching tour operators:", error);
    } finally {
      setLoading(false); // Stop Loader
    }
  };

  // Filter logic
  useEffect(() => {
    let filteredData = [...tourOperators];

    if (search) {
      filteredData = filteredData.filter((tourguide) =>
        tourguide.name.toLowerCase().includes(search.toLowerCase())
      );
    }
   
    setFilteredTourOperators(filteredData); // Update filtered data
  }, [search]);
  console.log(search)
  useEffect(() => {
    fetchTourOperators();
  }, []);

  return (
    <div className="bg-[#f9fafc] font-roboto min-h-screen">
      <div className="max-w-6xl mx-auto mt-20 py-10 px-4">
        <div className="text-center mb-8">
          <h1 className="md:text-5xl text-4xl font-bold text-black mb-4">
            Our Tour Operators
          </h1>
          <p className="w-full md:max-w-3xl mx-auto text-lg sm:text-xl text-gray-600">
            Explore Trusted Tour Operators Offering Tailored Hajj And Umrah
            Packages
          </p>
        </div>

        <SearchFilter
          isListView={isListView}
          setisListView={setisListView}
          search={search}
          setSearch={setSearch}
        />

        {loading ? (
          <PageLoader />
        ) : (
          <>
            {isListView ? (
              <div className="flex flex-col gap-x-4 gap-y-8">
                {filteredTourOperators.map((tourguide, index) => (
                  <div
                    key={index}
                    onClick={() => navigate(`/tour-operator/${tourguide?._id}`)}
                    className="bg-white border p-4 items-center gap-x-4 flex flex-col md:flex-row shadow-lg rounded-lg overflow-hidden text-center"
                  >
                    <img
                      src={
                        tourguide?.profile_pic || "/newImage/blogImageOne.png"
                      }
                      alt={tourguide.name}
                      className="md:w-[15%] h-24 object-fit rounded-md"
                      onError={(e) =>
                        (e.target.src = "/newImage/blogImageOne.png")
                      }
                    />

                    <div className="md:flex-1 md:text-left">
                      <h3 className="text-xl font-bold text-gray-800 mt-4">
                        {tourguide?.name}
                      </h3>
                      <p className="text-[#6B7280] text-sm mt-1">
                        {tourguide?.address}
                      </p>
                    </div>

                    <div className="px-8">
                      <button
                        className="mt-3 px-4 py-2 w-full bg-[#CE9137] text-white transition duration-300"
                        onClick={() =>
                          navigate(`/tour-operator/${tourguide._id}`)
                        }
                      >
                        View Profile
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 mt-8 sm:grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8">
                {filteredTourOperators.map((tourguide, index) => (
                  <div
                    key={index}
                    className="bg-white border border-[#AAAAAA] rounded-lg overflow-hidden pb-4 text-center flex flex-col justify-between min-h-[350px]"
                  >
                    <img
                      src={tourguide?.profile_pic || "/newImage/blogImageOne.png"}
                      alt={tourguide.name}
                      className="w-full h-52 object-fit rounded-md"
                      onError={(e) =>
                        (e.target.src = "/newImage/blogImageOne.png")
                      }
                    />

                    <div className="flex-1 flex flex-col justify-between px-4">
                      <div className="flex flex-col justify-center items-center gap-y-2 mt-4">
                        <h3 className="text-xl font-bold text-gray-800">
                          {tourguide?.name}
                        </h3>
                        <p className="text-[#6B7280] mb-3 text-sm">
                          {tourguide?.address}
                        </p>
                      </div>

                      <button
                        className="mt-auto px-4 py-2 w-full rounded-lg bg-[#CE9137] text-white transition duration-300"
                        onClick={() => navigate(`/tour-operator/${tourguide._id}`)}
                      >
                        View Profile
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        <div className="flex mt-10 justify-center">
          <button className="px-6 py-3 border border-[#DA9B3E] text-[#DA9B3E] text-xl rounded-lg shadow-md hover:bg-[#DA9B3E] hover:text-white transition-all duration-500">
            Show More
          </button>
        </div>
      </div>
    </div>
  );
};

export default TourOperators;
