import { capitalizeEachWord } from "../../utils/capitalizeEachWord";



const Facility = ({ facilities }) => {
  // Combine hotel facilities with random facilities
  const combinedFacilities = [
    ...new Set([ ...facilities]),
  ];

  return (
    <div>
      <h1 className="text-4xl font-semibold mt-8 my-4">
        Facilities
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3">
      {facilities && facilities.length > 0 ? combinedFacilities.map((service, index) => (
        <div key={index} className="flex items-center my-2">
          <img src="/icons/checked.png" alt="Check" className="w-6 h-6 mr-2" />
          <span>{capitalizeEachWord(service)}</span>
        </div>
      )) : null}
      </div>
    </div>
  );
};

export default Facility;
