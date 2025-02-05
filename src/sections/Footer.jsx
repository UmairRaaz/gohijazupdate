import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-6 px-4">
      <div className="max-w-6xl mx-auto grid gap-x-4 grid-cols-2 gap-y-10 md:gap-y-0 sm:grid-cols-2 lg:grid-cols-5 gap-1">
        {/* First Column */}
        <div>
          <img src="/images/newLogo.png" alt="Logo" className="w-[4rem] mb-1" />
          <p className="text-sm">Where the holy journey begins</p>
        </div>

        {/* Second Column - Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#ce9128]">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-x-3">
              <img src="/icons/footer/home.png" alt="icon" />
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li className="flex items-center gap-x-3">
              <img src="/icons/footer/about.png" alt="icon" />
              <Link to="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li className="flex items-center gap-x-3">
              <img src="/icons/footer/blogs.png" alt="icon" />
              <Link to="/blogs/blogone" className="hover:underline">
                Blogs/News
              </Link>
            </li>
          </ul>
        </div>

        {/* Third Column - Package Umrah */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#ce9128]">
            Our Services
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-x-3">
              <img src="/icons/footer/hajj.png" alt="icon" />
              <Link to="/hajj-packages" className="hover:underline">
                Hajj Packages
              </Link>
            </li>
            <li className="flex items-center gap-x-3">
              <img src="/icons/footer/umrah.png" alt="icon" />
              <Link to="/umrah-packages" className="hover:underline">
                Umrah Packages
              </Link>
            </li>
            <li className="flex items-center gap-x-3">
              <img src="/icons/footer/special.png" alt="icon" />
              <p className="hover:underline cursor-pointer">Special Packages</p>
            </li>
          </ul>
        </div>

        {/* Fourth Column - Package Hajj */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#ce9128]">Support</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-x-3">
              <img src="/icons/footer/faqs.png" alt="icon" />
              <Link to="/faqs" className="hover:underline">
                FAQs
              </Link>
            </li>
            <li className="flex items-center gap-x-3">
              <img src="/icons/footer/contact.png" alt="icon" />
              <Link to="/contact-us" className="hover:underline">
                Contact Us
              </Link>
            </li>
            <li className="flex items-center gap-x-3">
              <img src="/icons/footer/terms.png" alt="icon" />
              <Link to="/terms&conditions" className="hover:underline">
                Terms & Conditions
              </Link>
            </li>
            <li className="flex items-center gap-x-3">
              <img src="/icons/footer/privacy.png" alt="icon" />
              <Link to="/privacyandpolicy" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Fifth Column - Package Hajj */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#ce9128]">
            Contact Information
          </h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-x-3">
              <img src="/icons/footer/phone.png" alt="icon" />
              <Link to="/about" className="hover:underline">
                +92 331 000 9661
              </Link>
            </li>
            <li className="flex items-center gap-x-3">
              <img src="/icons/footer/email.png" alt="icon" />
              <Link to="/about" className="hover:underline">
                info@gohijaz.com
              </Link>
            </li>
            <li className="flex items-start gap-x-3">
              <img src="/icons/footer/location.png" alt="icon" />
              <Link to="/about" className="hover:underline">
                Office # G-49 Akhwan Trade Centre, Near Balambat
                Bridge,Timergara, Dir Lower, KPK, Pakistan
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Social Media Links and Copyright */}
      <div className="mt-8 max-w-6xl mx-auto  border-t border-gray-300 pt-4 flex flex-col items-center">
        {/* Newsletter Heading and Subheading */}
        <h2 className="text-xl text-[#ED8D02]  text-center mb-2">
          Newsletter Sign-Up
        </h2>
        <p className="text-center mb-4">
          Stay updated with the latest Hajj & Umrah news.
        </p>

        {/* Newsletter Form */}
        <div className="flex items-center space-x-2">
          {/* Input Field */}
          <input
            type="email"
            placeholder="Enter your email"
            className="border border-gray-100 md:w-96 bg-black text-white rounded-lg px-4 py-2"
          />
          {/* Subscribe Button */}
          <button className="border border-gray-100 bg-black rounded-lg px-4 py-2  text-white">
            Subscribe
          </button>
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center gap-x-8 mt-4">
          {/* Add your social media icons here */}
          <a
            href="https://www.facebook.com/profile.php?id=61571939513995"
            target="_blank"
            className="text-[#ED8D02]"
          >
            {/* Replace with actual icon */}
            <img src="/icons/footer/fbnew.png" alt="icon" />
          </a>
          <a href="#" className="text-[#ED8D02]">
            {/* Replace with actual icon */}
            <img src="/icons/footer/twitternew.png" alt="icon" />
          </a>
          <a href="#" className="text-[#ED8D02]">
            {/* Replace with actual icon */}
            <img src="/icons/footer/instanew.png" alt="icon" />
          </a>
          <a
            href="https://linkedin.com/company/go-hijaz"
            target="_blank"
            className="text-[#ED8D02]"
          >
            {/* Replace with actual icon */}
            <img src="/icons/footer/linkedinnew.png" alt="icon" />
          </a>
          <a
            href="https://www.youtube.com/@GoHijaz"
            target="_blank"
            className="text-[#ED8D02]"
          >
            {/* Replace with actual icon */}
            <img src="/icons/footer/ytnew.png" alt="icon" />
          </a>
        </div>
      </div>

      <div className="mt-8 max-w-6xl mx-auto border-t border-gray-300 pt-4 flex flex-col items-center text-center">
        {/* First Line */}
        <p className="text-sm text-gray-100 mb-2">
          © 2025 GoHijaz.com. All rights reserved.
        </p>

        {/* Second Line */}
        <p className="text-sm text-gray-100 mb-2">
          Legal Disclaimer: GoHijaz.com acts as a marketplace connecting
          travelers with tour operators.
        </p>

        {/* Third Line - Terms & Conditions and Privacy Policy */}
        <div className="text-sm flex">
          <Link
            to="/terms&conditions"
            className="mr-4 hover:underline flex gap-x-2"
          >
            <span className="">
              <img src="/icons/footer/terms.png" alt="icon" />
            </span>
            Terms & Conditions
          </Link>
          <Link
            to="/privacyandpolicy"
            className="hover:underline flex gap-x-2 border-l border-gray-400"
          >
            <span className="ml-4">
              <img src="/icons/footer/privacy.png" alt="icon" />
            </span>
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
