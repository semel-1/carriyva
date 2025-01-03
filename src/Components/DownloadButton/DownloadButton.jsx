// File: DownloadButtons.jsx
import React from "react";
import AppleIcon from "@mui/icons-material/Apple";
import AndroidIcon from "@mui/icons-material/Android";

// Reusable DownloadButton Component
const DownloadButton = ({ className, icon: Icon, label }) => (
  <button
    className={`w-40 h-12 rounded-lg flex items-center justify-center gap-2 px-4 ${className}`}
    aria-label={`Download on ${label}`}
  >
    <Icon className="text-white w-6 h-6" />
    <div className="text-white text-left leading-tight">
      <p className="text-xs">Available on</p>
      <span className="font-medium text-sm">{label}</span>
    </div>
  </button>
);

// Parent Component for Download Buttons
const DownloadButtons = ({ className }) => {
  return (
    <div className={`flex gap-4 ${className}`}>
      <DownloadButton
        className="bg-gray-800 "
        icon={AppleIcon}
        label="App Store"
      />
      <DownloadButton
        className="bg-primary "
        icon={AndroidIcon}
        label="Google Play"
      />
    </div>
  );
};

export default DownloadButtons;
