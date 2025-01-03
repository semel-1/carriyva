import React from "react";
import Call from "../Assets/Call2.svg";
import Location from "../Assets/Location.svg";
import AlternateEmailIcon from "../Assets/Email.svg";
import Container from "../Container/Container";

const FRAMES = [
  {
    image: AlternateEmailIcon,
    label: "Email us",
    description: (
      <>
        Email us for general queries <br /> and partnership <br /> opportunities
      </>
    ),
    info: "info@example.com",
  },
  {
    image: Call,
    label: "Call us",
    description: "We are available 24h / 7.",
    info: (
      <>
        +1 000 10 87 000 <br /> +1 000 11 64 001
      </>
    ),
  },
  {
    image: Location,
    label: "Head office",
    description: "178 West 27th Street, Suite 527 New York NY 10012.",
    info: "Mon – Sat: 9am – 5pm",
  },
];

const ContactOption = () => {
  return (
    <Container
    className="lg:pt-20"
    title={
      <h3 className="text-center text-2xl md:text-4xl font-bold text-100">
        Do you have a question?
        <br />
        <span className="text-primary">Feel Free </span> to contact
      </h3>
    }
    description={
      <p className="w-full md:w-[656px] text-center mx-auto text-75 font-normal text-sm md:text-base">
        If you can’t find what you are looking for or you need to book for bigger
        groups, please contact us and we will do our best to accommodate your
        wishes.
      </p>
    }
  >
    <div className="flex flex-wrap gap-6 md:gap-32 justify-center md:justify-evenly items-center">
      {FRAMES.map(({ image, label, description, info }, index) => (
        <div
          key={index}
          className="bg-white w-[300px] h-[320px] flex flex-col items-center p-6 md:p-8 gap-6 md:gap-8 border border-50 rounded-2xl"
        >
          <img src={image} alt={`Icon for ${label}`} className="h-8 md:h-9" />
          <h3 className="font-semibold text-xl md:text-2xl text-100">{label}</h3>
          <p className="font-normal text-sm md:text-base text-75 text-center">
            {description}
          </p>
          <p className="font-normal text-sm md:text-base text-75 text-center">{info}</p>
        </div>
      ))}
    </div>
  </Container>
  
  );
};

export default ContactOption;
