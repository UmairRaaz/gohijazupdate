const NoRecordsFound = () => {
    return (
      <div className="flex flex-col border border-gray-400 rounded-xl max-w-2xl mx-auto items-center justify-center  p-4">
        {/* Image */}
        <img
          src="/newImage/nofound.png"
          alt="No Records Found"
          className="w-32 mb-6   object-cover"
        />
        
        {/* Message */}
        <div className="text-center max-w-4xl px-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
            No Records Found
          </h2>
          <p className="text-gray-600 text-lg md:text-xl mb-4">
            We couldn't find any records matching your search criteria. This could be because:
          </p>
          <ul className=" text-gray-600 flex items-center justify-center flex-col">
            <li className="flex items-start gap-x-2"> <span className="mt-2"><img src="/newIcons/nofound.png"/></span>The record might have been deleted</li>
            <li className="flex items-start gap-x-2"> <span className="mt-2"><img src="/newIcons/nofound.png"/></span>The search criteria might be too specific</li>
            <li className="flex items-start gap-x-2"> <span className="mt-2"><img src="/newIcons/nofound.png"/></span>There might be a typo in your search</li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default NoRecordsFound;
  