import React, { useState } from "react";
import Input from "../Form/Input/Input";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PersonIcon from "@mui/icons-material/Person";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import Button from "../Button/Button";

const MessageUs = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
    // Add form submission logic here
  };

  return (
    <div className="px-6 md:px-16 lg:px-32 py-14 flex flex-col justify-between gap-12 md:gap-32">
  <h3 className="font-bold text-2xl md:text-3xl lg:text-4xl text-center text-100">
    Leave us a Message
  </h3>
  <form
    onSubmit={handleSubmit}
    className="rounded-2xl border border-50 p-6 md:p-[60px] flex flex-col gap-6 md:gap-11 bg-white"
  >
    <div className="flex flex-col md:flex-row w-full justify-between gap-6 md:gap-[70px]">
      <Input
        bg
        type="text"
        name="userName"
        id="userName"
        placeholder="Name"
        icon={PersonIcon}
        value={formData.userName}
        onChange={handleChange}
        aria-label="Enter your name"
      />
      <Input
        bg
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        icon={AlternateEmailIcon}
        value={formData.email}
        onChange={handleChange}
        aria-label="Enter your email"
      />
    </div>

    <div className="relative flex items-start py-4 px-6 w-full h-40 md:h-44 border rounded-lg bg-2">
      <InsertCommentIcon className="mr-2 text-primary" />
      <textarea
        name="message"
        id="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
        className="flex-1 text-black text-base outline-none border-none bg-transparent w-full h-full resize-none"
        aria-label="Enter your message"
      />
    </div>
    <div className="flex justify-center">
      <Button text="Send Message" />
    </div>
  </form>
</div>

  );
};

export default MessageUs;
