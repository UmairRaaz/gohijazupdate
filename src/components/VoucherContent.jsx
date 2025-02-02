import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const VoucherContent = ({ printref }) => {
  return (
    <div ref={printref} className="w-full h-screen">
      <div className="bg-white px-6 py-3 ">
        <div className="flex flex-row justify-between gap-6  items-stretch">
          {/* Left Box */}
          <div className="flex text-xs h-full flex-col items-start space-y-2 w-full">
            <div className="border border-gray-400 px-4 py-5 rounded-xl w-auto">
              <div className="font-semibold flex gap-x-10 mb-2">
                Voucher Number: <span className="text-gray-600"> 23453</span>
              </div>
              <div className="font-semibold flex gap-x-10">
                Created Date: <span className="text-gray-600">12-12-2024</span>
              </div>
            </div>
          </div>

          {/* Middle Box */}
          <div className="flex text-xs flex-col items-center text-center space-y-1 w-full lg:w-1/3">
            <img
              src="https://cdn2.vectorstock.com/i/1000x1000/30/46/traveler-or-tourist-avatar-icon-image-vector-15543046.jpg"
              alt="Global Travel Agency"
              className="rounded-full w-5"
            />
            <div className="font-bold">Global Travel Agency</div>
            <div className="font-semibold text-gray-600">
              123 Innovation Drive, Tech City, CA 90210
            </div>
            <div className="font-semibold text-gray-600">+92 345 454 3433</div>
          </div>

          {/* Right Box */}
          <div className="flex flex-col h-full text-xs items-end space-y-2 w-full">
            <div className="border border-gray-400 px-4 py-5 rounded-xl w-auto">
              <div className="font-semibold flex text-gray-600 gap-x-10 mb-2">
                Shirka
              </div>
              <div className="font-semibold flex gap-x-10">
                Mada Al Imran, Jeddah
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-8 text-xs py-4 mb-4 border border-gray-400 w-[95%] rounded-xl mx-auto data">
        {/* General Information */}
        <div className="mb-1">
          <h2 className="text-xs font-bold mb-2">
            General Information About Service
          </h2>
          <table className="w-full border-collapse border-gray-300">
            <thead>
              <tr className="bg-black text-white">
                <th className="p-2 rounded-tl-2xl">Adult</th>
                <th className="p-2">Childs</th>
                <th className="p-2">Infants</th>
                <th className="p-2">Arrival Date</th>
                <th className="p-2">Departure Date</th>
                <th className="p-2 rounded-tr-2xl">Nights</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center">
                <td className="border p-2">3</td>
                <td className="border p-2">0</td>
                <td className="border p-2">0</td>
                <td className="border p-2">07 Jul 2025</td>
                <td className="border p-2">29 Jan 2025</td>
                <td className="border p-2">22</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Departure Flight */}
        <div className="mb-1">
          <h2 className="text-xs font-bold mb-2">Departure Flight</h2>
          <table className="w-full border-collapse  border-gray-300">
            <thead>
              <tr className="bg-black text-white">
                <th className="p-2 rounded-tl-2xl">Airport</th>
                <th className="p-2">Sector</th>
                <th className="p-2">Flight No</th>
                <th className="p-2">Dep Date</th>
                <th className="p-2">Dep Time</th>
                <th className="p-2">Arrival Date</th>
                <th className="p-2">Arrival Time</th>
                <th className="p-2 rounded-tr-2xl">PNR</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center">
                <td className="border p-2">Jeddah Airport</td>
                <td className="border p-2">PEW-JED</td>
                <td className="border p-2">PK-343</td>
                <td className="border p-2">29 Jan 2025</td>
                <td className="border p-2">09:00 AM</td>
                <td className="border p-2">29 Jan 2025</td>
                <td className="border p-2">09:00 AM</td>
                <td className="border p-2">22</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Return Flight */}
        <div className="mb-1">
          <h2 className="text-xs font-bold mb-2">Return Flight</h2>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-black text-white">
                <th className="p-2 rounded-tl-2xl">Airport</th>
                <th className="p-2">Sector</th>
                <th className="p-2">Flight No</th>
                <th className="p-2">Dep Date</th>
                <th className="p-2">Dep Time</th>
                <th className="p-2">Arrival Date</th>
                <th className="p-2">Arrival Time</th>
                <th className="p-2 rounded-tr-2xl">PNR</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center">
                <td className="border p-2">Jeddah Airport</td>
                <td className="border p-2">PEW-JED</td>
                <td className="border p-2">PK-343</td>
                <td className="border p-2">29 Jan 2025</td>
                <td className="border p-2">09:00 AM</td>
                <td className="border p-2">29 Jan 2025</td>
                <td className="border p-2">09:00 AM</td>
                <td className="border p-2">22</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Accommodation Details */}
        <div className="mb-1">
          <h2 className="text-xs font-bold mb-2">Accommodation Details</h2>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-black text-white">
                <th className="p-2 rounded-tl-2xl">Package</th>
                <th className="p-2">City</th>
                <th className="p-2">Hotel</th>
                <th className="p-2">Check in</th>
                <th className="p-2">Check out</th>
                <th className="p-2">Room Type</th>
                <th className="p-2 rounded-tr-2xl">Nights</th>
              </tr>
            </thead>
            <tbody>
              {Array(3)
                .fill(null)
                .map((_, idx) => (
                  <tr key={idx} className="text-center">
                    <td className="border p-2">All</td>
                    <td className="border p-2">Makkah</td>
                    <td className="border p-2">Al Noor Hotel</td>
                    <td className="border p-2">29 Jan 2025</td>
                    <td className="border p-2">29 Jan 2025</td>
                    <td className="border p-2">09:00 AM</td>
                    <td className="border p-2">22</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        {/* Transportation Details */}
        <div className="mb-1">
          <h2 className="text-xs font-bold mb-2">Transportation Details</h2>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-black text-white">
                <th className="p-2 rounded-tl-2xl">Transport Trip</th>
                <th className="p-2">Transport by</th>
                <th className="p-2">Quantity</th>
                <th className="p-2 rounded-tr-2xl">TRANS_BRN</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center">
                <td className="border p-2">JED-MAK-MAD-MAK-JED</td>
                <td className="border p-2">Bus</td>
                <td className="border p-2">3</td>
                <td className="border p-2">Nil</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Pilgrim Details */}
        <div className="mb-1">
          <h2 className="text-xs font-bold mb-2">Pilgrim’s Details</h2>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-black text-white">
                <th className="p-2 rounded-tl-2xl">Pilgrim Name</th>
                <th className="p-2">Passport No</th>
                <th className="p-2">DOB</th>
                <th className="p-2">AGEGRP</th>
                <th className="p-2">Child Without Bed</th>
                <th className="p-2">Visa No</th>
                <th className="p-2">Issue Date</th>
                <th className="p-2 rounded-tr-2xl">Group Code</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  name: "Shah Nawaz",
                  passport: "BN94580",
                  dob: "12 Feb 2020",
                  age: "Adult",
                  child: 3453,
                  visa: 3453,
                  issue: "12 Aug 2023",
                },
                {
                  name: "Bilal Ahmed",
                  passport: "CD09465",
                  dob: "16 Jul 2022",
                  age: "Children",
                  child: 4231,
                  visa: 4231,
                  issue: "15 Sep 2025",
                },
                {
                  name: "Aditi Singh",
                  passport: "EF23561",
                  dob: "28 Mar 2021",
                  age: "Teenager",
                  child: 2156,
                  visa: 2156,
                  issue: "23 Oct 2024",
                },
                {
                  name: "Maria Garcia",
                  passport: "GH31524",
                  dob: "05 Nov 2019",
                  age: "Adult",
                  child: 6332,
                  visa: 6332,
                  issue: "04 May 2022",
                },
                {
                  name: "Javier Rodriguez",
                  passport: "IJ76234",
                  dob: "19 Sep 2023",
                  age: "Elderly",
                  child: 5224,
                  visa: 5224,
                  issue: "18 Dec 2026",
                },
              ].map((pilgrim, idx) => (
                <tr key={idx} className="text-center">
                  <td className="border p-2">{pilgrim.name}</td>
                  <td className="border p-2">{pilgrim.passport}</td>
                  <td className="border p-2">{pilgrim.dob}</td>
                  <td className="border p-2">{pilgrim.age}</td>
                  <td className="border p-2">{pilgrim.child}</td>
                  <td className="border p-2">{pilgrim.visa}</td>
                  <td className="border p-2">{pilgrim.issue}</td>
                  <td className="border p-2">{pilgrim.child}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex text-xs  mt-2 lg:flex-row gap-6">
          {/* Contact Details Box */}
          <div className="w-[50%] border border-gray-400 bg-white rounded-lg p-2">
            <h2 className="text-xl font-bold mb-1 border-b pb-2">
              Contact Details
            </h2>
            <ul className="text-gray-700 space-y-4 border">
              <li className="flex justify-between">
                <span className="font-medium">Makkah / Ahmad Jan</span>
                <span>+92 345 475 4765</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Makkah / Ahmad Jan</span>
                <span>+92 345 475 4765</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Makkah / Ahmad Jan</span>
                <span>+92 345 475 4765</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Makkah / Ahmad Jan</span>
                <span>+92 345 475 4765</span>
              </li>
            </ul>
          </div>

          {/* Instructions Box */}
          <div className="w-[50%] text-xs bg-white border border-gray-400  rounded-lg p-2">
            <h2 className="text-xl font-bold mb-1 border-b pb-2">
              Instructions
            </h2>
            <p className="text-gray-700 text-xs ">
              During Hajj or Umrah, pilgrims should first ensure they are in a
              state of Ihram, which involves wearing specific garments and
              making the intention to perform the pilgrimage. Upon arrival in
              Makkah, the first step is to perform Tawaf, circling the Kaaba
              seven times in a counterclockwise direction. After Tawaf, pilgrims
              should perform Sa'i, walking seven times between the hills of Safa
              and Marwah. It’s important to stay hydrated and maintain a
              respectful demeanor throughout the pilgrimage.
            </p>
          </div>
        </div>
      </div>
      <footer className="bg-[#ED8D02] mt-8 text-white py-[10px]">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4">
          {/* Left Icon */}
          <div className="flex items-center space-x-20 relative">
            {/* Logo Image */}
            <img
              src="/images/navlogoNew.png" // Ensure the image path is correct
              alt="logo"
              className="w-14 absolute left-0 bottom-0 mr-10"
            />
            {/* Text */}
            <h1 className=" ml-16 mb-2 text-gray-900 font-bold">
              Powered By Hijaz
            </h1>{" "}
          </div>

          {/* Right Social Icons */}
          <div className="flex space-x-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl bg-white hover:text-gray-400 p-1 rounded"
            >
              <FaFacebook className="text-[#ED8D02]" size={20} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl bg-white hover:text-gray-400 p-1 rounded"
            >
              <FaXTwitter className="text-[#ED8D02]" size={20} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl bg-white hover:text-gray-400 p-1 rounded"
            >
              <FaInstagram className="text-[#ED8D02]" size={20} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl bg-white hover:text-gray-400 p-1 rounded"
            >
              <FaLinkedin className="text-[#ED8D02]" size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VoucherContent;
