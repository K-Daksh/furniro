import React from "react";

const Footer = () => {
  return (
    <div className="px-4 md:px-[8%] py-8 bg-white text-center sm:text-start">
      <div className="flex flex-col md:flex-row justify-around items-center sm:items-start gap-8 md:gap-4">
        <div className="w-full md:w-[30%]">
          <h1 className="text-center sm:text-start text-xl md:text-2xl font-bold font-['Poppins'] py-4 md:py-7">
            Funior.
          </h1>
          <p className="text-center sm:text-start font-['Poppins'] text-base font-base text-gray-400">
            400 University Drive Suite 200 Coral Gables,
          </p>
          <p className="text-center sm:text-start font-['Poppins'] text-base font-base text-gray-400">
            FL 33134 USA
          </p>
        </div>
        <div className="w-full md:w-[70%] flex flex-col md:flex-row justify-around items-center sm:items-start gap-8 md:gap-4">
          <div className="w-[50%] flex flex-row justify-around items-start">
            <div className="w-1/2">
              <h4 className="text-gray-400 text-base font-medium py-7 font-['Poppins']">
                Links
              </h4>
              <h4 className="pt-3 sm:pt-10 text-sm font-semibold font-['Poppins']">
                Home
              </h4>
              <h4 className="pt-3 sm:pt-10 text-sm font-semibold font-['Poppins']">
                Shop
              </h4>
              <h4 className="pt-3 sm:pt-10 text-sm font-semibold font-['Poppins']">
                About
              </h4>
              <h4 className="pt-3 sm:pt-10 text-sm font-semibold font-['Poppins']">
                Contact
              </h4>
            </div>
            <div className="w-1/2">
              <h4 className="text-gray-400 text-base font-medium py-7 font-['Poppins']">
                Help
              </h4>
              <h4 className="pt-3 sm:pt-10 text-sm font-semibold font-['Poppins']">
                Payment options
              </h4>
              <h4 className="pt-3 sm:pt-10 text-sm font-semibold font-['Poppins']">
                Returns
              </h4>
              <h4 className="pt-3 sm:pt-10 text-sm font-semibold font-['Poppins']">
                Privacy Policies
              </h4>
            </div>
          </div>
          <div>
            <h4 className="text-gray-400 text-base font-medium py-7 font-['Poppins'] sm:text-start text-center">
              Newsletter
            </h4>
            <form action="">
              <input
                className="p-1 border-b-2 mr-2 text-sm"
                type="email"
                placeholder="Enter Your Email Address"
              />
              <button className="ml-2 p-1 border-b-2 text-base font-semibold">
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="h-[1.5px] w-full bg-gray-200 my-8"></div>
      <div>
        <p className="text-center sm:text-start py-1 sm:py-5 text-gray-800 font-['Poppins'] text-base">
          2023 furino. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
