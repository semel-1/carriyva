import React from "react";

const FooterList = ({ title, links }) => (
  <div className="grid gap-4 md:gap-[60px]">
    <h3 className="font-semibold text-2xl md:text-3xl text-gray-800">{title}</h3>
    <ul className="flex flex-col space-y-2 md:space-y-4">
      {links.map((link, index) => (
        <li className="font-normal text-lg md:text-xl text-gray-600" key={index}>
          {link}
        </li>
      ))}
    </ul>
  </div>
);

export default FooterList;
