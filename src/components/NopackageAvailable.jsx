const NopackageAvailable = ({text}) => {
  return (
    <div className="flex mt-10 md:mt-0 items-center justify-center ">
      <p className="text-xl text-gray-700 border border-gray-300 px-6 py-4 rounded-lg">
       {text ||  "Your search returned no packages."}
      </p>
    </div>
  );
};

export default NopackageAvailable;
