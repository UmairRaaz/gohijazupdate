import React from "react";
import FAQSection from "../components/FAQSection";

const HajjGuide = () => {
  const hajjSteps = [
    {
      title: "1. Ihram",
      description:
        "Enter The State Of Ihram At The Designated Miqat Point, Wearing Prescribed Clothing And Making The Intention For Hajj.",
      icon: "/newIcons/guides/irham.png",
    },
    {
      title: "2. Tawaf",
      description:
        "Perform Tawaf By Circling The Kaaba Seven Times In A Counterclockwise Direction.",
      icon: "/newIcons/guides/tawaf.png",
    },
    {
      title: "3. Sa'i",
      description:
        "Complete Sa'i By Walking Between The Hills Of Safa And Marwa Seven Times.",
      icon: "/newIcons/guides/sai.png",
    },
    {
      title: "4. Arafat",
      description:
        "Stand In Arafat From Noon To Sunset On The 9th Of Dhul Hijjah, Making Dua And Seeking Forgiveness.",
      icon: "/newIcons/guides/arafat.png",
    },
    {
      title: "5. Muzdalifah",
      description:
        "Spend The Night in Muzdalifah, Collecting Pebbles For The Next Day's Ritual Of Stoning.",
      icon: "/newIcons/guides/muzdalifah.png",
    },
    {
      title: "6. Jamarat",
      description:
        "Stone The Pillars Representing Satan, Sacrifice An Animal, And Complete The Final Tawaf.",
      icon: "/newIcons/guides/jamarat.png",
    },
  ];
  const hajjVisaFAQs = [
    {
      question: "What is a Hajj visa?",
      answer:
        "A Hajj visa is a special visa issued by Saudi Arabia for Muslims to perform the annual Hajj pilgrimage. It is only available during the Hajj season.",
    },
    {
      question: "When can I apply for a Hajj visa?",
      answer:
        "Hajj visas are issued once a year, usually between Shawwal and Dhul-Qi’dah (Islamic months) before the Hajj period.",
    },
    {
      question: "How can I apply for a Hajj visa?",
      answer: (
        <>
          <ul className="list-disc pl-4">
            <li>You must apply through an authorized Hajj tour operator approved by the Saudi Ministry of Hajj and Umrah.</li>
            <li>Applications are usually processed in coordination with the local Hajj authorities of your country.</li>
          </ul>
        </>
      ),
    },
    {
      question: "What documents are required for a Hajj visa?",
      answer: (
        <>
          <ul className="list-disc pl-4">
            <li>Valid passport (at least six months validity).</li>
            <li>Recent passport-sized photographs with a white background.</li>
            <li>Proof of confirmed Hajj package (flights, accommodation, transport).</li>
            <li>A mahram (male guardian) for female travelers under 45 years.</li>
            <li>COVID-19 and meningitis vaccination certificates (if required).</li>
            <li>A non-refundable return ticket.</li>
          </ul>
        </>
      ),
    },
    {
      question: "How long does it take to process a Hajj visa?",
      answer:
        "Hajj visas typically take a few weeks to process, depending on the country and tour operator.",
    },
    {
      question: "What is the validity of a Hajj visa?",
      answer: "A Hajj visa is only valid for the Hajj season and expires soon after Hajj ends.",
    },
    {
      question: "Can I perform Hajj on a tourist or Umrah visa?",
      answer: "No, Hajj can only be performed on a Hajj visa.",
    },
    {
      question: "Can I extend my Hajj visa?",
      answer: "No, Hajj visas cannot be extended. Pilgrims must leave Saudi Arabia by the designated date.",
    },
    {
      question: "Are there age restrictions for Hajj visas?",
      answer: (
        <>
          <ul className="list-disc pl-4">
            <li>Children are allowed but must be accompanied by a guardian.</li>
            <li>Elderly travelers may need a medical clearance.</li>
          </ul>
        </>
      ),
    },
    {
      question: "Do I need travel insurance for a Hajj visa?",
      answer: "Yes, Saudi Arabia requires mandatory travel insurance for Hajj pilgrims.",
    },
  ];
  
  return (
    <div className="max-w-6xl mx-auto mt-20 py-10 px-4">
      {/* Heading and Description */}
      <div className="text-center mb-8">
        <h1 className="md:text-5xl text-4xl font-bold text-black mb-4">
          Hajj Rituals Guide
        </h1>
        <p className="w-full md:max-w-3xl mx-auto text-lg sm:text-xl text-gray-600">
          Comprehensive Step-By-Step Guidance For Performing Hajj With Detailed
          Instructions And Spiritual Insights
        </p>
      </div>

      {/* Steps Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {hajjSteps.map((step, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <img src={step.icon} alt={step.title} className="mb-2" />
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>

      <FAQSection title="Frequently Asked Questions" faqs={hajjVisaFAQs} inCol={true}/>
    </div>
  );
};

export default HajjGuide;
