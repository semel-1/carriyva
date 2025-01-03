import React from "react";
import Heading from "../Heading/Heading";
import InfoField from "./InfoField/InfoField";

const Button = ({ text, type = "button", onClick, className }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-primary text-white w-40 h-12 rounded-lg text-medium font-bold ${className}`}
    >
      {text}
    </button>
  );
};

const OrderInfo = ({ onNext, onPrevious }) => {
  return (
    <div>
    <div className="border rounded-2xl p-6 sm:p-10 border-50 flex flex-col gap-8 sm:gap-14">
      {/* Heading Section */}
      <div className="flex justify-center w-full">
        <Heading heading="Order Information" />
      </div>
  
      {/* Info Fields */}
      <div className="flex flex-col gap-6 sm:gap-14 px-4 sm:px-8 lg:px-32">
        <div className="flex flex-wrap justify-between gap-4 sm:gap-8">
          <div className="flex-1 min-w-[150px] sm:min-w-[200px]">
            <InfoField label="User Name" value="The Name of user" />
          </div>
          <div className="flex-1 min-w-[150px] sm:min-w-[200px]">
            <InfoField label="Phone Number" value="Phone of user" />
          </div>
          <div className="flex-1 min-w-[150px] sm:min-w-[200px]">
            <InfoField label="Request Date" value="16/1/2025" />
          </div>
  
          <div className="flex-1 min-w-[150px] sm:min-w-[200px]">
            <InfoField label="Car Type" value="Standard" />
          </div>
          <div className="flex-1 min-w-[150px] sm:min-w-[200px]">
            <InfoField label="Payment" value="$15" />
          </div>
          <div className="flex-1 min-w-[150px] sm:min-w-[200px]">
            <InfoField label="Estimated Time for Journey" value="10 min" />
          </div>
        </div>
      </div>
  
      {/* Buttons */}
      <div className="flex flex-wrap justify-between gap-4 px-4 sm:px-8 lg:px-32">
        <Button text="Accept" onClick={onNext} />
        <Button text="Decline" onClick={() => console.log("Order Declined")} />
        <Button
          text="Previous"
          className="bg-secondary"
          onClick={onPrevious}
        />
      </div>
    </div>
  </div>
  
  );
};

export default OrderInfo;
