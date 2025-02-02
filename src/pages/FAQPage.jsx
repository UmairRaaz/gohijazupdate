import { useState } from "react";

const FAQPage = () => {
  const [question, setQuestion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your question has been submitted!");
  };

  return (
    <div className="bg-[#f9fafc] mt-10 font-roboto min-h-screen py-16 px-2 md:px-6">
      <div className="w-full md:max-w-4xl mx-auto">
        {/* Header */}

        <div className="text-center">
          <h1 className="md:text-4xl text-4xl font-bold text-black mb-4">
            Frequently Asked Questions
          </h1>
          <p className="w-full md:max-w-4xl text-center mx-auto text-md text-gray-600">
            Find Answers To Common Questions About Hajj & Umrah
          </p>
        </div>

        {/* Ask Your Question Section */}
        <div className="p-8 rounded-lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            <textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Ask Your Question Here..."
              className="w-full bg-white p-4 border rounded-md shadow-sm  h-32 resize-none"
            />
            <button
              type="submit"
              className="w-full md:w-40 mx-auto flex items-center justify-center text-center py-3 bg-[#CE9137] text-white rounded-md hover:bg-[#CE9137]/80 transition duration-300"
            >
              Submit Question
            </button>
          </form>
          <p className="mt-4 text-center text-gray-700">
            We'll Get Back To You Within 24 Hours
          </p>
          <p className="text-gray-600 text-center mt-10">Scroll Down To See More Questions</p>
          <img src="/newIcons/scrolldown.png" alt="icon"  className="mt-4 w-4 mx-auto"/>
        </div>

      
       

        {/* FAQ Section */}
        <div className="">
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              1. What Is A Hajj Visa?
            </h3>
            <p className="text-gray-700">
              A Hajj Visa is a special visa issued by Saudi Arabia for Muslims
              to perform the annual Hajj pilgrimage. It is only available during
              the Hajj season.
            </p>
          </div>

          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              2. When Can I Apply For A Hajj Visa?
            </h3>
            <p className="text-gray-700">
              Hajj visas are issued once a year, usually between Shawwal and
              Dhul-Qidah (Islamic months) before the Hajj period.
            </p>
          </div>

          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              3. How Can I Apply For A Hajj Visa?
            </h3>
            <ul className="text-gray-700 list-inside list-decimal space-y-2">
              <li>
                You must apply through an authorized Hajj tour operator approved
                by the Saudi Ministry of Hajj and Umrah.
              </li>
              <li>
                Applications are usually processed in coordination with the
                local Hajj authorities of your country.
              </li>
            </ul>
          </div>

          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              4. What Documents Are Required For A Hajj Visa?
            </h3>
            <ul className="text-gray-700 list-inside list-decimal space-y-2">
              <li>Valid passport (at least six months validity)</li>
              <li>Recent passport-sized photographs with a white background</li>
              <li>
                Proof of confirmed Hajj package (flights, accommodation,
                transport)
              </li>
              <li>
                A Mahram (male guardian) for female travelers under 45 years
              </li>
              <li>
                Covid-19 and meningitis vaccination certificates (if required)
              </li>
              <li>A non-refundable return ticket</li>
            </ul>
          </div>

          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              5. How Long Does It Take To Process A Hajj Visa?
            </h3>
            <p className="text-gray-700">
              Hajj visas typically take a few weeks to process, depending on the
              country and tour operator.
            </p>
          </div>

          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              6. What Is The Validity Of A Hajj Visa?
            </h3>
            <p className="text-gray-700">
              A Hajj visa is only valid for the Hajj season and expires soon
              after Hajj ends.
            </p>
          </div>

          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              7. Can I Perform Hajj On A Tourist Or Umrah Visa?
            </h3>
            <p className="text-gray-700">
              No, Hajj can only be performed on a Hajj visa.
            </p>
          </div>

          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              8. Can I Extend My Hajj Visa?
            </h3>
            <p className="text-gray-700">
              No, Hajj visas cannot be extended. Pilgrims must leave Saudi
              Arabia by the designated date.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
