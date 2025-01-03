import React from "react";

const Map = () => {
  return (
    <div className="w-full h-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.513402522835!2d-79.3887926845011!3d43.64524197912156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d6b8b8b8b8%3A0x8b8b8b8b8b8b8b8!2sEntertainment%20District%2C%20Toronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sus!4v1633024800000!5m2!1sen!2sus"
        width="100%"
        height="100%"
        allowFullScreen=""
        loading="lazy"
        title="map"
        className="  rounded-2xl"
      ></iframe>
    </div>
  );
};

export default Map;
