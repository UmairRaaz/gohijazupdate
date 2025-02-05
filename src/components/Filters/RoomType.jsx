import { useState, useEffect } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

const RoomType = ({ filters, setFilters }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedRooms, setSelectedRooms] = useState(() => {
    const initialSelectedRooms = {
      sharing: false,
      SingleBed: false,
      "2beds": false,
      "3beds": false,
      "4beds": false,
    };

    if (Array.isArray(filters.roomType)) {
      filters.roomType.forEach((roomType) => {
        if (Object.hasOwn(initialSelectedRooms, roomType)) {
          initialSelectedRooms[roomType] = true;
        }
      });
    }

    return initialSelectedRooms;
  });

  useEffect(() => {
    const updatedSelectedRooms = { ...selectedRooms };
    if (Array.isArray(filters.roomType)) {
      Object.keys(updatedSelectedRooms).forEach((roomType) => {
        updatedSelectedRooms[roomType] = filters.roomType.includes(roomType);
      });
    }
    setSelectedRooms(updatedSelectedRooms);
  }, [filters.roomType]);

  const toggleVisibility = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    const updatedRooms = {
      ...selectedRooms,
      [name]: checked,
    };
    setSelectedRooms(updatedRooms);

    const selectedRoomTypes = Object.keys(updatedRooms).filter(
      (roomType) => updatedRooms[roomType]
    );
    setFilters((prevFilters) => ({
      ...prevFilters,
      roomType: selectedRoomTypes,
    }));
  };

  const roomLabels = {
    sharing: "Sharing Room",
    SingleBed: "Single Bed",
    "2beds": "2 Bed Room",
    "3beds": "3 Bed Room",
    "4beds": "4 Bed Room",
  };

  return (
    <div className="">
      <div className="relative">
        <button
          className="w-full flex justify-between px-6 font-poppin items-center text-xl rounded-lg p-2 focus:outline-none"
          onClick={toggleVisibility}
        >
          Room Type
          {isOpen ? (
            <FaAngleUp className="text-gray-500" />
          ) : (
            <FaAngleDown className="text-gray-500" />
          )}
        </button>

        <div
          className={`overflow-hidden transition-all duration-300 ease-out px-4 ${
            isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col mt-2 gap-2">
            {Object.keys(selectedRooms).map((roomType) => (
              <label key={roomType} className="flex items-center">
                <input
                  type="checkbox"
                  name={roomType}
                  checked={selectedRooms[roomType]}
                  onChange={handleCheckboxChange}
                  className="mr-2 border-gray-400 rounded w-4 h-4"
                />
                {roomLabels[roomType]}
              </label>
            ))}
          </div>
        </div>
      </div>
      <div className="w-[90%] mt-4 mx-auto h-[1px] bg-gray-200"></div>
    </div>
  );
};

export default RoomType;
