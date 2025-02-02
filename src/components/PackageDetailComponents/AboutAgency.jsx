import { capitalizeEachWord } from "../../utils/capitalizeEachWord";

const AgencyDetails = ({ agency_details }) => {
  const {
    additional_phone = "",
    address = "",
    email = "",
    name = "",
    phone = "",
    profile_pic = "",
    whatsapp_phone = "",
  } = agency_details || {};
  console.log("agency-details", agency_details.additional_phone);
  return (
    <div className="border font-poppins rounded-xl text-[#454545] px-4  my-4 border-gray-400">
      <div className="flex items-start md:space-x-6 space-x-2">
        {/* Left: Agency Images */}
        <div className="w-[30%] py-2 boder">
          <img
            src={
              profile_pic ||
              "https://cdn-icons-png.flaticon.com/512/8136/8136031.png"
            }
            alt="Agency Logo"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Right: Agency Details */}
        <div className="space-y-2 w-[70%] py-2 text-[#4A4A4A]">
          {/* Agency Name */}
          <div className="text-[#ED8D02] font-bold text-2xl">
            <span>{capitalizeEachWord(name) || "N/A"}</span>
          </div>

          {/* Phone */}
          <div className="flex items-center space-x-2 md:space-x-3">
            <img src="/icons/agency-phone.png" alt="phone" />
            <span className="text-md">{phone || "N/A"}</span>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-2 md:space-x-3">
            <img src="/icons/agency-email.png" alt="email" />
            <span className="text-md break-words overflow-hidden text-ellipsis max-w-full">
              {email || "N/A"}
            </span>
          </div>

          {/* Address */}
          <div className="flex items-start space-x-2 md:space-x-3">
            <img src="/icons/agency-location.png" alt="location" />
            <span className="text-md">
              {capitalizeEachWord(address) || "N/A"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgencyDetails;
