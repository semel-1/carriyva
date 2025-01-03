import React from "react";
import Hero from "../Components/Hero/Hero";
import Container from "../Components/Container/Container";
import Services from "../Components/Services/Services";
import Download from "../Components/Download/Download";
import Cars from "../Components/Cars/Cars";
import Join from "../Components/Join/Join";
import Call from "../Components/Call/Call";
import Director from "../Components/Director/Director";

const Home = () => {
  

  return (
    <div className="bg-2 font-poppins ">
      <Hero />
      <Container title="How do we stand out from others" className="py-[100px] px-[53px]">
        <Services />
      </Container>

      <Download />

      <Cars/>

      <Join />

      <Call />

      <Director />
    </div>
  );
};

export default Home;
