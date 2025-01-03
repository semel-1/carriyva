import React, { useState } from "react";
import PickupLocation from "../Components/PickupLocation/PickupLocation";
import Pager from "../Components/Pager/Pager";
import OrderInfo from "../Components/OrderInfo/OrderInfo";
import LiveTrack from "../Components/LiveTrack/LiveTrack";

const OrderTaxi = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNextStep = () => {
    console.log("Next step clicked");
    setActiveStep((prevStep) => Math.min(prevStep + 1, 2));
  };

  const handlePreviousStep = () => {
    console.log("Previous step clicked");
    setActiveStep((prevStep) => Math.max(prevStep - 1, 0));
  };

  const goToLiveTrack = () => {
    console.log("Go to LiveTrack clicked");
    setActiveStep(2);
  };

  return (
    <div className="pt-32 lg:pt-[272px] px-4 sm:px-16 lg:px-32 pb-8 sm:pb-16 lg:pb-24 w-full flex flex-col gap-8 sm:gap-16 lg:gap-24">
      <Pager activeStep={activeStep} />
      {activeStep === 0 && <PickupLocation onSubmit={handleNextStep} />}
      {activeStep === 1 && (
        <OrderInfo onNext={goToLiveTrack} onPrevious={handlePreviousStep} />
      )}
      {activeStep === 2 && <LiveTrack onPrevious={handlePreviousStep} />}
    </div>
  );
};

export default OrderTaxi;
