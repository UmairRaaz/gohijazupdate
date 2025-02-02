
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
// Custom Arrow Components
const CustomPrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="slick-prev custom-arrow absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
    style={{ zIndex: 1 }}
  >
    <FaArrowLeft size={20} />
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="slick-next custom-arrow absolute top-1/2 right-0 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
    style={{ zIndex: 1 }}
  >
    <FaArrowRight size={20} />
  </button>
);

export {CustomPrevArrow, CustomNextArrow}