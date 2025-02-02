import { Link } from "react-router-dom";

const ExclusivePackages = () => {
  return (
    <div className=" pb-12">
      {/* Heading Section */}
      <div className="text-center mb-8 relative">
        <h2 className="text-3xl md:text-5xl px-2 md:px-0 pt-8 mt-8 w-full md:max-w-2xl mx-auto font-bold text-[#4A4A4A]">
          Discover Our Most Exclusive Packages
        </h2>
        <p className="text-[#454545] w-full md:max-w-2xl mx-auto text-xl mt-4">
          Tailored for ultimate comfort, convenience, and a truly memorable
          spiritual journey
        </p>
      </div>

      {/* Exclusive Packages Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-4 md:px-12">
        {/* Ramadan Umrah 2025 */}
        <div className="relative">
          <img
            src="/images/exclusive/ramzan.png"
            alt="Ramadan Umrah 2025"
            className="w-full h-[32rem] object-cover rounded-md"
          />
          <div className="absolute font-poppins bottom-0 left-0 w-full bg-black text-white p-4">
            <h3 className="text-3xl text-center font-bold">
              Ramadan Umrah <span className="text-[#ED8D02]">2025</span>
            </h3>
            <p className="text-center font-light">
              Discounted Ramadan Packages
            </p>
           <Link to={"/umrah-packages"}>
           <button className="mt-4 mx-auto w-56 flex  justify-center items-center text-center px-6 py-2 text-lg bg-[#ED8D02] rounded-md font-semibold text-white  ">
              View Details
            </button>
           </Link>
          </div>
        </div>

        {/* Hajj Packages 2025 */}
        <div className="relative">
          <img
            src="/images/exclusive/hajj.png"
            alt="Hajj Packages 2025"
            className="w-full h-[32rem] object-cover rounded-md"
          />
          <div className="absolute font-poppins bottom-0 left-0 w-full bg-black text-white p-4">
            <h3 className="text-3xl text-center font-bold">
              Hajj Packages <span className="text-[#ED8D02]">2025</span>
            </h3>
            <p className="text-center font-light">
              Plan Your Spiritual Journey for Hajj 2024
            </p>
            <Link to={"/hajj-packages"}>
            <button className="mt-4 mx-auto w-56 flex  justify-center items-center text-center px-6 py-2 text-lg bg-[#ED8D02] rounded-md font-semibold text-white  ">
              View Details
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExclusivePackages;
