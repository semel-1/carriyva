import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative 2xl:bg-CityBG lg:bg-CityBG_1024 md:bg-CityBG_768  bg-CityBG_320  bg-cover bg-center h-[500px] lg:h-[980px] w-full flex items-center justify-center">
      {/* Text Section */}
      <div className="text-center px-4 md:px-0">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold leading-tight text-5">
          Fast and convenient
        </h2>
        <h1 className="leading-tight font-bold text-3xl sm:text-5xl md:text-7xl tracking-tight text-primary mb-4">
          Everywhere, Anytime
        </h1>
        <p className="text-base sm:text-lg md:text-xl font-medium text-5">
          Enjoy a comfortable trip, order a taxi online
        </p>
      </div>

      {/* Button Section */}
      <div className="absolute top-[380px] lg:top-[660px] w-full flex justify-center px-4">
        <Link to="/orderTaxi">
          <button
            className="w-48 sm:w-56 h-12 sm:h-16 flex items-center justify-center bg-transparent border-4 border-dashed border-primary rounded-lg text-white  font-semibold text-lg sm:text-2xl transition-transform transform hover:scale-105 focus:outline-none"
            aria-label="Request a taxi now"
          >
            Request Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
