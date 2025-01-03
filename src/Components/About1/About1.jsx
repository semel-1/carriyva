import React from "react";
import Container from "../Container/Container";
import ClipPath from "../Assets/About/ClipPath.svg";
import FastPickup from "../Assets/About/FastPickup.svg";
import Map from "../Assets/About/Map.svg";
import Cards from "../Cards/Cards";

const About1 = () => {
  const FRAMES = [
    {
      image: ClipPath,
      label: "Safety guarantee",
      discription:
        "Over 15 years experience guarantee a perfect service, top conditions and best prices.",
    },
    {
      image: FastPickup,
      label: "Fast pickups",
      discription:
        "We offer International taxi, taxi services, tour and travel guide with many more services.",
    },
    {
      image: Map,
      label: "Lots of locations",
      discription:
        "Our pricing is reasonable and we offer special offers as well. our drivers are experienced and smart.",
    },
  ];

  return (

    <Container
      className="pt-40  "
      title="Do you have a question? Feel Free to contact"
      description="If you can’t find what you are looking for or you need to book for bigger groups, please contact us and we will do our best to accommodate your wishes."
    >
      <div className="flex flex-wrap gap-36 justify-center items-center py-10">
        {FRAMES.map(({ image, label, discription }, index) => (
          <Cards
            className="w-[300px] h-[320px] px-4 "
            spanWidth="w-[234px]"
            image={image}
            label={label}
            discription={discription}
          />
        ))}
      </div>
    </Container>
  );
};

export default About1;
