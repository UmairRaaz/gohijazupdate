import { useNavigate } from "react-router-dom";

const TopTravelAgenciesCard = ({ image, name, city, id }) => {
  const navigate = useNavigate()
  return (
    <div
    onClick={() => navigate(`/tour-operator/${id}`)}
    className="bg-white gap-y-4 cursor-pointer border border-[#AAAAAA] rounded-lg overflow-hidden pb-8 text-center h-[350px] flex flex-col">
      {/* Agency Image */}
      <img src={image} alt={name} className="w-full h-52 object-fit rounded-md" />

      {/* Agency Name */}
      <h3 className="text-xl font-bold text-gray-800  flex-grow">{name}</h3>

      {/* City */}
      <p className="text-[#6B7280] text-sm mt-1">{city}</p>
    </div>
  );
};

export default TopTravelAgenciesCard;
