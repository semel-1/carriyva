import React from "react";
import Map from "../Map/Map";
import InfoField from "../OrderInfo/InfoField/InfoField";

const LiveTrack = ({ onPrevious }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 justify-center items-center lg:items-start px-4 sm:px-8 lg:px-0 h-full">
      <div className="w-full lg:w-1/2 h-[450px] ">
        <Map />
      </div>
      <div className="w-full h-[450px] lg:w-[345px] rounded-2xl border border-gray-300 px-6 sm:px-7 py-10 sm:py-14 flex flex-col gap-6">
        <InfoField label="Driver Name" value="Abdullah" />
        <InfoField label="Driver Number" value="0993456789" />
        <InfoField label="Car Plate Number" value="072631" />
        <InfoField label="ETA" value="5 min" />
      </div>
    </div>
  );
};

export default LiveTrack;
