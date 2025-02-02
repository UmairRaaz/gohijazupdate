import { useState } from "react";

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="bg-[#f9fafc] font-roboto min-h-screen py-16">
      <div className="container mx-auto px-6">
        {/* Heading */}

        <div className="text-center my-8">
          <h1 className="md:text-4xl text-4xl font-bold text-black mb-4">
            Contact Us
          </h1>
          <p className="w-full md:max-w-4xl text-center mx-auto text-md text-gray-600">
            Get In Touch With Us For Any Questions Or Support
          </p>
        </div>

        {/* Contact Form */}
        <div className=" gap-8">
          {/* Form */}
          <div className="bg-white max-w-3xl mx-auto p-8 shadow-lg rounded-lg">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="fullName" className="block text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md mt-2"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md mt-2"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="subject" className="block text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md mt-2"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md mt-2"
                  rows="4"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#CE9137] text-white py-3 rounded-md mt-4 hover:bg-[#b6742c] transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="max-w-3xl mx-auto mt-4 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Visit Us Card */}
            <div className="bg-white py-6 px-2 shadow-lg rounded-lg flex flex-col gap-y-2  ">
              <div className="bg-[#f4f0e7] border rounded-full p-3 w-10 h-10 transition-all duration-300 ">
                <img src="/newIcons/agency/visit.png" alt="icon" className="" />
              </div>
              <div className="px-1">
                <h3 className="text-xl mb-2 font-semibold text-gray-800">
                  Visit Us
                </h3>
                <p className="text-gray-700">
                  Office # G-49 Akhwan Trade Centre, Near Balambat Bridge,
                  Timergara, Dir lower, KPK, Pakistan
                </p>
              </div>
            </div>
            <div className="bg-white py-6 px-2 shadow-lg rounded-lg flex flex-col gap-y-2  ">
              <div className="bg-[#f4f0e7] border rounded-full p-3 w-10 h-10 transition-all duration-300 ">
                <img src="/newIcons/agency/phone.png" alt="icon" className="" />
              </div>
              <div className="px-1">
                <h3 className="text-xl mb-2 font-semibold text-gray-800">
                  Call Us
                </h3>
                <p className="text-gray-700">Phone: +92 331 000 9661</p>
                <p className="text-gray-700">Whatsapp: +923310009661</p>
              </div>
            </div>
            <div className="bg-white py-6 px-2 shadow-lg rounded-lg flex flex-col gap-y-2  ">
              <div className="bg-[#f4f0e7] border rounded-full p-3 w-10 h-10 transition-all duration-300 ">
                <img src="/newIcons/agency/email.png" alt="icon" className="" />
              </div>
              <div className="px-1">
                <h3 className="text-xl mb-2 font-semibold text-gray-800">
                  Email Us
                </h3>
                <p className="text-gray-700">Support@Gohijaz.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
