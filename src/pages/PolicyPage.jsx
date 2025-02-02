

const PolicyPage = () => {
  return (
    <div className="bg-gray-100 mt-10 min-h-screen py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Privacy Policy</h1>
        <p className="text-gray-600 leading-relaxed mb-4">
          At <span className="font-semibold">YourCompany</span>, we value your privacy and are committed to protecting
          your personal information. This policy outlines how we collect, use, and safeguard your data.
        </p>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">1. Information We Collect</h2>
          <p className="text-gray-600 leading-relaxed">
            We may collect personal information such as your name, email address, and payment details when you interact
            with our website or services.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">2. How We Use Your Information</h2>
          <ul className="list-disc list-inside text-gray-600 leading-relaxed">
            <li>To provide and maintain our services</li>
            <li>To notify you about changes to our platform</li>
            <li>To provide customer support</li>
            <li>To improve our services through analytics</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">3. Sharing Your Information</h2>
          <p className="text-gray-600 leading-relaxed">
            We do not share your personal information with third parties except as necessary to provide our services or
            as required by law.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">4. Data Security</h2>
          <p className="text-gray-600 leading-relaxed">
            We use advanced security measures to protect your data. However, no method of transmission over the Internet
            or electronic storage is completely secure.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">5. Changes to This Policy</h2>
          <p className="text-gray-600 leading-relaxed">
            We may update our Privacy Policy from time to time. We encourage you to review this page periodically for any
            changes.
          </p>
        </section>

        <p className="text-gray-600 text-sm mt-4">
          If you have any questions about this policy, please contact us at{" "}
          <a href="mailto:support@yourcompany.com" className="text-blue-600 underline">
            support@yourcompany.com
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default PolicyPage;
