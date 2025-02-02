import { capitalizeEachWord } from "../../utils/capitalizeEachWord";

const TransportFaculty = ({ transportDetails }) => {
  let transportData;
  if(transportDetails){
    transportData = Object.entries(transportDetails).map(([key, value]) => {
      const formattedKey = key
        .replace("_transaport", "") // Remove "_transaport" from the key
        .replace(/_/g, " ") // Replace underscores with spaces
        .replace(/(?:^|\s)\S/g, (match) => match.toUpperCase()); // Capitalize each word
      return { heading: formattedKey, subheading: value || "N/A" }; // Use "N/A" if the value is falsy
    });
  }
 

  return (
    <div className="container mx-auto mt-4">
      {/* Main Heading */}
      <h1 className="text-3xl font-bold mb-4 px-4 md:px-0">
        Transport Faculty
      </h1>

      {/* Box Row */}
      <div className="grid grid-cols-2 md:grid-cols-5 border-t border-gray-400 pt-4 gap-4 text-[#454545]">
        {transportData?.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center border border-gray-400 py-4 rounded-lg"
          >
            <h2 className="font-semibold text-sm md:text-md">Transport</h2>
            <p className="text-center text-gray-600">{capitalizeEachWord(item?.subheading)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransportFaculty;
