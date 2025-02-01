import React from "react";
import trophy from "./../assets/trophy.png";
import shipping from "./../assets/shipping.png";
import guarantee from "./../assets/guarantee.png";
import customerSupport from "./../assets/customerSupport.png";

const Banner = () => {
  return (
    <div>
      <div
        style={{ background: "#FAF3EA" }}
        className="w-full h-[30vh] sm:h-[25vh] md:h-[35vh] lg:h-[45vh] p-2 sm:p-4 flex flex-row flex-wrap justify-around items-center gap-4"
      >
        <div className="flex flex-col md:flex-col lg:flex-row items-center gap-2 sm:gap-4 w-[20%] sm:w-[23%] md:w-[22%]">
          <img
            className="w-[32px] sm:w-[40px] md:w-[44px] lg:w-[48px]"
            src={trophy}
            alt="High Quality"
          />
          <div className="block text-center sm:text-center lg:text-left">
            <h1 className="font-semibold text-sm sm:text-base md:text-lg lg:text-xl font-[Poppins]">
              High Quality
            </h1>
            <h4 className="text-gray-400 text-xs sm:text-sm md:text-sm lg:text-base font-medium font-[Poppins]">
              crafted from top material
            </h4>
          </div>
        </div>

        <div className="flex flex-col md:flex-col lg:flex-row items-center gap-2 sm:gap-4 w-[20%] sm:w-[23%] md:w-[22%]">
          <img
            className="w-[32px] sm:w-[40px] md:w-[44px] lg:w-[48px]"
            src={guarantee}
            alt="Warranty Protection"
          />
          <div className="block text-center sm:text-center lg:text-left">
            <h1 className="font-semibold text-sm sm:text-base md:text-lg lg:text-xl font-[Poppins]">
              Warranty Protection
            </h1>
            <h4 className="text-gray-400 text-xs sm:text-sm md:text-sm lg:text-base font-medium font-[Poppins]">
              Over 2 years
            </h4>
          </div>
        </div>

        <div className="flex flex-col md:flex-col lg:flex-row items-center gap-2 sm:gap-4 w-[20%] sm:w-[23%] md:w-[22%]">
          <img
            className="w-[32px] sm:w-[40px] md:w-[44px] lg:w-[48px]"
            src={shipping}
            alt="Free Shipping"
          />
          <div className="block text-center sm:text-center lg:text-left">
            <h1 className="font-semibold text-sm sm:text-base md:text-lg lg:text-xl font-[Poppins]">
              Free Shipping
            </h1>
            <h4 className="text-gray-400 text-xs sm:text-sm md:text-sm lg:text-base font-medium font-[Poppins]">
              Order over 150 $
            </h4>
          </div>
        </div>

        <div className="flex flex-col md:flex-col lg:flex-row items-center gap-2 sm:gap-4 w-[20%] sm:w-[23%] md:w-[22%]">
          <img
            className="w-[32px] sm:w-[40px] md:w-[44px] lg:w-[48px]"
            src={customerSupport}
            alt="24/7 Support"
          />
          <div className="block text-center sm:text-center lg:text-left">
            <h1 className="font-semibold text-sm sm:text-base md:text-lg lg:text-xl font-[Poppins]">
              24/7 Support
            </h1>
            <h4 className="text-gray-400 text-xs sm:text-sm md:text-sm lg:text-base font-medium font-[Poppins]">
              Dedicated support
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
