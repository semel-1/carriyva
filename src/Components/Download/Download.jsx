import React from "react";
import MobileImage from "../Assets/MobileImage.webp";
import MobileImage_320 from "../Assets/MobileImage_320.webp";
import MobileImage_768 from "../Assets/MobileImage_768.webp";

import Checkparagraph from "../Checkparagraph/Checkparagraph";
import Heading from "../Heading/Heading";
import DownloadButton from "../DownloadButton/DownloadButton";

// Constants for reusable styles
const IMAGE_CONTAINER_STYLES = `
  flex justify-center items-center max-w-sm
`;

const TEXT_CONTAINER_STYLES = `
  flex flex-col justify-between gap-12 w-full max-w-[467px] py-10
`;

const Download = () => {
  return (
    <div className="flex flex-col md:flex-row justify-evenly items-center py-24 px-6 md:px-20 gap-12">
      {/* Image Section */}
      <div className={IMAGE_CONTAINER_STYLES}>
        <img
          src={MobileImage} // Default fallback image
          srcSet={`${MobileImage_320} 320w, ${MobileImage_768} 768w, ${MobileImage} 1200w`}
          sizes="(max-width: 320px) 320px, (max-width: 768px) 768px, 100vw"
          alt="Preview of the app on a mobile device"
          loading="lazy"
          className="w-full h-full object-contain rounded-[60px] shadow-[0px_21px_47px_0px_rgba(0,0,0,0.1),0px_341px_136px_0px_rgba(0,0,0,0.01),0px_533px_149px_0px_rgba(0,0,0,0)]"
        />
      </div>

      {/* Text and Features Section */}
      <div className={TEXT_CONTAINER_STYLES}>
        {/* Heading Section */}
        <div className="grid gap-4">
          <Heading heading="Get more benefits, download the App" />
          <p className="font-normal text-xl md:text-2xl text-gray-600">
            Order through the application and get a{" "}
            <span className="font-semibold text-primary">15% discount</span>.
          </p>
        </div>

        {/* Features Section */}
        <div className="grid gap-8">
          <Checkparagraph
            BoldText="Fast booking"
            Text="Driver will be awaiting your arrival and will transport you directly to your accommodation."
          />
          <Checkparagraph
            BoldText="Easy to use"
            Text="You just have to lean back and enjoy the ride."
          />
          <Checkparagraph
            BoldText="Bonuses for rides"
            Text="Discounted rates ensure you get the best value transfers."
          />
        </div>

        {/* Buttons Section */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          <DownloadButton />
        </div>
      </div>
    </div>
  );
};

export default Download;
