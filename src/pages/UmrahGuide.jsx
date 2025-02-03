
import FAQSection from "../components/FAQSection";

const UmrahGuide = () => {
  const umrahVisaFAQs = [
    {
      question: "What is an Umrah visa?",
      answer:
        "An Umrah visa is a special visa issued to Muslims for performing Umrah (a minor pilgrimage) in Makkah. It is available year-round, except during the Hajj season.",
    },
    {
      question: "How can I apply for an Umrah visa?",
      answer: (
        <>
          <ul className="list-disc pl-4">
            <li>You can apply through an authorized travel agent or online via Nusuk (Saudi Arabia's official Umrah platform).</li>
            <li>Some nationalities can also perform Umrah on a Saudi tourist visa.</li>
          </ul>
        </>
      ),
    },
    {
      question: "What documents are required for an Umrah visa?",
      answer: (
        <>
          <ul className="list-disc pl-4">
            <li>Valid passport (at least six months validity).</li>
            <li>Recent passport-sized photographs with a white background.</li>
            <li>Proof of accommodation and return ticket.</li>
            <li>COVID-19 vaccination certificate (if required).</li>
            <li>Meningitis vaccination certificate (for some travelers).</li>
          </ul>
        </>
      ),
    },
    {
      question: "How long does it take to process an Umrah visa?",
      answer: "An Umrah visa is usually processed within 5–7 days.",
    },
    {
      question: "What is the validity of an Umrah visa?",
      answer: (
        <>
          <ul className="list-disc pl-4">
            <li>Most Umrah visas are valid for 90 days, allowing a stay of up to 30 days.</li>
            <li>Multiple-entry visas may be available for some nationalities.</li>
          </ul>
        </>
      ),
    },
    {
      question: "Can I perform Umrah on a tourist visa?",
      answer: "Yes, some nationalities can perform Umrah on a Saudi tourist visa, but a separate Umrah visa is still required for others.",
    },
    {
      question: "Can I extend my Umrah visa?",
      answer: "No, Umrah visas cannot be extended beyond the allowed stay.",
    },
    {
      question: "Can I travel to other cities on an Umrah visa?",
      answer: "Yes, Umrah visa holders can now visit other Saudi cities, including Riyadh, Jeddah, and Madinah.",
    },
    {
      question: "Are there age restrictions for Umrah visas?",
      answer: (
        <>
          <ul className="list-disc pl-4">
            <li>Children can perform Umrah but must be accompanied by a guardian.</li>
            <li>There are no upper age limits, but elderly travelers may need medical clearance.</li>
          </ul>
        </>
      ),
    },
    {
      question: "Do I need travel insurance for an Umrah visa?",
      answer: "Yes, travel insurance is mandatory for Umrah visa holders.",
    },
  ];
  
  const umrahsteps = [
    {
      title: "1. Ihram",
      description:
        "Enter the state of Ihram at the Miqat, wearing white garments for men and modest clothing for women, making the intention for Umrah.",

      icon: "/newIcons/guides/irham.png",
    },
    {
      title: "2. Tawaf",
      description:
        "Perform Tawaf by circling the Kaaba seven times counterclockwise, starting from the Black Stone corner.",

      icon: "/newIcons/guides/tawaf.png",
    },
    {
      title: "3. Sa'i",
      description:
        "Walk between Safa and Marwa seven times, commemorating Hajar's search for water.",
      icon: "/newIcons/guides/sai.png",
    },
    {
      title: "4. Taqsir",
      description:
        "Cut a small portion of hair to mark the completion of Umrah rituals and exit from the state of Ihram.",
      icon: "/newIcons/guides/tasqir.png",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto mt-20 py-10 px-4">
      {/* Heading and Description */}
      <div className="text-center mb-8">
        <h1 className="md:text-5xl text-4xl font-bold text-black mb-4">
          Umrah Rituals Guide
        </h1>
        <p className="w-full md:max-w-3xl mx-auto text-lg sm:text-xl text-gray-600">
          Comprehensive Step-By-Step Guidance For Performing Umrah With Detailed
          Instructions And Spiritual Insights
        </p>
      </div>

      {/* Steps Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {umrahsteps.map((step, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <img src={step.icon} alt={step.title} className="mb-2" />
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>

      <FAQSection
        title="Frequently Asked Questions"
        faqs={umrahVisaFAQs}
        inCol={true}
      />
    </div>
  );
};

export default UmrahGuide;
