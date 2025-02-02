import { useNavigate } from "react-router-dom";

const BlogsCard = ({ image, title, description, date }) => {
    // Function to calculate how many days ago the blog was posted
    const calculateDaysAgo = (date) => {
      const blogDate = new Date(date);
      const today = new Date();
      const diffTime = Math.abs(today - blogDate);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
    };
    const navigate = useNavigate()
    return (
      <div
      onClick={() => navigate("/blogs/blogone")}
      className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300 flex flex-col">
        {/* Blog Image */}
        <img src={image} alt={title} className="w-full h-48 object-cover" />
  
        {/* Blog Content */}
        <div className="p-4 flex flex-col flex-grow">
          {/* Title */}
          <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
  
          {/* Description */}
          <p className="text-[#6B7280] text-sm mb-4 flex-grow">
            {description.length > 100 ? `${description.substring(0, 100)}...` : description}
          </p>
  
          {/* Footer aligned to bottom */}
          <div className="flex justify-between items-center text-sm text-[#6B7280] mt-auto">
            <button className="text-[#CE9137] hover:underline">Read More</button>
            <span>{calculateDaysAgo(date)}</span>
          </div>
        </div>
      </div>
    );
  };
  
  export default BlogsCard;
  