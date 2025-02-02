import React, { useState, useEffect, useRef } from "react";
import { capitalizeEachWord } from "../../utils/capitalizeEachWord";
import { formatPriceWithCommas } from "../../utils/formatPrice";
import { FaInfoCircle } from "react-icons/fa";

const Pricing = ({ price, packageUmrah, contactDetails, duration }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  const { phone, address, email, whatsapp } = contactDetails;
  console.log(contactDetails);
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="w-full font-poppins bg-white rounded-2xl shadow-xl py-4 px-6">
      <h2 className="text-xl font-bold mb-4">Pricing</h2>
      <h2 className="text-lg font-semibold">{duration}</h2>
      {price.map((item, index) => (
        <div key={index} className=" py-2">
          <h3 className="text-lg font-semibold text-gray-600 mb-2">
            {capitalizeEachWord(item.room_type)}
          </h3>
          <div className="space-y-1">
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">
                {packageUmrah ? "Adult Price" : "Sharing Package"}
              </span>
              <span className="text-lg font-bold text-[#ED8D02]">
                {formatPriceWithCommas(item.first_price.price)}
                <span className="text-xs ml-1">
                  {item.first_price.currency}
                </span>
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-sm text-gray-600">
                {packageUmrah ? "Child Price" : "Three Beds Package"}
              </span>
              <span className="text-lg font-bold text-[#ED8D02]">
                {formatPriceWithCommas(item.second_price.price)}
                <span className="text-xs ml-1">
                  {item.second_price.currency}
                </span>
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-sm text-gray-600">
                {packageUmrah ? "Infant Price" : "Double Bed Package"}
              </span>
              <span className="text-lg font-bold text-[#ED8D02]">
                {formatPriceWithCommas(item.third_price.price)}
                <span className="text-xs ml-1">
                  {item.third_price.currency}
                </span>
              </span>
            </div>
          </div>
        </div>
      ))}

      {/* Contact Button */}
      <div>
        <button
          ref={buttonRef} // Added ref to the button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="text-lg bg-[#C38934] w-full text-center text-white p-2 rounded-xl mt-4"
        >
          Contact Agency
        </button>
      </div>

      {/* Dropdown Section */}
      {isDropdownOpen && (
        <div
          ref={dropdownRef} // Added ref to the dropdown
          className="mt-2 p-4 border-t border-gray-300 rounded-lg shadow-md space-y-3"
        >
          <div className="flex items-center justify-between">
            <h1>Agency Contact Details</h1>
            <div className="flex justify-end">
              <button
                onClick={() => setIsDropdownOpen(false)}
                className="text-sm text-gray-600 hover:text-gray-800"
              >
                <img src="/newIcons/filter-close.png" alt="close" />
              </button>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <img
              src="/newIcons/pricing-whatsapp.png"
              alt="WhatsApp"
              className="w-4"
            />
            <span className="text-sm text-gray-600">
              {whatsapp ? (
                <a
                  href={`https://wa.me/${whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {whatsapp}
                </a>
              ) : (
                "N/A"
              )}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <img
              src="/newIcons/pricing-phone.png"
              alt="phone"
              className="w-4"
            />
            <span className="text-sm text-gray-600">
              {phone ? (
                <a
                  href={`tel:${phone}`}
                  target="_blank"
                  className="block  hover:underline"
                >
                  {phone}
                </a>
              ) : (
                "N/A"
              )}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <img
              src="/newIcons/pricing-email.png"
              alt="email"
              className="w-4"
            />
            <span className="text-sm text-gray-600">
              {email ? (
                <a
                  href={`https://mail.google.com/mail/?view=cm&to=${email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:underline"
                >
                  {email}
                </a>
              ) : (
                "N/A"
              )}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <img src="/newIcons/pricing-map.png" alt="map" className="w-4" />
            <span className="text-sm text-gray-600">
              {address ? (
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    address
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" hover:underline"
                >
                  {address}
                </a>
              ) : (
                "N/A"
              )}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pricing;
