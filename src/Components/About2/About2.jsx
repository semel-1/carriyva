import React from "react";
import Taxi1 from "../Assets/About/Taxi1.webp";
import Taxi2 from "../Assets/About/Taxi2.webp";
import Button from "../Button/Button";

const About2 = () => {
  const topSectionContent = {
    title: "Your reliable assistant",
    description: `We understand our clients’ requirements for flexibility when booking our 
      driven limousine hire, such as when a meeting has been extended or an event postponed.`,
    quote: `"All transfers are conducted by suits uniformed chauffeurs, who 
      operate on a meet and greet basis."`,
    footer: `— Ted Mckinney,`,
    footerPosition: "Executive Director",
  };

  const bottomSectionContent = {
    title: "Call a taxi in any convenient way",
    description: `Order Pick up taxi by calling the number `,
    highlightedText: "1134",
    footer: ` and we will call you back. Either by filling out the form, or by using our application.`,
  };

  return (
    <div className="px-6 md:px-20 lg:px-40 xl:px-60 py-12 md:py-24 flex flex-col gap-12 md:gap-24">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between w-full gap-8 md:gap-0">
        <div className="md:w-1/2">
          <img
            src={Taxi1}
            alt="Taxi 1"
            width={600} 
            height={484}
            className="w-auto h-auto max-h-[484px] rounded-2xl"
          />
        </div>
        <div className="md:w-1/2 flex flex-col justify-between space-y-4 md:space-y-8">
          <h3 className="font-semibold text-2xl md:text-4xl text-100">
            {topSectionContent.title}
          </h3>
          <p className="font-normal text-base md:text-xl text-75">
            {topSectionContent.description}
          </p>
          <p className="font-normal text-base md:text-xl text-75 italic">
            {topSectionContent.quote}
          </p>
          <p className="font-semibold italic text-base md:text-xl text-100">
            {topSectionContent.footer}
            <span className="font-normal text-base md:text-xl text-100">
              {" "}
              {topSectionContent.footerPosition}
            </span>
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between w-full gap-8 md:gap-32">
        <div className="md:w-1/2 flex flex-col justify-between space-y-4 md:space-y-8">
          <h3 className="font-semibold text-2xl md:text-4xl text-100">
            {bottomSectionContent.title}
          </h3>
          <p className="font-normal text-base md:text-xl text-75">
            {bottomSectionContent.description}
            <span className="font-semibold text-primary">
              {bottomSectionContent.highlightedText}
            </span>
            {bottomSectionContent.footer}
          </p>
          <Button text="Order Taxi Now" />
        </div>
        <div className="md:w-1/2">
          <img
            src={Taxi2}
            alt="Taxi 2"
            width={600} 
            height={484}
            className="w-auto h-auto rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default About2;
