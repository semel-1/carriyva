import React from "react";
import Quotes from "../Assets/Quotes.svg";
import Person from "../Assets/person.webp";

const Director = () => {
  return (
    <div className="flex flex-col items-center justify-center mx-auto px-6 md:px-20 py-10 md:py-20">
      {/* Quotes Icon */}
      <img src={Quotes} alt="Quotes Mark" className="w-6 h-8 md:w-9 md:h-12 mb-4 md:mb-6" />

      {/* Quote Text */}
      <p className="text-center text-base md:text-xl font-light text-gray-700 italic leading-relaxed max-w-xl md:max-w-3xl mb-4 md:mb-6">
        “We are large enough to address your transportation needs.
        <br />
        You can contact us for a service and be assured you will receive a response.
        <br />
        We guarantee best prices and excellent service.
        <br />
        Booking a Transfer has never been so easy.”
      </p>

      {/* Avatar and Director Info */}
      <div className="flex items-center space-x-2 md:space-x-4">
        <img
          src={Person}
          alt="Director"
          className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover"
        />
        <h3 className="font-bold text-lg md:text-2xl text-gray-900">
          — Angila N., <span className="text-gray-700 font-normal text-lg md:text-2xl">Executive Director</span>
        </h3>
      </div>
    </div>
  );
};

export default Director;
