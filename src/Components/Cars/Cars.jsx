import React from "react";
import Econom from "../Assets/Cars/Econom.svg";
import Standart from "../Assets/Cars/Standart.svg";
import Business from "../Assets/Cars/Business.svg";
import SUV from "../Assets/Cars/SUV.svg";
import Container from "../Container/Container";
import Cards from "../Cards/Cards";

const Cars = () => {
  const FRAMES = [
    {
      image: Econom,
      label: "Econom",
      discription: "Arranging for transportation immediately",
      price: "$1.5",
    },
    {
      image: Standart,
      label: "Standart",
      discription: "Standard Sedan for a Drive around the City at your service",
      price: "$2.5",
    },
    {
      image: Business,
      label: "Business",
      discription: "Preventing a Stressful and disheartening Journey",
      price: "$3.5",
    },
    {
      image: SUV,
      label: "SUV",
      discription: "We Track Your Flight to Determine the Time of your Flight",
      price: "$5.5",
    },
  ];
  return (
    <Container title="Car classes and rates" className="py-24">
      <div className="flex flex-wrap gap-6 justify-center items-center py-10">
        {FRAMES.map(({ image, label, discription, price }, index) => (
          <Cards
            key={label} // Using `label` as a unique key
            className="h-96 px-6 py-8 grid gap-5"
            SpanWidth="w-60"
            speed
            image={image}
            label={label}
            discription={discription}
            price={price}
          />
        ))}
      </div>
    </Container>
  );
};

export default Cars;
