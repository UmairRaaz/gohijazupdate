const Ziyarat = () => {
  return (
    <div className="max-w-6xl mx-auto my-10 p-6">
      {/* Section Heading */}
      <div className="text-center mb-6">
        <h2 className="text-3xl font-poppins text-[#4A4A4A] font-bold">🕌 Ziarats Makkah & Madina</h2>
        <p className="text-xl font-poppins text-[#4A4A4A] mt-2">
          We provide comfort for our customers, with the various facilities we
          provide that we provide
        </p>
      </div>

      {/* Image Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* First Column: One Image */}
        <div className="relative flex flex-col rounded-xl overflow-hidden">
          <img
            src="/images/ziyarat/makkah.png" // Replace with actual image URL
            alt="Makkah"
            className="object-cover rounded-xl w-full h-full"
          />
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black text-white text-center py-3 flex justify-center">
            <p className="text-xl absolute bottom-3 w-full text-center">Makkah</p>
          </div>
        </div>

        {/* Second Column: Two Images */}
        <div className="flex flex-col gap-8">
          <div className="relative rounded-xl overflow-hidden">
            <img
              src="/images/ziyarat/jabalenoor.png" // Replace with actual image URL
              alt="Masjid Nabawi"
              className="object-cover w-full h-72 rounded-xl"
            />
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black text-white text-center py-3 flex justify-center">
              <p className="text-xl absolute bottom-3 w-full text-center">Jabal al-Noor (Cave of Hira)</p>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden">
            <img
              src="/images/ziyarat/masjidaisha.png" // Replace with actual image URL
              alt="Masjid Aisha"
              className="object-cover w-full h-72 rounded-xl"
            />
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black text-white text-center py-3 flex justify-center">
              <p className="text-xl absolute bottom-3 w-full text-center">Masjid Aisha</p>
            </div>
          </div>
        </div>

        {/* Third Column: Two Images */}
        <div className="flex flex-col gap-8">
          <div className="relative rounded-xl overflow-hidden">
            <img
              src="/images/ziyarat/jablethawr.png" // Replace with actual image URL
              alt="Jabal Thawr"
              className="object-cover w-full h-72 rounded-xl"
            />
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black text-white text-center py-3 flex justify-center">
              <p className="text-xl absolute bottom-3 w-full text-center">Jabal Thawr</p>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden">
            <img
              src="/images/ziyarat/mina.png" // Replace with actual image URL
              alt="Maqam Ibrahim"
              className="object-cover w-full h-72 rounded-xl"
            />
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black text-white text-center py-3 flex justify-center">
              <p className="text-xl absolute bottom-3 w-full text-center">
                Mina, Muzdalifah, and Arafat
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ziyarat;
