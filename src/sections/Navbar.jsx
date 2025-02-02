import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const packageDropdownRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const togglePackageDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        packageDropdownRef.current &&
        !packageDropdownRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="fixed bg-black py-4 top-0 left-0 right-0 z-50 px-6 md:px-10">
      <div className="flex w-full mx-auto items-center justify-between md:justify-center">
        {/* Logo */}
        <Link
          to={"/"}
          className="flex-shrink-0 md:absolute md:left-10"
        >
          <img src="/images/navnewtwo.png" alt="Logo" className="w-24" />
        </Link>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="text-white text-2xl md:hidden"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            isMobileMenuOpen ? "flex h-screen md:h-auto" : "hidden"
          } md:flex flex-col md:flex-row space-y-4 md:items-center md:space-y-0 md:space-x-8 absolute md:static top-full left-0 right-0 bg-black md:bg-black px-6 md:px-2 py-4 md:py-1`}
        >
          {/* Packages Dropdown */}
          <div className="relative" ref={packageDropdownRef}>
            <button
              className="text-white text-lg hover:text-[#ED8D02] transition duration-300 flex items-center"
              onClick={togglePackageDropdown}
            >
              Packages
              <FaChevronDown
                className={`ml-2 transform ${
                  isDropdownOpen ? "rotate-180" : "rotate-0"
                } transition-transform`}
              />
            </button>
            {isDropdownOpen && (
              <div className="absolute mb-4 md:mb-0 z-50 left-0 mt-2 w-48 bg-black text-white py-2 rounded-md shadow-lg">
                <Link
                  onClick={() => {togglePackageDropdown(); toggleMobileMenu()}}
                  to={"/packages"}
                  className="block px-4 py-2 hover:bg-[#ED8D02] transition duration-300"
                >
                  Umrah Luxury
                </Link>
                <Link
                  onClick={() => {togglePackageDropdown(); toggleMobileMenu()}}
                  to={"/packages"}
                  className="block px-4 py-2 hover:bg-[#ED8D02] transition duration-300"
                >
                  Hajj 2025
                </Link>
                <Link
                  onClick={() => {togglePackageDropdown(); toggleMobileMenu()}}
                  to={"/packages"}
                  className="block px-4 py-2 hover:bg-[#ED8D02] transition duration-300"
                >
                  Umrah Gold
                </Link>
                <Link
                  onClick={() => {togglePackageDropdown(); toggleMobileMenu()}}
                  to={"/packages"}
                  className="block px-4 py-2 hover:bg-[#ED8D02] transition duration-300"
                >
                  Umrah Priority
                </Link>
              </div>
            )}
          </div>

          <Link
            to={"/tour-operators"}
            onClick={toggleMobileMenu}
            className="text-white text-lg hover:text-[#ED8D02] transition duration-300"
          >
            All Companies
          </Link>
          <Link
            to={"/guides/hajj-umrah"}
            onClick={toggleMobileMenu}
            className="text-white text-lg hover:text-[#ED8D02] transition duration-300"
          >
            Hajj & Umrah Guide
          </Link>
          <Link
            to={"/about"}
            onClick={toggleMobileMenu}
            className="text-white text-lg hover:text-[#ED8D02] transition duration-300"
          >
            About Us
          </Link>

          {/* Login Button (Mobile View) */}
          <Link
            to="https://agency.gohijaz.com/"
            target="_blank"
            className="block md:hidden w-48 border border-white text-white py-2 px-6 rounded-md hover:bg-white hover:text-black transition duration-300 mt-4"
          >
            Agency Login
          </Link>
        </div>

        {/* Login Button (Desktop View) */}
        <Link
          to="https://agency.gohijaz.com/"
          target="_blank"
          className="hidden md:block border border-white text-white py-2 px-6 rounded-md hover:bg-white hover:text-black transition duration-300 md:absolute md:right-6"
        >
          Agency Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
