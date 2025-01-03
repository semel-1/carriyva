import React from "react";
import { Link } from "react-router-dom";
import Heading from "../Heading/Heading";

const Join = () => {
  return (
    <div className="text-center p-6 md:p-24 flex flex-col items-center gap-12 md:gap-20">
      <div className="grid gap-4 md:gap-8">
        <Heading heading="Join our team and make a difference today" />
        <p className="font-normal text-base md:text-lg max-w-full md:max-w-[950px]">
          In cooperation with our Transfer Service Network, we can provide all sorts of Transfers.
          Write to our team at <a href="mailto:info@demolink.org" className="text-primary hover:underline">info@demolink.org</a> and you will be given feedback.
        </p>
      </div>
      <div>
          <div className=" w-full flex justify-center px-4">
                <Link to="/career">
                  <button
                    className=" w-56 h-12 sm:h-16 flex items-center justify-center bg-transparent border-4 border-dashed border-primary rounded-lg text-100  font-semibold text-lg sm:text-2xl transition-transform transform hover:scale-105 focus:outline-none"
                    aria-label="Request a taxi now"
                  >
                    Become a Driver
                  </button>
                </Link>
              </div>
       
      </div>
    </div>
  );
};

export default Join;
