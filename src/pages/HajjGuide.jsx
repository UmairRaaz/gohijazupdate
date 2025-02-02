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
  const faqs = [
    {
      question: "What Are The Conditions For Hajj To Be Mandatory?",
      answer:
        "Hajj becomes mandatory for a Muslim if they meet the following conditions: being an adult, mentally sound, physically and financially capable, and having safe access to perform the pilgrimage. It must be performed once in a lifetime if these conditions are met.",
    },
    {
      question: "What Items Are Prohibited During Ihram?",
      answer:
        "While in the state of Ihram, certain items and actions are prohibited, including wearing stitched clothing (for men), using perfumes, cutting nails or hair, hunting animals, engaging in marital relations, and covering the head (for men) or face (for women).",
    },
    {
      question: "What Are The Differences Between Hajj Al-Ifrad, Tamattu, And Qiran?",
      answer:
        "Hajj Al-Ifrad involves performing only Hajj without Umrah. Hajj Al-Tamattu includes performing Umrah during the Hajj months, exiting Ihram, and then re-entering Ihram for Hajj. Hajj Al-Qiran combines both Umrah and Hajj in one Ihram without exiting between the two rituals.",
    },
    {
      question: "What Are The Essential Items To Pack For Hajj?",
      answer:
        "Essential items for Hajj include Ihram clothing, comfortable footwear, personal hygiene products (unscented), medications, a prayer mat, a water bottle, a small backpack, identification documents, and a guidebook for rituals. Staying organized ensures a smooth pilgrimage experience.",
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

      <FAQSection title="Frequently Asked Questions" faqs={faqs} inCol={true}/>
    </div>
  );
};

export default HajjGuide;
