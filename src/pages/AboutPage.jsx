import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="bg-gray-50 mt-10 min-h-screen py-10">
      {/* Header Section */}
      <div className="max-w-6xl px-2 md:px-0 mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#4A4A4A]">
          About GoHijaz.com
        </h1>
        <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
          Transforming the way you plan your sacred journeys to the holy land of
          Hijaz.
        </p>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto mt-12 p-6 bg-white shadow-lg rounded-lg">
        <p className="text-lg text-gray-800 leading-relaxed">
          <span className="font-semibold">GoHijaz.com</span> is the
          first-of-its-kind online platform that provides a marketplace for Hajj
          and Umrah tour operators. Our mission is to make the sacred journeys
          to the holy land of Hijaz as seamless as possible for every Muslim.
        </p>

        <p className="mt-6 text-lg text-gray-800 leading-relaxed">
          Our goal is to extend this platform globally so that anyone, from any
          city or location, can book Hajj/Umrah packages with just one click. We
          aim to offer low prices and unmatched convenience, transforming how
          people plan these spiritual journeys.
        </p>

        <p className="mt-6 text-lg text-gray-800 leading-relaxed">
          Beyond being a hub for Zayreen and tour agencies to connect,{" "}
          <span className="font-semibold">GoHijaz.com</span> will keep users
          informed about the latest news, updates, and guidelines related to
          Hajj and Umrah in Pakistan and around the world. We are committed to
          making this experience not only hassle-free but also enriching and
          memorable.
        </p>

        <p className="mt-6 text-lg text-gray-800 leading-relaxed">
          At <span className="font-semibold">GoHijaz.com</span>, we believe it
          is our duty to provide visitors with an exceptional online experience.
          Our goal is to guide users to fulfill their sacred obligations with
          utmost ease, convenience, and peace of mind.
        </p>
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <h2 className="text-3xl font-bold text-[#ED8D02]">
          Start Your Spiritual Journey Today
        </h2>
        <p className="mt-2 text-lg text-gray-700">
          Discover the best Hajj and Umrah packages at unbeatable prices.
        </p>
        <Link to="/packages">
          <button className="mt-6 px-6 py-3 bg-[#ED8D02] text-white rounded-lg hover:bg-[#db7b00] transition font-semibold text-lg">
            Explore Packages
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AboutPage;
