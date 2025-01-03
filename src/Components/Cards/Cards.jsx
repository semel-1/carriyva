import React from "react";

const Cards = (props) => {
  return (
    <div
      key={props.index}
      className={`bg-white w-[280px] ${props.className} flex flex-col items-center justify-around border border-50 rounded-2xl shadow-lg`}
    >
      {/* Center the image */}
      <div className="flex items-center justify-center w-full h-[120px]">
        <img src={props.image} alt={props.label} className="w-40 h-[80px]" />
      </div>
      <h3 className="font-semibold text-2xl text-100 text-center">
        {props.label}
      </h3>
      <span
        className={`text-center ${props.spanWidth} font-normal text-base text-75`}
      >
        {props.discription}
      </span>
      {props.speed && (
        <h2 className="text-primary text-center font-bold text-3xl">
          {props.price}
          <sub className="font-normal">/km</sub>
        </h2>
      )}
    </div>
  );
};

export default Cards;
