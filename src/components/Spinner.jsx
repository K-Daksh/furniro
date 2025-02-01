import React from "react";

const Spinner = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white bg-opacity-80 z-50">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#B88E2F]"></div>
    </div>
  );
};

export default Spinner;
