

const DiscoverLandmarks = () => {
  return (
    <div className=" pb-12">
      {/* Heading Section */}
      <div className="text-center mb-8 relative">
        <h2 className="text-3xl md:text-5xl w-full md:max-w-2xl mx-auto font-bold text-[#4A4A4A]">
          Discover Makkah’s Holy Landmarks
        </h2>
        <p className="text-[#454545] w-full md:max-w-2xl mx-auto text-xl mt-4">
          Visit iconic Ziyarats with a knowledgeable guide and private
          transport.
        </p>
      </div>

      {/* Exclusive Packages Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-4 md:px-12">
        {/* Cave of Hira */}
        <div className="bg-black">
          <img
            src="/images/exclusive/caveofhira.png"
            alt="Cave of Hira"
            className="w-full h-[20rem]  object-cover rounded-t-md"
          />
          <div className="rounded-b-md px-4 my-6 py-4 w-[90%] mx-auto border-y border-gray-700  bg-black text-white">
            <h3 className="text-3xl font-bold uppercase text-[#ED8D02]">🕌 Cave of Hira</h3>
         
            <div className="mt-4 space-y-4">
              <div className="flex items-center space-x-2">
                <img
                  src="/icons/location.png"
                  className="w-5 h-5" // Set the same width and height for all icons
                  alt="Location Icon"
                />
                <span>Makkah, Saudi Arabia</span>
              </div>
              <div className="flex items-center space-x-2">
                <img
                  src="/icons/timing.png"
                  className="w-5 h-5" // Set the same width and height for all icons
                  alt="Timing Icon"
                />
               <span>2h 00m</span>
              </div>
              <div className="flex items-center space-x-2">
                <img
                  src="/icons/bus.png"
                  className="w-5 h-5" // Set the same width and height for all icons
                  alt="Bus Icon"
                />
                <span>Private AC Bus with Guide</span>
              </div>
              <div className="flex items-center space-x-2">
                <img
                  src="/icons/pickanddrop.png"
                  className="w-5 h-5" // Set the same width and height for all icons
                  alt="Pick and Drop Icon"
                />
                 <span>Pick & Drop from Hotel in Makkah</span>
              </div>
            </div>
          </div>
        </div>

        {/* Masjid Quba */}
        <div className="bg-black">
          <img
            src="/images/exclusive/masjidquba.png"
            alt="Masjid Quba"
            className="w-full h-[20rem] object-cover rounded-md"
          />
          <div className="rounded-b-md px-4 my-6 py-4 w-[90%] mx-auto border-y border-gray-700  bg-black text-white">
            <h3 className="text-3xl font-bold uppercase text-[#ED8D02]">🕌 Masjid Quba</h3>
            <div className="mt-4 space-y-4">
              <div className="flex items-center space-x-2">
                <img
                  src="/icons/location.png"
                  className="w-5 h-5" // Set the same width and height for all icons
                  alt="Location Icon"
                />
                <span >Madina, Saudi Arabia</span>
              </div>
              <div className="flex items-center space-x-2">
                <img
                  src="/icons/timing.png"
                  className="w-5 h-5" // Set the same width and height for all icons
                  alt="Timing Icon"
                />
                <span >3h 00m</span>
              </div>
              <div className="flex items-center space-x-2">
                <img
                  src="/icons/bus.png"
                  className="w-5 h-5" // Set the same width and height for all icons
                  alt="Bus Icon"
                />
                <span >Private AC Bus with Guide</span>
              </div>
              <div className="flex items-center space-x-2">
                <img
                  src="/icons/pickanddrop.png"
                  className="w-5 h-5" // Set the same width and height for all icons
                  alt="Pick and Drop Icon"
                />
                <span >
                  Pick & Drop from Hotel in Madina
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverLandmarks;
