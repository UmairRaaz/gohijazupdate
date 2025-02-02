import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const FAQSection = ({ title, faqs, inCol = false }) => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <section className="py-16 px-4 bg-white">
      <h2 className="text-2xl font-semibold text-center mb-8">{title}</h2>
      <div
        className={`max-w-5xl gap-x-10 gap-y-4 grid grid-cols-1 ${
          inCol ? '' : 'md:grid-cols-2'
        } mx-auto`}
      >
        {faqs.map((faq, index) => (
          <div key={index} className="border-b py-4">
            <div
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center cursor-pointer text-lg font-medium text-gray-800"
            >
              <span className="max-w-[85%] md:max-w-full break-words">
                {faq.question}
              </span>
              <span className="ml-2 text-gray-600">
                {activeFAQ === index ? <FaMinus /> : <FaPlus />}
              </span>
            </div>
            {activeFAQ === index && (
              <div className="mt-2 text-gray-600">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
