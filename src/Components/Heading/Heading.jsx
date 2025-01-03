import React from "react";

const Heading = (props) => {
  return (
    <div>
      <h2 className="font-semibold text-100 text-2xl md:text-3xl lg:text-4xl">
        {props.heading}
      </h2>
    </div>
  );
};

export default Heading;
