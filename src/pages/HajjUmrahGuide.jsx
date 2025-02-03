
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import FAQSection from "../components/FAQSection";
const HajjUmrahGuide = () => {
  const faqs = [
    {
      question: "What is the difference between Hajj and Umrah?",
      answer:
        "Hajj is the larger pilgrimage performed annually, whereas Umrah is a smaller pilgrimage that can be performed at any time of the year. Hajj is obligatory for Muslims once in their lifetime, while Umrah is voluntary.",
    },
    {
      question: "How long does Hajj take?",
      answer:
        "The Hajj pilgrimage typically takes about 5-6 days, but the preparation and additional rituals can extend the total duration.",
    },
    {
      question: "What should I pack for Hajj or Umrah?",
      answer:
        "Essential items for Hajj and Umrah include comfortable clothing (Ihram for men), toiletries, medications, and copies of religious texts. A comprehensive packing list is available in the guide.",
    },
    {
      question: "Is it necessary to go with a guide for Hajj and Umrah?",
      answer:
        "While it is not mandatory to go with a guide, having an experienced guide can significantly enhance your experience by providing valuable insights and ensuring that you follow all rituals correctly.",
    },
  ];
  return (
    <div className="font-roboto ">
      {/* Hero Section */}
      <div className="relative min-h-[70vh] md:min-[80vh] py-20 md:pt-28 flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <img
          src="/newImage/guideheader.jpeg"
          alt="Hajj and Umrah"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Full Black Opacity Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 z-0"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-white text-center px-6 sm:px-8 md:px-10">
          <h1 className="uppercase text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold font-kufam text-white mt-4">
            Hajj <span className="text-white"> &</span> Umrah
          </h1>
          <h1 className="uppercase text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-kufam text-[#CE9137] mt-4">
            Guidelines
          </h1>
          <p className="mt-2 font-poppins text-sm sm:text-base md:text-xl text-[#FFFFFF]">
            Your Complete Guide to Performing the Pilgrimage with Ease and
            Devotion
          </p>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="pt-8 px-4 font-roboto bg-white text-center">
        <h2 className="text-4xl font-semibold mb-6">Introduction</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-600">
          Learn About The Significance Of Hajj And Umrah, And How We Make Your
          Pilgrimage Journey Easier. Our Comprehensive Guides Provide
          Step-by-step Instructions, Essential Tips, And Spiritual Insights.
        </p>
      </section>

      {/* Hajj & Umrah Guide Cards */}
      <section className="py-10 px-2 mt-4 bg-[#f9fafc]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Hajj Guide Card */}
          <div className="bg-white p-6 rounded-lg shadow-md ">
            <img src="/newIcons/hajj.png" alt="Hajj Guide" className="" />
            <h3 className="text-xl font-semibold my-2">Hajj Guide</h3>
            <p className="text-gray-600 mb-4">
              Follow The Step-By-Step Instructions For Completing Hajj, From
              Ihram To Tawaf Al-Wada.
            </p>
            <div className="flex flex-col md:flex-row gap-y-4 md:items-center justify-between">
              <a
                href="/hajj-guide.pdf"
                download="Hajj Guide"
                className="bg-[#C28831] text-white py-2 px-4 rounded-lg flex items-center gap-2"
              >
                <img
                  src="/newIcons/download.png"
                  alt="icon"
                  className="w-5 h-5"
                />
                <span>Download Hajj Guide</span>
              </a>

              <p className="">
                <Link
                  to="/guides/hajj-guide"
                  className="text-black hover:underline flex items-center gap-2"
                >
                  Step-by-Step Guide
                  <FaArrowRight />
                </Link>
              </p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md ">
            <img src="/newIcons/umrah.png" alt="Hajj Guide" className="" />
            <h3 className="text-xl font-semibold my-2">Umrah Guide</h3>
            <p className="text-gray-600 mb-4">
              Understand The Key Rituals Of Umrah, Including Ihram, Tawaf, Sa'I,
              And More.
            </p>
            <div className="flex flex-col md:flex-row gap-y-4 md:items-center justify-between">
              <a
                href="/hajj-guide.pdf"
                download="Hajj Guide"
                className="bg-[#C28831] text-white py-2 px-4 rounded-lg flex items-center gap-2"
              >
                <img
                  src="/newIcons/download.png"
                  alt="icon"
                  className="w-5 h-5"
                />
                <span>Download Umrah Guide</span>
              </a>

              <p className="">
                <Link
                  to="/guides/umrah-guide"
                  className="text-black hover:underline flex items-center gap-2"
                >
                  Step-by-Step Guide
                  <FaArrowRight />
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection title="Frequently Asked Questions" faqs={faqs} />
    </div>
  );
};

export default HajjUmrahGuide;
