import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const Input = (props) => {
  const { type, name, id, placeholder, icon: Icon } = props;

  const [showPassword, setShowPassword] = useState(false);

  const inputType = type === "password" && showPassword ? "text" : type;

  const handleTogglePassword = () => {
    if (type === "password") {
      setShowPassword(!showPassword);
    }
  };

  return (
    <div
      className={`relative flex items-center w-full h-12 sm:h-14 border rounded-lg ${
        props.bg ? "bg-2" : "bg-white"
      } px-4 sm:px-5 focus-within:border-25`}
    >
      {Icon && <Icon className="mr-2 text-primary text-lg sm:text-xl" />}
      <input
        type={inputType}
        name={name}
        id={id}
        placeholder={placeholder}
        className="flex-1 w-full text-black text-sm sm:text-base border-none bg-transparent placeholder-75"
      />
      {type === "password" && (
        <div
          className="text-100 cursor-pointer hover:text-primary"
          onClick={handleTogglePassword}
        >
          {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
        </div>
      )}
    </div>
  );
};

export default Input;
