import React from "react";
// Import images from Assets folder
import AddressPickup from "../Assets/Services/AddressPickup.svg";
import Airplane from "../Assets/Services/Airplane.svg";
import LongDistance from "../Assets/Services/LongDistance.svg";
import TaxiTours from "../Assets/Services/TaxiTours.svg";

const Services = () => {
  const FRAMES = [
    { image: AddressPickup, label: "Address Pickup" },
    { image: Airplane, label: "Airport Transfer" },
    { image: LongDistance, label: "Long Distance" },
    { image: TaxiTours, label: "Taxi Tours" },
  ];

  return (
    <div className="flex flex-wrap gap-8 justify-center items-center py-10">
      {FRAMES.map(({ image, label }, index) => (
        <div
          key={index}
          className="bg-white w-[275px] h-72 px-6 py-8 flex flex-col items-center justify-around border border-50 rounded-2xl shadow-lg"
        >
          <img src={image} alt={label} className="w-[80px] h-[80px]" />
          <p className="font-semibold text-2xl text-100">{label}</p>
        </div>
      ))}
    </div>
  );
};

export default Services;
