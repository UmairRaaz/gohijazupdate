import React from "react";
import {
  FaCalendarAlt,
  FaUser,
  FaFolderOpen,
  FaShareAlt,
  FaSave,
  FaChevronLeft,
  FaChevronRight,
  FaCircle,
} from "react-icons/fa";

const BlogOne = () => {
  return (
    <div className="w-full font-roboto max-w-6xl mt-20 mx-auto px-4 py-8">
      {/* Blog Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        Guide to Hajj 2024: What You Need to Know
      </h1>

      {/* Blog Metadata */}
      <div className="flex items-center space-x-4 text-gray-500 mb-6">
        <div className="flex items-center space-x-1">
          <img src="/newIcons/date.png" alt="icon" />
          <span>March 15, 2024</span>
        </div>
        <div className="flex items-center space-x-1">
          <img src="/newIcons/person.png" alt="icon" />
          <span>By Admin</span>
        </div>
        <div className="flex items-center space-x-1">
          <img src="/newIcons/folder.png" alt="icon" />
          <span>Hajj Guide</span>
        </div>
      </div>

      {/* Blog Image */}
      <img
        src="/newImage/blogHeader.png"
        alt="Hajj 2024"
        className="w-full rounded-lg shadow-lg mb-6"
      />

      {/* Blog Description */}
      <p className="text-lg text-gray-700 mb-6">
        The Hajj pilgrimage is one of the five pillars of Islam, and every able
        Muslim is required to perform it at least once in their lifetime. As we
        approach Hajj 2024, here's everything you need to know to prepare for
        this sacred journey.
      </p>

      {/* Blog Content */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">
          Important Dates for Hajj 2024
        </h2>
        <p className="text-gray-700">
          The Hajj 2024 is expected to take place from approximately June 14 to
          June 19, 2024 (subject to moon sighting). It's crucial to note that
          these dates correspond to the 8th to 13th of Dhul Hijjah 1445 in the
          Islamic calendar.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">
          Preparation Checklist
        </h2>
        <ul className="list-disc space-y-4">
          <li className="flex items-start space-x-2">
            <span className="flex-shrink-0 rounded-full  text-gray-600 p-1">
              <FaCircle />
            </span>
            <span>Physical fitness preparation</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="flex-shrink-0 rounded-full text-gray-600 p-1">
              <FaCircle />
            </span>
            <span>Understanding of Hajj rituals</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="flex-shrink-0 rounded-full text-gray-600 p-1">
              <FaCircle />
            </span>
            <span>Appropriate Ihram clothing</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="flex-shrink-0 rounded-full text-gray-600 p-1">
              <FaCircle />
            </span>
            <span>Essential documents</span>
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800">
          Health and Safety Guidelines
        </h2>
        <p className="text-gray-700">
          Given the continuing global health situation, pilgrims must adhere to
          strict health protocols. This includes:
        </p>
        <ul className="list-disc space-y-4">
          <li className="flex items-start space-x-2">
            <span className="flex-shrink-0 rounded-full text-gray-600 p-1">
              <FaCircle />
            </span>
            <span>Complete vaccination requirements</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="flex-shrink-0 rounded-full text-gray-600 p-1">
              <FaCircle />
            </span>
            <span>Regular health check-ups before travel</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="flex-shrink-0 rounded-full text-gray-600 p-1">
              <FaCircle />
            </span>
            <span>Following social distancing guidelines</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="flex-shrink-0 rounded-full text-gray-600 p-1">
              <FaCircle />
            </span>
            <span>Maintaining personal hygiene</span>
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800">
          Accommodation and Transport
        </h2>
        <p className="text-gray-700">
          Various accommodation options are available in both Makkah and
          Madinah, ranging from luxury hotels to standard accommodations.
          Transport between holy sites is typically included in Hajj packages,
          with options for both VIP and standard services.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">Expert Tips</h2>
        <ul className="list-disc space-y-4">
          <li className="flex items-start space-x-2">
            <span className="flex-shrink-0 rounded-full bg-gray-100 text-gray-600 p-1">
              <FaCircle />
            </span>
            <span>
              Book your Hajj package early to secure better rates and
              accommodation
            </span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="flex-shrink-0 rounded-full text-gray-600 p-1">
              <FaCircle />
            </span>
            <span>
              Start physical conditioning at least 3 months before Hajj
            </span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="flex-shrink-0 rounded-full text-gray-600 p-1">
              <FaCircle />
            </span>
            <span>Learn essential Arabic phrases for communication</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="flex-shrink-0 rounded-full text-gray-600 p-1">
              <FaCircle />
            </span>
            <span>Practice walking long distances in advance</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="flex-shrink-0 rounded-full text-gray-600 p-1">
              <FaCircle />
            </span>
            <span>Familiarize yourself with all Hajj rituals beforehand</span>
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800">
          Financial Planning
        </h2>
        <p className="text-gray-700">
          The cost of Hajj varies depending on your package choice and departure
          location. It’s advisable to:
        </p>
        <ul className="list-disc space-y-4">
          <li className="flex items-start space-x-2">
            <span className="flex-shrink-0 rounded-full text-gray-600 p-1">
              <FaCircle />
            </span>
            <span>Start saving early</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="flex-shrink-0 rounded-full text-gray-600 p-1">
              <FaCircle />
            </span>
            <span>Compare different package options</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="flex-shrink-0 rounded-full text-gray-600 p-1">
              <FaCircle />
            </span>
            <span>Account for additional expenses</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="flex-shrink-0 rounded-full text-gray-600 p-1">
              <FaCircle />
            </span>
            <span>Consider travel insurance</span>
          </li>
        </ul>

        {/* Action Buttons */}
        <div className="flex justify-between items-center mt-8">
          <div className="flex space-x-4">
            <button className="px-4 py-2 border border-gray-400 flex items-center gap-x-2 hover:bg-gray-300">
              <img src="/newIcons/share.png" alt="icon" />
              Share
            </button>
            <button className="px-4 py-1 border border-gray-400 flex items-center gap-x-2 hover:bg-gray-300">
            <img src="/newIcons/save.png" alt="icon" />
              Save
            </button>
          </div>
          <div className="flex space-x-1 text-[#CE9137]">
            <button className="flex items-center space-x-2 px-2 py-2 rounded-full ">
            <img src="/newIcons/prev.png" alt="icon" />
              <span className="hover:underline">Previous</span>
            </button>
            <button className="flex items-center space-x-2 px-2 py-2 rounded-full ">
            <span className="hover:underline">Next</span>
            <img src="/newIcons/next.png" alt="icon" />
            
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogOne;
