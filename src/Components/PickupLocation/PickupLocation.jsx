import React from "react";
import Map from "../Map/Map";
import Button from "../Button/Button";

const InputField = ({ label, id, type = "text" }) => (
  <div className="relative flex items-center w-full h-12 border border-gray-300 rounded-lg bg-white">
    <label
      htmlFor={id}
      className={`flex justify-center items-center h-full w-[70px] rounded-s-lg ${
        label === "From"
          ? "bg-gray-100 text-gray-700"
          : label === "To"
          ? "bg-gray-700 text-white"
          : ""
      }`}
    >
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={id}
      className="flex-1 w-full text-base outline-none bg-transparent"
    />
  </div>
);

const DropdownField = ({ id, options, placeholder = "Select an option" }) => (
  <div className="w-full h-12 border border-gray-300 rounded-lg bg-white">
    <select
      id={id}
      name={id}
      className="w-full h-full border-0 rounded-lg px-5 font-semibold text-sm text-gray-700"
    >
      <option value="">{placeholder}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

const PickupLocation = ({ onSubmit }) => {
  const handleNextStep = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 justify-center items-center lg:items-start px-4 sm:px-8 lg:px-0 h-full">
      <div className="w-full lg:w-1/2 h-[450px] ">
        <Map />
      </div>
      <form
        onSubmit={handleNextStep}
        className="w-full  lg:w-[345px] rounded-2xl border border-gray-300 px-6 sm:px-7 py-10 sm:py-14 flex flex-col gap-6"
      >
        <InputField label="From" id="From" />
        <InputField label="To" id="To" />
        <DropdownField
          id="CarType"
          placeholder="Car Type"
          options={[
            { value: "standard", label: "Standard" },
            { value: "luxury", label: "Luxury" },
            { value: "suv", label: "SUV" },
          ]}
        />
        <div className="w-full h-12 border border-gray-300 rounded-lg bg-white">
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Phone Number"
            className="flex-1 w-full text-base outline-none bg-transparent font-semibold placeholder:text-gray-400 pt-2 px-5"
          />
        </div>
        <div className="flex justify-center">
          <Button text="Submit" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default PickupLocation;
