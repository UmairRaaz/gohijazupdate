

const TopTravelAgenciesCard = ({ image, name, city }) => {
  return (
    <div className="bg-white border border-[#AAAAAA] rounded-lg overflow-hidden pb-4 text-center">
      {/* Agency Image */}
      <img src={image} alt={name} className="w-full h-52 object-cover rounded-md" />

      {/* Agency Name */}
      <h3 className="text-xl font-bold text-gray-800 mt-4">{name}</h3>

      {/* City */}
      <p className="text-[#6B7280] text-sm mt-1">{city}</p>
    </div>
  );
};

export default TopTravelAgenciesCard;
