import React from "react";
import Input from "./Input/Input";
import PersonIcon from "@mui/icons-material/Person";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PhoneIcon from "@mui/icons-material/Phone";
import LockIcon from "@mui/icons-material/Lock";
import Button from "../Button/Button";

const Form = ({ isRegister }) => {
  return (
    <div
      className={`bg-2 flex flex-col items-center border border-50 rounded-2xl ${
        isRegister ? "h-auto py-6" : "h-auto py-8"
      } w-[90%] max-w-[400px] sm:max-w-[450px]`}
    >
      <h2
        className={`text-100 font-normal text-4xl sm:text-5xl ${
          isRegister ? "mt-6 mb-6" : "mt-8 mb-4"
        }`}
      >
        {isRegister ? "Register" : "Sign In"}
      </h2>

      <form
        className={`px-6 grid ${
          isRegister ? "gap-6 py-4" : "gap-8 py-6"
        } w-full`}
      >
        {isRegister && (
          <Input
            type="text"
            name="userName"
            id="userName"
            placeholder="Name"
            icon={PersonIcon}
          />
        )}

        <Input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          icon={AlternateEmailIcon}
        />

        {isRegister && (
          <Input
            type="tel"
            name="phone"
            id="phone"
            placeholder="Phone Number"
            icon={PhoneIcon}
          />
        )}

        <Input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          icon={LockIcon}
        />

        {isRegister && (
          <div className="flex items-center space-x-2 text-xs sm:text-sm">
            <input type="checkbox" id="checkbox" name="checkbox" />
            <p className="font-bold text-100">
              I accept the Terms and Privacy Policy
            </p>
          </div>
        )}

        <div className="flex justify-center">
          <Button text="Submit" />
        </div>

        <div className="grid gap-4 text-center">
          <p className="text-sm sm:text-base font-semibold text-75">
            {isRegister
              ? "Already have an account? "
              : "Don’t have an account? "}
            <a
              className="text-primary underline hover:text-primary-light"
              href={isRegister ? "/signin" : "/register"}
            >
              {isRegister ? "Sign In" : "Register"}
            </a>
          </p>

          {!isRegister && (
            <p className="text-sm sm:text-base font-semibold text-75">
              Forgot your Password?{" "}
              <a
                className="text-primary underline hover:text-primary-light"
                href="Gmail.com"
              >
                Change Password
              </a>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Form;
