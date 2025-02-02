
import { Link } from "react-router-dom"; 

const NotFoundPage = () => {
  return (
    <div className="flex items-center mt-14 justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[#ED8D02]">404</h1>
        <p className="text-xl text-gray-700 mt-4">Oops! The page you're looking for doesn't exist.</p>
        <p className="text-gray-600 mt-2">It might have been moved or deleted.</p>
        <Link
          to="/"
          className="mt-6 inline-block px-6 py-3 bg-[#ED8D02] text-white text-lg font-medium rounded-lg shadow-md hover:bg-orange-600 transition-colors"
        >
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
