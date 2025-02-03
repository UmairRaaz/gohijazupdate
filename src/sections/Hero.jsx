import SearchBar from "../components/SearchBar";

const Hero = () => {
  return (
    <div className="relative min-h-screen py-20  md:pt-10 flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        src="/images/bgvideo.mp4"
        autoPlay
        loop
        muted
      ></video>

      {/* Black Gradient Overlay */}
      <div className="absolute  top-0 left-0 w-full h-full bg-gradient-to-b from-black to-transparent z-0"></div>

      {/* Content */}
      <div className="flex md:w-[80%]  flex-col text-white md:mt-20 mt-10 text-center z-10 px-6 sm:px-8 md:px-10">
        <img
          src="/newImage/heroheading.png"
          alt="image"
          className="w-full max-w-[30rem] sm:max-w-[24rem] md:max-w-[40rem] lg:max-w-[46rem] mx-auto"
        />
        {/* <h1 className="uppercase text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-kufam text-[#CE9137] mt-4">
          Hajj <span className="text-white"> &</span> Umrah
        </h1>
        <p className="mt-2 font-poppins text-sm sm:text-base md:text-lg text-[#FFFFFF]">
          From Intentions to Completion – Your Ultimate Pilgrimage Partner
        </p> */}
        <SearchBar />
      </div>
    </div>
  );
};

export default Hero;
