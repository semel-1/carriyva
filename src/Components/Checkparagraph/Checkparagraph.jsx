import React from 'react';
import VectorIcon from '../Assets/Vector.svg'; // Replace with the correct path

const Checkparagraph = (props) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center">
      {/* SVG Image */}
      <img
        src={VectorIcon}
        alt="Check Icon"
        className=" text-primary mr-2 md:mr-5 mt-2 w-5 h-5 md:w-6 md:h-6" // Adjusted styling for responsiveness
      />
      <p className="font-bold text-gray-900 text-base md:text-lg w-full md:w-auto">
        {props.BoldText}{" "}
        <span className="font-normal text-gray-700 text-base md:text-lg">{props.Text}</span>
      </p>
    </div>
  );
};

export default Checkparagraph;
