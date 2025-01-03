import React from "react";
import Container from "../Container/Container";
import CheckParagraph from "../Checkparagraph/Checkparagraph";
import Heading from "../Heading/Heading";
import Button from "../Button/Button";
import Input from "../Form/Input/Input";
import Taxi from "../Assets/About/Taxi1.webp";
import Taxi_200 from "../Assets/About/Taxi1_200.webp";
import PersonIcon from "@mui/icons-material/Person";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PhoneIcon from "@mui/icons-material/Phone";

const qualifications = [
  {
    boldText: "Quick Thinking",
    text: "to be sure you know the quickest way of driving.",
  },
  {
    boldText: "Communicative",
    text: "for customers to be certain that we are a reliable company.",
  },
  {
    boldText: "Stress Resistant",
    text: "because sometimes clients can be quite unpleasant.",
  },
];

const Career = () => {
  return (
    <Container>
      <div className="px-5 md:px-16 lg:px-60 py-8 md:py-16 flex flex-col gap-10 md:gap-20">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-28">
          {/* Left Image */}
          <div className="w-full lg:w-1/2">
            <img
              src={Taxi}
              srcSet={`${Taxi_200} 600w, ${Taxi} 1200w`}
              sizes="(max-width: 640px) 100vw, 50vw"
              alt="Taxi"
              className="w-full h-auto lg:h-[484px] rounded-2xl"
              loading="lazy"
            />
          </div>
          {/* Right Content */}
          <div className="w-full lg:w-[450px] flex flex-col gap-4">
            <Heading heading="What do you need to work with us" />
            <p className="font-normal text-base md:text-xl text-gray-600">
              Our company has built a strong and solid reputation over the past
              few years. We have no competitors on the market.
            </p>
            <div className="flex flex-col gap-3">
              {qualifications.map((item, index) => (
                <CheckParagraph
                  key={index}
                  BoldText={item.boldText}
                  Text={item.text}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:gap-36">
          {/* Left Content */}
          <div className="w-full lg:w-1/3 flex flex-col gap-4 lg:gap-7 pb-8 lg:pb-[120px]">
            <Heading heading="Start to benefit from your car" />
            <p className="font-normal text-base md:text-xl text-gray-600">
              Fill out the cooperation application. Our employee will contact
              you as soon as the application is processed.
            </p>
            <Button text="Order Taxi Now" />
          </div>

          {/* Right Form */}
          <div className="w-full lg:w-[400px]">
            <form
              action="#"
              method="post"
              className="py-8 px-6 border border-gray-200 rounded-2xl flex flex-col gap-6 bg-gray-50"
            >
              <Input
                type="text"
                name="userName"
                id="userName"
                placeholder="Name"
                icon={PersonIcon}
                required
              />
              <Input
                type="tel"
                name="phone"
                id="phone"
                placeholder="Phone Number"
                icon={PhoneIcon}
                required
              />
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                icon={AlternateEmailIcon}
                required
              />
              <p className="font-semibold text-xs md:text-sm text-gray-400">
                By sending this form, I confirm that I have read and accept the
                Privacy Policy.
              </p>
              <div className="flex justify-center">
                <Button text="Submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Career;
