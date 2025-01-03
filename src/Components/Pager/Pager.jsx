import React from 'react';

const PagerItem = ({ isActive, isCompleted, label }) => (
  <div
    className={`flex items-center h-[50px] w-full sm:w-1/3 border border-gray-300 ${
      isActive || isCompleted ? 'bg-primary text-white' : 'bg-gray-100 text-gray-400'
    }`}
  >
    <span className="flex-1 pl-4 text-center text-xs sm:text-sm font-semibold">
      {label}
    </span>
    <div
      className={`inline-block p-[9px] border-r border-b border-gray-300 rotate-[-45deg] h-8 w-8 skew-x-[-3deg] skew-y-[-3deg] translate-x-[17px] ${
        isActive || isCompleted ? 'bg-primary' : 'bg-gray-100'
      }`}
    ></div>
  </div>
);

const Pager = ({ activeStep }) => {
  const steps = ['Set Pickup Location', 'Confirm Order Information', 'Live Track of your Ride'];

  return (
    <div className="w-full flex flex-col sm:flex-row justify-center items-center px-4 ">
      <div className="flex flex-col sm:flex-row items-center justify-center w-full sm:w-4/5 gap-2 sm:gap-0">
        {steps.map((step, index) => (
          <PagerItem
            key={index}
            isActive={index === activeStep}
            isCompleted={index < activeStep}
            label={step}
          />
        ))}
      </div>
    </div>
  );
};

export default Pager;
