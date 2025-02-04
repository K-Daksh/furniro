import React from "react";

const Spinner = (props) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-white bg-opacity-80 z-50">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#B88E2F]"></div>
      {props?.home ? (
        <p className="mt-4 text-sm text-gray-700 font-['Poppins'] w-[80%] text-center">
          Note: The backend is hosted on Render and might take a few seconds to
          spin up. Please be patient.
        </p>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default Spinner;
