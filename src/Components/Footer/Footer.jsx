import React from "react";
import DownloadButtons from "../DownloadButton/DownloadButton";
import SocialIcons from "./SocialIcons/SocialIcons";
import FooterList from "./FooterList/FooterList";

const Footer = () => {
  const footerData = [
    {
      title: "Services",
      links: [
        "Address Pickup",
        "Airport Transfer",
        "Long Distance",
        "Schedule Ride",
        "Taxi Tours",
      ],
    },
    {
      title: "About Us",
      links: ["Taxi Order", "Our App", "Pricing", "Career", "Contact Us"],
    },
    {
      title: "Driver",
      links: ["Become a Driver", "Conditions", "Help", "Insurance", "Earnings"],
    },
  ];
  return (
    <footer className="bg-gray-200 py-12 px-6 md:px-20 lg:px-24">
      <div className="container mx-auto flex flex-col space-y-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-48 mb-10 md:mb-20">
          {/* Logo + App Links */}
          <div className="flex flex-col gap-8 md:gap-[136px]">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
              Carryiva
            </h1>
            <DownloadButtons className="flex flex-col gap-4 md:gap-8"/>
          </div>

          {/* Footer Links */}
          <div className="flex flex-wrap gap-8 justify-between w-full">
            {footerData.map((section, index) => (
              <FooterList
                key={index}
                title={section.title}
                links={section.links}
              />
            ))}
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-gray-300"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-semibold text-lg md:text-2xl text-gray-700"> 
            Carryiva© All Rights Reserved.
          </p>
          <SocialIcons />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
