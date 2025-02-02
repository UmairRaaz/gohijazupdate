const HajjServices = ({category, zone, ziayarat_included}) => {
  return (
    <div className="services font-poppins border mt-4 border-gray-400 rounded-xl px-4 py-2">
      <h3 className="text-lg text-left mb-1 font-semibold">Services</h3>
      <div className="flex  gap-4 text-center  px-0 ">
        <div className="">
          <h3 className="text-sm text-[#AAAAAA] mb-1">Category</h3>
          <p className="text-xs font-semibold  text-black">{category}</p>
        </div>

        {/* Column 2: Zone */}
        <div className="flex-1">
          <h3 className=" text-sm text-[#AAAAAA] mb-1">Zone</h3>
          <p className="text-xs font-semibold text-black">{zone}</p>
        </div>

        {/* Column 3: Qurbani */}
        <div className="flex-1">
          <h3 className=" text-sm text-[#AAAAAA] mb-1">Qurbani</h3>
          <p className="text-xs font-semibold text-black">{ziayarat_included ? "Included" : "Not Included"}</p>
        </div>
      </div>
    </div>
  );
};

export default HajjServices;
