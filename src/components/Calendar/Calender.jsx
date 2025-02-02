import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./calendar.css"; // Importing additional styles

const bookingData = [
  { date: "2 Feb 2025", bookings: "4" },
  { date: "5 Feb 2025", bookings: "3" },
  { date: "8 Feb 2025", bookings: "4" },
  { date: "12 Feb 2025", bookings: "4" },
  { date: "15 Feb 2025", bookings: "6" },
  { date: "18 Feb 2025", bookings: "2" },
  { date: "20 Feb 2025", bookings: "5" },
  { date: "25 Feb 2025", bookings: "7" },
  { date: "28 Feb 2025", bookings: "3" },
];

const CalendarApp = () => {
  const formatDate = (date) => {
    const day = date.getDate();
    const month = date.toLocaleString("en-GB", { month: "short" });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  const tileContent = ({ date }) => {
    const formattedDate = formatDate(date);
    const booking = bookingData.find((item) => item.date === formattedDate);
    if (booking) {
      return (
        <div 
        
        className="border border-blue-500 py-1 px-2 text-red-500 text-[10px] font-bold rounded-full">
          {booking.bookings}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="flex flex-col items-center  justify-center min-h-screen">
      <div className="w-full max-w-4xl p-6 flex items-center justify-center flex-col bg-white rounded-lg">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Booking Calendar
        </h1>
        <Calendar
          tileContent={tileContent}
          tileClassName={({ date }) => {
            const formattedDate = formatDate(date);
            return bookingData.some((item) => item.date === formattedDate)
              ? "highlight-tile"
              : "";
          }}
        />
      </div>
    </div>
  );
};

export default CalendarApp;
