
import FAQSection from "../components/FAQSection";

const UmrahGuide = () => {
  const umrahFAQs = [
    {
      question: "What is The Best Time To Perform Umrah?",
      answer:
        "Umrah can be performed at any time of the year, but the months of Ramadan and the off-peak seasons (outside of Hajj) are considered ideal due to lesser crowds and greater spiritual rewards during Ramadan.",
    },
    {
      question: "How Long Does Umrah Typically Take?",
      answer:
        "Umrah usually takes between 3 to 6 hours to complete, depending on the crowd and the individual’s pace. This includes performing Tawaf, Sa'i, and Taqsir or Halq.",
    },
    {
      question: "What are the differences between Hajj and Umrah?",
      answer:
        "Hajj is an obligatory pilgrimage for Muslims who meet certain conditions and is performed only during specific dates in Dhul Hijjah. Umrah, on the other hand, is a voluntary pilgrimage that can be performed any time of the year and involves fewer rituals.",
    },
    {
      question: "What Are The Essential Items To Pack For Umrah?",
      answer:
        "Essential items include Ihram clothing for men, modest attire for women, comfortable footwear, personal hygiene products, a prayer mat, a small bag for carrying essentials, and copies of important documents like passport and visa.",
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
        faqs={umrahFAQs}
        inCol={true}
      />
    </div>
  );
};

export default UmrahGuide;
