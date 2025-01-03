import React from "react";
import { useLocation } from "react-router-dom";
import Form from "../Components/Form/Form";

const FormSection = ({ isRegister }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full lg:w-1/2 px-8 py-16 bg-cityMap bg-cover bg-center lg:bg-none">
      <h1 className="mb-12 text-5xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
        Carryiva
      </h1>
      <Form isRegister={isRegister} />
    </div>
  );
};

const BackgroundSection = () => {
  return (
    <div className="hidden sm:block sm:w-1/2 h-screen relative">
      <div
        className="absolute inset-0 bg-cityMap bg-cover bg-center"
        aria-hidden="true"
      ></div>
    </div>
  );
};

const LoginSignup = () => {
  const location = useLocation();
  const isRegister = location.pathname === "/register";

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <FormSection isRegister={isRegister} />
      <BackgroundSection />
    </div>
  );
};

export default LoginSignup;
